/*
 * hashmap
 * -- what is HashMap
 * -- Why we need HashMap
 * -- Syntax of HashMap
 * -- List of inbuilt method for HashMap
 */

import java.util.*;

public class P402HashMap {
	public static void main(String args[]) {
		System.out.println("Hashing in Java");

		/*
		 * what is HashMap
		 * -- inbuilt data structure in java
		 * -- it store elements in key-value pairs
		 * -- it follow random order of insertion
		 */

		/*
		 * why we need HashMap
		 * -- easy data retrieval
		 * -- it takes constant time to get the value of key
		 * -- also , used in caching , at time of development
		 */

		// this is the syntax of HashMap to declare hashmap
		HashMap<String, Integer> myHashMap = new HashMap<>();

		/*
		 * syntax breakdown
		 * -- HashMap = denoting Type of myHashMap
		 * -- String = denoting type of keys
		 * -- Integer = denoting type of values
		 * -- myHashMap = is name of our hashmap we declare
		 * -- new = keyword to create new instances
		 * -- HashMap() = Type of
		 */

		// adding value of myHashmap
		myHashMap.put("age", 18);

		// printing the hashmap, we created
		System.out.println(myHashMap);

		/*
		 * List of inbuilt methods in HashMap in java
		 * -- put()
		 * -- get()
		 * -- containsKey()
		 * -- isEmpty()
		 * -- clear()
		 * -- keySet()
		 * -- entrySet()
		 */

		/*
		 * keep in mind
		 * -- import package
		 * -- do not do syntax error like spelling mistake & all
		 * -- also, in HashMap, int + char + bool is not supported type
		 * -- instead, we will use Integer, Character, Boolean etc
		 */
	}

}

// thank you
// all the very best
