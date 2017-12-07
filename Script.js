var easy = ["cat","red","far","pie","stop","stupid"];
var medium = ["store","field","people","friendly","slant","creepy","pestle"];
var hard = ["pendant","extend","aquatic","fraternize","institutionalized"];
var impossible = ["constantinople","rhythmic","quixotic","exoskeleton","cylindrical","xylophones"];
// var images = ["stage1.png","stage2.png","stage3.png","stage4.png","stage5.png","stage6.png","stage7.png"];
var wrongGuesses = 0;
var guessedLetters = "";
var board = "";
var word = "";



function getWord(a){
    if (guessedLetters == "") {
        if (a == 1) word = easy[Math.floor(Math.random() * easy.length)];
        if (a == 2) word = medium[Math.floor(Math.random() * medium.length)];
        if (a == 3) word = hard[Math.floor(Math.random() * hard.length)];
        if (a == 4) word = impossible[Math.floor(Math.random() * impossible.length)];
    }
    return word;
}
function setBoard(){
    document.getElementById("innerStuff").style.left = "300px";
    document.getElementById("innerStuff").style.bottom = "350px";
    board = "";
    getWord(parseInt(document.getElementById("Difficulty").value));
    for(var i=0; i<word.length; i++){
        if(guessedLetters.indexOf(word[i])== -1){
            board += "_ ";
        }else{
            board += word[i];
        }
    }
    if (word.search(document.getElementById("guess").value) == -1) wrongGuesses += 1;
    document.getElementById("Pics").innerHTML = "<img src='img/" + "stage" + (wrongGuesses + 1) + ".png'>";
    document.getElementById("guessesLeft").innerHTML = 6 - wrongGuesses;
    document.getElementById("board").innerHTML = board;
}
function guess(){
    guessedLetters += document.getElementById("guess").value + ", ";

    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: <br>" + guessedLetters;
    setBoard();
    console.log(wrongGuesses);
    if (wrongGuesses >= 6) document.getElementById("board").innerHTML = "You Lose Idiot";
    if (board.search("_") == -1) document.getElementById("board").innerHTML = "You Won";
}

//
// function guess(){
//     //get the letter out of the page
//     var currentGuess = docuent.getElementById("guess").value;
//     guessedLetters.push(currentGuess);
//
//     // guessedLetters += document.getElementById("guess").innerHTML;
//
//     document.getElementById("lettersGuessed").innerHTML = guessedLetters;
//     guessCheck(document.getElementById("guess").value);
// }
// function guessCheck(guess){
//     for (var i=0; i<guessedLetters.length; i++){
//         if (guess === guessedLetters[i]){
//             return "already been guessed idiot you should die";
//         }else{
//             guesses += 1;
//             guessedLetters += guess;
//             for (var i = 0; i<word.length;i++){
//                 if (guess === word[i]){
//                     board.replace(word[i],guess);
//                     document.getElementById("board").innerHTML = board;
//                 }
//             }
//         }
//     }
//     if(!board.includes("_")){
//         return "YOU WON!";
//     }
// }
