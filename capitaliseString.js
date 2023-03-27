function capitaliseString(str) {
  result = [];
  if (str.length === 0) return [];
  result.push(str[0][0].toUpperCase() + str[0].slice(1));
  return result.concat(capitaliseString(str.slice(1)));
}

console.log(capitaliseString(["abcde", "kjlm"]));
