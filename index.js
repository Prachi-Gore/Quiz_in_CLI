// Let's play a game : How well do  you know Your Country,India

var readlineSync=require('readline-sync');
var userName=readlineSync.question("What's your name : ");
console.log("Welcome ",userName);
console.log("Let's play a game : How Well do you know India");

//create array of objects 
//each object represent question answer pair

var one={question:"1. What is the National fruit of India : ",ans:"Mango"};
var two={question:"2. Which is the National Animal of India : ",ans:"Tiger"};
var three={question:"3. What is the National bird of India : ",ans:"Peacock"};  
var four={question:"4. Which is the Financial Capital of India : ",ans:"Mumbai"};
var five={question:"5. Which is the longest river in India : ",ans:"ganga"};
var six={question:"6. Who is the Prime Minister of India : ",ans:"Narendra modi"};
var seven={question:"7. On Which year India got Independence : ",ans:1947};
var eight={question:"8. Who was the first Indian woman to go in space : ",ans:"Kalpana Chawala"};
var nine={question:"9. What movie is based on Ramanujan : ",ans:"The man who knew infinity"};
var ten={question:"10. Who is gankokila of India : ",ans:"Lata MAngeshwar"};

var qns=[one,two,three,four,five,six,seven,eight,nine,ten];
var score=0;
console.log("-----------------------------------------------------------")
for(let i=0;i<qns.length;i++){
  var userAns=readlineSync.question(qns[i].question);
  
  if(userAns.toLowerCase()===(""+qns[i].ans).toLowerCase()){
    score++;
    console.log("You'r answer is right ");
    console.log("-----------------------------------------------------------")
    //console.log("score: ",score);
  }else{
    console.log("You'r answer is wrong ");
    console.log("-----------------------------------------------------------")
   // console.log("score: ",score);
  }
}
console.log("Great ,You have finished this game");
console.log("You'r Score is ",score,"/10");
