function addUser(){

    playername_1=document.getElementById("Player1_name").value;
    playername_2=document.getElementById("Player_2_name").value;
    
    localStorage.setItem("PlayerName_1",playername_1);
    localStorage.setItem("PlayerName_2",playername_2);
    
    window.location="quiz.html";
    
    }