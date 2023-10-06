
let numeros = [1,1,2,2,3,3]

const isPalinNumber = (number) =>  {
    let pNumber = String(number)
    let pNumberVerification = pNumber.split('').reverse().join('')
    if(pNumber === pNumberVerification) { 
        return('isP')
    }else{
        return ('isNotP')
    }
}
console.log(isPalinNumber())

const noRepeatedNumbersInArray = (arr) => { 
    let newArr = []
    for(element of arr) { 
        if(!newArr.includes(element)) { 
            newArr.push(element)
            
        }
    }
    return newArr
}

console.log(noRepeatedNumbersInArray(numeros))

const noRepeat = (arr) => { 
    const newArr2 = []
    for(let i = 0 ; i < arr.length ; i++) { 
        if(!newArr2.includes(arr[i])) {
            newArr2.push(arr[i])
    }
}
return newArr2;
}

console.log(noRepeat(numeros))

;
const eliminaDuplicados = (arr) => {
const unicos = [];
for(let i = 0; i < arr.length; i++) {


if (!unicos.includes(arr[i])) {
    unicos.push(arr[i]);
    }
}

return unicos;
}

console.log(eliminaDuplicados(numeros));

