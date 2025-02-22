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

function filterPersons<T extends 'user' | 'admin'>(
    personType: T,
    criteria: T extends 'user' ?
    Partial<Omit<User, 'type'>> : Partial<Omit<Admin, 'type'>>
): T extends 'user' ? User[] : Admin[] {
    const persons: (User | Admin)[] = [
        {name: 'Elochukwu', age: 24, occupation: 'Developer', type: 'user'},
        {name: 'Iheanyi', age: 32, role: 'Administrator', type: 'admin'},
        {name: 'John', age: 25, occupation: 'Agent', type: 'user'},
        {name: 'Wisdom', age: 42, role: 'Marketing Officer', type: 'admin'},
        {name: 'Ben', age: 24, occupation: 'Financial Analyst', type: 'user'},
        {name: 'Joshua', age: 32, role: 'Salesman', type: 'admin'}, //Add more users and admins as needed...
    ];

    return persons.filter(person => {
        if (person.type !== personType)
            return false;

        for (const key in criteria) {
            if (key !== 'type' && person[key as keyof (User | Admin)] !==criteria[key as keyof typeof criteria]) {
                return false;
            }
        }
        return true;
    }) as T extends 'user' ?
    User[] : Admin[];
}

const userResults = filterPersons('user', {age: 24});
console.log(userResults); //should log an array of User objects

const adminResults = filterPersons('admin', {age: 32});
console.log(adminResults); //should log an array of Admin objects