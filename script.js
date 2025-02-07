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

const qstnElement = document.querySelector(".question");
const ansElement = document.querySelector(".answers");
const nextElement = document.querySelector(".next-button");
let qIndex = 0;
let score = 0;


function qstnShow(){
    let currQstn = document.querySelector(".quiz");
    if (qIndex >= qstns.length) {
        currQstn.innerHTML = "<h1>Quiz Completed!</h1>";
        return;
    }
    
    currQstn.innerHTML="";
    currQstn.innerHTML = `<h1>${qstns[qIndex].question}</h1>
            <div class="answers">
                <button class="ans">${qstns[qIndex].ans.opt1}</button>
                <button class="ans">${qstns[qIndex].ans.opt2}</button>
                <button class="ans">${qstns[qIndex].ans.opt3}</button>
                <button class="ans">${qstns[qIndex].ans.opt4}</button>
            </div>`;

    document.querySelectorAll(".ans").forEach((ansButton)=>{
        ansButton.addEventListener("click",()=>{
            if (ansButton.innerHTML===qstns[qIndex].correctAns){
                
                score++;
                
            }
            else{
                
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
