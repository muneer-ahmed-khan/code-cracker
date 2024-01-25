import { promises as fsPromises } from "fs";

async function readAndParseFile(filePath: string): Promise<any> {
  try {
    const fileContent = await fsPromises.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    throw new Error(
      `Error reading or parsing file ${filePath}: ${error.message}`
    );
  }
}

async function writeToFile(filePath: string, data: string): Promise<void> {
  try {
    await fsPromises.writeFile(filePath, data, "utf-8");
    console.log(`Data written to ${filePath} successfully.`);
  } catch (error) {
    throw new Error(`Error writing to file ${filePath}: ${error.message}`);
  }
}

async function transformData(
  data: any,
  instructions?: string[]
): Promise<string> {
  try {
    // Apply transformation logic based on instructions
    // For simplicity, assuming the instructions are in the format of transformation functions
    if (Array.isArray(data)) {
      // Extract headers
      const headers = Object.keys(data[0]).join(",") + "\n";

      // Example: Transform to CSV format
      const transformedData =
        headers +
        data.map((item: any) => Object.values(item).join(",")).join("\n");

      return transformedData;
    }
  } catch (error) {
    throw new Error(`Error transforming data: ${error.message}`);
  }
}

async function main() {
  try {
    const data = await readAndParseFile(__dirname + "/data.json");
    // const instructions = await readAndParseFile(__dirname + "/instruction.txt");
    const transformedData = await transformData(data);
    await writeToFile(__dirname + "/output.csv", transformedData);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
