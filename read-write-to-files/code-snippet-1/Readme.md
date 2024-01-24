**Test Scenario: Node.js File Operations**

1. **Objective:**
    - Read data from "input.txt" and "config.json".
    - Modify the data according to the instructions in "config.json".
    - Write the modified data to a new file called "output.txt".

2. **Files:**
    - ```input.txt:``` Contains the initial data (e.g., plain text or JSON).
    - ```config.json:``` Contains configuration instructions (e.g., transformation rules).
    - ```output.txt:``` The result of the transformation.

3. **Tasks:**
    - Create a Node.js script to perform the following tasks:
        - Read data from "input.txt" and parse it.
        - Read configuration rules from "config.json".
        - Apply the rules to modify the data.
        - Write the modified data to "output.txt".

4. **Requirements:**
    - Use asynchronous file operations (e.g., ```fs.readFile```, ```fs.writeFile```).
    - Implement error handling for file read/write operations.
    - Ensure proper commenting and code organization.
    - Use Promises or ```async/await``` for better readability (optional).

5. **Example:**
    - ```input.txt:```
       > Hello, this is the input data.

    - `config.json`:
        ```json
        {
        "uppercase": true,
        "reverse": true
        }
        
    - ```output.txt``` (after transformation):
        >.ATAD TUPNI SI SIHT ,OLLEH

6. **Evaluation Criteria:**
    - Correct implementation of file read/write operations.
    - Proper handling of errors.
    - Appropriate usage of asynchronous functions.
    - Correct application of configuration rules.
    - Clean and well-documented code.


**Usage**

- The outcome of the task is located within the ```"code"``` directory.
- To view the output, uncomment any file in the``` index.js``` file.
- To run code 

    ``` js
    npm start