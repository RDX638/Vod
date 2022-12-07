import React from "react";
// ‘a’ and ‘b’ are single character strings
export default function task(s, a, b) {
  s = "^$ababa^$^$^$";
  a = "a";
  b = "b";
  var match_empty = /^$/;
  if (s.match(match_empty)) {
    return -1;
  } else {
    var i = s.length - 1;
    console.log(i);

    var aIndex = -1;
    console.log(aIndex);

    var bIndex = -1;
    
    console.log(bIndex);

    while (aIndex == -1 && bIndex == -1 && i >= 0) {
      if (s.substring(i, i + 1) == a) {aIndex = i;    console.log(aIndex);} 
      ;
      if (s.substring(i, i + 1) == b) {bIndex = i;     console.log(bIndex);}


      i--; {  console.log(i);} 
    }

    if (aIndex != -1) {
      if (bIndex == -1) return aIndex ;
      else return Math.max(aIndex, bIndex);
    } else {
      if (bIndex != -1) return bIndex;
      else return -1;
    }
  }
}
