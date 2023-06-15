function firstNonRepeatingLetter(s) {
    const countMap = new Map(); //Rather than using an array or object to track character counts I am using the Map data structure  
  // Counting Occurrences
  for (const element of s) {
    const lowerCaseElement = element.toLowerCase(); // Convert the element to lowercase for case insensitivity
    const count = countMap.get(lowerCaseElement) || 0; // to get the current count from the map (default to 0 if not found)
    countMap.set(lowerCaseElement, count + 1); // to update the count in the map by incrementing it
  }

  // Finding the First Non-Repeating Character
  for (const element of s) {
    const lowerCaseElement = element.toLowerCase(); // Convert the element to lowercase for case insensitivity
    const count = countMap.get(lowerCaseElement); // then get the count from the map

    if (count === 1) {
      // If the count is 1, it means the character is non-repeating
      return element; // Return the original character
    }
  }

  return ""; // If no non-repeating character is found, return an empty string
}
