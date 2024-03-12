// returns a string of all the set values that start
// with a specific string (startString)
export default function cleanSet(set, startString) {
  let finalString = '';
  if (startString.length > 0) {
    for (const item of set) {
      if (item.startsWith(startString)) {
        const remaingPart = item.substring(startString.length);
        finalString += remaingPart;
        finalString += '-';
      }
    }
    const lastaletter = finalString.charAt(finalString.length - 1);
    if (lastaletter === '-') {
      finalString = finalString.slice(0, -1);
    }
  }
  return finalString;
}
