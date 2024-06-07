// file name start with lowercase
// https://dartpad.dev/

import 'dart:io';

void main() {
  print('welcome to Hello Dart');
  stdout.write("Way to print ");

  // this will takes input and stored it to name
  stdout.write("Enter Your Name = ");
  var name = stdin.readLineSync();
  print("Welcome, $name");
}


//run the code = dart <fileName>.dart 
