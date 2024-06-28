/*
 * Hashing
 * -- what is hashing
 * -- why hashing
 * -- application of hashing
 * 
 * similar concept
 * -- salting
 * -- application of salting
 * -- how salting is related to hashing
 * 
 * Map
 * -- what is Map
 * -- Type of Map
 * 
 * Set
 * -- What is Set
 * -- Type of Set
 * 
 */

public class P401HashingIntro {
    public static void main(String[] args) {
        System.out.println("Hashing ");
    }

    /*
     * What is Hashing
     * -- It is a process to convert given value into some other values .
     * 
     * Why we need hashing
     * -- It stores the given value in some other values, which secure the given
     * value
     * -- It is usefull in cryptographic
     * -- instead of directly storing the sensitive information, we store their hash
     * generated value
     * 
     * application of hashing
     * -- used in implementation of data structures like Map & Set
     * -- used in cryptographic digital signature
     * -- used in password storing
     */

    /**
     * Salting
     * -- It is a process to add some random value to given value.
     * 
     * eg.
     * -- given value = test123
     * -- salting add some randome value to given value = test123 +
     * "someRandomValue"
     * 
     * application of salting
     * -- general used to add some random value to password, for uniqueness
     * 
     * salting & hashing
     * -- before hashing the value, salting is used to ensure uniqueness
     * -- adding salting, ensure the same given value, will have different hashed
     * values
     * 
     * eg.
     * -- let's we have to store password
     * -- password is sensitive information, so we can't store directly
     * -- our password = 'test123'
     * -- salting the passowrd = 'test123someRandomValue'
     * -- hashed value of passoword = 'abero30cc40323fdf04dfs'
     * -- this is how both salting & hashing used together
     */

    /**
     * Map
     * -- Map is data structure which store key-value pairs
     * -- Map use hashing concept for efficient data retrieval
     * 
     * Map Types
     * -- HashMap
     * -- LinkedHashMap
     * -- TreeMap
     */

    /***
     * Set
     * -- Set is data structure which store unique values
     * -- Set, also used hashing to ensure uniqueness & data retrieval
     * 
     * Set Type
     * -- HashSet
     * -- LinkedHashSet
     * -- TeeSet
     */

}

// thank you
// try to read about these topics at your owen
// all the very best
