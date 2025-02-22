function filterPersons(personType, criteria) {
    var persons = [
        { name: 'Elochukwu', age: 24, occupation: 'Developer', type: 'user' },
        { name: 'Iheanyi', age: 32, role: 'Administrator', type: 'admin' },
        { name: 'John', age: 25, occupation: 'Agent', type: 'user' },
        { name: 'Wisdom', age: 42, role: 'Marketing Officer', type: 'admin' },
        { name: 'Ben', age: 24, occupation: 'Financial Analyst', type: 'user' },
        { name: 'Joshua', age: 32, role: 'Salesman', type: 'admin' }, //Add more users and admins as needed...
    ];
    return persons.filter(function (person) {
        if (person.type !== personType)
            return false;
        for (var key in criteria) {
            if (key !== 'type' && person[key] !== criteria[key]) {
                return false;
            }
        }
        return true;
    });
}
var userResults = filterPersons('user', { age: 24 });
console.log(userResults); //should log an array of User objects
var adminResults = filterPersons('admin', { age: 32 });
console.log(adminResults); //should log an array of Admin objects
