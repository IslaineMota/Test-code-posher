const array1 = [5, 1, 22, 25, 6, -1, 8, 10];

const array2 = [1, 6, -1, 10];

const intersection = array1.filter(e => array2.includes(e));

const isEqual = () => {
    for (let i = 0; i < intersection.length; i++) {
        if (intersection[i] !== array2[i])
            return false;
    }
    return true;
};

console.log(isEqual());
