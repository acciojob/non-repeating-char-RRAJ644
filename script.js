function firstNonRepeatedChar(str) {
 // Write your code here
	 const n = str.length
  const map = new Map()

  for (let i = 0; i < n; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1)
  }

  for (const [ch, val] of map) {
    if (val === 1) {
      return ch
    }
  }

return null
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
