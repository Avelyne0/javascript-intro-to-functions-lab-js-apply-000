function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'
  
function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  expect(lowercase).toEqual(`I can't hear you!`)
  expect(uppercase).toEqual(`YES INDEED!`)
  expect(`I love you, Grandma.`).toEqual(`I love you, too.`)
}