//
// 
//
//      _   ___              ____  _              ____        __ 
//     / | / (_)_______     / __ \(_)_______     / __ )____  / /_
//    /  |/ / / ___/ _ \   / /_/ / / ___/ _ \   / __  / __ \/ __/
//   / /|  / / /__/  __/  / _, _/ / /__/  __/  / /_/ / /_/ / /_  
//  /_/ |_/_/\___/\___/  /_/ |_/_/\___/\___/  /_____/\____/\__/  
//  
// Made By: Neil Master/Yeehawlerz101
//  Notes: Make sure to leave your ad blocker off so that 'freerice' can have some sort of income :)
// How to use: Make an account, sign in all that fun stuff, then go to the categories and click multiplacation tables
// Then when the page loads, go to the console of your web browser and paste the code in the console and enjoy!
const interval = setInterval(function() {
    var problem = document.getElementsByClassName("card-title");
    for (var i = 0; i < problem.length; i++) {
      var prob = problem[i].innerText;
    var pr = prob.replace(" x ", "-");
     var splits =  pr.split("-",2)
      var answer = splits[0]*splits[1]
      console.log(answer)
    }    
    var a = document.getElementsByClassName('card-button')[0].innerText;
    b = document.getElementsByClassName('card-button')[1].innerText;
    c = document.getElementsByClassName('card-button')[2].innerText;
    d = document.getElementsByClassName('card-button')[3].innerText;
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    
    console.log("The Answer Should be: " + answer)
    if (a == answer) {
        document.getElementsByClassName('card-button')[0].click();
    }
     else if (b == answer){
        document.getElementsByClassName('card-button')[1].click();
    }
   else if (c == answer){
    document.getElementsByClassName('card-button')[2].click();
    }
  else  if (d == answer){
    document.getElementsByClassName('card-button')[3].click();
    } else {
      console.log("No Answer Found") 
    }
  }, 2000);
