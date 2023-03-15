function longestNiceSubstring(s) {
  let longestSubstring = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.slice(i, j);
      if (isNice(substring) && substring.length > longestSubstring.length) {
        longestSubstring = substring;
      }
    }
  }
  return longestSubstring;
}

function isNice(s) {
  const chars = new Set(s);
  for (const char of chars) {
    const lower = char.toLowerCase();
    const upper = char.toUpperCase();
    if (!chars.has(lower) || !chars.has(upper)) {
      return false;
    }
  }
  return true;
}

console.log(longestNiceSubstring("YazaAay"))
