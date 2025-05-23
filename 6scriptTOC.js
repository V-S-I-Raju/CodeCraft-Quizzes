let quizData = [
  {
      /*1*/
      question: "What is the basic model of a finite automaton?",
      options: ["Turing Machine", "Pushdown Automaton", "Linear Bounded Automaton", "Finite State Machine"],
      correct: "Finite State Machine"
  },
  {
      /*2*/
      question: "A finite automaton consists of a finite set of states, an input alphabet, a transition function, an initial state, and a set of...",
      options: ["Output symbols", "Final states", "Temporary variables", "Production rules"],
      correct: "Final states"
  },
  {
      /*3*/
      question: "Which of the following is NOT a type of finite automaton?",
      options: ["Deterministic Finite Automaton (DFA)", "Non-deterministic Finite Automaton (NFA)", "Finite Automaton with Output (FAO)", "Infinite Automaton"],
      correct: "Infinite Automaton"
  },
  {
      /*4*/
      question: "In a Deterministic Finite Automaton (DFA), for each state and each input symbol, there is...",
      options: ["Multiple possible next states", "Exactly one next state", "No next state", "A set of possible next states"],
      correct: "Exactly one next state"
  },
  {
      /*5*/
      question: "In a Non-deterministic Finite Automaton (NFA), for each state and each input symbol, there can be...",
      options: ["Exactly one next state", "No next state", "Zero, one, or more possible next states", "A fixed number of next states"],
      correct: "Zero, one, or more possible next states"
  },
  {
      /*6*/
      question: "What is $\epsilon$-closure of a state in an NFA?",
      options: ["The set of all states reachable from that state on one or more $\epsilon$ transitions", "The set of all states reachable from that state on zero or more $\epsilon$ transitions", "The set of all states reachable from the initial state", "The set of all final states"],
      correct: "The set of all states reachable from that state on zero or more $\epsilon$ transitions"
  },
  {
      /*7*/
      question: "Which of the following languages is accepted by a finite automaton?",
      options: ["$\{a^n b^n | n \ge 0\}$", "$\{a^n b^m c^k | n < m < k\}$", "Regular languages", "Context-free languages"],
      correct: "Regular languages"
  },
  {
      /*8*/
      question: "The pumping lemma for regular languages is used to prove that a language is...",
      options: ["Regular", "Context-free", "Not regular", "Finite"],
      correct: "Not regular"
  },
  {
      /*9*/
      question: "A regular expression denotes a...",
      options: ["Finite language", "Infinite language", "Regular language", "Context-free language"],
      correct: "Regular language"
  },
  {
      /*10*/
      question: "Which of the following is NOT a basic operation in regular expressions?",
      options: ["Union", "Concatenation", "Kleene star", "Intersection"],
      correct: "Intersection"
  },
  {
      /*11*/
      question: "Two finite automata are equivalent if they accept...",
      options: ["The same number of states", "The same set of transitions", "The same language", "The same initial and final states"],
      correct: "The same language"
  },
  {
      /*12*/
      question: "A context-free grammar (CFG) consists of a finite set of variables, a finite set of terminals, a start symbol, and a set of...",
      options: ["Transition functions", "Final states", "Production rules", "Input symbols"],
      correct: "Production rules"
  },
  {
      /*13*/
      question: "Which of the following is NOT a component of a context-free grammar?",
      options: ["Variables", "Terminals", "Start symbol", "Transition function"],
      correct: "Transition function"
  },
  {
      /*14*/
      question: "A language generated by a context-free grammar is called a...",
      options: ["Regular language", "Context-free language", "Context-sensitive language", "Recursively enumerable language"],
      correct: "Context-free language"
  },
  {
      /*15*/
      question: "Which of the following languages is context-free but not regular?",
      options: ["$\{a^n b^n | n \ge 0\}$", "$\{a^n | n \ge 0\}$", "$\{a^*\}$", "$\{ab\}^*$"],
      correct: "$\{a^n b^n | n \ge 0\}$"
  },
  {
      /*16*/
      question: "A pushdown automaton (PDA) is a finite automaton with an additional...",
      options: ["Input tape", "Output tape", "Stack", "Queue"],
      correct: "Stack"
  },
  {
      /*17*/
      question: "The pumping lemma for context-free languages is used to prove that a language is...",
      options: ["Regular", "Context-free", "Not context-free", "Finite"],
      correct: "Not context-free"
  },
  {
      /*18*/
      question: "Which of the following is NOT a type of pushdown automaton?",
      options: ["Deterministic PDA (DPDA)", "Non-deterministic PDA (NPDA)", "PDA with output", "PDA with multiple stacks"],
      correct: "PDA with multiple stacks"
  },
  {
      /*19*/
      question: "A Turing Machine (TM) consists of a finite control, a tape of infinite length, a tape head, and a...",
      options: ["Stack", "Queue", "Set of final states", "Set of output symbols"],
      correct: "Set of final states"
  },
  {
      /*20*/
      question: "The tape of a Turing Machine is...",
      options: ["Finite and read-only", "Finite and read-write", "Infinite and read-only", "Infinite and read-write"],
      correct: "Infinite and read-write"
  },
  {
      /*21*/
      question: "A Turing Machine can...",
      options: ["Only accept regular languages", "Only accept context-free languages", "Accept recursively enumerable languages", "Only perform arithmetic operations"],
      correct: "Accept recursively enumerable languages"
  },
  {
    /*22*/
    question: "Which of the following problems is undecidable?",
    options: ["The halting problem for Turing Machines", "The membership problem for regular languages", "The emptiness problem for context-free languages", "The equivalence problem for finite automata"],
    correct: "The halting problem for Turing Machines"
  },
  {
    /*23*/
    question: "A language is decidable if there exists a Turing Machine that...",
    options: ["Halts on all inputs and accepts all strings in the language", "Halts on all inputs and rejects all strings not in the language", "Halts on all inputs and correctly decides whether each input string is in the language or not", "May loop indefinitely on some inputs"],
    correct: "Halts on all inputs and correctly decides whether each input string is in the language or not"
  },
  {
    /*24*/
    question: "Which of the following is a model of computation that is less powerful than a Turing Machine?",
    options: ["Linear Bounded Automaton (LBA)", "Pushdown Automaton (PDA)", "Finite Automaton (FA)", "All of the above"],
    correct: "All of the above"
  },
  {
    /*25*/
    question: "A Linear Bounded Automaton (LBA) is a Turing Machine with...",
    options: ["No tape", "A tape of infinite length", "A tape whose length is a linear function of the input length", "Multiple tapes"],
    correct: "A tape whose length is a linear function of the input length"
  },
  {
    /*26*/
    question: "Linear Bounded Automata accept...",
    options: ["Regular languages", "Context-free languages", "Context-sensitive languages", "Recursively enumerable languages"],
    correct: "Context-sensitive languages"
  },
  {
    /*27*/
    question: "Which of the following is NOT a closure property of regular languages?",
    options: ["Union", "Intersection", "Complementation", "Difference"],
    correct: "Difference"
  },
  {
    /*28*/
    question: "Which of the following is a closure property of context-free languages?",
    options: ["Intersection", "Complementation", "Difference", "Union"],
    correct: "Union"
  },
  {
    /*29*/
    question: "The intersection of two regular languages is...",
    options: ["Always regular", "Always context-free but not necessarily regular", "Never regular", "Sometimes regular, sometimes not"],
    correct: "Always regular"
  },
  {
    /*30*/
    question: "The intersection of two context-free languages is...",
    options: ["Always context-free", "Always regular", "Context-sensitive", "Not necessarily context-free"],
    correct: "Not necessarily context-free"
  },
  {
    /*31*/
    question: "What is the complement of a regular language?",
    options: ["Always regular", "Always context-free but not necessarily regular", "Never regular", "Sometimes regular, sometimes not"],
    correct: "Always regular"
  },
  {
    /*32*/
    question: "What is the complement of a context-free language?",
    options: ["Always context-free", "Always regular", "Context-sensitive", "Not necessarily context-free"],
    correct: "Not necessarily context-free"
  },
  {
    /*33*/
    question: "The set of all recursively enumerable languages is closed under...",
    options: ["Complementation", "Intersection", "Difference", "None of the above"],
    correct: "Intersection"
  },
  {
    /*34*/
    question: "The set of all recursive languages is closed under...",
    options: ["Union", "Intersection", "Complementation", "All of the above"],
    correct: "All of the above"
  },
  {
    /*35*/
    question: "What is the Chomsky Hierarchy?",
    options: ["A classification of formal languages based on their generative power", "A list of famous automata theorists", "A set of algorithms for parsing languages", "A diagram showing the components of a compiler"],
    correct: "A classification of formal languages based on their generative power"
  },
  {
    /*36*/
    question: "According to the Chomsky Hierarchy, which type of language has the least generative power?",
    options: ["Regular languages", "Context-free languages", "Context-sensitive languages", "Recursively enumerable languages"],
    correct: "Regular languages"
  },
  {
    /*37*/
    question: "According to the Chomsky Hierarchy, which type of language is accepted by Turing Machines?",
    options: ["Regular languages", "Context-free languages", "Context-sensitive languages", "Recursively enumerable languages"],
    correct: "Recursively enumerable languages"
  },
  {
    /*38*/
    question: "A language is context-sensitive if it can be generated by a grammar where all production rules are of the form $\alpha \rightarrow \beta$ with...",
    options: ["$|\alpha| < |\beta|$", "$|\alpha| > |\beta|$", "$|\alpha| \le |\beta|$ and $\alpha$ is not empty", "$|\alpha| = |\beta|$"],
    correct: "$|\alpha| \le |\beta|$ and $\alpha$ is not empty"
  },
  {
    /*39*/
    question: "What is the Post Correspondence Problem (PCP)?",
    options: ["A decidable problem related to string matching", "An undecidable problem related to string matching", "A problem about the equivalence of finite automata", "A problem about the ambiguity of context-free grammars"],
    correct: "An undecidable problem related to string matching"
  },
  {
    /*40*/
    question: "The ambiguity problem for context-free grammars is...",
    options: ["Decidable", "Undecidable", "Tractable", "Solvable in polynomial time"],
    correct: "Undecidable"
  },
  {
    /*41*/
    question: "What is a Greibach Normal Form (GNF) for a context-free grammar?",
    options: ["A form where all production rules have at most two variables on the right-hand side", "A form where all production rules have a terminal as the first symbol on the right-hand side, followed by zero or more variables", "A form where all production rules are in Chomsky Normal Form", "A form without any left recursion"],
    correct: "A form where all production rules have a terminal as the first symbol on the right-hand side, followed by zero or more variables"
  },
  {
    /*42*/
    question: "What is a Chomsky Normal Form (CNF) for a context-free grammar?",
    options: ["A form where all production rules have a terminal as the first symbol", "A form where all production rules are of the form $A \rightarrow BC$ or $A \rightarrow a$", "A form without any cycles", "A form without any useless symbols"],
    correct: "A form where all production rules are of the form $A \rightarrow BC$ or $A \rightarrow a$"
  },
  {
    /*43*/
    question: "Which of the following is a top-down parsing technique?",
    options: ["LR parsing", "LALR parsing", "SLR parsing", "LL parsing"],
    correct: "LL parsing"
  },
  {
    /*44*/
    question: "Which of the following is a bottom-up parsing technique?",
    options: ["Recursive descent parsing", "LL(1) parsing", "LR parsing", "Predictive parsing"],
    correct: "LR parsing"
  },
  {
    /*45*/
    question: "What is the significance of the Myhill-Nerode theorem?",
    options: ["It provides a way to minimize the number of states in a DFA", "It gives a necessary and sufficient condition for a language to be context-free", "It proves the undecidability of the halting problem", "It describes the power of Turing Machines"],
    correct: "It provides a way to minimize the number of states in a DFA"
  },
  {
    /*46*/
    question: "The minimum number of states in a DFA accepting the language $\{a^n | n \ge 1\}$ is...",
    options: ["1", "2", "n", "n+1"],
    correct: "2"
  },
  {
    /*47*/
    question: "The minimum number of states in a DFA accepting the language $\{a^n | n \ge k\}$ for a fixed $k \ge 0$ is...",
    options: ["k", "k+1", "k+2", "2k"],
    correct: "k+1"
  },
  {
    /*48*/
    question: "What is the power set construction used for?",
    options: ["Converting a DFA to an NFA", "Converting an NFA to a DFA", "Minimizing the number of states in a DFA", "Proving the pumping lemma"],
    correct: "Converting an NFA to a DFA"
  },
  {
    /*49*/
    question: "What is a Moore machine?",
    options: ["A finite automaton with outputs associated with transitions", "A finite automaton with outputs associated with states", "A type of Turing Machine", "A type of pushdown automaton"],
    correct: "A finite automaton with outputs associated with states"
  },
  {
    /*50*/
    question: "What is a Mealy machine?",
    options: ["A finite automaton with outputs associated with states", "A finite automaton with outputs associated with transitions", "A type of linear bounded automaton", "A type of grammar"],
    correct: "A finite automaton with outputs associated with transitions"
  },
  {
    /*51*/
    question: "Which of the following is a regular language?",
    options: ["$\{a^n b^n | n \ge 0\}$", "$\{ww^R | w \in \{a, b\}^*\}$", "$\{a^n | n \text{ is prime}\}$", "$(a|b)^*$"],
    correct: "$(a|b)^*"
  },
  {
    /*52*/
    question: "Which of the following is a context-free language?",
    options: ["$\{a^n b^n c^n | n \ge 0\}$", "$\{w w | w \in \{a, b\}^*\}$", "$\{a^n b^m | n \le m\}$", "$(ab)^*$"],
    correct: "$ \{a^n b^m | n \le m\} $"
  },
  {
    /*53*/
    question: "What is the Kleene closure of a language L, denoted by $L^*$?",
    options: ["The set of all strings in L", "The set of all strings formed by concatenating zero or more strings from L", "The set of all strings formed by concatenating one or more strings from L", "The empty string only"],
    correct: "The set of all strings formed by concatenating zero or more strings from L"
  },
  {
    /*54*/
    question: "What is the positive closure of a language L, denoted by $L^+$?",
    options: ["The set of all strings in L including the empty string", "The set of all strings formed by concatenating one or more strings from L", "The empty string only", "The complement of L"],
    correct: "The set of all strings formed by concatenating one or more strings from L"
  },
  {
    /*55*/
    question: "Which of the following is true about the relationship between DFA and NFA?",
    options: ["DFA are more powerful than NFA", "NFA are more powerful than DFA", "DFA and NFA have the same computational power", "DFA can accept non-regular languages, but NFA cannot"],
    correct: "DFA and NFA have the same computational power"
  },
  {
    /*56*/
    question: "What is the state minimization problem for DFA?",
    options: ["Finding an equivalent NFA with the fewest number of states", "Finding an equivalent DFA with the fewest number of states", "Converting a DFA to a regular expression", "Converting a regular expression to a DFA"],
    correct: "Finding an equivalent DFA with the fewest number of states"
  },
  {
    /*57*/
    question: "Two states $p$ and $q$ of a DFA are distinguishable if there exists an input string $w$ such that...",
    options: ["$\delta(p, w) = \delta(q, w)$", "$\delta(p, w)$ is a final state and $\delta(q, w)$ is not, or vice versa", "Both $\delta(p, w)$ and $\delta(q, w)$ are final states", "Neither $\delta(p, w)$ nor $\delta(q, w)$ is a final state"],
    correct: "$\delta(p, w)$ is a final state and $\delta(q, w)$ is not, or vice versa"
  },
  {
    /*58*/
    question: "What is the table-filling algorithm used for?",
    options: ["Constructing a DFA from a regular expression", "Minimizing the number of states in a DFA", "Converting an NFA to a DFA", "Testing if a language is regular"],
    correct: "Minimizing the number of states in a DFA"
  },
  {
    /*59*/
    question: "What is the pumping length for a regular language L?",
    options: ["The shortest string in L", "A length $p$ such that any string $s \in L$ with $|s| \ge p$ can be pumped", "The number of states in the minimal DFA accepting L", "The length of the longest string in L"],
    correct: "A length $p$ such that any string $s \in L$ with $|s| \ge p$ can be pumped"
  },
  {
    /*60*/
    question: "Which of the following is NOT a typical application of automata theory?",
    options: ["Compiler design", "Text processing", "Network routing algorithms", "Database management systems"],
    correct: "Database management systems"
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