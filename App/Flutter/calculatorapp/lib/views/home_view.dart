import 'package:flutter/material.dart';
import 'package:learnapp/views/calculator_view.dart';

// extends to Widget
class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Scaffold(
        // app bar
        appBar: AppBar(
          backgroundColor: Colors.grey,
          title: const Text('Simple Calculator'),
        ),

        // body
        // container = box
        // widget =
        // Center = is widget
        // Container, Text, TextStyle = is widget
        body: Center(
          child: Container(
            color: Colors.grey,
            child: const CalculatorView(),
          ),
        ),
      ),
    );
  }
}

// MaterialApp vs Material 
// Scaffold, Widget, MaterialApp
