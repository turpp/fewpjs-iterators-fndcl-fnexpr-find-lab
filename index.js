const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let record =  array.find(function(object){
    return object.result === 'W'
})
  if (record){
    return record.year
  }
}




