import 'package:flutter/material.dart';

class InputView extends StatelessWidget {
  const InputView({
    super.key,
    this.hint = "Enter a number",
    required this.controller,
  });

  final String? hint;
  final TextEditingController controller;

// add border radius
  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      keyboardType: TextInputType.number,
      autofocus: true,
      decoration: InputDecoration(
        border: const OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.black,
            width: 2.0,
          ),
        ),
        focusedBorder: const OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.white,
            width: 2.0,
          ),
        ),
        labelText: "0",
        hintText: hint,
        hintStyle: const TextStyle(color: Colors.white),
      ),
    );
  }
}
