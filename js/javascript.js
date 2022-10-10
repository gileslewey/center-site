//needed?
const bullet = document.getElementById('bullet');


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





//**********************************************************************************
// Top info change functions
//**********************************************************************************   


const counterMinusElem = document.querySelector('.counter-minus');
const counterPlusElem = document.querySelector('.counter-plus');





//arrow on and off variables
const star1on  = document.getElementById("star1on");
const star1off = document.getElementById("star1off");
const star2on  = document.getElementById("star2on");
const star2off = document.getElementById("star2off");
const star3on  = document.getElementById("star3on");
const star3off = document.getElementById("star3off");
const star4on  = document.getElementById("star4on");
const star4off = document.getElementById("star4off");
const arrowpush  = document.getElementById("arrow-forward");
const arrowpull = document.getElementById("arrow-backward");

let count = 1;


counterPlusElem.addEventListener("click",()=>{
    count++;
    let cardVariable = `cardtext${count}`;
    console.log(cardVariable);
    if (count<=1) {
      star1on.style.display = 'block';
      star1off.style.display = 'none';
      arrowpull.style.visibility = 'hidden';
      loadCard1();
    } else if (count===2) {
      star2on.style.display = 'block';
      star2off.style.display = 'none';
      star1on.style.display = 'none';
      star1off.style.display = 'block';
      arrowpull.style.visibility = 'visible';
      loadCard2();
    } else if (count===3) {
      star3on.style.display = 'block';
      star3off.style.display = 'none';
      star2on.style.display = 'none';
      star2off.style.display = 'block';
      loadCard3();
    } else if (count>=4) {
     star3on.style.display = 'none';
     star3off.style.display = 'block';
     star4on.style.display = 'block';
     star4off.style.display = 'none';
     arrowpush.style.visibility = 'hidden';
     loadCard4();
    }
});

counterMinusElem.addEventListener("click",()=>{
  count--;
  if (count<=1) {
    star1on.style.display = 'block';
    star1off.style.display = 'none';
    star2on.style.display = 'none';
    star2off.style.display = 'block';
    arrowpull.style.visibility = 'hidden';
    loadCard1();
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
    arrowpush.style.visibility = 'visible';
    loadCard3();
  } else if (count>=4) {
    star5on.style.display = 'none';
    star5off.style.display = 'block';
    star4on.style.display = 'block';
    star4off.style.display = 'none';
    loadCard4();
  } 
});



const cardText = document.getElementById('cardText');

function loadCard1() {
    cardText.innerHTML = `<p class="mb-5">The Center for Character-based Leadership is a leadership and team development consultancy serving mid-market and professional service firms.
    Our approach has been field tested for decades and relies on a powerful integration of character and competency.   By integrating mindsets and skillsets, we offer a compelling journey of
    growth and development for individuals, teams and broader collectives.</p>
  <p>We&apos;re seasoned&mdash;partnering with our clients for over 30 years&mdash;and innovative&mdash;bringing you the best of new research in the leadership field in a pragmatic, actionable form.
    Our mission is to make your life and leadership&mdash;and the lives and leadership of those around you&mdash;ever better.</p>`
  }
  
  function loadCard2() {
    cardText.innerHTML = `<h3>Elevating Capacity - Providing you a map, a location, and a guide</h3>
    <p>Our executive coaching, team development and leadership academies challenge and
    stretch you and your leaders across a progressive series of shifts that &mdash; step by step &mdash;
    increase your capacity to:</p>
    <ul><li> thrive in complexity and change</li>
    <li> scale one&#39;s leadership—becoming &quot;leaders of leaders&quot;</li>
    <li> extend trust and collaboration across an ever-growing network </li>
    <li> execute on strategy &mdash; provide direction, alignment and commitment </li>
    <li> think, act, and influence strategically </li></ul>
    <p>Each of these core leadership capacities stands on a scaffolding of character on
    which it&apos;s companion skillset is built. An honest examination of current capacity &mdash;
    strengths and limits- held parallel to our aspirations and ambitions &mdash; creates a
    compelling roadmap for change.</p>`
  } 
  
  function loadCard3() {
    cardText.innerHTML = `<h3>Character first &mdash; Setting a foundation for lasting change</h3>
    <p>Without the required character scaffolding, the new skills and know how you want to
    build into your individual, team, organizational life have no ground on which to land.
    It&apos;s like trying to install an advanced app on an old operating system. We set the
    foundation with character first &mdash; fostering character strengths that allow these new
    leadership capacities to emerge. For example, we help you learn how to:</p>
    <ul><li> develop a much more nuanced relationship to control</li>
    <li> drop our guard and share our common vulnerabilities</li>
    <li> do some serious “ego” work to reduce self-focus</li>
    <li> build the emotional courage required to do what&apos;s uncomfortable</li>
    <li> build more curiosity into our conversations</li>
    <li> give up the need to be right and embrace multiple perspectives</li></ul>
    <p>We replace our action urge with strategic patience &mdash; reactivity with intention &mdash;
    distraction with full presence. and much, much more.</p>
    `
  } 
  
  function loadCard4() {
    cardText.innerHTML = `<h3>The Extra Payback &mdash; This work enriches all parts of life</h3>  
    <p><b>Better leader .. better you.</b> We integrate the personal and professional life of the leader. We have a history of long-term partnerships with our clients. We attribute this to the way our work makes our clients lives significantly better—both personally and professionally.</p>
    
    <p>By doing the character work required for leadership advancement, the leader gains something that extends beyond the world of work.</p>  
    <p>The increased wisdom, confidence, agility that accompanies true change enriches all parts of the leader&apos;s life &mdash; as well as those in his/her orbit. The chance to reduce overwhelm, travel more lightly in the world, to orchestrate one&apos;s energy for full engagement &mdash; these are the gifts of taking the leadership journey. And our hope for your full ROI.</p>
    <p>Quite simply—Our mission is to make your life—and those around you—better</p>` 
  }


//**********************************************************************************
// bios
//**********************************************************************************   

const lilaSymbol = document.getElementById("lilaSymbol");
const lilaSymbol2 = document.getElementById("lilaBio");

//this can be refactored
lilaBlock = document.getElementById("lilaText");
lilaBlock.style.display = "none";
lilaShow = () => { if (lilaBlock.style.display == "none") {
  console.log(lilaBlock.style.display)
  lilaBlock.style.display = "block";
  console.log(lilaBlock.style.display)
  lilaSymbol.innerHTML = "<span>-</span>";
} else {
  console.log(lilaBlock.style.display)
  lilaBlock.style.display = "none";
  console.log(lilaBlock.style.display)
  lilaSymbol.innerHtml = "<span>+</span>";
  console.log(lilaSymbol)
}
};

kateriBlock = document.getElementById("kateriText");
kateriBlock.style.display = "none";
kateriShow = () => { if (kateriBlock.style.display === "none") {
  kateriBlock.style.display = "block"
  kateriSymbol = kateriPlus
} else {
  kateriBlock.style.display = "none"
  kateriSymbol = kateriMinus
}
};

tammyBlock = document.getElementById("tammyText");
tammyBlock.style.display = "none";
tammyShow = () => { if (tammyBlock.style.display === "none") {
  tammyBlock.style.display = "block"
} else {
  tammyBlock.style.display = "none"
}
};

maryBlock = document.getElementById("maryText");
maryBlock.style.display = "none";
maryShow = () => { if (maryBlock.style.display === "none") {
  maryBlock.style.display = "block"
} else {
  maryBlock.style.display = "none"
}
};

katyBlock = document.getElementById("katyText");
katyBlock.style.display = "none";
katyShow = () => { if (katyBlock.style.display === "none") {
  katyBlock.style.display = "block"
} else {
  katyBlock.style.display = "none"
}
};

sandyBlock = document.getElementById("sandyText");
sandyBlock.style.display = "none";
sandyShow = () => { if (sandyBlock.style.display === "none") {
  sandyBlock.style.display = "block"
} else {
  sandyBlock.style.display = "none"
}
};

patBlock = document.getElementById("patText");
patBlock.style.display = "none";
patShow = () => { if (patBlock.style.display === "none") {
  patBlock.style.display = "block"
} else {
  patBlock.style.display = "none"
}
};