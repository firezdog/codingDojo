//Given the following dictionary, print ordered lists of students and instructors (in caps) along with length of full name.

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
    ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
    ]
}

console.log('Students');
for (var student in users.Students) {
    var Students = users.Students;
    Students[student].fullName = (Students[student].first_name + " " + Students[student].last_name).toUpperCase();
    Students[student].nameLength = Students[student].fullName.length;
    console.log(student + 1 + " - " + Students[student].fullName + " - " + Students[student].nameLength);
}
console.log('Instructors');
for (var instructor in users.Instructors) {
    var Instructors = users.Instructors;
    Instructors[instructor].fullName = (Instructors[instructor].first_name + " " + Instructors[instructor].last_name).toUpperCase();
    Instructors[instructor].nameLength = Instructors[instructor].fullName.length;
    console.log(instructor + 1 + " - " + Instructors[instructor].fullName + " - " + Instructors[instructor].nameLength);
}