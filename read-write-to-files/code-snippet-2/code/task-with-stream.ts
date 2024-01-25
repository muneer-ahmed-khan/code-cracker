import { createReadStream, createWriteStream } from "fs";

const dataFile = createReadStream(__dirname + "/data.json");
const outputFile = createWriteStream(__dirname + "/output.csv");

let dataFileData = "";

dataFile.on("data", (chunk: Buffer) => {
  dataFileData += chunk.toString();
});

dataFile.on("end", () => {
  try {
    const jsonData = JSON.parse(dataFileData);
    const headers = Object.keys(jsonData).join(",") + "\n";
    const values = Object.values(jsonData).join(",");

    const writeData = headers + values;

    outputFile.write(writeData, () => {
      console.log("Output data is written to output.csv file");
      process.exit();
    });
  } catch (error) {
    console.error("Error parsing JSON data:", error.message);
    process.exit(1);
  }
});
