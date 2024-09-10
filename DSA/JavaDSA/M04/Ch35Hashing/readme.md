# Hashing
- What is Hashing
- What is salting 

## Map

Map Type :
- HashMap
- LinkedHashMap
- TreeMap

Key can be:
- Character
- Integer
- String
- Float
- Double
- Boolean

Value can be:
- Character
- Integer
- String
- Float
- Double
- Boolean

### 01. HashMap
- `import java.util.HashMap`
- `HashMap<key, value> hm = new HashMap<>();`

Methods
- `put(key, value)`
- `get(key)`
- `containsKey(key)`
- `remove(key)`
- `size()`
- `isEmpty()`
- `clear()`

### 02. LinkedHashMap
- `import java.util.LinkedHashMap`
- `LinkedHashMap<key, value> lhm = new LinkedHashMap<>();`

Methods
- `put(key, value)`
- `get(key)`
- `containsKey(key)`
- `remove(key)`
- `size()`
- `isEmpty()`
- `clear()`

### 03. TreeMap
- `import java.util.TreeMap`
- `TreeMap<key, value> tm = new TreeMap<>();`

Methods
- `put(key, value)`
- `get(key)`
- `containsKey(key)`
- `remove(key)`
- `size()`
- `isEmpty()`
- `clear()`

### 04. HashMap vs LinkedHashMap vs TreeMap
- HashMap: random fashion
- LinkedHashMap: according to insertion of keys
- TreeMap: according to ascending order of keys

### 05. Summary
- `Map<key, value> m = new HashMap<>();`
- `Map<key, value> m = new LinkedHashMap<>();`
- `Map<key, value> m = new TreeMap<>();`

### 06. Some more methods
- `get(key)`
- `getOrDefault(key, defaultValue)`
- `entrySet()`: set of value + key
- `keySet()`: set of key
- `values()`: array of value


## Set

Set Type :
- HashSet
- LinkedHashSet
- TreeSet

Element can be:
- Character
- Integer
- String
- Float
- Double
- Boolean

### 01. HashSet
- `import java.util.HashSet`
- `HashSet<element> hs = new HashSet<>();`

Methods
- `add(element)`
- `contains(element)`
- `remove(element)`
- `size()`
- `isEmpty()`
- `clear()`

### 02. LinkedHashSet
- `import java.util.LinkedHashSet`
- `LinkedHashSet<element> lhs = new LinkedHashSet<>();`

Methods
- `add(element)`
- `contains(element)`
- `remove(element)`
- `size()`
- `isEmpty()`
- `clear()`

### 03. TreeSet
- `import java.util.TreeSet`
- `TreeSet<element> ts = new TreeSet<>();`

Methods
- `add(element)`
- `contains(element)`
- `remove(element)`
- `size()`
- `isEmpty()`
- `clear()`

### 04. HashSet vs LinkedHashSet vs TreeSet
- HashSet: random fashion
- LinkedHashSet: according to insertion of element
- TreeSet: according to ascending order of element

### 05. Summary
- `Set<element> s = new HashSet<>();`
- `Set<element> s = new LinkedHashSet<>();`
- `Set<element> s = new TreeSet<>();`

### 06. Iterations 
- `for( : )`
- `Iterator  = Type`
- `iterator = method`
- `next(), hasNext() = method`


## Difference


### Map vs Set ()
- Map = key - value pair
- Set = unique values only 

### Map vs Set (implementation)
- Map = use hashing to store key-value pair 
- Set = internally use Map to to store unique value only 

### Map vs HashMap
- Map is an interface
- HashMap is a class 
- HashMap is a data structure
- HashMap is used to implement Map 

### Set vs HashSet
- Set is an interface
- HashSet is a class
- HashSet is a data structure
- HashSet is used to implement Set

### Hashing vs Salting 
- Hashing is the process of transforming any given key or a string of characters into another value.
- Salting is the process of adding a unique, random value (called a salt) to an input before hashing it.


## Know More 
### Is it possible to have duplicate key in Map ?
- You cannot have duplicate keys in a Map.
- A hash function is used to generate a hash code for each key.
- This process is one-way, and it's infeasible to reverse the hash code back into the key.
- If a new key with the same hash code is inserted and the keys are equal, the new value will replace the existing value for that key.

### Is it possible to have a duplicate key in a Map? (More Explanation)
- No, keys in a Map  must be unique.
- Point 1: A hash function is used to convert a key into a hash code, which helps determine where the key-value pair will be stored in the internal data structure.
- Point 2: Hashing is a one-way process, meaning it is very difficult (but not entirely impossible) to reverse a hash code back into the original key. This is why it's considered infeasible to reverse the hash code to recover the original key.
- Point 3: Hash functions are designed to minimize collisions, where different keys produce the same hash code. However, it's not completely impossible for two different keys to have the same hash code, leading to a collision.
- Point 4: The hash function used to generate the hash code for a key remains consistent. That means for a given key, the hash code will always be the same unless the key object is mutated (which is not recommended).
- Point 5: When a new key is inserted into a HashMap that has the same hash code as an existing key (due to a collision), Java resolves this by checking the keys for equality using the .equals() method. If the keys are equal, the value is replaced; otherwise, the new key-value pair is stored in a linked list or tree structure at that location.
- Point 6: If you attempt to insert a duplicate key (i.e., a key that is equal to an existing key), the previous value associated with that key will be replaced by the new value.


