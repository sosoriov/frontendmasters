# Excersises

## Excersise 1

1. Add jQuery code that fades in the text "I am a hidden secret" whenever the button is clicked.
2. Change your jQuery code so it slides down the text instead of fading it in.
3. Change the button text to say "Click me to toggle a hidden secret!" and make the text toggle between fading in and out each time it is clicked.


## Excersise 2
Add jQuery code to modify the page so that when the user clicks the button, the paragraphs that start with the words "I am a hidden secret" slide up.

## Excersise 3
Change the page with jQuery so that when the button is clicked, the image changes to _herten_heer.png_

*Hint*: Change the _src_ attribute of the image

## Excersise 4
```
// Call say("Hi!") to have your computer say hi!
// This only works on recent versions of Safari
// and Chrome at the moment.
function say(text) {
  var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);  
}
```
Add jQuery that greets the user by calling the above say function whenever the user clicks the "Greet me!" button, taking into account the value of the text field.

For example, if the user types the word "Bob" into the text field, then the computer should say "Hello Bob!" when the button is clicked.
