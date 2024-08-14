function nonRepeating(nums){
    let result = 0;
    for (const number of nums){
        result ^= number;
    }
    return result;
}

nonRepeating([2,1,2,4,1]);