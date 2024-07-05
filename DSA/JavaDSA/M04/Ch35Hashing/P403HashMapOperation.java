/*
 * HashMap Operations
 * -- Play with inbuilt operations available for HashMap
 */

/*
 * list of inbuilt methods for HashMap in java 
 * - put()
 * - get()
 * - containsKey()
 * - isEmpty()
 * - size()
 * - remove()
 * - clear()
 * - keySet()
 * - entrySet()
 * - 
 */

import java.util.*;

public class P403HashMapOperation {
	public static void main(String args[]) {
		System.out.println("HashMap Operations");

		// creating HashMap
		HashMap<String, Integer> personDetails = new HashMap<>();

		// adding elements to HashMap
		personDetails.put("anu", 22);
		personDetails.put("anurag", 24);
		personDetails.put("affection", 96);
		System.out.println(personDetails);

		// getting the value of key
		// this also returns the value
		int ageOfAnu = personDetails.get("anu");
		System.out.println("the age of anu = " + ageOfAnu);
		System.out.println("the age of anu = " + personDetails.get("anu"));

		// to check if our hashmap contains key or not
		// containsKey() , returns true or false
		boolean isPriyaPresent = personDetails.containsKey("priya");
		boolean isAnuPresent = personDetails.containsKey("anu");
		System.out.println("priya status = " + isPriyaPresent);
		System.out.println("anu status = " + isAnuPresent);

		// to check the size of Hashmap
		// size(), returns int
		int sizeOfPersonDetails = personDetails.size();
		System.out.println("the size = " + sizeOfPersonDetails);
		System.out.println("the size = " + personDetails.size());

		// removing key, it wil remove both key & value
		// remove(), it returns the value of key
		int affectionAge = personDetails.remove("affection");
		System.out.println("remove key = " + affectionAge);
		System.out.println("updated map = " + personDetails);

		// isEmpty, to check if there is elements in map
		// it returns boolean value
		boolean isEmptyMap = personDetails.isEmpty();
		System.out.println("is empty map = " + isEmptyMap);

		// clear, is to delete all elements from map
		// clear, does not return anthing
		personDetails.clear();

		// after clear, we do not have any elements
		// so, isEmpty(), will returnt true here
		boolean isEmptyMapAfterClear = personDetails.isEmpty();
		System.out.println("fully empty = " + isEmptyMapAfterClear);

	}
}

// thank you
// all the very best
// we will see the keySet() and entrySet() in next video
// practice once
