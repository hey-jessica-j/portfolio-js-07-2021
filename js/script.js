// ------------------------------
//           Document Elements
// ------------------------------

let matrix = document.getElementById("matrix");
let changingText = document.querySelector(".changing-text");
let aboutSection = document.getElementById("about-section");
let resumeSection = document.getElementById("resume-section");
let resumeShowButton = document.getElementById("resumeContentButton");
let resumeContentSection = document.querySelector(".resume-content");
let workSection = document.getElementById("work-section");

// ------------------------------
//          Data Sets - that can be changed
// ------------------------------
// General
let personalInfo = {
  name:"Jessica Jennings",
  city: "Baltimore",
  state: "Maryland",
  email: "hellojessicajennings@gmail.com",
  github: "hey-jessica-j",
  linkedin: "",
  codePen: "",
  codeSandbox: ""
};

//Main Document Data
let aboutData = {
  color: "#FF3366",
  title: "About",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
  image: ""
};

let schoolData = [
    {school: "Skillcrush", date: "10/2020 - Present", course: "<span>Front end Development and Python</span>"},
    {school: "University of Maryland University College", date: "04/2018 - 05/2020", course: "Masters in Cybersecurity Technology"},
    {school: "Notre Dame of Maryland University", date: "08/2011 - 05/2015", course: "Bachelors of Mathematics"}
];

let  workData = [
  {title:"Morgan Stanley", date:"07/2017 - Present",
  description: ["Started a <span>CTF (Capture the Flag) beginners blog</span> via the Baltimore Women in Technology group with other CTF enthusiasts.", "Reviewed client verification documents quickly while maintaining an average of 99% quality.", "Conduct reports for managers to audit accounts and assign validation points. <span>Worked with branches</span> to understand their needs and submit those needs to the correct parties to get solutions."
    ]}
];

let  languagesData = [
    {language: "HTML5", color:"#FF3366", percentage: 85},
    {language: "CSS3", color: "#D68FD6", percentage: 80},
    {language: "Javascript", color:"#FF3366", percentage: 75},
    {language: "React", color:"#00ff00", percentage: 40},
    {language: "Python", color:"#388697",  percentage: 69},
    {language: "C++", color:"#388697", percentage: 30}
];

let skillData = ["Linux", "Windows", "Github", "REST API", "JSON", "Burpsuite", "Dir BUster", "WIreshark", "MS Office", "Photoshop", "Adobe Illustator", "Teamplayer", "Communication", "Determination", "Self-starter", "Critical-Thinker", "Detail-Oriented"];

let myWorkData = {}

//Matrix Background

//Typing Function
let delay = 150;
let carousel = [
  {text: "Web developer.", color: "#FF3366", fontFamily: "'Architects Daughter', cursive"},
  {text: "Web Security Enthusiast.", color:"#D68FD6", fontFamily: "'Orbitron', sans-serif"},
  {text: "Math tutor.", color:"#388697", fontFamily: "'Yomogi', cursive"}
];

// ------------------------------
//            Helper Funtions
// ------------------------------

//Creates a time out function for delays
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

//Hides the canvas on mobile phones
function mobilePhone() {
  if (screen.width < 768) {
    matrix.classList.add("hide");
    console.log(screen.width);
  }
  else {
    matrix.classList.remove("hide")
  }
};
mobilePhone();

//updates Elements innerText
function updateText(element, text) {
  element.innerText = text;
}

//Click to reveal a Section
function toggleShow(element) {
  if (element.classList.contains("hide") == true) {
    element.classList.remove("hide")
  }
  else {
    element.classList.add("hide")
  }
};


// ----------------------------------------------------------------
// ----------------------------------------------------------------
//                       Document functions
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// ------------------------------
//      Matrix Background
// ------------------------------

const s = window.screen;
const w = (matrix.width = s.width);
//matrix.height = matrix.height /1.8;
const h = (matrix.height = s.height);
const ctx = matrix.getContext("2d");


const p = Array(Math.floor(w / 10) + 1).fill(0);
const random = (items) => items[Math.floor(Math.random() * items.length)];
const hex = "0123456789ABCDEFGHIJ".split("");

setInterval(() => {
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#00ff00";
  p.map((v, i) => {
    ctx.fillText(random(hex), i * 10, v);
    p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
  });
}, 1000 / 30);

// -------------------------------
//      Typing Effect
// -------------------------------


const typeSentence = async function (text, element) {
  const letters = text.split("");
  let i = 0;
  while (i < letters.length) {
    await sleep(delay);
    element.append(letters[i]);
    //element.append(letters[i]);
    i++
  }
  return;
};
const deleteSentence = async function (element) {
  const text = element.innerText;
  const letters = text.split("");
  let i = 0;
  while (letters.length > 0) {
    await sleep(delay);
    letters.pop();
    element.innerText = letters.join("");
  }
};
const sentenceCarousel = async function (carouselList, element) {
  let i = 0;
  while(i === i) {
    let color = carouselList[i].color;
    let text = carouselList[i].text;
    let fontFamily = carouselList[i].fontFamily;
    element.style.color = color;
    element.style.fontFamily = fontFamily;
    await typeSentence(text, element);
    await sleep(1500);
    await deleteSentence(element);
    await sleep(500);
    i++
    if(i >= carouselList.length) {i = 0;}
  }
};

sentenceCarousel(carousel, changingText);

// -------------------------------
//
// -------------------------------





// -------------------------------
//
// -------------------------------


// -------------------------------
//             Resume Section
// -------------------------------

// Adds school info to document
function addSchoolResumeInfo(schoolData, element) {
  let i=0;
  let title = document.createElement("div");
  let hr = document.createElement("hr");
  title.classList.add("school-title");
  title.innerHTML = '<h2 class="underline">Education</h2>';
  element.append(title);
  element.append(hr);
  while ( i < schoolData.length) {
    let article = document.createElement("article");
    article.innerHTML =
    `
    <div class="school-article hundred">
      <div class="one-half">
        <p>${schoolData[i].course}</p>
      </div>
      <div class="one-half center">
        <p> ${schoolData[i].date}</p>
        <p>${schoolData[i].school} </p>
      </div>
    </div>
    <hr>
    `;
  element.append(article);
  i++;
  };
};
addSchoolResumeInfo(schoolData, resumeContentSection);



// Adds work info to document
function addWorkResumeInfo(workData, element) {
  let i=0;
  let j=0;
  let title = document.createElement("div");
  title.classList.add("job-title");
  title.innerHTML = '<h2 class="underline">Work Eperience</h2>';
  element.append(title);

  while ( i < workData.length) {
    let li = "";
    let des = workData[i].description;
    function addLi(value) {li = li + "<li>" + value + "</li>";};
    des.forEach(addLi);
    let article = document.createElement("article");
    article.innerHTML =
    `
     <div class="job-article hundred">
        <div class="center col one-fourth ">
         <p>${workData[i].title} </p>
         <p> ${workData[i].date}</p>
        </div>
        <div class="col three-fourth">
          <ul>${li}</ul>
        </div>
      </div>
    `;
  element.append(article);
  i++;
  };
};
addWorkResumeInfo(workData, resumeContentSection);



//Adds skill info to document

function addLaguagesResumeInfo(languagesData, element) {
  let i=0;
  let title = document.createElement("div");
  title.classList.add("job-title");
  title.innerHTML = '<h2 class="underline">Languages</h2>';
  element.append(title);
  while ( i < languagesData.length) {
    let article = document.createElement("article");
    let language = languagesData[i].language;
    let percentage = languagesData[i].percentage;
    let color = languagesData[i].color;
    article.innerHTML =
    `
    <div class="language-article">
      <div style="width: ${percentage}%; background-color: ${color} ">
        <p class="language-text">${language}</p>
        </div>
    </div>
    `;
  element.append(article);
  i++;
  };
};

addLaguagesResumeInfo(languagesData, resumeContentSection);



//Shows the resume info on Click/hides on hide
function toggleShowResume(element) {
  if (element.classList.contains("hide") == true) {
    text = "Hide Resume";
    element.classList.remove("hide");
  }
  else {
    text = "Show Resume";
    element.classList.add("hide");
  }
  updateText(resumeShowButton, text)
};
