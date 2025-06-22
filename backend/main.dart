import 'dart:convert';
import 'dart:io';
import "package:shelf/shelf.dart";
import 'package:shelf/shelf_io.dart' as shelf_io;
import "package:shelf_router/shelf_router.dart";

Future<Response> getUserDetails(Request request, String userId) async {
  return Response.ok(
      jsonEncode({'userId': userId, 'name': 'John Doe', 'email': ''}));
}

Future<Response> login(Request request) async {
  final response = await request.readAsString();
  final data = jsonEncode(response);
  print("Login Request: $data");
  return Response.ok(data, headers: {'Content-Type': 'application/json'});
}

void main() async {
  final port = int.parse(Platform.environment["PORT"] ?? "8080");
  final ip = InternetAddress.loopbackIPv4;

  final router = Router()
    ..get('/api/getUserDetails/<userId>', getUserDetails)
    ..post('/api/login', login);

  await shelf_io.serve(router, ip, port);
  print("squiddSERVER Serving From: $ip:$port");
}
