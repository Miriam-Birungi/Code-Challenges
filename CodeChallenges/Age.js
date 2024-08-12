//assignmnt two
function checkAge(){
    const yearOfBirth = parseInt(prompt('Enter year of birth:'));
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if(age < 18){
        console.log('You are still a minor');
    }
    else if(age >= 18 && age <= 36){
        console.log('You are a youth and still strong enough');
    }
    else{
        console.log('You are really old.');
    }
}

checkAge();