// ------------------------------
//           Document Elements
// ------------------------------

const matrix = document.getElementById("matrix");
const changingText = document.querySelector(".changing-text");
const aboutSection = document.getElementById("about-section");
const resumeSection = document.getElementById("resume-section");
const resumeShowButton = document.getElementById("resumeContentButton");
const resumeContentSection = document.querySelector(".resume-content");
const workSection = document.getElementById("work-section");
const workContentElement = document.querySelector(".work-content");
const workPieceElement = document.querySelector(".work-piece");
const workPctureElement = document.querySelectorAll(".work-picture");
const contactSection = document.getElementById("contact-section");

// -------------------------------------------------------
//          Data Sets - that can be changed
// -------------------------------------------------------
// General
let personalInfoData = {
  name:"Jessica Jennings",
  city: "Baltimore",
  state: "Maryland",
};

let socialMediaData = {
  email: {link: "hellojessicajennings@gmail.com", img:"email-icon.png"},
  github: {link: "hey-jessica-j", img: "github-icon.png"},
  linkedIn: {link: "jessica-jennings-48a64baa", img: "linkedin-icon.png"},
  replit: {link: "@heyJessicaJ", img: "replit-icon.png"},
  codeSandbox: {link: "hey-jessica-j", img: "codesandbox-logo.png"}
};

//Main Document Data
let aboutData = {
  description: ["Math Nerd turned Web developer and Security Specialist at your service!",
                "Shortly after completing my bachelors in mathematics, I asked myself, ok what’s next? I found myself exploring the world of programming. I dabbled in the world of web development and built a few beginner websites and applications. Somehow, I ended up on a “capture the flag” website and the term ethical Hacker became ingrained in my head. Wanting to learn more I decided to go for my masters in the field.",
              "After earning my masters in Cybersecurity Technology I again asked what’s next? I ended up back in programming, so I enrolled in a bootcamp. I learned how to make (better) web applications, both front-end and some back-end and design them. But I was still curious about the security aspect of the web application. I decided to pursue web applications and their security as my concentration in the field and have deemed myself a web security app guru."
              ],
  image: "img/headshot.png"
};

let schoolData = [
    {school: "Skillcrush", date: "10/2020 - Present", course: '<span>Front end Development and Python</span>'},
    {school: "University of Maryland University College", date: "04/2018 - 05/2020", course: "Masters in Cybersecurity Technology"},
    {school: "Notre Dame of Maryland University", date: "08/2011 - 05/2015", course: "Bachelors of Mathematics"}
];

let  workData = [
  {title:"Morgan Stanley", date:"07/2017 - Present",
  description: ['Started a <span>CTF (Capture the Flag) beginners blog</span> via the Baltimore Women in Technology group with other CTF enthusiasts.', "Reviewed client verification documents quickly while maintaining an average of 99% quality.", "Conduct reports for managers to audit accounts and assign validation points.", "<span>Worked with branches</span> to understand their needs and submit those needs to the correct parties to get solutions."
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

let skillData = ["Linux", "Windows", '<span>Github</span>', "Version Control", "REST API", "JSON",
                "Burpsuite", "Dir Buster", "Wireshark", "MS Office", "Photoshop", "Adobe Illustator",
                "Teamplayer", "Communication", "Determination", '<span>Self-starter</span>', "Self-Taught",
                "Critical-Thinker", "Detail-Oriented", "<span>Ready To Learn</span>"];


let projectData = [
  {project: "Unplugged Landing Page", languages: "HTTP CSS", img: "",
    githubLink: "https://github.com/hey-jessica-j/unplugged-sample-project", websiteLink: "https://hey-jessica-j.github.io/unplugged-sample-project/",
    description: ""},
  {project: "Guess The Word", languages: "HTTP CSS Javacript", img: "Guess-the-word.png",
    githubLink: "https://github.com/hey-jessica-j/guess-the-word", websiteLink: "https://hey-jessica-j.github.io/guess-the-word/",
    description: ""},
  {project: "Color Changer", languages: "HTTP CSS Javascript", img: "color-changer.png",
    githubLink: "https://github.com/hey-jessica-j/buttons-revamped", websiteLink: "https://hey-jessica-j.github.io/buttons-revamped/",
    description: ""},
  {project: "LOL Cat Clock", languages: "HTTP CSS Javascript", img: "lol-clock.png",
    githubLink: "https://github.com/hey-jessica-j/lolcatclock", websiteLink: "https://hey-jessica-j.github.io/lolcatclock/",
    description: ""},
  {project: "Hangman App", languages: "Python", img: "hangman.png",
    githubLink: "", websiteLink: "https://replit.com/@heyJessicaJ/Hangman-app",
    description: ""},
  {project: "Github Reository", languages: "HTTP CSS Javascript", img: "",
    githubLink: "https://github.com/hey-jessica-j/github-repo-gallery", websiteLink: "https://hey-jessica-j.github.io/github-repo-gallery/",
    description: ""}
];

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
//             About Section
// -------------------------------

//
//

function addAboutInfo(aboutData, element) {
  let p = "";
  let paragraph = aboutData.description;
  function addPara(value) {p = p + "<p>" + value + "</p>";};
  paragraph.forEach(addPara);
  let about = document.createElement("div");
  about.innerHTML =
    `
    <div class="about-content hundred center">
      <div class= "about-picture-section right">
        <img src= "${aboutData.image}" />
      </div>
      <div class="about-text ">
        ${p}
      </div>
    </div>

    `;
    element.append(about);
};
addAboutInfo(aboutData, aboutSection);

// -------------------------------
//             Resume Section
// -------------------------------

// Adds school info to document
function addSchoolResumeInfo(schoolData, element) {
  let i=0;
  let title = document.createElement("div");
  let hr = document.createElement("hr");
  title.classList.add("resume-sub-title");
  title.innerHTML = '<h2 class="underline">Education</h2>';
  element.append(title);
  element.append(hr);
  while ( i < schoolData.length) {
    let article = document.createElement("article");
    article.innerHTML =
    `
    <div class="school-article hundred">
      <div class="school-data one-half right">
        <p>${schoolData[i].course}</p>
      </div>
      <div class="school-data one-half left">
        <p> ${schoolData[i].date}</p>
        <p class="school-name">${schoolData[i].school} </p>
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
  title.classList.add("resume-sub-title");
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



//Adds language info to document

function addLaguagesResumeInfo(languagesData, element) {
  let i=0;
  let title = document.createElement("div");
  title.classList.add("resume-sub-title");
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


//Adds skills data to document

function addSkillsResumeInfo(skillData, element) {
  let title = document.createElement("div");
  title.classList.add("resume-sub-title");
  title.innerHTML = '<h2 class="underline">Skills</h2>';
  element.append(title);
  let div = document.createElement("div");
  div.classList.add("skills-article")
  let article = "";
  function addSkill(value) {article = article + "<article> <p>" + value + " </p> </article>"};
  skillData.forEach(addSkill);
  div.innerHTML = `${article}`
  element.append(div);
};

addSkillsResumeInfo(skillData, resumeContentSection);


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


// -------------------------------
//             My Work Section
// -------------------------------

function addWorkDataInfo (projectData, element) {
  let i=0;
  let div = document.createElement("div");
  div.classList.add("work-content");
  while ( i < projectData.length) {
    let article = document.createElement("article");
    article.classList.add("work-piece");
    article.innerHTML =
      `
        <h3>${projectData[i].project}</h3>
        <img class="work-picture" src = "./img/${projectData[i].img}" />
        <p class="work-text hide">Languages: ${projectData[i].languages}</p>
        <p class="work-text hide">${projectData[i].description}</p>
        <button class="get-code hide" onclick="window.location.href ='${projectData[i].githubLink}'">See the Code</button>
        <button class="get-website hide" onclick="window.location.href ='${projectData[i].websiteLink}'">View the Live Site</button>
      `
      div.append(article);
      i++;
    }
    element.append(div);
};

addWorkDataInfo(projectData, workSection);



workPctureElement.addEventListener("mouseover", function(event) {


});


///Want to mak it Search by languages
//Myabe even just link to gitub repo projet and have my eatured projects on my site4

// -------------------------------
//             Contact Section
// -------------------------------


function addContactIconInfo (socialMediaData, element) {
  let div = document.createElement("div");
  div.classList.add("contact-content");
  div.innerHTML =
    `
    <a href = "mailto:${socialMediaData.email.link}" ><img src="./img/${socialMediaData.email.img}"></a>
    <a href= "https://www.github.com/${socialMediaData.github.link}" target="_blank" ><img src="./img/${socialMediaData.github.img}"></a>
    <a href = "https://www.linkedin.com/in/${socialMediaData.linkedIn.link}" target="_blank" ><img src="./img/${socialMediaData.linkedIn.img}"></a>
    <a href="https://repl.it/${socialMediaData.replit.link}" target="_blank" ><img src="./img/${socialMediaData.replit.img}"></a>
    <a href="https://www.codesandbox.io/u/${socialMediaData.codeSandbox.link}" target="_blank" ><img src="./img/${socialMediaData.codeSandbox.img}"></a>

    `
    element.append(div);
};

addContactIconInfo(socialMediaData, contactSection);
