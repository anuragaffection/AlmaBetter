import 'package:flutter/material.dart';
import 'package:iceapp/ice_views/icecream_view.dart';

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Ice App"),
          backgroundColor: Colors.cyan,
        ),
        body: const IcecreamView(),
      ),
    );
  }
}
