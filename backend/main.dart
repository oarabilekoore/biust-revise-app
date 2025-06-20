import 'dart:convert';
import 'dart:io';
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_router/shelf_router.dart';
import 'package:shelf_static/shelf_static.dart';

Future<Response> getUserDetails(Request request, String userId) async {
  return Response.ok(
      jsonEncode({'userId': userId, 'name': 'John Doe', 'email': ''}));
}

Future<Response> login(Request request) async {
  final response = await request.readAsString();
  final data = jsonEncode(response);
  return Response.ok(data, headers: {'Content-Type': 'application/json'});
}

void main() async {
  final port = int.parse(Platform.environment["PORT"] ?? "8080");
  final ip = InternetAddress.loopbackIPv4;

  final String frontendDistPath = ".././frontend/dist";

  final staticFilesHandler = createStaticHandler(frontendDistPath,
      defaultDocument: 'index.html', serveFilesOutsidePath: true);

  final router = Router()
    ..get('/api/getUserDetails/<userId>', getUserDetails)
    ..post('/api/login', login);

  final handler = const Pipeline().addMiddleware(logRequests()).addHandler(
      Cascade().add(router.call).add(staticFilesHandler.call).handler);

  final server = await shelf_io.serve(handler, ip, port);
  print("Serving static files from: $frontendDistPath");
}
