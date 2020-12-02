player1_name = localStorage.getItem("First_User");
player2_name = localStorage.getItem("Second_User");

document.getElementById("player_question").innerHTML = player1_name;
document.getElementById("player_answer").innerHTML = player2_name;

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

player1_score = 0;
player2_score = 0;

document.getElementById("score1").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;

function send() {
get_word = document.getElementById("question_word").value;
word = get_word.toLowerCase();
console.log("The word is changed to all lower case alphabets = " + word);

charAt1 = word.charAt(1)
console.log(charAt1);

charAt2 = word.charAt(2)
console.log(charAt2);

length_divide_2 = Math.floor(word.length/2);
charAt3 = word.charAt(length_divide_2);
console.log(charAt3);

length_minus_1 = word.length - 1;
charAt4 = word.charAt(length_minus_1);
console.log(charAt4);

remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt2.replace(charAt3, "_");
remove_charAt3 = remove_charAt3.replace(charAt4, "_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
input_box = "<br>Answer : <input type='text' id = 'input_check_box'>";
check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check </button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("question_word").value = ""
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in all lowers - " + answer)

    if(answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("score1").innerHTML = player1_score;
        } 
        else {
            player2_score = player2_score + 1;
            document.getElementById("score2").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "Question Turn is - " + player2_name;
        } 
    else {
            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "Question Turn is - " + player1_name;
        }
    if (answer_turn == "player1") {
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Answer Turn is - " + player2_name;
        } 
    else {
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer Turn is - " + player1_name;
        }
        document.getElementById("output").innerHTML = ""
}