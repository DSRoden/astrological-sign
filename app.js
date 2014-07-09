

// Ask user date of birth  03/15/1987
// put out age 
// put out astro sign
//
/*
var prompt =require('sync-prompt').prompt;

var userBirth = prompt("What is your birthday (ex. 01/01/2011): ");


var userAge = new Date(userBirth);
var dateNow = new Date();

var age =((dateNow - userAge)/60/525949/1000).toFixed(1);

console.log("You are " + age +" years old.");


var usersMonth = userAge.getMonth() + 1;
var userDay= userAge.getDate();

if ((usersMonth >=1 && userDay >=21) || (usersMonth <=2 && userDay <= 20)) {
  console.log("You are an aquarius");
}
else if ((usersMonth >=2 && userDay >=20) || (usersMonth <= 3 && userDay <= 20)) {
  console.log("You are a Pisces.");
}
else if ((usersMonth >=3  && userDay >=21) || (usersMonth <=4 && userDay <= 20)) {
  console.log("You are an Aries.");
}

else if ((usersMonth >=4 && userDay >=21) || (usersMonth <=5 && userDay <= 21)) {
  console.log("You are a Taurus.");
}
else if ((usersMonth >=5 && userDay >=22) || (usersMonth <=6 && userDay <= 21)) {
  console.log("You are a Gemini.");
}
else if ((usersMonth >=6 && userDay >=22) || (usersMonth <=7 && userDay <= 22)) {
  console.log("You are a Cancer.");
}
else if ((usersMonth >=7 && userDay >=23) || (usersMonth <=8 && userDay <= 22)) {
  console.log("You are a Leo.");
}
else if ((usersMonth >=8 && userDay >=23) || (usersMonth <=9 && userDay <= 23)) {
  console.log("You are a Virgo.");
}
else if ((usersMonth >=9 && userDay >=24) || (usersMonth <=10 && userDay <= 23)) {
  console.log("You are a Libra.");
}

else if ((usersMonth >=10 && userDay >=24) || (usersMonth <=11 && userDay <= 22)) {
  console.log("You are a Scorpio.");
}

else if ((usersMonth >=11 && userDay >=23) || (usersMonth <=12 && userDay <= 22)) {
  console.log("You are a Sagitarius.");
}
else if ((usersMonth >=12  && userDay >=22) || (usersMonth <=1 && userDay <= 20)) {
  console.log("You are a Capricorn.");
}
  else {
  console.log("Not sure of your sign");
}
*/


//Chyld's code
//
//


var prompt = require('sync-prompt').prompt;

var dob = prompt('DOB (mm/dd/yyyy): ');

var dob = new Date(dob);
var today = new Date();

var birthMonth = dob.getMonth() +1;
var birthDay = dob.getDate();
var birthYear = dob.getFullYear();

var bd = birthMonth + '/' +birthDay + '/' + today.getFullYear();
bd = new Date(bd);

var age = today.getFullYear() - dob.getFullYear();

if(today.getTime() < bd.getTime()) {
  age--;
}

var sign;

switch(birthMonth) {
  case 1:
    if(birthDay < 20) {
      sign = 'Capricorn';
    }else {
      sign = 'Aquarius';
    }
    break;
  case 2: 
    if(birthDay < 19) {
      sign = 'Aquarius';
     } else {
       sign = 'Pisces';
    }
    break;

  case 3: 
    if(birthDay < 21) {
      sign = 'Pisces';
     } else {
       sign = 'Aries';
    }
    break;

  case 4: 
    if(birthDay < 20) {
      sign = 'Aries';
     } else {
       sign = 'Taurus';
    }
    break;

  case 5: 
    if(birthDay < 21) {
      sign = 'Taurus';
     } else {
       sign = 'Gemini';
    }
    break;

  case 6: 
    if(birthDay < 21) {
      sign = 'Gemini';
     } else {
       sign = 'Cancer';
    }
    break;
  case 7: 
    if(birthDay < 23) {
      sign = 'Cancer';
     } else {
       sign = 'Leo';
    }
    break;
  case 8: 
    if(birthDay < 23) {
      sign = 'Leo';
     } else {
       sign = 'Gemini';
    }
    break;
  case 9: 
    if(birthDay < 23) {
      sign = 'Virgo';
     } else {
       sign = 'Libra';
    }
    break;

  case 10: 
    if(birthDay < 23) {
      sign = 'Libra';
     } else {
       sign = 'Scorpio';
    }
    break;
  case 11: 
    if(birthDay < 22) {
      sign = 'Scorpio';
     } else {
       sign = 'Sagittarius';
    }
    break;
  case 12: 
    if(birthDay < 22) {
      sign = 'Sagittarius';
     } else {
       sign = 'Capricorn';
    }
 }

console.log('You are ' + age + ' years old. Your sign is ' +sign + '.');

