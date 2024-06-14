
const quesJSON = [
    {
        correctAnswer:'Three',
        options:['Two','Three','Foue','Five'],
        question:"How many pieces in McDonald's Big Mac",
    },

    {
        correctAnswer:'x',
        options:['x','y','z','Five'],
        question:"What comes before y",
    },

    {
        correctAnswer:'Three',
        options:['Two','Three','Foue','Five'],
        question:"How many pieces in McDonald's Big Mac",
    },

    {
        correctAnswer:'x',
        options:['x','y','z','Five'],
        question:"What comes before y",
    },
]

let currQ = 0;
let score = 0;
const questionEl = document.getElementById(
    'question'
);
const optionEl = document.getElementById(
    'options'
);
const scoreEl = document.getElementById(
    'score'
);
const nextEl = document.getElementById('next');

nextEl.addEventListener("click",()=>{
    scoreEl.textContent = `Score:${score}`;
},nextQuestion);




function showQ()
{
    const {
        correctAnswer,
        options,
        question,
    } = quesJSON[currQ];

    
    

    questionEl.textContent = question;

    const shuffledOptions = shuffleOptions(options);
    shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEl.appendChild(btn);


   
        btn.addEventListener('click',()=>{
            if(opt === correctAnswer){
                score++;
            }
            else{
                score-=0.25;
                }

            console.log(score);
           
            scoreEl.textContent = `Score:${score}`;
          
            nextQuestion();
        });
    });
}
function shuffleOptions(options){
    for(let i=options.length -1 ;i >= 0;i--)
    {
        const j = Math.floor(Math.random() * i + 1);
        [options[i],options[j]] = [options[j],options[i]];
    }
    return options;
}


function nextQuestion()
{
    currQ++;
    optionEl.textContent = '';
   
    if(currQ >= quesJSON.length)
    {
        nextEl.textContent = ' ';
        optionEl.textContent = '';
        nextEl.remove();
        questionEl.textContent ='Quiz Completed';
    }
    else
    showQ();
}


showQ();