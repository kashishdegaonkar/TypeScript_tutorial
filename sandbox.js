var invitedNames = ['kashish', 'gargi', 'riya'];
invitedNames.push('tanvi');
for (var i = 0; i <= invitedNames.length; i++) {
    console.log(invitedNames[i]);
}
//invitedNames.push(7); 
//Argument of type 'number' is not assignable to parameter of type 'string'.
var mixedArray = ['parth', 18, true, 'jadhav'];
for (var i = 0; i <= mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
mixedArray.push('kashish');
mixedArray[0] = 'ghogre';
for (var i = 0; i <= mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
