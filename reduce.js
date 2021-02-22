function reduce(array, accumulatorFunction, startingValue){
  let accumulator = startingValue
  for (item of array){
    accumulator = accumulatorFunction(accumulator, item)
  }
  return accumulator
}

const numbers = [1,2,3]

function sum(lastValue, currentValue){
  return lastValue + currentValue
}

console.log(reduce(numbers, sum, 0))