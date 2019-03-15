const fs = require("fs");
let Readable = require("stream").Readable;

// Make our own readable stream, named r
let r = new Readable();
r.push("Hello \n");
let count = 0;

// Downstream code will call r's _read function when it wants some data from r
r._read = function() {
  count++;
  if (count > 10) {
    r.push("bye ");

    // Push null downstream to signal we've got no more data and stop the stream
    return r.push(null);
  }
  setTimeout(() => {
    // pushing data onto a stream causes an event to fire,
    let chunkData = `${count} \n`;
    return r.push(chunkData);
  }, 500);
};

// create writable stream
const w = fs.createWriteStream("./file.txt", { flags: "a" });

// Have our readable stream send output data to the writeable stream
r.pipe(w);
