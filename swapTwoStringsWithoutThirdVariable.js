function swapStrings(s, t) {
  s = s.concat(t);
  t = s.slice(0,t.length);
  s = s.slice(t.length);
  return [s, t];
}
console.log(swapStrings("some", "good"));

