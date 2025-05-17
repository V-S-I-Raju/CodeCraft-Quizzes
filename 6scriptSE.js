let quizData = [
  {
      /*1*/
      question: "What is Software Engineering?",
      options: ["A branch of computer science that deals with the design and development of software systems", "The process of writing computer programs", "The study of computer hardware", "The management of IT infrastructure"],
      correct: "A branch of computer science that deals with the design and development of software systems"
  },
  {
      /*2*/
      question: "Which of the following is NOT a phase in the Software Development Life Cycle (SDLC)?",
      options: ["Requirements Gathering", "Design", "Testing", "Hardware Installation"],
      correct: "Hardware Installation"
  },
  {
      /*3*/
      question: "What is the Waterfall model in SDLC?",
      options: ["An iterative and incremental approach", "A linear sequential flow", "A risk-driven approach", "A highly flexible model"],
      correct: "A linear sequential flow"
  },
  {
      /*4*/
      question: "What is the Agile model in SDLC?",
      options: ["A rigid, plan-driven approach", "An iterative and incremental approach focused on flexibility and customer collaboration", "A model suitable for large, complex projects with fixed requirements", "A model where testing is done only at the end"],
      correct: "An iterative and incremental approach focused on flexibility and customer collaboration"
  },
  {
      /*5*/
      question: "Which of the following is an Agile framework?",
      options: ["Waterfall", "Spiral", "Scrum", "V-model"],
      correct: "Scrum"
  },
  {
      /*6*/
      question: "What is a Use Case diagram?",
      options: ["A diagram showing the class structure of a system", "A diagram illustrating the interactions between actors and the system", "A diagram representing the flow of data", "A diagram depicting the physical components of a system"],
      correct: "A diagram illustrating the interactions between actors and the system"
  },
  {
      /*7*/
      question: "What is a Class diagram?",
      options: ["A diagram showing the behavior of objects over time", "A diagram representing the static structure of a system, including classes and their relationships", "A diagram illustrating the deployment of software components", "A diagram showing the functional decomposition of a system"],
      correct: "A diagram representing the static structure of a system, including classes and their relationships"
  },
  {
      /*8*/
      question: "What is software requirement specification (SRS)?",
      options: ["A document outlining the design of the software", "A document detailing the testing procedures", "A comprehensive description of the functions, features, and constraints of the software system", "A document describing the project plan"],
      correct: "A comprehensive description of the functions, features, and constraints of the software system"
  },
  {
      /*9*/
      question: "What are functional requirements?",
      options: ["Requirements that specify how the system should perform a particular task", "Requirements that specify the quality attributes of the system", "Constraints on the design and implementation of the system", "Requirements related to the user interface"],
      correct: "Requirements that specify how the system should perform a particular task"
  },
  {
      /*10*/
      question: "What are non-functional requirements?",
      options: ["Requirements that describe what the software should do", "Requirements that specify the quality attributes of the software, such as performance and security", "Requirements related to the data stored by the system", "Requirements about the user interactions"],
      correct: "Requirements that specify the quality attributes of the software, such as performance and security"
  },
  {
      /*11*/
      question: "What is software design?",
      options: ["The process of writing code", "The process of planning the architecture, components, modules, interfaces, and data for a software system", "The process of testing the software", "The process of deploying the software"],
      correct: "The process of planning the architecture, components, modules, interfaces, and data for a software system"
  },
  {
      /*12*/
      question: "What is modularity in software design?",
      options: ["Designing the software as a single, monolithic block", "Dividing the software into smaller, independent, and interchangeable modules", "Focusing only on the user interface", "Optimizing the code for performance"],
      correct: "Dividing the software into smaller, independent, and interchangeable modules"
  },
  {
      /*13*/
      question: "What is coupling in software design?",
      options: ["The degree to which modules depend on each other", "The internal strength of a module", "The complexity of the code", "The speed of execution"],
      correct: "The degree to which modules depend on each other"
  },
  {
      /*14*/
      question: "What is cohesion in software design?",
      options: ["The degree of interaction between modules", "The degree to which elements within a module are functionally related", "The size of the module", "The number of interfaces a module has"],
      correct: "The degree to which elements within a module are functionally related"
  },
  {
      /*15*/
      question: "What is software testing?",
      options: ["The process of writing code", "The process of evaluating software to find defects or errors", "The process of designing the software architecture", "The process of deploying the software"],
      correct: "The process of evaluating software to find defects or errors"
  },
  {
      /*16*/
      question: "What is unit testing?",
      options: ["Testing the entire application as a whole", "Testing individual components or modules of the software", "Testing the integration between different modules", "Testing the software in the user environment"],
      correct: "Testing individual components or modules of the software"
  },
  {
      /*17*/
      question: "What is integration testing?",
      options: ["Testing individual units", "Testing the interaction between integrated components", "Testing the system as a whole", "Testing the user interface"],
      correct: "Testing the interaction between integrated components"
  },
  {
      /*18*/
      question: "What is system testing?",
      options: ["Testing small units of code", "Testing the complete and integrated software product", "Testing the user interface", "Testing the performance of individual modules"],
      correct: "Testing the complete and integrated software product"
  },
  {
      /*19*/
      question: "What is acceptance testing?",
      options: ["Testing by the developers", "Testing by the end-users to determine if the system meets their needs", "Testing the system's performance under load", "Testing the security aspects of the system"],
      correct: "Testing by the end-users to determine if the system meets their needs"
  },
  {
      /*20*/
      question: "What is black-box testing?",
      options: ["Testing the internal structure and implementation of the software", "Testing the functionality of the software without knowledge of its internal workings", "Testing the user interface", "Testing the performance of the software"],
      correct: "Testing the functionality of the software without knowledge of its internal workings"
  },
  {
      /*21*/
      question: "What is white-box testing?",
      options: ["Testing the software without looking at the code", "Testing the internal structure and implementation of the software", "Testing the user experience", "Testing the security vulnerabilities"],
      correct: "Testing the internal structure and implementation of the software"
  },
  {
      /*22*/
      question: "What is software maintenance?",
      options: ["The process of writing the initial code", "The process of modifying, correcting, adapting, and enhancing software after delivery", "The process of designing the software architecture", "The process of testing the software before release"],
      correct: "The process of modifying, correcting, adapting, and enhancing software after delivery"
  },
  {
      /*23*/
      question: "Which of the following is a type of software maintenance?",
      options: ["Software design", "Software testing", "Corrective maintenance", "Requirements gathering"],
      correct: "Corrective maintenance"
  },
  {
      /*24*/
      question: "What is corrective maintenance?",
      options: ["Modifying the software to prevent future problems", "Fixing defects or errors found after the software is in use", "Adapting the software to a new operating environment", "Adding new functionalities to the software"],
      correct: "Fixing defects or errors found after the software is in use"
  },
  {
      /*25*/
      question: "What is adaptive maintenance?",
      options: ["Fixing bugs in the software", "Modifying the software to meet new user requirements", "Adapting the software to a new operating environment or technology", "Improving the performance of the software"],
      correct: "Adapting the software to a new operating environment or technology"
  },
  {
      /*26*/
      question: "What is perfective maintenance?",
      options: ["Correcting errors in the code", "Enhancing the performance or adding new functionalities to the software", "Adapting the software to a new platform", "Preventing potential problems"],
      correct: "Enhancing the performance or adding new functionalities to the software"
  },
  {
      /*27*/
      question: "What is preventive maintenance?",
      options: ["Fixing errors reported by users", "Modifying the software to reduce the chances of future problems", "Adapting the software for new users", "Improving the user interface"],
      correct: "Modifying the software to reduce the chances of future problems"
  },
  {
      /*28*/
      question: "What is software configuration management (SCM)?",
      options: ["The process of managing the hardware infrastructure for the software", "The process of tracking and controlling changes in the software, its documentation, and data", "The process of designing the user interface", "The process of testing the software performance"],
      correct: "The process of tracking and controlling changes in the software, its documentation, and data"
  },
  {
      /*29*/
      question: "What is version control?",
      options: ["A method of controlling the software development budget", "A system that records changes to a file or set of files over time so that you can recall specific versions later", "A technique for managing user access to the software", "A way to optimize the software's performance"],
      correct: "A system that records changes to a file or set of files over time so that you can recall specific versions later"
  },
  {
      /*30*/
      question: "Which of the following is a popular version control system?",
      options: ["Java", "HTML", "Git", "SQL"],
      correct: "Git"
  },
  {
      /*31*/
      question: "What is software quality assurance (SQA)?",
      options: ["The process of writing high-quality code", "The systematic process of ensuring that software products and processes conform to specified requirements", "The process of testing the software thoroughly", "The process of managing the software development team"],
      correct: "The systematic process of ensuring that software products and processes conform to specified requirements"
  },
  {
      /*32*/
      question: "What is software reliability?",
      options: ["The degree to which the software is easy to use", "The probability of failure-free software operation for a specified period of time in a specified environment", "The speed at which the software executes", "The cost of maintaining the software"],
      correct: "The probability of failure-free software operation for a specified period of time in a specified environment"
  },
  {
      /*33*/
      question: "What is software maintainability?",
      options: ["The ability of the software to perform its required functions", "The ease with which the software can be modified, corrected, adapted, and enhanced", "The security of the software system", "The efficiency of the software in terms of resource usage"],
      correct: "The ease with which the software can be modified, corrected, adapted, and enhanced"
  },
  {
      /*34*/
      question: "What is software usability?",
      options: ["The ability of the software to meet the specified requirements", "The ease with which users can learn and use the software", "The ability of the software to run on different platforms", "The robustness of the software against failures"],
      correct: "The ease with which users can learn and use the software"
  },
  {
      /*35*/
      question: "What is software efficiency?",
      options: ["The degree to which the software is free from defects", "The ability of the software to use system resources (CPU, memory) optimally", "The ease with which the software can be tested", "The cost of developing the software"],
      correct: "The ability of the software to use system resources (CPU, memory) optimally"
  },
  {
      /*36*/
      question: "What is software portability?",
      options: ["The ability of the software to be easily modified", "The ability of the software to run on different hardware and software platforms", "The ease with which the software can be understood", "The security of the software system"],
      correct: "The ability of the software to run on different hardware and software platforms"
  },
  {
      /*37*/
      question: "What is software security?",
      options: ["The ability of the software to perform its intended functions correctly", "The ability of the software to protect data and prevent unauthorized access", "The ease with which the software can be maintained", "The efficiency of the software's resource usage"],
      correct: "The ability of the software to protect data and prevent unauthorized access"
  },
  {
      /*38*/
      question: "What is software re-engineering?",
      options: ["Creating a new software system from scratch", "Examining and altering an existing software system to reconstitute it in a new form", "Testing the performance of a software system", "Documenting an existing software system"],
      correct: "Examining and altering an existing software system to reconstitute it in a new form"
  },
  {
      /*39*/
      question: "What is reverse engineering?",
      options: ["Creating a forward design from requirements", "Analyzing an existing system to identify its components and their relationships, often with the goal of understanding or reproducing it", "Testing the software in reverse order", "Optimizing the software for better performance"],
      correct: "Analyzing an existing system to identify its components and their relationships, often with the goal of understanding or reproducing it"
  },
  {
      /*40*/
      question: "What is a software project management plan (SPMP)?",
      options: ["A document describing the technical architecture of the software", "A document outlining the objectives, resources, tasks, and schedules of a software project", "A document detailing the testing strategy", "A document specifying the software requirements"],
      correct: "A document outlining the objectives, resources, tasks, and schedules of a software project"
  },
  {
      /*41*/
      question: "What is risk management in software engineering?",
      options: ["Ignoring potential problems", "Identifying, assessing, and controlling potential risks in a software project", "Assuming all projects will succeed", "Focusing only on technical aspects"],
      correct: "Identifying, assessing, and controlling potential risks in a software project"
  },
  {
      /*42*/
      question: "What is software process improvement (SPI)?",
      options: ["Making individual programmers write code faster", "A systematic approach to making software development processes more effective and efficient", "Testing the software more frequently", "Documenting the software after it's developed"],
      correct: "A systematic approach to making software development processes more effective and efficient"
  },
  {
      /*43*/
      question: "What is the Capability Maturity Model Integration (CMMI)?",
      options: ["A framework for testing software quality", "A process improvement approach that provides organizations with essential elements of effective processes", "A method for designing software architectures", "A standard for documenting software requirements"],
      correct: "A process improvement approach that provides organizations with essential elements of effective processes"
  },
  {
      /*44*/
      question: "What is software architecture?",
      options: ["The detailed design of individual modules", "The high-level structure of a software system, including its components and their interactions", "The user interface design", "The database schema"],
      correct: "The high-level structure of a software system, including its components and their interactions"
  },
  {
      /*45*/
      question: "Which of the following is an architectural pattern?",
      options: ["UML diagram", "Agile methodology", "Model-View-Controller (MVC)", "Software testing strategy"],
      correct: "Model-View-Controller (MVC)"
  },
  {
      /*46*/
      question: "What is the Model-View-Controller (MVC) pattern?",
      options: ["A pattern for organizing code into three interconnected parts: Model (data), View (user interface), and Controller (logic)", "A pattern for designing database schemas", "A pattern for handling user authentication", "A pattern for managing network communication"],
      correct: "A pattern for organizing code into three interconnected parts: Model (data), View (user interface), and Controller (logic)"
  },
  {
    /*47*/
    question: "What is a design pattern?",
    options: ["A specific algorithm for solving a computational problem", "A reusable solution to a commonly occurring problem in software design", "A particular coding style or convention", "A step-by-step process for software development"],
    correct: "A reusable solution to a commonly occurring problem in software design"
  },
  {
    /*48*/
    question: "Which of the following is a creational design pattern?",
    options: ["Observer", "Strategy", "Factory Method", "Visitor"],
    correct: "Factory Method"
  },
  {
    /*49*/
    question: "Which of the following is a structural design pattern?",
    options: ["Template Method", "Command", "Adapter", "Iterator"],
    correct: "Adapter"
  },
  {
    /*50*/
    question: "Which of the following is a behavioral design pattern?",
    options: ["Abstract Factory", "Bridge", "Observer", "Builder"],
    correct: "Observer"
  },
  {
    /*51*/
    question: "What is refactoring?",
    options: ["Changing the functionality of the software", "Improving the internal structure of the code without changing its external behavior", "Documenting the software after it's written", "Testing the software for bugs"],
    correct: "Improving the internal structure of the code without changing its external behavior"
  },
  {
    /*52*/
    question: "What is technical debt?",
    options: ["The amount of money spent on hardware", "The implied cost of future rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer", "The time spent on writing documentation", "The number of bugs in the software"],
    correct: "The implied cost of future rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer"
  },
  {
    /*53*/
    question: "What is code review?",
    options: ["A process of writing code very quickly", "A systematic examination of computer source code intended to find and fix mistakes overlooked in the initial development phase", "A meeting to discuss project timelines", "A method for testing the user interface"],
    correct: "A systematic examination of computer source code intended to find and fix mistakes overlooked in the initial development phase"
  },
  {
    /*54*/
    question: "What is continuous integration (CI)?",
    options: ["Integrating new code changes into the main repository infrequently", "The practice of frequently integrating code changes from multiple developers into a shared repository", "Testing the software only at the end of the development cycle", "Deploying the software to production once a year"],
    correct: "The practice of frequently integrating code changes from multiple developers into a shared repository"
  },
  {
    /*55*/
    question: "What is continuous delivery (CD)?",
    options: ["Delivering the software to the customer only at the very end", "The ability to release software to production at any time", "Integrating code changes once a month", "Documenting the deployment process"],
    correct: "The ability to release software to production at any time"
  },
  {
    /*56*/
    question: "What is DevOps?",
    options: ["A set of practices that automates the processes between software development and IT teams", "A methodology focused solely on software development", "A team that only handles IT operations", "A tool for project management"],
    correct: "A set of practices that automates the processes between software development and IT teams"
  },
  {
    /*57*/
    question: "What is a microservice architecture?",
    options: ["Building a large, monolithic application", "Structuring an application as a collection of small, independent services", "Developing only the front-end of an application", "Focusing on database design"],
    correct: "Structuring an application as a collection of small, independent services"
  },
  {
    /*58*/
    question: "What is a software metric?",
    options: ["A measure used to quantify a property of the software or its development process", "A type of software bug", "A step in the software development lifecycle", "A diagram used in software design"],
    correct: "A measure used to quantify a property of the software or its development process"
  },
  {
    /*59*/
    question: "Which of the following is a common software metric?",
    options: ["Number of developers on the team", "Lines of Code (LOC)", "Project budget", "Number of meetings held"],
    correct: "Lines of Code (LOC)"
  },
  {
    /*60*/
    question: "What is technical documentation in software engineering?",
    options: ["Comments within the code only", "Written documents that explain the design, functionality, and use of a software system", "Marketing materials for the software", "End-user support guides only"],
    correct: "Written documents that explain the design, functionality, and use of a software system"
  }
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