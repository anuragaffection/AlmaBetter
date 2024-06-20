import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:iceapp/ice_views/icecream_heading.dart';
import 'package:iceapp/ice_views/icecream_list.dart';
import 'package:iceapp/models/icecream.dart';

class IcecreamView extends StatelessWidget {
  const IcecreamView({super.key});

  Future<List<Icecream>?> loadIcecreams() async {
    final rawIcecreams = await rootBundle.loadString("assets/icecream.json");
    // final decodedIcecreams = jsonDecode(rawIcecreams);
    // print(decodedIcecreams);
    final icecreams = icecreamDataFromJson(rawIcecreams);
    return icecreams.icecreams;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          icecreamHeading(context),
          const SizedBox(
            height: 10,
          ),
          Expanded(
            child: Center(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  FutureBuilder(
                    future: loadIcecreams(),
                    builder: (context, snapshot) {
                      if (snapshot.connectionState == ConnectionState.done) {
                        final icecreams = snapshot.data;
                        return icecreamList(icecreams!);
                      } else {
                        return const Center(
                          child: CircularProgressIndicator.adaptive(),
                        );
                      }
                    },
                  ),
                  const Text("Hello"),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
