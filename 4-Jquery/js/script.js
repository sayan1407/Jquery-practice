$(function() {
  var pokemonSpeciesAPI = "https://pokeapi.co/api/v2/generation/1/";
  var pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"
 $.getJSON(pokemonSpeciesAPI).done(function(data){
    console.log(data);
    var pokemonSpeciesTag = $("#PokemonSpecies");
    $.each(data.pokemon_species,function(index,value){
       var paragraph = $("<p>").text("Poekemon no."+index+" is ");
       var link = $("<a>").attr("id",value.name).attr("href","#").append($("<strong>").text(value.name));
       paragraph.append(link);
       pokemonSpeciesTag.append(paragraph);
       link.click(function(){
        showPokemon(value.name);
       });
    });
    
 }).fail(function(){
  alert("can't call the api");
 });
 function showPokemon(name)
 {
  $.getJSON(pokemonAPI+name).done(function(data){
    var pokemonTag = $("#Pokemon");
    pokemonTag.empty();
    var header = $("<h2>").text(name);
    pokemonTag.append(header);
    pokemonTag.append($("<img>").attr("src",data.sprites.back_default));
    pokemonTag.append($("<img>").attr("src",data.sprites.front_default));
    pokemonTag.append($("<img>").attr("src",data.sprites.front_shiny));

  })
 }

});