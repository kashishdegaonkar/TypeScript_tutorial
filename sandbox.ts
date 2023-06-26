//ARRAYS

let invitedNames = ['kashish' , 'gargi' , 'riya'];
invitedNames.push('tanvi'); 

for(var i = 0 ; i<=invitedNames.length ; i++){
    console.log(invitedNames[i]);
}

//invitedNames.push(7); 
//Argument of type 'number' is not assignable to parameter of type 'string'.


//MIXED-ARRAYS

let mixedArray = ['parth' , 18 , true , 'jadhav'];
for(var i = 0 ; i<=mixedArray.length ; i++){
    console.log(mixedArray[i]);
}

mixedArray.push('kashish');
mixedArray[0]='ghogre';
for(var i = 0 ; i<=mixedArray.length ; i++){
    console.log(mixedArray[i]);
}


//OBJECTS

let student = {
    studentName:'kashish',
    age:18,
    isCoding: true
};

//student.newSkill = "painting"; cannot add new objects explicitly.