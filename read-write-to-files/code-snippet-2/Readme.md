# Test Scenario: Node.js File Operations

## Objective:

- Read data from "data.json" and "instructions.txt".
- Modify the data according to the instructions in "instructions.txt".
- Write the modified data to a new file called "output.csv".

## Files:

- **data.json:** Contains initial data in JSON format.
- **instructions.txt:** Contains transformation instructions.
- **output.csv:** The result of the transformation.

## Tasks:

Create a Node.js script to perform the following tasks:

1. Read data from "data.json" and parse it.
2. Read transformation instructions from "instructions.txt".
3. Apply the instructions to modify the data.
4. Write the modified data to "output.csv".

## Requirements:

- Use asynchronous file operations (e.g., fs.readFile, fs.writeFile).
- Implement error handling for file read/write operations.
- Ensure proper commenting and code organization.
- Use Promises or async/await for better readability (optional).

## Example:

**data.json:**
```json
{
  "name": "John Doe",
  "age": 25,
  "city": "Example City"
}
```

**instruction.txt:**
```txt
Transform the JSON data to CSV format.
```

**output.csv (after transformation):**
```csv
name,age,city
John Doe,25,Example City
```

## Evaluation Criteria:
- Correct implementation of file read/write operations.
- Proper handling of errors.
- Appropriate usage of asynchronous functions.
- Correct application of transformation instructions.
- Clean and well-documented code.


## Usage
- The outcome of the task is located within the "code" directory.
-To view the output, uncomment any file in the index.js file.

- To run code:
```bash
npm start
```