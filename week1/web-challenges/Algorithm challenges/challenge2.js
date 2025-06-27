function maskify(data) {
  const stringData = typeof data != "string" ? JSON.stringify(data) : data;
  let output = "";

  for (let i = 0; i < stringData.length - 4; i++) {
    output = output + "#";
  }

  output = output + stringData.substring(stringData.length - 4);

  return output;
}

console.log(maskify(123456789));
