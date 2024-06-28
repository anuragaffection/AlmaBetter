# Hashing

## Map
- HashMap
- LinkedHashMap
- TreeMap

## Set
- HashSet
- LinkedHashSet
- TreeSet

## Map

### Key can be:
- Character
- Integer
- String
- Float
- Double
- Boolean

### Value can be:
- Character
- Integer
- String
- Float
- Double
- Boolean

### 01. HashMap
- `import java.util.HashMap`
- `HashMap<key, value> hm = new HashMap<>();`

#### Methods
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

#### Methods
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

#### Methods
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

### Element can be:
- Character
- Integer
- String
- Float
- Double
- Boolean

### 01. HashSet
- `import java.util.HashSet`
- `HashSet<element> hs = new HashSet<>();`

#### Methods
- `add(element)`
- `contains(element)`
- `remove(element)`
- `size()`
- `isEmpty()`
- `clear()`

### 02. LinkedHashSet
- `import java.util.LinkedHashSet`
- `LinkedHashSet<element> lhs = new LinkedHashSet<>();`

#### Methods
- `add(element)`
- `contains(element)`
- `remove(element)`
- `size()`
- `isEmpty()`
- `clear()`

### 03. TreeSet
- `import java.util.TreeSet`
- `TreeSet<element> ts = new TreeSet<>();`

#### Methods
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

## Difference

### 01. Set vs HashSet
- Set is an interface
- HashSet is a class
- HashSet is used to implement Set

### 02. Map vs HashMap
