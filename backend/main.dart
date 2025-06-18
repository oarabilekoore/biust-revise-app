import 'dart:async';
import 'dart:io';
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_router/shelf_router.dart';
import 'package:shelf_static/shelf_static.dart';

void main() async {
  final port = int.parse(Platform.environment["PORT"] ?? "8080");
  final ip = InternetAddress.loopbackIPv4;

  final String frontendDistPath = ".././frontend/dist";

  final staticFilesHandler = createStaticHandler(frontendDistPath,
      defaultDocument: 'index.html', serveFilesOutsidePath: true);

  final apiRouter = Router();

  final handler = const Pipeline().addMiddleware(logRequests()).addHandler(
      Cascade().add(apiRouter.call).add(staticFilesHandler.call).handler);

  final server = await shelf_io.serve(handler, ip, port);
  print("Server Running At : http://${server.address.host}:${server.port}");
  print("Serving static files from: $frontendDistPath");
}
