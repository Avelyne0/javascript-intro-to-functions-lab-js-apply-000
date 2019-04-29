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
  const spy = expect.spyOn(console, 'log').andCallThrough()
}

function logWhisper(string){
  console.log(string.toLowerCase)
}

function sayHiToGrandma(string){
  
}