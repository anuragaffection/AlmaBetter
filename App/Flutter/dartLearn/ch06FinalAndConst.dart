// final & const
// #6.11.24

void main() {
  print("final vs const");

  /**
   * Notes 
   * -- const & final  value can't be updated once value is initialized 
   * -- in const,  both declaration & initializations happen at same time 
   * -- in final, we have flexibility, we can separte declarations  & initializations 
   */

  final fullName = "anuragAffection";
  print(fullName);

  final String myName;
  myName = "affection";
  print(myName);

  const name = "Anurag";
  print(name);

  // const String otherName; // gives  error
  // otherName = "Priya";
  // print(otherName);
}
