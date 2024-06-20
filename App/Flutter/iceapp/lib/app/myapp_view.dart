import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:iceapp/views/home_view.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Ice Cream App",
      theme: ThemeData(
        primarySwatch: Colors.grey,
        fontFamily: GoogleFonts.notoSans().fontFamily,
      ),
      home: const HomeView(),
    );
  }
}
