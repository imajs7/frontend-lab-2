const questionEl = document.querySelector("#question");
const choiceBtns = document.querySelectorAll(".buttons > button");
const choiceSpans = document.querySelectorAll(".buttons > button > span");
const currentQ = document.querySelector("#currentq");
const totalQ = document.querySelector("#totalq");

var qno = 0;
var correct = 0;

const questions = [
    {
        statement: "What is the capital of Sweden?",
        choices : {
            a : "Bratislava",
            b : "Ankara",
            c : "Stockholm",
            d : "Svalbard",
        },
        answer: "c"
    },
    {
        statement: "Which statement is true?",
        choices : {
            a : "Naypyidaw is a lake",
            b : "Georgia is a country",
            c : "Azov is a mountain ",
            d : "Chad is in Asia",
        },
        answer: "b"
    },
    {
        statement: "Which among these is a water body?",
        choices : {
            a : "Ontario",
            b : "Kavaratti",
            c : "Sirocco",
            d : "Santa Maria",
        },
        answer: "a"
    },
    {
        statement: "Which is one of the cardinal directions?",
        choices : {
            a : "Left Center",
            b : "North West",
            c : "Top right",
            d : "Bottom center",
        },
        answer: "b"
    },
    {
        statement: "Which among these is a metal?",
        choices : {
            a : "Silicon",
            b : "Nitrogen",
            c : "Sodium",
            d : "Carbon",
        },
        answer: "c"
    },
];

function nextQ() {
    if( qno < questions.length ) {
        qno += 1;
    } 
}

function declareAnswer() {
    const percent = ( correct * 100 ) / questions.length;
    alert(`Your Score: ${correct} / ${questions.length} ( ${percent}% )`);
}

function checkAnswer(selected) {

    switch( selected ) {
        case 'btn0':
        case 'choice0': if( questions[qno].answer == 'a' ){
                            correct += 1;
                        }
                        break;

        case 'btn1':
        case 'choice1': if( questions[qno].answer == 'b' ){
                            correct += 1;
                        }
                        break;

        case 'btn2':
        case 'choice2': if( questions[qno].answer == 'c' ){
                            correct += 1;
                        }
                        break;

        case 'btn3':
        case 'choice3': if( questions[qno].answer == 'd' ){
                            correct += 1;
                        }
                        break;

        default: alert('Error! Please click on the choices only');
    }

}

function setQuiz() {
    questionEl.innerText = "Q" + (qno+1) + ". " + questions[qno].statement;
    choiceSpans[0].innerText = questions[qno].choices.a;
    choiceSpans[1].innerText = questions[qno].choices.b;
    choiceSpans[2].innerText = questions[qno].choices.c;
    choiceSpans[3].innerText = questions[qno].choices.d;
    currentQ.innerText = qno + 1;
    totalQ.innerText = questions.length;
}

window.addEventListener( 'load', setQuiz );

choiceBtns.forEach(element => {
    element.addEventListener( 'click', e => {
        checkAnswer( e.target.id );
        nextQ();
        if( qno == questions.length ) {
            declareAnswer();
            qno = 0;
            correct = 0;
        }
        setQuiz();
    } );
});