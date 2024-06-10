
const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      console.log(); // Adding a newline character at the end
    }
  }, i * 50); // 50ms delay for each character
}