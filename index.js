const setOfWords = [
    "My name is Nisha Arya and I am  currently undergraduate.",
    "I am making typing speed game , I just hope you all  enjoy this game ",
    "If you want the source code the go to my gib hub profile and chechout code"
   ]
 

   const msg = document.getElementById("msg");
   const typeWords = document.getElementById("mywords");
   const btn = document.getElementById("btn");
   let stratTime , endTime;


   const playGame = () =>{
       let randomNumber =Math.floor( Math.random()*setOfWords.length);
       msg.innerText = setOfWords[randomNumber];

    //   we should known time that when we click the start btn ---
    let date = new Date();
    stratTime = date.getTime();
    btn.innerText = "Done";
   }


   const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - stratTime)/1000);
    console.log(totalTime);
    
   let totalStr = typeWords.value;
   let wordCount = wordCounter(totalStr);


//    for speed-----
let speed = Math.round((wordCount /totalTime) *60);

let finalMsg = "You typed total at " +speed+" words per minutes ";

finalMsg +=  compareWords(msg.innerText , totalStr);
msg.innerText = finalMsg;

   }
   const wordCounter = (str) =>{
    let response = str.split("").length;
    // console.log(response);
    return response;
   }

     const compareWords = ( str1 , str2)=>{
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let cnt =0;


        //arrname  then foreach then it will take whole 
        //function with value and index no. of that arr
        words1.forEach(function(item , index) {
             
            if(item == words2[index]){
                cnt++;
            }
        });

        let errorWords = (words1.length - cnt);
        return (cnt + "correct out of " + words1.length+ "words and the total number of error are"+ errorWords +".");
       
     }  
  


   btn.addEventListener('click' , function(){
     if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
     }else if(this.innerText == 'Done'){
        typeWords.disabled = true;
        btn.innerText ="Start";
        endPlay();
     }
   })