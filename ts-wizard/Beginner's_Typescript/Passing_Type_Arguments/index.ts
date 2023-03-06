const guitarists = new Set();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

guitarists.add(2);

// Expect each element is string
// Solution
const guitarists1 = new Set<string>();
// guitarists1.add(2); Error
