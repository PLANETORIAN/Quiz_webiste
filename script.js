const qstns = [
    {
        question: "Which Pixar movie is about a rat who becomes a chef in Paris?",
        ans: {
            opt1: "Finding Nemo",
            opt2: "Ratatouille",
            opt3: "The Incredibles",
            opt4: "WALL-E"
        },
        correctAns: "Ratatouille"
    },
    {question:"Which DC movie features the character Harley Quinn for the first time?",
        ans: {
            opt1:"The Suicide Squad",
            opt2:"Birds of Prey",
            opt3:"Suicide Squad (2016)",
            opt4:"The Batman",     
        },
        correctAns: "Suicide Squad (2016)"
    },
    {question:"What is the name of the villain in The Lion King?",
        ans: {
            opt1:"Mufasa",
            opt2:"Scar",
            opt3:"Shere Khan",
            opt4:"Jafar",     
        },
        correctAns: "Scar"
    },
    {question:"Who directed the sci-fi film Inception (2010)?",
        ans: {
            opt1:"Steven Spielberg",
            opt2:"Christopher Nolan",
            opt3:"James Cameron",
            opt4:"Ridley Scott",     
        },
        correctAns: "Christopher Nolan"
    },
    {question:"Which actor played the Joker in The Dark Knight (2008)?",
        ans: {
            opt1:"Jack Nicholson",
            opt2:"Jared Leto",
            opt3:"Heath Ledger",
            opt4:"Joaquin Phoenix",     
        },
        correctAns: "Heath Ledger"
    },
    {question:`Which movie features the line, “I'm the king of the world!”?`,
        ans: {
            opt1:"Titanic",
            opt2:"Avatar",
            opt3:"The Wolf of Wall Street",
            opt4:"Gladiator",     
        },
        correctAns: "Titanic"
    },
    
];

let qIndex = 0;
let score = 0;
scorePer=0;





let mainContainer = document.querySelector(".container");
let startQuiz = document.querySelector(".start-btn");
startQuiz.addEventListener("click",()=>{

    mainContainer.innerHTML=`<h1 class="quiz-head">QUIZ</h1>
        <div class="quiz"></div>
        <div class="btns">
            <button class="next-button bt">Next</button>
        </div>`;

    qstnShow();

    NextButton();
});

function NextButton() {
    let nextButton = document.querySelector(".next-button");

    let newButton = nextButton.cloneNode(true);
    nextButton.replaceWith(newButton);
    nextButton = newButton;

    nextButton.addEventListener("click", () => {
        qIndex++;
        qstnShow(); 
    });
}



function qstnShow(){
    let currQstn = document.querySelector(".quiz");
    if (qIndex >= qstns.length) {
        scorePer=((score/qstns.length)*100).toFixed(2);
        currQstn.innerHTML = `
        <div class="pie-container">
    <div class="circular">
        <span class="circular-progress">${scorePer}%</span>
    </div>
    <span class="text">You got ${score} correct out of ${qstns.length}</span>
</div>
`;

        let circular = document.querySelector(".circular"); 
        circular.style.background = `conic-gradient(#33a1ff ${scorePer*3.6}deg, white 0deg)`

        let tryAgain = document.querySelector(".next-button");
        tryAgain.innerHTML="Try Again";

        let newTryAgain = tryAgain.cloneNode(true);
tryAgain.replaceWith(newTryAgain);
tryAgain = newTryAgain;

        
        tryAgain.addEventListener("click",()=>{
            qIndex=0;
            score=0;
            scorePer=0;
            qstnShow();
            
            let nextButton = document.querySelector(".next-button");
        nextButton.innerHTML = "Next"; 
        NextButton();
    });
        return;
    }
    
  
    currQstn.innerHTML = `<h1>${qIndex+1}. ${qstns[qIndex].question}</h1>
            <div class="answers">
                <button class="ans">${qstns[qIndex].ans.opt1}</button>
                <button class="ans">${qstns[qIndex].ans.opt2}</button>
                <button class="ans">${qstns[qIndex].ans.opt3}</button>
                <button class="ans">${qstns[qIndex].ans.opt4}</button>
            </div>`;

    document.querySelectorAll(".ans").forEach((ansButton)=>{
        ansButton.addEventListener("click",()=>{


            document.querySelectorAll(".ans").forEach(btn => {
                btn.disabled = true;  
                btn.style.opacity = "0.8";  
            });

            


            if (ansButton.innerHTML===qstns[qIndex].correctAns){
                
                score++;
                ansButton.style.borderColor = "green";  
                ansButton.style.borderWidth = "3px"; 
                ansButton.style.borderStyle = "solid";
                ansButton.style.backgroundColor = "#9ce69c";


                
            }
            else{

                ansButton.style.borderColor = "red";  
                ansButton.style.borderWidth = "3px"; 
                ansButton.style.borderStyle = "solid";
                ansButton.style.backgroundColor = "#ffcccc";
                
            }

        })
        
    })
    NextButton();
}



 