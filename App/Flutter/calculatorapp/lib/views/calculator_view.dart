import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:learnapp/views/input_view.dart';

class CalculatorView extends StatefulWidget {
  const CalculatorView({super.key});

  @override
  State<CalculatorView> createState() => _CalculatorViewState();
}

class _CalculatorViewState extends State<CalculatorView> {
  int x = 0;
  int y = 0;
  num z = 0;

// TextEditingController
  final firstController = TextEditingController();
  final secondController = TextEditingController();

// how
  @override
  void initState() {
    super.initState();
    firstController.text = x.toString();
    secondController.text = y.toString();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(32.0),
      child: Column(
        children: [
          InputView(
            hint: "Enter First Number",
            controller: firstController,
          ),
          const SizedBox(
            height: 30,
          ),
          InputView(
            hint: "Enter Second Number",
            controller: secondController,
          ),
          const SizedBox(
            height: 30,
          ),
          Text(
            z.toString(),
            style: const TextStyle(
              fontSize: 60,
              fontWeight: FontWeight.bold,
            ),
          ),

          // how much space Spacer() takes
          const Spacer(),

          // issue here, when device width is xs
          SingleChildScrollView(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                FloatingActionButton(
                  onPressed: () {
                    setState(() {
                      z = num.tryParse(firstController.text)! +
                          num.tryParse(secondController.text)!;
                    });
                  },
                  child: const Icon(CupertinoIcons.add),
                ),
                FloatingActionButton(
                  onPressed: () {
                    setState(() {
                      z = num.tryParse(firstController.text)! -
                          num.tryParse(secondController.text)!;
                    });
                  },
                  child: const Icon(CupertinoIcons.minus),
                ),
                FloatingActionButton(
                  onPressed: () {
                    setState(() {
                      z = num.tryParse(firstController.text)! *
                          num.tryParse(secondController.text)!;
                    });
                  },
                  child: const Icon(CupertinoIcons.multiply),
                ),
                FloatingActionButton(
                  onPressed: () {
                    setState(() {
                      z = num.tryParse(firstController.text)! /
                          num.tryParse(secondController.text)!;
                    });
                  },
                  child: const Icon(CupertinoIcons.divide),
                ),
              ],
            ),
          ),
          const SizedBox(
            height: 10,
          ),
          FloatingActionButton.extended(
            onPressed: () {
              setState(() {
                x = 0;
                y = 0;
                z = 0;
                firstController.clear();
                secondController.clear();
              });
            },
            label: const Text("Clear"),
          ),
        ],
      ),
    );
  }
}
