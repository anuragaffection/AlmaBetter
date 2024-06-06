// hashmap in dart
// #5.51.00

void main() {
  print("Hashmap in dart");

  /**
   * Maps 
   * -- unordered 
   * -- elements stored as key-value pairs  
   * -- key should be unique
   * -- key must be string types  
   * -- value can be  of any types 
  */

  // 01. map creation using map literal
  var mapName = {
    'someKey': 'someValue',
    'name': "Anurag",
    'someFraction': 3.65,
    'haveGF': false
  };
  print(mapName);

  // fetching value
  print(mapName['isLogin']);

  // updating the name
  mapName['name'] = 'Anurag Affection';
  print(mapName);

  // adding new element
  mapName['fullName'] = 'Captain America';
  print(mapName);

  // 02. map creation using Map() constructor
  var mapName2 = Map();
  print(mapName2);
  mapName2['CollegeName'] = "Stark Industry";
  print(mapName2);

  /**
   * Notes 
   * -- isEmpty
   * -- isNotEmpty
   * -- length
   * -- keys
   * -- values
   * -- containsKey()
   * -- containsValue()
   * -- remove()
   * -- 
   */
}
