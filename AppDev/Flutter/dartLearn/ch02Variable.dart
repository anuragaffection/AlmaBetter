// variable in dart

void main() {
  print("Variable in Dart");

  // bool
  // int
  // BigInt
  // Bigint.parse()
  // double
  // num
  // String
  // var
  // var (dynamic)

  bool isLogin = false;
  print(isLogin);

  // int a;
  // print(a);
  // Error: Non-nullable variable 'a' must be assigned before it can be used.

  int? b;
  print(b); // null

  int c;
  c = 20;
  print(c); // 20

  BigInt someBigValue;
  someBigValue = BigInt.parse('43212345678909865543441678');
  print(someBigValue);

  double percentageValue = 99.65;
  print(percentageValue);

  num anyNumbersTypeVlaue = 125.25;
  print(anyNumbersTypeVlaue);

  String myName = "Anurag";
  print(myName);

  var name = "Anurag Affection";
  // here the type depend on inline initialization
  // name = 18; we cant change the type,
  print(name);

  var section; // here the  type is dynamic, we can update with different data types
  section = "D";
  print(section);
  section = 1;
  print(section);
}
