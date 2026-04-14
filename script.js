

const questions = [
    {
        que : "full form of HTML", 
        opt : ["Hyper Text Markup Language", "Hyper Text Transfer Protocol", "Hyper Text Magic Language", "Hyper Tank Markup Language"], 
        cor : 0
    },
    {
        que : "full form of CSS",
        opt : ["Cascading Stylesheet", "Case Cading Style", "Case Cading Sheet", "Case Coding Stylesheet"],
        cor : 0
    }, 
    {
        que : "types of selectors of javascript",
        opt : ["1", "2", "5", "4"], 
        cor : 2
    }, 
    {
        que : "function word is in javascript", 
        opt : ["variable", "keyword", "data type", "operator"],
        cor : 1
    }, 
    {
        que : "Addition operator is part of",
        opt : ["Arithmetic", "Comparison", "Assignment", "Bitwise"],
        cor : 0
    }
];

let index = 0;
let correct = 0;
let wrong = 0;      
let answe = false;

loadQuestion();

function loadQuestion(){
    answe = false;

    document.getElementById("question").innerText = questions[index].que;

    let optionHTML = "";
    for(let i = 0; i < questions[index].opt.length; i++){
        optionHTML += `
        <button onclick="checkAnswer(${i})">
        ${questions[index].opt[i]}
        </button><br>`;
    }

    document.getElementById("options").innerHTML = optionHTML;
}

function checkAnswer(selected){
    if(answe === true) return;  
    answe = true;

    let buttons = document.querySelectorAll("#options button");

    if(selected == questions[index].cor){   
        buttons[selected].style.backgroundColor = "lightgreen";
        correct++;
    } else {
        buttons[selected].style.backgroundColor = "lightpink";
        buttons[questions[index].cor].style.backgroundColor = "lightgreen";
        wrong++;
    }

    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true; 
    }
}

function nextQuestion(){
    if(answe === false){
        alert("Please select an option first");
        return;
    }

    index++;

    if(index < questions.length){
        loadQuestion();
    } else {
        localStorage.setItem("correct", correct);
        localStorage.setItem("wrong", wrong);

        window.location.href = "results.html";
    }
}