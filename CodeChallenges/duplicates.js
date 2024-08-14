function duplicateNums(nums){
    const digits = new set();
    for (const number of nums){
        if(digits.has(number)){
            return true;
        }
        digits.add(number);
    }
    return false;
}

duplicateNums([1,2,4,5,6,1]);