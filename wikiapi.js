$("#search-bar").submit(function (event)
{

    event.preventDefault();

    var searchFieldVal = $("#search-field").val();

    var url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${searchFieldVal}`;

    fetch(url)
var search = document.getElementById("btn");
var input = document.getElementById("input");
var wikiFrame = document.getElementById("wikiframe");
search.addEventListener('click', getWiki);
function getWiki(){
    var englishWiki = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=" + input.value;
    fetch(englishWiki)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        $("#wiki-text-area").text(data.query.search[0].title);
    });
})

//http://en.wikipedia.org/?curid=18630637 curid equals the pageid datapoint. so pageid can be inserted as a parameter into url to bring up page 