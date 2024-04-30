// Using process stdin
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.once('data', (input) => {
  const name = input.toString().trim();
  console.log(`Your name is: ${name}`);
  process.exit();
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
