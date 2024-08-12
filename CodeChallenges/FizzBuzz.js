//assignment one
function FizzBuzz(name,company){
    const length =  name.length + company.length;

    if(length % 3 === 0){
        console.log("Fizz");
    }
    else if(length % 5 === 0){
        console.log("Buzz");
    }
    else if(length % 3 === 0 && length % 5 === 0){
        console.log("Fizz Buzz")
    }
}

FizzBuzz('Miriam','Kanzu');