import fs from "fs";

const accessLogStream = fs.createWriteStream(`${__dirname}/../log/access.log`, {
  flags: "a",
});

export default accessLogStream;
