var WORDS_PER_MINUTE = 500;
var SLEEP_TIME = 1000 * 60 / WORDS_PER_MINUTE;

var parapgraphs = document.getElementsByTagName("p");
console.log("found " + parapgraphs.length + " paragraphs");

var articleWords = [];
for (var i=0; i<parapgraphs.length; i++){
    var paragraph = parapgraphs[i];
    var words = paragraph.textContent.split(" ");
    for (var j=0; j<words.length; j++){
        var word = words[j];
        articleWords.push(word);
    }
    articleWords.push("");
}

// console.log(articleWords);
articleIndex = 0;
setInterval( function(){
    var word = articleWords[articleIndex];
    articleIndex++;
    document.getElementById("spritz-word").innerHTML = prepareWord(word);
    console.log("trying to update " + word);
}, SLEEP_TIME);


function prepareWord(word){
    
    // takes a word and space fills it at the beginning
    var wordDesiredLength = 12;
    var wordCurrentLength = word.length;

    var numberOfSpaces = ((wordDesiredLength - wordCurrentLength) / 2) / 2;
    var toReturn = "";
    
    for (var i=0; i<numberOfSpaces; i++) {
        toReturn += "&nbsp;";
    }
    
    return toReturn + highlightWord(word, (wordDesiredLength/2) - numberOfSpaces);
}

function highlightWord(word, numberOfSpaces){
    // var highlightedLetterIndex = Math.floor(word.length/3);
    var highlightedLetterIndex = numberOfSpaces - 1;
    console.log(highlightedLetterIndex);

    var pieces1 = word.substring(0, highlightedLetterIndex-1);
    var pieces2 = word.substring(highlightedLetterIndex-1, highlightedLetterIndex);
    var pieces3 = word.substring(highlightedLetterIndex);

    return pieces1 + "<span class='highlighted-letter'>" +  pieces2 + "</span>" + pieces3;
}