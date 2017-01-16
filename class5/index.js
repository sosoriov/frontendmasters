console.log("this msg is from index.js")
$.ajax({
  method: "GET",
  url: "https://api.got.show/api/characters/",
})
.done(function( response ) {
    console.log("this is the response", response)
    var response = response;
    response.forEach(function(character) {
        $("#characters").append(`<li>${character.name}</li>`);

    })
});