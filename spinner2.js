process.stdout.write('hello from spinner2.js... \rheyyy\n');

let spinner = ['|', '/', '-', '\\'];
for (let i = 0; i < 16; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i%4]}   `);
  }, 100 + (i * 200));
}
