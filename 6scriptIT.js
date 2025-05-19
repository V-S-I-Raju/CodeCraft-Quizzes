let quizData = [
  {
    /*1*/
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"],
    correct: "Hyper Text Markup Language",
  },
  {
    /*2*/
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correct: "Cascading Style Sheets",
  },
  {
    /*3*/
    question: "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "font-color", "color", "text-style"],
    correct: "color",
  },
  {
    /*4*/
    question: "Which CSS property is used to change the font size of text?",
    options: ["font-style", "text-size", "font-size", "text-font"],
    correct: "font-size",
  },
  {
    /*5*/
    question: "Which CSS property is used to add space between lines of text?",
    options: ["text-spacing", "line-height", "font-spacing", "letter-spacing"],
    correct: "line-height",
  },
  {
    /*6*/
    question: "What is JavaScript?",
    options: ["A markup language", "A styling language", "A programming language", "A database management system"],
    correct: "A programming language",
  },
  {
    /*7*/
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["variable", "v", "let", "int"],
    correct: "let",
  },
  {
    /*8*/
    question: "Which JavaScript function is used to display a popup box?",
    options: ["alert()", "popup()", "message()", "show()"],
    correct: "alert()",
  },
  {
    /*9*/
    question: "What is the DOM in web development?",
    options: ["Document Object Model", "Data Object Model", "Design Object Model", "Digital Object Model"],
    correct: "Document Object Model",
  },
  {
    /*10*/
    question: "What is a web server?",
    options: ["A software application that serves web pages", "A hardware device that connects computers to the internet", "A programming language for web development", "A tool for creating websites"],
    correct: "A software application that serves web pages",
  },
  {
    /*11*/
    question: "What is a web browser?",
    options: ["A software application for accessing websites", "A hardware device that stores web pages", "A programming language for web development", "A tool for creating websites"],
    correct: "A software application for accessing websites",
  },
  {
    /*12*/
    question: "What does URL stand for?",
    options: ["Uniform Resource Locator", "Universal Resource Locator", "Unified Resource Locator", "Unidentified Resource Locator"],
    correct: "Uniform Resource Locator",
  },
  {
    /*13*/
    question: "What is the purpose of HTTP?",
    options: ["To transfer files between computers", "To display web pages in a browser", "To define the structure of a web page", "To style the content of a web page"],
    correct: "To display web pages in a browser",
  },
  {
    /*14*/
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Advanced Processing Interface", "Application Process Integration", "Advanced Program Instruction"],
    correct: "Application Programming Interface",
  },
  {
    /*15*/
    question: "What is JSON?",
    options: ["A programming language", "A styling language", "A data format", "A database system"],
    correct: "A data format",
  },
  {
    /*16*/
    question: "What is XML?",
    options: ["A programming language", "A styling language", "A markup language", "A database system"],
    correct: "A markup language",
  },
  {
    /*17*/
    question: "What is a framework in web development?",
    options: ["A hardware component", "A set of tools and libraries that provide a basic structure for building applications", "A programming language", "A database management system"],
    correct: "A set of tools and libraries that provide a basic structure for building applications",
  },
  {
    /*18*/
    question: "Which of the following is a popular JavaScript framework?",
    options: ["Django", "Ruby on Rails", "React", "Spring"],
    correct: "React",
  },
  {
    /*19*/
    question: "What is responsive web design?",
    options: ["Websites that load quickly", "Websites that adapt to different screen sizes", "Websites with a lot of animations", "Websites that use only text"],
    correct: "Websites that adapt to different screen sizes",
  },
  {
    /*20*/
    question: "What is a cookie?",
    options: ["A small text file stored on a user's computer", "A type of virus", "A programming language", "A database system"],
    correct: "A small text file stored on a user's computer",
  },
  {
    /*21*/
    question: "What is a session in web development?",
    options: ["A period of time a user interacts with a website", "A type of database query", "A way to style web pages", "A method for creating animations"],
    correct: "A period of time a user interacts with a website",
  },
  {
    /*22*/
    question: "What is a web form?",
    options: ["A way to display images on a website", "A way for users to input data on a website", "A method for creating animations", "A type of database table"],
    correct: "A way for users to input data on a website",
  },
  {
    /*23*/
    question: "What is server-side scripting?",
    options: ["Code that runs in the web browser", "Code that runs on the web server", "Code that defines the structure of a web page", "Code that styles the content of a web page"],
    correct: "Code that runs on the web server",
  },
  {
    /*24*/
    question: "Which of the following is a server-side scripting language?",
    options: ["JavaScript", "CSS", "HTML", "PHP"],
    correct: "PHP",
  },
  {
    /*25*/
    question: "What is a database?",
    options: ["A program that displays web pages", "An organized collection of data", "A language for styling web pages", "A tool for creating animations"],
    correct: "An organized collection of data",
  },
  {
    /*26*/
    question: "Which of the following is a popular database management system?",
    options: ["React", "Angular", "MySQL", "Node.js"],
    correct: "MySQL",
  },
  {
    /*27*/
    question: "What is SQL?",
    options: ["A programming language", "A styling language", "A query language", "A database system"],
    correct: "A query language",
  },
  {
    /*28*/
    question: "What is a web service?",
    options: ["A software application that serves web pages", "A method for client and server to communicate over the web", "A programming language for web development", "A tool for creating websites"],
    correct: "A method for client and server to communicate over the web",
  },
  {
    /*29*/
    question: "What is REST?",
    options: ["Representational State Transfer", "Real-time State Transfer", "Resource Exchange State Transfer", "Reliable State Transfer"],
    correct: "Representational State Transfer",
  },
    {
        /*30*/
        question: "What is a single-page application (SPA)?",
        options: ["An application that consists of only one HTML page.", "An application that loads all content on the server-side.", "An application with multiple HTML pages.", "An application that uses only CSS for styling."],
        correct: "An application that consists of only one HTML page.",
    },
    {
        /*31*/
        question: "What is Node.js?",
        options: ["A JavaScript framework.", "A JavaScript runtime environment.", "A database management system.", "A web server."],
        correct: "A JavaScript runtime environment.",
    },
    {
        /*32*/
        question: "What is npm?",
        options: ["Node Package Manager", "Node Project Manager", "New Package Manager", "Node Process Manager"],
        correct: "Node Package Manager",
    },
    {
        /*33*/
        question: "What is version control?",
        options: ["A method for creating animations.", "A system that records changes to a file or set of files over time.", "A way to style web pages.", "A technique for optimizing website performance."],
        correct: "A system that records changes to a file or set of files over time.",
    },
    {
        /*34*/
        question: "Which of the following is a popular version control system?",
        options: ["MySQL", "PHP", "Git", "JSON"],
        correct: "Git",
    },
    {
        /*35*/
        question: "What is a CDN?",
        options: ["Content Delivery Network", "Content Design Network", "Cascading Delivery Network", "Cascading Design Network"],
        correct: "Content Delivery Network",
    },
    {
        /*36*/
        question: "What is web accessibility?",
        options: ["Making websites visually appealing.", "Making websites usable by people with disabilities.", "Making websites load quickly.", "Making websites secure."],
        correct: "Making websites usable by people with disabilities.",
    },
    {
        /*37*/
        question: "What are web sockets?",
        options: ["A new type of web browser.", "A communication protocol that provides full-duplex communication channels over a single TCP connection.", "A method for styling web pages.", "A technique for creating animations."],
        correct: "A communication protocol that provides full-duplex communication channels over a single TCP connection.",
    },
    {
        /*38*/
        question: "What is web security?",
        options: ["Making websites visually appealing.", "Protecting websites from unauthorized access and attacks.", "Making websites load quickly.", "Making websites accessible."],
        correct: "Protecting websites from unauthorized access and attacks.",
    },
    {
        /*39*/
        question: "What is an XSS attack?",
        options: ["Cross-Site Scripting", "Extreme Style Sheet", "Extended Server Scripting", "External Style Source"],
        correct: "Cross-Site Scripting",
    },
    {
        /*40*/
        question: "What is a SQL injection attack?",
        options: ["A type of CSS vulnerability.", "A type of JavaScript vulnerability.", "An attack that exploits security vulnerabilities in a database.", "An attack that targets the web server."],
        correct: "An attack that exploits security vulnerabilities in a database.",
    },
    {
        /*41*/
        question: "What is authentication?",
        options: ["Verifying the identity of a user.", "Styling a web page.", "Creating a database query.", "Making a website responsive."],
        correct: "Verifying the identity of a user.",
    },
    {
        /*42*/
        question: "What is authorization?",
        options: ["Verifying the identity of a user.", "Determining what a user is allowed to do.", "Creating a database query.", "Making a website accessible."],
        correct: "Determining what a user is allowed to do.",
    },
    {
        /*43*/
        question: "What is HTTPS?",
        options: ["Hyper Text Transfer Protocol Secure", "High Text Transfer Protocol Secure", "Hyper Text Transfer Process Secure", "High Text Transfer Process Secure"],
        correct: "Hyper Text Transfer Protocol Secure",
    },
    {
        /*44*/
        question: "What is SEO?",
        options: ["Search Engine Optimization", "Style Engine Optimization", "Server Engine Optimization", "Script Engine Optimization"],
        correct: "Search Engine Optimization",
    },
    {
        /*45*/
        question: "What is a meta tag?",
        options: ["An HTML tag that provides metadata about an HTML document.", "A CSS tag for styling text.", "A JavaScript tag for creating animations.", "A SQL tag for querying databases."],
        correct: "An HTML tag that provides metadata about an HTML document.",
    },
    {
        /*46*/
        question: "What is web hosting?",
        options: ["Storing website files on a server.", "Creating web pages.", "Designing website layouts.", "Securing web applications."],
        correct: "Storing website files on a server.",
    },
    {
        /*47*/
        question: "What is FTP?",
        options: ["File Transfer Protocol", "File Transform Protocol", "Fast Transfer Protocol", "Fast Transform Protocol"],
        correct: "File Transfer Protocol",
    },
    {
        /*48*/
        question: "What is a CMS?",
        options: ["Content Management System", "Content Manipulation System", "Cascading Management System", "Cascading Manipulation System"],
        correct: "Content Management System",
    },
    {
        /*49*/
        question: "Which of the following is a popular CMS?",
        options: ["React", "Angular", "WordPress", "Node.js"],
        correct: "WordPress",
    },
    {
        /*50*/
        question: "What is a web API?",
        options: ["A programming language for web development.", "A way for different software applications to communicate with each other over the web.", "A tool for creating websites.", "A database management system."],
        correct: "A way for different software applications to communicate with each other over the web.",
    },
    {
        /*51*/
        question: "What is GraphQL?",
        options: ["A query language for APIs.", "A styling language for web pages.", "A programming language for web development.", "A database management system."],
        correct: "A query language for APIs.",
    },
    {
        /*52*/
        question: "What is serverless computing?",
        options: ["Running code on a physical server.", "Running code without managing servers.", "Running code only on the client-side.", "Running code only for styling web pages."],
        correct: "Running code without managing servers.",
    },
    {
        /*53*/
        question: "What is a microservice?",
        options: ["A small part of a web page.", "An architectural approach that structures an application as a collection of small, autonomous services.", "A small database.", "A small web server."],
        correct: "An architectural approach that structures an application as a collection of small, autonomous services.",
    },
    {
        /*54*/
        question: "What is CI/CD?",
        options: ["Continuous Integration/Continuous Delivery", "Creative Integration/Creative Delivery", "Cascading Integration/Cascading Delivery", "Client Integration/Client Delivery"],
        correct: "Continuous Integration/Continuous Delivery",
    },
];



const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn");
const quizResult = document.querySelector(".quiz-result");
const startBtnContainer = document.querySelector(".start-btn-container");
const startBtn = document.querySelector(".start-btn-container .start-btn");

let questionNumber = 0;
let score = 0;
const MAX_QUESTIONS = 30; //For 30 Questions
let timerInterval;

const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

quizData = shuffleArray(quizData);

const resetLocalStorage = () => {
  for (i = 0; i < MAX_QUESTIONS; i++) {
    localStorage.removeItem(`userAnswer_${i}`);
  }
};

resetLocalStorage();

const checkAnswer = (e) => {
  let userAnswer = e.target.textContent;
  if (userAnswer === quizData[questionNumber].correct) {
    score++;
    e.target.classList.add("correct");
  } else {
    e.target.classList.add("incorrect");
  }

  localStorage.setItem(`userAnswer_${questionNumber}`, userAnswer);

  let allOptions = document.querySelectorAll(".quiz-container .option");
  allOptions.forEach((o) => {
    o.classList.add("disabled");
  });
};

const createQuestion = () => {
  clearInterval(timerInterval);

  let secondsLeft = 9;
  const timerDisplay = document.querySelector(".quiz-container .timer");
  timerDisplay.classList.remove("danger");

  timerDisplay.textContent = `Time Left: 10 seconds`;

  timerInterval = setInterval(() => {
    timerDisplay.textContent = `Time Left: ${secondsLeft
      .toString()
      .padStart(2, "0")} seconds`;
    secondsLeft--;

    if (secondsLeft < 3) {
      timerDisplay.classList.add("danger");
    }

    if (secondsLeft < 0) {
      clearInterval(timerInterval);
      displayNextQuestion();
    }
  }, 1000);

  options.innerHTML = "";
  question.innerHTML = `<span class='question-number'>${
    questionNumber + 1
  }/${MAX_QUESTIONS}</span>${quizData[questionNumber].question}`;

  const shuffledOptions = shuffleArray(quizData[questionNumber].options);

  shuffledOptions.forEach((o) => {
    const option = document.createElement("button");
    option.classList.add("option");
    option.innerHTML = o;
    option.addEventListener("click", (e) => {
      checkAnswer(e);
    });
    options.appendChild(option);
  });
};

const retakeQuiz = () => {
  questionNumber = 0;
  score = 0;
  quizData = shuffleArray(quizData);
  resetLocalStorage();

  createQuestion();
  quizResult.style.display = "none";
  quizContainer.style.display = "block";
};

const displayQuizResult = () => {
  quizResult.style.display = "flex";
  quizContainer.style.display = "none";
  quizResult.innerHTML = "";

  const resultHeading = document.createElement("h2");
  resultHeading.innerHTML = `You have scored ${score} out of ${MAX_QUESTIONS}.`;
  quizResult.appendChild(resultHeading);

  for (let i = 0; i < MAX_QUESTIONS; i++) {
    const resultItem = document.createElement("div");
    resultItem.classList.add("question-container");

    const userAnswer = localStorage.getItem(`userAnswer_${i}`);
    const correctAnswer = quizData[i].correct;

    let answeredCorrectly = userAnswer === correctAnswer;

    if (!answeredCorrectly) {
      resultItem.classList.add("incorrect");
    }

    resultItem.innerHTML = `<div class="question">Question ${i + 1}: ${
      quizData[i].question
    }</div>
    <div class="user-answer">Your answer: ${userAnswer || "Not Answered"}</div>
    <div class="correct-answer">Correct answer: ${correctAnswer}</div>`;

    quizResult.appendChild(resultItem);
  }

  const retakeBtn = document.createElement("button");
  retakeBtn.classList.add("retake-btn");
  retakeBtn.innerHTML = "Retake Quiz";
  retakeBtn.addEventListener("click", retakeQuiz);
  quizResult.appendChild(retakeBtn);
};

const displayNextQuestion = () => {
  if (questionNumber >= MAX_QUESTIONS - 1) {
    displayQuizResult();
    return;
  }

  questionNumber++;
  createQuestion();
};

nextBtn.addEventListener("click", displayNextQuestion);

startBtn.addEventListener("click", () => {
  startBtnContainer.style.display = "none";
  quizContainer.style.display = "block";
  createQuestion();
});

/*Javascript Code for Toggle Bar*/
const toggleButton = document.getElementById('toggle');
const navigation = document.querySelector('.navigation');

toggleButton.addEventListener('click', () => {
  navigation.classList.toggle('active');
});
