import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:learnapp/apps/app.dart';

void main() {
  testWidgets("Hello World test", (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());

    expect(find.byType(Container), findsOneWidget);
  });
}
