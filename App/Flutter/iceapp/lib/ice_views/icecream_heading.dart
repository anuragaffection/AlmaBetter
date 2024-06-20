import 'package:flutter/material.dart';

Column icecreamHeading(BuildContext context) {
  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      const Text(
        "Icecream",
        style: TextStyle(
          fontSize: 30,
          fontWeight: FontWeight.bold,
        ),
      ),
      Text(
        "We have something yummy for you",
        style: Theme.of(context).textTheme.bodySmall,
      ),
    ],
  );
}
