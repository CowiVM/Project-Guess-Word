function ProceedtoGame() {
    username1 = document.getElementById("player1_username").value;
    username2 = document.getElementById("player2_username").value;
    
    localStorage.setItem("First_User", username1);
    localStorage.setItem("Second_User", username2);

    window.location = "Main Game Screen.html";
}