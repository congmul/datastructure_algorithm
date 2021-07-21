const letter = ['a', 'd', 'z', 'e', 'r', 'b' ];
const basket = [2, 65, 34, 2, 1, 7, 8];

basket.sort((a, b) => a - b);

// The algorithm depends on Browser engine. 
// Which means it is not efficient. 
// So most company wanted to build their own sorting algorithm.