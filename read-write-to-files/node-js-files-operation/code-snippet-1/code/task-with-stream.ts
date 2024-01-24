import { createReadStream, createWriteStream } from "fs";

const configFile = createReadStream(__dirname + "/config.json");
const inputFile = createReadStream(__dirname + "/input.txt", {
  highWaterMark: 20,
});
const outputFile = createWriteStream(__dirname + "/output.txt");

let configFileData = "";
let inputFileData = "";

configFile.on("data", (chunk: Buffer) => {
  configFileData += chunk.toString();
});

configFile.on("end", () => {
  inputFile.on("data", (chunk: Buffer) => {
    inputFileData += chunk.toString();
  });

  inputFile.on("end", () => {
    const config = JSON.parse(configFileData);

    if (config.uppercase) {
      inputFileData = inputFileData.toUpperCase();
    }

    if (config.reverse) {
      inputFileData = inputFileData.split("").reverse().join("");
    }

    outputFile.write(inputFileData, () => {
      console.log("output data is written to output.txt file");
      process.exit();
    });
  });
});
