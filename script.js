function startTime() {
    var today = new Date();
    var day = today.getDay();
   
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
 //   let s = today.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    setTimeout(startTime, 1000);


    if (hour > 04 ) {
        var greet ="GOOD MORNING!! WAKE UP !!";
    }
    if(hour >= 13 ){
        var greet ="GOOD AFTERNOON !! TAKE SOME SLEEP";
    }  if (hour >= 16 && hour < 20 ) {
        var greet ="GOOD EVENING !!";
    } if(hour >= 20){
        var greet ="GOOD NIGHT !!"
    }
    document.getElementById("greet").innerHTML = greet;
  
// if(hour >= 08 ){
//         var greet1 = "GRAB SOME HEALTHY BREAKFAST!!!";
       
//     }
// if(hour >= 13 ){
//         var greet1 = "LET'S HAVE SOME LUNCH !!";
//         box22.src = "./Assessts/Component 31 – 1.jpg";
//     }
//     if (hour >= 16) {
//         var greet1 = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
//         box22.src = "./Assessts/lunch_image.jpg";
//     }  if(hour >= 20 ){
//         var greet1 = "CLOSE YOUR EYES AND GO TO SLEEP";
//         box22.src = "./Assessts/Component 32 – 1.jpg";
//     }
//     document.getElementById("greet1").innerHTML = greet1;
//     document.getElementById("box22").innerHTML = box22;
    var prepand = (hour >= 12) ? " PM " : " AM ";
    hour = (hour >= 12) ? hour - 12 : hour;
    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Noon';
        }
        else {
            hour = 12;
            prepand = ' PM';
        }
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Midnight';
        }
        else {
            hour = 12;
            prepand = ' AM';
        }
    };
    
    document.getElementById("hrs").innerHTML = hour;
    document.getElementById("mint").innerHTML = minute;
    document.getElementById("sec").innerHTML = second;
    document.getElementById("ten").innerHTML = prepand;

   
   

    butto.addEventListener("click",function(){

        let date = new Date();
        let hours = date.getHours();
      
    
       let option1=document.getElementById("option1");
       let option2=document.getElementById("option2");
       let option3=document.getElementById("option3");
       let option4=document.getElementById("option4");
       
    
       if (parseInt(option1.value) === hours ) { 
       document.getElementById("greet1").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!"; 
       document.getElementById("box22").src="./Assessts/Component 30 – 1.jpg";
       }
       
    
       else if (parseInt(option2.value) === hours) {
       document.getElementById("greet1").innerHTML = "GLET'S HAVE SOME LUNCH !!"; 
       document.getElementById("box22").src="./Assessts/Component 31 – 1.jpg";   
       }
       
       else if (parseInt(option3.value) === hours ) {
       document.getElementById("greet1").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
       document.getElementById("box22").src="./Assessts/lunch_image.jpg";
       }
       
    
       else if (parseInt(option4.value) === hours) {
       document.getElementById("greet1").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"; 
       document.getElementById("box22").src="./Assessts/Component 32 – 1.jpg";
       }
    
        
       });




   
};
  
function checkTime(i){
    if (i < 10) {
        i = "0" + i;
    } // for add a "0 before 10 ".
    return i;
}

function passvalue() {
    var selecttext = document.getElementById("option1").options[option1.selectedIndex].text;
    localStorage.setItem("value", selecttext);
    document.getElementById("five1").innerHTML = localStorage.getItem("value");
   
    
    

    var selecttext1 = document.getElementById("option2").options[option2.selectedIndex].text;
    localStorage.setItem("value1", selecttext1);
    document.getElementById("five2").innerHTML = localStorage.getItem("value1");
    

    var selecttext2 = document.getElementById("option3").options[option3.selectedIndex].text;
    localStorage.setItem("value2", selecttext2);
    document.getElementById("five3").innerHTML = localStorage.getItem("value2");

    var selecttext3 = document.getElementById("option4").options[option4.selectedIndex].text;
    localStorage.setItem("value3", selecttext3);
    document.getElementById("five4").innerHTML = localStorage.getItem("value3");

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}
    


