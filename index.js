function solve(S) {
    console.log(S);
    // const alphabetStr = 'ABCD';
    const alphabetStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let substr = '';
    let pointIndex = 0;

    // S.forEach((char) => {
    for(let i = 0; i < S.length; i++){
        if(S[i] === alphabetStr[pointIndex]){
            pointIndex++;
        }
        if( 0 < pointIndex && pointIndex < alphabetStr.length){
            substr += S[i];
        }
    }
    substr += 'Z';
    console.log(pointIndex);
    return substr;

}

console.log(solve('FORCESABCDEFDIVGHIJKLMNOPQRSTUVWXYZO'));