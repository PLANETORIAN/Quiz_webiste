const qstns = [
    {
        question: "What is the capital city of Australia?",
        ans: {
            opt1: "Sydney",
            opt2: "Melbourne",
            opt3: "Canberra",
            opt4: "Brisbane"
        },
        correctAns: "Canberra"
    },
    {
        question: "What is the largest ocean on Earth?",
        ans: {
            opt1: "Atlantic Ocean",
            opt2: "Indian Ocean",
            opt3: "Arctic Ocean",
            opt4: "Pacific Ocean"
        },
        correctAns: "Pacific Ocean"
    },
    {
        question: "Which planet is known as the Red Planet?",
        ans: {
            opt1: "Venus",
            opt2: "Mars",
            opt3: "Jupiter",
            opt4: "Saturn"
        },
        correctAns: "Mars"
    },
    {
        question: "Who developed the theory of relativity?",
        ans: {
            opt1: "Isaac Newton",
            opt2: "Albert Einstein",
            opt3: "Nikola Tesla",
            opt4: "Stephen Hawking"
        },
        correctAns: "Albert Einstein"
    }
];

let qIndex = 0;
let score = 0;
scorePer=(score/(qstns.length))*100;


function qstnShow(){
    let currQstn = document.querySelector(".quiz");
    if (qIndex >= qstns.length) {
        currQstn.innerHTML = `
        <div class="pie-container">
    <div class="circular">
        <span class="circular-progress">${scorePer}%</span>
    </div>
    <span class="text">You got ${score} correct out of ${qstns.length}</span>
</div>
`;

        let circular = document.querySelector(".circular"); 
        circular.style.background = `conic-gradient(#7d2ae8 ${scorePer*3.6}deg, white 0deg)`

        let tryAgain = document.querySelector(".next-button");
        tryAgain.innerHTML="Try Again";
        tryAgain.addEventListener("click",()=>{
            qIndex=0;
            score=0;
            scorePer=0;
            
            tryAgain.innerHTML="Next";
            qstnShow();
            

            // this replaces the next button with a clone of itslef as the previous event listeners are still attached to it.
            nextButton.replaceWith(nextButton.cloneNode(true)); 
            nextButton = document.querySelector(".next-button"); 
            nextButton.addEventListener("click", () => {
                qIndex++;
                qstnShow();
    })

        });
        return;
    }
    
  
    currQstn.innerHTML = `<h1>${qstns[qIndex].question}</h1>
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
                scorePer=(score/(qstns.length))*100;
                
            }
            else{

                ansButton.style.borderColor = "red";  
                ansButton.style.borderWidth = "3px"; 
                ansButton.style.borderStyle = "solid";
                
            }

        })
    })
}

qstnShow();

let nextButton=document.querySelector(".next-button")
nextButton.addEventListener("click", () => {
    qIndex++;
    qstnShow();
});

