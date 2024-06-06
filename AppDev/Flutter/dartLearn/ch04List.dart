// list in dart

void main() {
  print("List in dart");

  var list1 = [10, 20, 30, 40];
  list1.add(60); // add to last
  print(list1);
  // [10, 20, 30, 40, 60]

  var list2 = [];
  list2.add("Anurag");
  print(list2);
  // [Anurag]

  list2.addAll(list1); // add all elements
  print(list2);
  // [Anurag, 10, 20, 30, 40, 60]

  list2.insert(3, "Raman");
  // adding at specific index, no removal of elements
  print(list2);
  // [Anurag, 10, 20, Raman, 30, 40, 60]

  var someNames = ["Rinki", "Pinki"];
  list2.insertAll(1, someNames);
  // adding all at specific index, no removal of elements
  print(list2);
  // [Anurag, Rinki, Pinki, 10, 20, Raman, 30, 40, 60]

  /*
    List in dart 
    -- similar to an array 
    -- ordered collections of the objects 
    -- fixed type 
    -- dynamic type 
    -- zero based indexing 
    -- can store multi-type elements 

  */

  /**
   * Notes 
   * -- length
   * 
   * -- add(value)
   * -- addAll(iterableValue)
   * 
   * -- insert(index, value)
   * -- insertAll(index, iterableValue)
   * 
   * -- update(index, value)
   * -- elementAt(index)
   * 
   * -- removeLast()
   * -- remove(value)
   * -- removeAt(index)
   * -- removeRange(startIndex, lastIndex)
   * 
   * -- reversed()
   * -- first()
   * -- last()
   * -- isEmpty
   * -- isNotEmpty
   * -- 
   * 
   * -- replaceRange()
   */
}
