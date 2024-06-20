import 'package:flutter/material.dart';
import 'package:learnapp/views/home_view.dart';

// stateless, no state management
// statefull, have state management
class MyApp extends StatelessWidget {
  const MyApp({super.key});

// everthing is within this build
// child = single
// children = multiple
  @override
  Widget build(BuildContext context) {
    // return const
    // calling HomeView()
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Learn',
      theme: ThemeData(primarySwatch: Colors.grey),
      home: const HomeView(),
    );
  }
}

// MaterialApp vs Material
