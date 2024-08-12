//assignmnt four
function firstPalindrome(words){
    for(let element of words){
        //turn element into array
        let reverse = element.split("").reverse().join("");
        
        if(reverse === element){
            return element;
        }
    }
    return " ";
}

firstPalindrome(['abg','car','ada','racecar','cool']);
