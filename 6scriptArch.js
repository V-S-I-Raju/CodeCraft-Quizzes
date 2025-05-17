let quizData = [
  {
    /*1*/
    question: "The basic organization of a computer has five main parts: Input unit, Output unit, Storage unit, Arithmetic logic unit, and Control unit.",
    options: ["True", "False", "Sometimes", "Depends on the architecture"],
    correct: "True",
  },
  {
    /*2*/
    question: "Which part of the computer performs all arithmetic and logical operations?",
    options: ["Control unit", "Arithmetic logic unit", "Memory unit", "Input unit"],
    correct: "Arithmetic logic unit",
  },
  {
    /*3*/
    question: "The control unit of a computer controls the flow of information between the different units.",
    options: ["True", "False", "Only for input/output", "Only for memory access"],
    correct: "True",
  },
  {
    /*4*/
    question: "What type of memory is primarily used as the main memory in a computer?",
    options: ["ROM", "RAM", "PROM", "EPROM"],
    correct: "RAM",
  },
  {
    /*5*/
    question: "Which of the following is a non-volatile memory?",
    options: ["SRAM", "DRAM", "ROM", "Cache"],
    correct: "ROM",
  },
  {
    /*6*/
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Programming Unit", "Control Processing Unit", "Central Program Unit"],
    correct: "Central Processing Unit",
  },
  {
    /*7*/
    question: "The speed of the processor is measured in:",
    options: ["Bytes", "Hertz", "Baud", "Pixels"],
    correct: "Hertz",
  },
  {
    /*8*/
    question: "What is a bus in the context of computer architecture?",
    options: ["A type of memory", "A set of parallel wires that carry data and control signals", "A peripheral device", "A storage unit"],
    correct: "A set of parallel wires that carry data and control signals",
  },
  {
    /*9*/
    question: "Which of the following is NOT a type of bus in a computer system?",
    options: ["Data bus", "Address bus", "Control bus", "Power bus"],
    correct: "Power bus",
  },
  {
    /*10*/
    question: "What is the purpose of the address bus?",
    options: ["To carry data", "To specify memory location", "To carry control signals", "To provide power"],
    correct: "To specify memory location",
  },
  {
    /*11*/
    question: "What is the role of the control bus?",
    options: ["To transfer data", "To identify memory", "To coordinate activities", "To provide power"],
    correct: "To coordinate activities",
  },
  {
    /*12*/
    question: "What is pipelining in computer architecture?",
    options: ["Sequential execution", "Overlapping execution", "Data storage method", "Parallel processing type"],
    correct: "Overlapping execution",
  },
  {
    /*13*/
    question: "Which of the following is a benefit of pipelining?",
    options: ["Reduced latency", "Increased throughput", "Simpler hardware", "Lower power"],
    correct: "Increased throughput",
  },
  {
    /*14*/
    question: "What is cache memory?",
    options: ["Slow secondary storage", "Fast memory for frequent data", "Main memory", "A type of ROM"],
    correct: "Fast memory for frequent data",
  },
  {
    /*15*/
    question: "The principle of locality of reference justifies the use of:",
    options: ["Interrupts", "Pipelining", "Cache memory", "DMA"],
    correct: "Cache memory",
  },
  {
    /*16*/
    question: "What is a hit in the context of cache memory?",
    options: ["Data in main memory", "Data in cache memory", "Block into cache", "Write to main memory"],
    correct: "Data in cache memory",
  },
  {
    /*17*/
    question: "What is a miss in the context of cache memory?",
    options: ["Data found in cache", "Data not found in cache", "Data updated in cache", "Block removed from cache"],
    correct: "Data not found in cache",
  },
  {
    /*18*/
    question: "Which of the following is a cache replacement policy?",
    options: ["FIFO", "LIFO", "SJF", "Round Robin"],
    correct: "FIFO",
  },
  {
    /*19*/
    question: "What does RISC stand for?",
    options: ["Reduced Instruction Set Computer", "Rapid Instruction Set Computer", "Real-time Instruction Set Computer", "Revolutionary Instruction Set Computer"],
    correct: "Reduced Instruction Set Computer",
  },
  {
    /*20*/
    question: "What is a characteristic of RISC architecture?",
    options: ["Complex instructions", "Variable length instructions", "Many addressing modes", "Simple, fixed-length instructions"],
    correct: "Simple, fixed-length instructions",
  },
  {
    /*21*/
    question: "What does CISC stand for?",
    options: ["Complex Instruction Set Computer", "Complete Instruction Set Computer", "Common Instruction Set Computer", "Centralized Instruction Set Computer"],
    correct: "Complex Instruction Set Computer",
  },
  {
    /*22*/
    question: "Which architecture typically has a larger number of addressing modes?",
    options: ["RISC", "CISC", "Both", "Neither"],
    correct: "CISC",
  },
  {
    /*23*/
    question: "What is an interrupt in a computer system?",
    options: ["End of program signal", "Suspends program for event", "Program error", "Power failure"],
    correct: "Suspends program for event",
  },
  {
    /*24*/
    question: "What is Direct Memory Access (DMA)?",
    options: ["CPU direct to peripherals", "Peripherals direct to memory", "CPU speed increase", "Memory organization type"],
    correct: "Peripherals direct to memory",
  },
  {
    /*25*/
    question: "What is the purpose of a memory controller?",
    options: ["Manage cache", "Control CPU-memory flow", "Handle I/O", "Manage power"],
    correct: "Control CPU-memory flow",
  },
  {
    /*26*/
    question: "What is instruction pipelining?",
    options: ["Multiple processors, same time", "Overlapping instruction stages", "Fetch all before execute", "Store in pipeline structure"],
    correct: "Overlapping instruction stages",
  },
  {
    /*27*/
    question: "Which of the following can cause pipeline hazards?",
    options: ["Data dependencies", "Control dependencies", "Structural hazards", "All of the above"],
    correct: "All of the above",
  },
  {
    /*28*/
    question: "What is branch prediction?",
    options: ["Predict arithmetic outcome", "Predict next instruction after branch", "Predict memory access time", "Predict interrupt occurrence"],
    correct: "Predict next instruction after branch",
  },
  {
    /*29*/
    question: "What is the function of an assembler?",
    options: ["High-level to machine", "Assembly to machine", "Execute machine code", "Debug machine code"],
    correct: "Assembly to machine",
  },
  {
    /*30*/
    question: "What is the function of a compiler?",
    options: ["Assembly to machine", "Execute high-level", "High-level to machine", "Link object files"],
    correct: "High-level to machine",
  },
  {
    /*31*/
    question: "What is the purpose of a linker?",
    options: ["Source to object", "Execute object", "Combine object to executable", "Debug executable"],
    correct: "Combine object to executable",
  },
  {
    /*32*/
    question: "What is the purpose of a loader?",
    options: ["Translate source", "Execute machine", "Load to main memory", "Manage memory allocation"],
    correct: "Load to main memory",
  },
  {
    /*33*/
    question: "What is virtual memory?",
    options: ["Fast cache", "Apparent main memory via secondary", "Physical RAM", "Memory for VMs only"],
    correct: "Apparent main memory via secondary",
  },
  {
    /*34*/
    question: "What is paging in the context of virtual memory?",
    options: ["Fixed-size program blocks", "Variable-size memory blocks", "Swap entire processes", "Memory protection method"],
    correct: "Fixed-size program blocks",
  },
  {
    /*35*/
    question: "What is segmentation in the context of virtual memory?",
    options: ["Fixed-size memory segments", "Variable-size logical program units", "Contiguous memory allocation", "Memory compaction"],
    correct: "Variable-size logical program units",
  },
  {
    /*36*/
    question: "What is a Translation Lookaside Buffer (TLB)?",
    options: ["Cache for data", "Cache for page table entries", "Buffer for I/O", "Register for page table base"],
    correct: "Cache for page table entries",
  },
  {
    /*37*/
    question: "What is the purpose of memory protection?",
    options: ["Prevent unauthorized access", "Increase access speed", "Reduce power use", "Increase capacity"],
    correct: "Prevent unauthorized access",
  },
  {
    /*38*/
    question: "Which of the following is a memory protection mechanism?",
    options: ["Paging", "Segmentation", "Base and limit registers", "All of the above"],
    correct: "All of the above",
  },
  {
    /*39*/
    question: "What is parallel processing?",
    options: ["Sequential execution", "Simultaneous computation", "Fast single processor", "Memory organization"],
    correct: "Simultaneous computation",
  },
  {
    /*40*/
    question: "Which of the following is a type of parallel processing?",
    options: ["Pipelining", "Multiprocessing", "Vector processing", "All of the above"],
    correct: "All of the above",
  },
  {
    /*41*/
    question: "What is multiprocessing?",
    options: ["Single processor, multiple cores", "Multiple processors, single system", "Single processor, concurrent programs", "Memory management technique"],
    correct: "Multiple processors, single system",
  },
  {
    /*42*/
    question: "What is a multicore processor?",
    options: ["Multiple ALUs", "Multiple control units", "Single chip, multiple CPUs", "Multiple chips, multiple CPUs"],
    correct: "Single chip, multiple CPUs",
  },
  {
    /*43*/
    question: "What is the difference between UMA and NUMA architectures?",
    options: ["Single vs. multiple memory controllers", "Equal vs. varied memory access time", "Cache coherence vs. no coherence", "Small vs. large systems"],
    correct: "Equal vs. varied memory access time",
  },
  {
    /*44*/
    question: "What is cache coherence?",
    options: ["Consistent view of memory in multiple caches", "Increase cache hit rate", "Manage replacement policies", "Ensure main memory integrity"],
    correct: "Consistent view of memory in multiple caches",
  },
  {
    /*45*/
    question: "Which of the following is a cache coherence protocol?",
    options: ["FIFO", "LRU", "MESI", "SJF"],
    correct: "MESI",
  },
  {
    /*46*/
    question: "What is an I/O interface?",
    options: ["A type of memory", "CPU-peripheral connection", "Software to manage I/O", "A storage device"],
    correct: "CPU-peripheral connection",
  },
  {
    /*47*/
    question: "Which of the following is an example of an I/O device?",
    options: ["RAM", "ROM", "Hard disk", "ALU"],
    correct: "Hard disk",
  },
  {
    /*48*/
    question: "What is programmed I/O?",
    options: ["OS automatic I/O", "CPU direct control of I/O", "I/O using DMA", "Buffering I/O data"],
    correct: "CPU direct control of I/O",
  },
  {
    /*49*/
    question: "What is interrupt-driven I/O?",
    options: ["No CPU intervention", "Peripheral signals CPU for transfer", "Timer-controlled I/O", "High-speed I/O"],
    correct: "Peripheral signals CPU for transfer",
  },
  {
    /*50*/
    question: "What is a system call?",
    options: ["User program to user program", "User program to OS service", "Call to library function", "CPU instruction"],
    correct: "User program to OS service",
  },
  {
    /*51*/
    question: "Which of the following is a common addressing mode?",
    options: ["Sequential", "Random", "Direct", "Indirect"],
    correct: "Direct",
  },
  {
    /*52*/
    question: "What is immediate addressing?",
    options: ["Operand is address", "Operand is data", "Address via register+offset", "Operand in register"],
    correct: "Operand is data",
  },
  {
    /*53*/
    question: "What is register addressing?",
    options: ["Operand in memory", "Operand in register", "Address in register", "Data in next memory location"],
    correct: "Operand in register",
  },
  {
    /*54*/
    question: "What is direct addressing?",
    options: ["Operand is address", "Operand is data", "Address in instruction", "Data in register"],
    correct: "Address in instruction",
  },
  {
    /*55*/
    question: "What is indirect addressing?",
    options: ["Operand is address", "Address of operand in register", "Operand in instruction", "Data is immediate"],
    correct: "Address of operand in register",
  },
  {
    /*56*/
    question: "What is relative addressing?",
    options: ["Address relative to accumulator", "Address relative to program counter", "Absolute memory address", "Address in index register"],
    correct: "Address relative to program counter",
  },
  {
    /*57*/
    question: "What is indexed addressing?",
    options: ["Address in base register", "Address plus index register content", "Direct memory address", "Immediate operand"],
    correct: "Address plus index register content",
  },
  {
    /*58*/
    question: "What is base register addressing?",
    options: ["Address plus index register", "Address plus base register content", "Direct address", "Immediate data"],
    correct: "Address plus base register content",
  },
  {
    /*59*/
    question: "What is stack addressing?",
    options: ["Using registers as a stack", "Implicitly using a stack pointer", "Direct memory access to stack", "Using a queue data structure"],
    correct: "Implicitly using a stack pointer",
  },
  {
    /*60*/
    question: "What is a microoperation?",
    options: ["A high-level language instruction", "A basic operation performed during one clock cycle", "An operating system command", "A complete program execution"],
    correct: "A basic operation performed during one clock cycle",
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