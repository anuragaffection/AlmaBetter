void main() {
  print("Lopps in Dart");
  // for loop
  // while loop
  // do while

  for (int i = 1; i <= 10; i++) {
    print(i);
  }

  int number = 1;
  while (number <= 10) {
    print("$number + Hello World");
    number++;
  }

  int otherNumber = 1;
  do {
    print(otherNumber);
    otherNumber++;
  } while (otherNumber <= 10);
}
