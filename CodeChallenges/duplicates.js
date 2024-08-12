function checkDuplicates(nums) {
    const seen = new Set();
    for (const num of nums) {
        if(seen.has(num)){
            return true;
        }
        seen.add(num);
    }
    return false;
}

checkDuplicates([1,2,4,1]);