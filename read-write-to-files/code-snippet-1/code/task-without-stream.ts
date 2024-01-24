import { promises as fs } from "fs";

async function readDataFromFile(filePath: string): Promise<string> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    console.error(`Error reading file ${filePath}: ${error.message}`);
    throw error;
  }
}

async function writeDataToFile(filePath: string, data: string): Promise<void> {
  try {
    await fs.writeFile(filePath, data);
    console.log(`Data successfully written to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to file ${filePath}: ${error.message}`);
    throw error;
  }
}

async function applyTransformations(
  data: string,
  config: any
): Promise<string> {
  let transformedData = data;

  if (config.uppercase) {
    transformedData = transformedData.toUpperCase();
  }

  if (config.reverse) {
    transformedData = transformedData.split("").reverse().join("");
  }

  return transformedData;
}

async function main() {
  try {
    const configData = await readDataFromFile(__dirname + "/config.json");
    const inputData = await readDataFromFile(__dirname + "/input.txt");
    const config = JSON.parse(configData);

    const transformedData = await applyTransformations(inputData, config);

    await writeDataToFile(__dirname + "/output.txt", transformedData);
  } catch (error) {
    console.error(`Error during file operations: ${error.message}`);
  }
}

main();
