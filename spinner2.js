const spin = ['\r|    ', '\r\    ', '\r-    ', '\r\\    ','\r𓅭    ', '\r🥚    ','\r🐤    \n']
let time = 100;
for (let item of spin) {
  setTimeout(() => {
    process.stdout.write(item);
  }, time);
  time += 200;
};