import 'dart:convert';

// Function to decode JSON string to IcecreamData object
IcecreamData icecreamDataFromJson(String str) {
  final jsonData = json.decode(str);
  return IcecreamData.fromJson(jsonData);
}

// Function to encode IcecreamData object to JSON string
String icecreamDataToJson(IcecreamData data) {
  final strData = data.toJson();
  return json.encode(strData);
}

// IcecreamData class
class IcecreamData {
  List<Icecream> icecreams;

  // Constructor
  IcecreamData({
    required this.icecreams,
  });

  // fromJson method to create IcecreamData object from JSON map
  factory IcecreamData.fromJson(Map<String, dynamic> json) {
    return IcecreamData(
      icecreams: List<Icecream>.from(
        json['icecreams'].map(
          (x) => Icecream.fromJson(x),
        ),
      ),
    );
  }

  // toJson method to convert IcecreamData object to JSON map
  Map<String, dynamic> toJson() {
    return {
      'icecreams': List<dynamic>.from(
        icecreams.map(
          (x) => x.toJson(),
        ),
      ),
    };
  }
}

// Icecream class
class Icecream {
  String? flavor;
  String? description;
  List<String>? toppings;
  double? price;
  String? image;
  List<Ingredient>? ingredients;

  // Constructor
  Icecream({
    required this.flavor,
    required this.description,
    required this.toppings,
    required this.price,
    required this.image,
    required this.ingredients,
  });

  // fromJson method to create Icecream object from JSON map
  factory Icecream.fromJson(Map<String, dynamic> json) {
    return Icecream(
      flavor: json['flavor'],
      description: json['description'],
      toppings:
          json['toppings'] != null ? List<String>.from(json['toppings']) : null,
      price: json['price']?.toDouble(),
      image: json['image'],
      ingredients: json['ingredients'] != null
          ? List<Ingredient>.from(
              json['ingredients'].map((x) => Ingredient.fromJson(x)),
            )
          : null,
    );
  }

  // toJson method to convert Icecream object to JSON map
  Map<String, dynamic> toJson() {
    return {
      'flavor': flavor,
      'description': description,
      'toppings':
          toppings != null ? List<dynamic>.from(toppings!.map((x) => x)) : null,
      'price': price,
      'image': image,
      'ingredients': ingredients != null
          ? List<dynamic>.from(ingredients!.map((x) => x.toJson()))
          : null,
    };
  }
}

// Ingredient class
class Ingredient {
  String? name;
  String? quantity;

  // Constructor
  Ingredient({
    required this.name,
    required this.quantity,
  });

  // fromJson method to create Ingredient object from JSON map
  factory Ingredient.fromJson(Map<String, dynamic> json) {
    return Ingredient(
      name: json['name'],
      quantity: json['quantity'],
    );
  }

  // toJson method to convert Ingredient object to JSON map
  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'quantity': quantity,
    };
  }
}
