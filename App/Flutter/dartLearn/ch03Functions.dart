// functions or methods in dart

void myFunc() {
  print("This is function in dart");
}

class myClass {
  myClass() {
    // default  constructor, same name as class
    // how many times this contructor will be called
    print("This is constructor");
  }
  void printName(String name) {
    print("");
    print("this is methods in dart, as it is within the class");
    print("$name");
  }

  int add(int a, int b) {
    int sum = a + b;
    return sum;
  }
}

void main() {
  print("Methods or functions in Dart");

  // calling myFunc
  myFunc();

  // calling from classes
  // creating instances
  var fromClass = new myClass();
  fromClass.printName("Anurag Affection");
  fromClass.printName("Raman");
  fromClass.printName("Flutter And Dart");

  int result = fromClass.add(5, 6);
  print(result);
}
