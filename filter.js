function filter(array, predicateFunction){
  const filteredArray = []
  for (let item of array){
    predicateFunction(item) && filteredArray.push(item)
  }
  return filteredArray
}

const names = ["Kyle", "Kristine", "Jon", "Kelsey"]

function isFourOrLessCharacters(item){
  return item.length <= 4
}

console.log(filter(names, isFourOrLessCharacters))