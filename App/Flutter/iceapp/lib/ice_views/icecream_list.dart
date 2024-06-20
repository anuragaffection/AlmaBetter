import 'package:flutter/material.dart';
import 'package:iceapp/models/icecream.dart';

SizedBox icecreamList(List<Icecream> icecreams) {
  return SizedBox(
    // width: MediaQuery.sizeOf(context).width,
    height: 300,
    child: ListView.builder(
      scrollDirection: Axis.horizontal,
      itemCount: icecreams.length,
      itemBuilder: (context, index) {
        final icecream = icecreams[index];
        return SizedBox(
          width: 200,
          child: Card(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(16),
            ),
            color: Colors.deepOrange.shade100,
            clipBehavior: Clip.hardEdge,
            child: Stack(
              fit: StackFit.expand,
              children: [
                Image.network(
                  icecream.image!,
                  fit: BoxFit.cover,
                  color: Colors.deepOrange.withOpacity(0.5),
                  colorBlendMode: BlendMode.color,
                ),
                Align(
                  alignment: Alignment.bottomLeft,
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        Text(
                          icecream.flavor!,
                          style: Theme.of(context).textTheme.labelLarge,
                        ),
                        Text(
                          icecream.price.toString(),
                          style: Theme.of(context).textTheme.labelLarge,
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    ),
  );
}
