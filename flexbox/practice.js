function accum(s) {
  let output = [...s];
  let letter;
  let newOutput = [];
  for (let i = 0; i < output.length; i++) {
    if (output[i] === output[i].toUpperCase()) {
      output[i] = output[i].toLowerCase();
    }
    letter = output[i];
    for (let j = 0; j < i; j++) {
      output[i] += letter;
    }
    newOutput.push(output[i]);
    letter = "";
  }
  for (let i = 0; i < newOutput.length; i++) {
    newOutput[i] = newOutput[i][0].toUpperCase() + newOutput[i].slice(1);
  }
  newOutput = newOutput.join("-");
  return newOutput;
}

console.log(accum("ZpglnRxqenU"));
