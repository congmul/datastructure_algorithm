//  Hi My name is Andrei

function reverse(str) {
    // Check what if str has undefine or length < 2 or no string type
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Pass proper strings';
    }

    let reverseStr = "";
    for(let i = str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

const reverse02 = str => [...str].reverse().join('');
console.log(reverse('Hi My name is Andrei'));
console.log(reverse02('Hi My name is Andrei'));
