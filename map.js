function map(array, functionToApply){
  const transformedArray = []
  for (let item of array){
    transformedArray.push(functionToApply(item))
  }
  return transformedArray
}

function double(number){
  return number * 2
}

const numbers = [1,2,3]

console.log(map(numbers,double))