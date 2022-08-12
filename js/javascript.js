const cardText = document.getElementById('cardText');
const bullet = document.getElementById('bullet');

// function changeText() {
//   document.getElementById('cardText').innerHTML="<p>We don’t play it safe.  We do create a safe environment that allows you or your team to take the risks required to grow.    We start with changes in you.  How do you need to change to go to the next level?  To live and lead on a bigger stage?   The learning and conversation here  is personal, powerful and transformative.  New skills and knowledge are required; but job one is to create the required mindsets for the skillsets to land.</p>";
//   document.getElementById('bullet').innerHTML="<h1 style='font-size:2.5rem; color:lightgrey;'>&bull; <span style='color:black'> &nbsp; &nbsp; &bull; </span> &nbsp; &nbsp; &bull; &nbsp; &nbsp; &bull; &nbsp; &nbsp; &bull; &nbsp; &nbsp;</h1>";
// }

function overGreen(){
const moreColor = document.getElementById('greenBox');
moreColor.style.border="2px solid white";
moreColor.style.backgroundColor="rgb(93, 151, 49)";
moreColor.style.color="white";
}

function outGreen(){
const moreColor = document.getElementById('greenBox');
moreColor.style.border="solid white";
moreColor.style.backgroundColor="white";
moreColor.style.color="black";
}

function overMoreGreen() {
document.getElementById("greenBackground").src='images/greenoption3.png';
console.log('ok');
}

function overBlue(){
const moreColor = document.getElementById('blueBox');
moreColor.style.border="2px solid white";
moreColor.style.backgroundColor="rgb(1, 61, 121)";
moreColor.style.color="white";
}

function outBlue(){
const moreColor = document.getElementById('blueBox');
moreColor.style.border="solid white";
moreColor.style.backgroundColor="white";
moreColor.style.color="black";
}

function overMoreBlue() {
document.getElementById("blueBackground").src='images/blueoption4.png';
console.log('ok');
}


function overPurple(){
const moreColor = document.getElementById('purpleBox');
moreColor.style.border="2px solid white";
moreColor.style.backgroundColor="rgb(135, 33, 117)";
moreColor.style.color="white";
}

function outPurple(){
const moreColor = document.getElementById('purpleBox');
moreColor.style.border="solid white";
moreColor.style.backgroundColor="white";
moreColor.style.color="black";
}

function overMorePurple() {
document.getElementById("purpleBackground").src='images/purpleoption2.png';
}

function overRed(){
const moreColor = document.getElementById('redBox');
moreColor.style.border="2px solid white";
moreColor.style.backgroundColor="rgb(175, 4, 62)";
moreColor.style.color="white";
console.log('red');
}

function outRed(){
const moreColor = document.getElementById('redBox');
moreColor.style.border="solid white";
moreColor.style.backgroundColor="white";
moreColor.style.color="black";
}

function overMoreRed() {
document.getElementById("redBackground").src='images/redoption.svg';
}


let count = 1;
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

//arrow on and off variables
let star1on  = document.getElementById("star1on");
let star1off = document.getElementById("star1off");
let star2on  = document.getElementById("star2on");
let star2off = document.getElementById("star2off");
let star3on  = document.getElementById("star3on");
let star3off = document.getElementById("star3off");
let star4on  = document.getElementById("star4on");
let star4off = document.getElementById("star4off");
let star5on  = document.getElementById("star5on");
let star5off = document.getElementById("star5off");
let star6on  = document.getElementById("star6on");
let star6off = document.getElementById("star6off");
let arrowpush  = document.getElementById("arrow-forward");
let arrowpull = document.getElementById("arrow-backward");



counterPlusElem.addEventListener("click",()=>{
    count++;
    if (count===1) {
      star1on.style.display = 'block';
      star1off.style.display = 'none';
      arrowpull.style.visibility = 'hidden';
      loadCard();
    } else if (count===2) {
      star1on.style.display = 'none';
      star1off.style.display = 'block';
      star2on.style.display = 'block';
      star2off.style.display = 'none';
      arrowpull.style.visibility = 'visible';
      loadCard();
    } else if (count===3) {
      star2on.style.display = 'none';
      star2off.style.display = 'block';
      star3on.style.display = 'block';
      star3off.style.display = 'none';
      loadCard();
    } else if (count===4) {
      star3on.style.display = 'none';
      star3off.style.display = 'block';
      star4on.style.display = 'block';
      star4off.style.display = 'none';
      loadCard();
    } else if (count===5) {
      star4on.style.display = 'none';
      star4off.style.display = 'block';
      star5on.style.display = 'block';
      star5off.style.display = 'none';
      loadCard();
    } else if (count===6) {
      star5on.style.display = 'none';
      star5off.style.display = 'block';
      star6on.style.display = 'block';
      star6off.style.display = 'none';
      arrowpush.style.visibility = 'hidden';
      loadCard();
    }
});



counterMinusElem.addEventListener("click",()=>{
    count--;
    if (count===1) {
      star1on.style.display = 'block';
      star1off.style.display = 'none';
      star2on.style.display = 'none';
      star2off.style.display = 'block';
      arrowpull.style.visibility = 'hidden';
      loadCard();
    } else if (count===2) {
      star3on.style.display = 'none';
      star3off.style.display = 'block';
      star2on.style.display = 'block';
      star2off.style.display = 'none';
      loadCard2();
    } else if (count===3) {
      star4on.style.display = 'none';
      star4off.style.display = 'block';
      star3on.style.display = 'block';
      star3off.style.display = 'none';
      loadCard3();
    } else if (count===4) {
      star5on.style.display = 'none';
      star5off.style.display = 'block';
      star4on.style.display = 'block';
      star4off.style.display = 'none';
      loadCard4();
    } else if (count===5) {
      star6on.style.display = 'none';
      star6off.style.display = 'block';
      star5on.style.display = 'block';
      star5off.style.display = 'none';
      arrowpush.style.visibility = 'visible';
      loadCard5();
    } else if (count===6) {
      star5on.style.display = 'none';
      star5off.style.display = 'block';
      star6on.style.display = 'block';
      star6off.style.visibility = 'visible';
      loadCard6();
    }
});



   function loadCard() {
     let xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("cardText").innerHTML = xhttp.responseText;
        }
     };
     xhttp.open("GET", "cardtext" + count + ".txt", true);
     xhttp.send();
    }
