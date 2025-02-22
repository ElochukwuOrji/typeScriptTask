# Filter Persons Function

## Description
This TypeScript project implements a `filterPersons` function that filters users based on their type (either 'user' or 'admin'). The function is designed to accept partial objects of `User` or `Admin` types, allowing for flexible filtering without the inclusion of the type property.

## Task Overview
The goal of this task is to ensure that the `filterPersons` function:
- Returns an array of `User` objects when the `personType` argument is set to 'user'.
- Returns an array of `Admin` objects when the `personType` argument is set to 'admin'.
- Accepts partial `User` or `Admin` types based on the value of `personType`.
- Excludes filtering by the `type` property in the criteria object.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ElochukwuOrji/typeScriptTask.git

2. Navigate to the project directory:
   cd typeScriptTask

3. Install the dependencies:
   npm install

4. Compile the TypeScript code:
   tsc

## Usage
To use the filterPersons function, import it into your TypeScript file and call it with the appropriate arguments.

import { filterPersons } from './path-to-your-file'; // Adjust the path accordingly

## Type Definitions
Assume the following type definitions:

interface User {
    name: string;
    age: number;
    occupation: string;
    type: 'user'; //This is needed for identification of the type but not for filtering
}

interface Admin {
    name: string;
    age: number;
    role: string;
    type: 'admin'; //This is needed for identification of the type but not for filtering
}

## Testing
Make sure to write unit tests to verify the functionality of the filterPersons function. You can use frameworks like Jest to create your tests.
