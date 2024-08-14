function dataCategories(inputArray){
    const categories = {
        evens: [],
        odds: [],
        chars: [],
    };
    for(let i = 0; i < inputArray.length; i++){
        const element = inputArray[i];
        if(typeof element === 'number'){
            if(element % 2 === 0) {
                insertSorted(result.evens, element);
            }
            else{
                insertSorted(result.odds,element);
            }
        }
        else if(typeof element === 'string' && element.length === 1){
            insertSorted(result.chars, element);
        }
    }
    return result;
}

function insertSorted(inputArray,value){
    let i = 0;
    while (i < inputArray.length && inputArray[i] < value){
        i++;
    }
    inputArray.splice(i, 0, value);
}

dataCategories([3,6,'a',2,1,8,'b',5,4]);