const fsPromises = require("fs").promises;
const path = require("path");

const dataOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promise.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promise.txt"),
      "\nI fulfill my promises.."
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promise.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf-8"
    );
    console.log(data);
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

dataOps();

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// console.log("hello...");

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you.",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete");
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "Nice to meet you again.",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete");
//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete");
//           }
//         );
//       }
//     );
//   }
// );

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught exception:\n ${err}`);
  process.exit(1);
});
