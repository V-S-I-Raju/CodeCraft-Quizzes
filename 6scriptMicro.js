let quizData = [
  {
    /*1*/
    question: "What is a microprocessor?",
    options: ["A peripheral device", "The arithmetic and logic unit of a computer", "A single integrated circuit that performs the functions of a central processing unit", "A memory storage unit"],
    correct: "A single integrated circuit that performs the functions of a central processing unit",
  },
  {
    /*2*/
    question: "Which of the following is NOT a component of a microprocessor?",
    options: ["Arithmetic Logic Unit (ALU)", "Control Unit", "Registers", "Main Memory"],
    correct: "Main Memory",
  },
  {
    /*3*/
    question: "What is the function of the Arithmetic Logic Unit (ALU)?",
    options: ["To fetch instructions from memory", "To perform arithmetic and logical operations", "To control the flow of data within the processor", "To store data and instructions"],
    correct: "To perform arithmetic and logical operations",
  },
  {
    /*4*/
    question: "What is the function of the Control Unit?",
    options: ["To execute arithmetic operations", "To store data temporarily", "To manage and coordinate the operations of the CPU", "To communicate with peripheral devices"],
    correct: "To manage and coordinate the operations of the CPU",
  },
  {
    /*5*/
    question: "What are registers in a microprocessor?",
    options: ["Permanent storage locations for data", "High-speed storage locations used to hold data and instructions temporarily", "Input/output devices", "Components of the main memory"],
    correct: "High-speed storage locations used to hold data and instructions temporarily",
  },
  {
    /*6*/
    question: "What is the program counter (PC)?",
    options: ["A register that stores the result of an operation", "A register that holds the address of the next instruction to be executed", "A register that stores the current data being processed", "A register used for temporary storage"],
    correct: "A register that holds the address of the next instruction to be executed",
  },
  {
    /*7*/
    question: "What is the instruction register (IR)?",
    options: ["A register that stores the address of an operand", "A register that holds the current instruction being executed", "A register that stores the status flags", "A register used for arithmetic operations"],
    correct: "A register that holds the current instruction being executed",
  },
  {
    /*8*/
    question: "What is the system bus?",
    options: ["A set of parallel wires that connect the CPU to peripheral devices", "A set of parallel wires that carry data, addresses, and control signals between the CPU, memory, and I/O devices", "A high-speed serial communication link", "A type of memory"],
    correct: "A set of parallel wires that carry data, addresses, and control signals between the CPU, memory, and I/O devices",
  },
  {
    /*9*/
    question: "What are the three main types of system buses?",
    options: ["Data bus, address bus, power bus", "Control bus, address bus, serial bus", "Data bus, address bus, control bus", "Instruction bus, data bus, memory bus"],
    correct: "Data bus, address bus, control bus",
  },
  {
    /*10*/
    question: "What is the data bus used for?",
    options: ["Carrying memory addresses", "Transferring data between the CPU, memory, and I/O devices", "Transmitting control signals", "Providing power to the components"],
    correct: "Transferring data between the CPU, memory, and I/O devices",
  },
  {
    /*11*/
    question: "What is the address bus used for?",
    options: ["Carrying data", "Specifying the memory location or I/O port", "Transmitting control signals", "Providing timing signals"],
    correct: "Specifying the memory location or I/O port",
  },
  {
    /*12*/
    question: "What is the control bus used for?",
    options: ["Transferring data", "Carrying address information", "Transmitting signals that coordinate the activities of the system components", "Providing power"],
    correct: "Transmitting signals that coordinate the activities of the system components",
  },
  {
    /*13*/
    question: "What is instruction pipelining?",
    options: ["Executing multiple instructions simultaneously on different data", "Overlapping the execution of multiple instructions", "Fetching all instructions before execution", "Executing instructions in reverse order"],
    correct: "Overlapping the execution of multiple instructions",
  },
  {
    /*14*/
    question: "What is the clock speed of a microprocessor?",
    options: ["The number of instructions executed per second", "The rate at which the internal operations of the processor are synchronized", "The amount of memory the processor can access", "The power consumption of the processor"],
    correct: "The rate at which the internal operations of the processor are synchronized",
  },
  {
    /*15*/
    question: "What is word length in a microprocessor?",
    options: ["The number of registers in the processor", "The number of bits that the processor can handle in one operation", "The clock speed of the processor", "The size of the address bus"],
    correct: "The number of bits that the processor can handle in one operation",
  },
  {
    /*16*/
    question: "What is memory addressing?",
    options: ["The process of assigning memory locations to data", "The way the microprocessor accesses different memory locations", "The speed at which the processor can read from or write to memory", "The total amount of memory available to the system"],
    correct: "The way the microprocessor accesses different memory locations",
  },
  {
    /*17*/
    question: "Which of the following is a common memory addressing mode?",
    options: ["Sequential addressing", "Parallel addressing", "Direct addressing", "Random addressing"],
    correct: "Direct addressing",
  },
  {
    /*18*/
    question: "What is direct addressing?",
    options: ["The operand's address is calculated based on a register and an offset", "The operand's address is explicitly given in the instruction", "The operand is located in a register", "The instruction contains the operand itself"],
    correct: "The operand's address is explicitly given in the instruction",
  },
  {
    /*19*/
    question: "What is indirect addressing?",
    options: ["The instruction contains the operand", "The operand is in a register", "The instruction specifies a register that contains the address of the operand", "The address of the operand is calculated"],
    correct: "The instruction specifies a register that contains the address of the operand",
  },
  {
    /*20*/
    question: "What is immediate addressing?",
    options: ["The operand's address is in a register", "The operand is part of the instruction itself", "The operand's address is explicitly given", "The operand's address is calculated"],
    correct: "The operand is part of the instruction itself",
  },
  {
    /*21*/
    question: "What is register addressing?",
    options: ["The operand is in memory, and its address is in a register", "The operand is stored in one of the processor's registers", "The operand is part of the instruction", "The operand's address is calculated using an offset"],
    correct: "The operand is stored in one of the processor's registers",
  },
  {
    /*22*/
    question: "What is an interrupt?",
    options: ["A signal indicating the completion of an operation", "A request from a peripheral device or software for the processor to handle an event", "A type of memory error", "A specific instruction in the program"],
    correct: "A request from a peripheral device or software for the processor to handle an event",
  },
  {
    /*23*/
    question: "What is an interrupt service routine (ISR)?",
    options: ["The main program being executed by the processor", "A special program that handles a specific interrupt", "A routine for initializing peripheral devices", "A program for memory management"],
    correct: "A special program that handles a specific interrupt",
  },
  {
    /*24*/
    question: "What is polling?",
    options: ["A method where the processor periodically checks the status of peripheral devices", "A technique for handling interrupts", "A way to transfer data directly between memory and peripherals", "A method for prioritizing tasks"],
    correct: "A method where the processor periodically checks the status of peripheral devices",
  },
  {
    /*25*/
    question: "What is Direct Memory Access (DMA)?",
    options: ["A method where the CPU directly accesses peripheral devices", "A technique that allows peripherals to transfer data to or from memory without CPU intervention", "A high-speed memory access technique used by the CPU", "A way to manage virtual memory"],
    correct: "A technique that allows peripherals to transfer data to or from memory without CPU intervention",
  },
  {
    /*26*/
    question: "What is the difference between RISC and CISC architectures?",
    options: ["RISC has fewer instructions, longer execution time per instruction; CISC has more instructions, shorter execution time per instruction", "RISC has complex instructions; CISC has simple instructions", "RISC has a large number of general-purpose registers; CISC has fewer registers", "RISC has simple instructions, fixed instruction length; CISC has complex instructions, variable instruction length"],
    correct: "RISC has simple instructions, fixed instruction length; CISC has complex instructions, variable instruction length",
  },
  {
    /*27*/
    question: "What does RISC stand for?",
    options: ["Reduced Instruction Set Computer", "Rapid Instruction Set Computing", "Real-time Instruction Set Computer", "Revolutionary Instruction Set Computer"],
    correct: "Reduced Instruction Set Computer",
  },
  {
    /*28*/
    question: "What does CISC stand for?",
    options: ["Complex Instruction Set Computer", "Compact Instruction Set Computing", "Complete Instruction Set Computer", "Common Instruction Set Computer"],
    correct: "Complex Instruction Set Computer",
  },
  {
    /*29*/
    question: "Which of the following is a characteristic of RISC architecture?",
    options: ["Complex addressing modes", "Variable instruction length", "Emphasis on hardware complexity", "Large number of general-purpose registers"],
    correct: "Large number of general-purpose registers",
  },
  {
    /*30*/
    question: "Which of the following is a characteristic of CISC architecture?",
    options: ["Fixed instruction length", "Load/store architecture", "Few addressing modes", "Emphasis on microcode"],
    correct: "Emphasis on microcode",
  },
  {
    /*31*/
    question: "What is pipelining hazard?",
    options: ["A condition that prevents the next instruction in the pipeline from executing during its designated clock cycle", "A type of memory error in pipelined systems", "A situation where the pipeline is full of instructions", "A technique to improve pipeline performance"],
    correct: "A condition that prevents the next instruction in the pipeline from executing during its designated clock cycle",
  },
  {
    /*32*/
    question: "Which of the following is a type of pipeline hazard?",
    options: ["Data hazard", "Address hazard", "Control hazard", "All of the above"],
    correct: "All of the above",
  },
  {
    /*33*/
    question: "What is a data hazard in pipelining?",
    options: ["When an instruction tries to access data that hasn't been produced yet by a prior instruction in the pipeline", "When multiple instructions try to access the same data at the same time", "When there is an error in the data being processed", "When the data bus is overloaded"],
    correct: "When an instruction tries to access data that hasn't been produced yet by a prior instruction in the pipeline",
  },
  {
    /*34*/
    question: "What is a control hazard in pipelining?",
    options: ["When there is a conflict in accessing control registers", "When a branch instruction or other control flow instruction makes it difficult to fetch the next instruction", "When the control unit malfunctions", "When multiple control signals are asserted simultaneously"],
    correct: "When a branch instruction or other control flow instruction makes it difficult to fetch the next instruction",
  },
  {
    /*35*/
    question: "What is instruction set architecture (ISA)?",
    options: ["The physical design of the microprocessor", "The set of instructions that a microprocessor can execute", "The speed at which the microprocessor operates", "The amount of memory the microprocessor can address"],
    correct: "The set of instructions that a microprocessor can execute",
  },
  {
    /*36*/
    question: "Which of the following is a type of instruction in a typical ISA?",
    options: ["Graphical instructions", "Network instructions", "Arithmetic instructions", "Database instructions"],
    correct: "Arithmetic instructions",
  },
  {
    /*37*/
    question: "What are addressing modes?",
    options: ["Different ways of specifying the operands in an instruction", "Different ways the processor handles interrupts", "Different speeds at which the processor can access memory", "Different formats for storing instructions"],
    correct: "Different ways of specifying the operands in an instruction",
  },
  {
    /*38*/
    question: "What is microprogramming?",
    options: ["Programming at the bit level", "Implementing the control unit using a sequence of microinstructions stored in microcode memory", "Writing programs for microcontrollers", "A technique for optimizing assembly code"],
    correct: "Implementing the control unit using a sequence of microinstructions stored in microcode memory",
  },
  {
    /*39*/
    question: "What is cache memory?",
    options: ["A large, slow memory used for primary storage", "A small, fast memory that stores frequently accessed data and instructions", "A type of read-only memory", "A secondary storage device"],
    correct: "A small, fast memory that stores frequently accessed data and instructions",
  },
  {
    /*40*/
    question: "What is the principle of locality of reference?",
    options: ["Data and instructions are accessed randomly in memory", "Once a memory location is accessed, it is likely to be accessed again soon (temporal locality) or nearby locations will be accessed soon (spatial locality)", "Memory access times are uniform across all locations", "Data is always accessed in sequential order"],
    correct: "Once a memory location is accessed, it is likely to be accessed again soon (temporal locality) or nearby locations will be accessed soon (spatial locality)",
  },
  {
    /*41*/
    question: "What is cache hit?",
    options: ["When the requested data is found in the cache", "When the requested data is not found in the cache and must be retrieved from main memory", "An error in the cache memory", "A technique for writing data to the cache"],
    correct: "When the requested data is found in the cache",
  },
  {
    /*42*/
    question: "What is cache miss?",
    options: ["When the requested data is found in the cache", "When the requested data is not found in the cache and must be retrieved from main memory", "A high-speed access to the cache", "A way to optimize cache performance"],
    correct: "When the requested data is not found in the cache and must be retrieved from main memory",
  },
  {
    /*43*/
    question: "Which of the following is a common cache replacement policy?",
    options: ["First-In, First-Out (FIFO)", "Last-In, First-Out (LIFO)", "Least Recently Used (LRU)", "Most Frequently Used (MFU)", "All of the above"],
    correct: "All of the above",
  },
  {
    /*44*/
    question: "What is virtual memory?",
    options: ["A type of memory that is physically present in the system", "A technique that allows a system to execute programs larger than the physical memory by using disk space", "A very fast type of cache memory", "Memory that is directly accessed by peripheral devices"],
    correct: "A technique that allows a system to execute programs larger than the physical memory by using disk space",
  },
  {
    /*45*/
    question: "What is paging in memory management?",
    options: ["Dividing the physical memory into fixed-size blocks called pages", "Dividing the logical memory into fixed-size blocks called frames", "Dividing the logical memory into variable-size blocks called segments", "Swapping entire processes between memory and disk"],
    correct: "Dividing the physical memory into fixed-size blocks called frames",
  },
  {
    /*46*/
    question: "What is segmentation in memory management?",
    options: ["Dividing the physical memory into fixed-size blocks", "Dividing the logical memory into variable-size blocks called segments", "Swapping fixed-size blocks between memory and disk", "A memory allocation technique where blocks are allocated contiguously"],
    correct: "Dividing the logical memory into variable-size blocks called segments",
  },
  {
    /*47*/
    question: "What is a Translation Lookaside Buffer (TLB)?",
    options: ["A cache for recently used data", "A cache for recently used memory address translations", "A buffer for storing instructions", "A buffer for I/O operations"],
    correct: "A cache for recently used memory address translations",
  },
  {
    /*48*/
    question: "What is a microcontroller?",
    options: ["A powerful microprocessor used in desktop computers", "A single integrated circuit that contains a CPU, memory, and peripherals", "A memory storage device", "A type of sensor"],
    correct: "A single integrated circuit that contains a CPU, memory, and peripherals",
  },
  {
    /*49*/
    question: "How does a microcontroller differ from a microprocessor?",
    options: ["A microcontroller has more processing power", "A microcontroller is a standalone chip with integrated peripherals", "A microprocessor has integrated peripherals", "There is no significant difference"],
    correct: "A microcontroller is a standalone chip with integrated peripherals",
  },
  {
    /*50*/
    question: "Which of the following is a common application of microcontrollers?",
    options: ["High-end gaming PCs", "Server farms", "Embedded systems like washing machines", "Large-scale data processing"],
    correct: "Embedded systems like washing machines",
  },
  {
    /*51*/
    question: "What is assembly language?",
    options: ["A high-level programming language", "A low-level programming language that is specific to a particular computer architecture", "A language used for web development", "A language used for database management"],
    correct: "A low-level programming language that is specific to a particular computer architecture",
  },
  {
    /*52*/
    question: "What is an assembler?",
    options: ["A program that translates high-level language to machine code", "A program that translates assembly language to machine code", "A program that links different object files", "A program that executes machine code"],
    correct: "A program that translates assembly language to machine code",
  },
  {
    /*53*/
    question: "What is instruction cycle?",
    options: ["The time it takes to fetch an operand", "The sequence of steps that a CPU goes through to execute a single instruction", "The rate at which instructions are fetched", "The total time a program takes to run"],
    correct: "The sequence of steps that a CPU goes through to execute a single instruction",
  },
  {
    /*54*/
    question: "What are the basic phases of an instruction cycle?",
    options: ["Fetch, Decode, Execute", "Fetch, Execute, Store", "Decode, Execute, Write", "Read, Process, Write"],
    correct: "Fetch, Decode, Execute",
  },
  {
    /*55*/
    question: "What is the fetch cycle?",
    options: ["The process of retrieving data from memory", "The process of retrieving an instruction from memory", "The process of performing an arithmetic operation", "The process of storing the result of an operation"],
    correct: "The process of retrieving an instruction from memory",
  },
  {
    /*56*/
    question: "What is the decode cycle?",
    options: ["The process of converting data into a different format", "The process of interpreting the instruction to determine what operation needs to be performed", "The process of writing data to memory", "The process of generating control signals"],
    correct: "The process of interpreting the instruction to determine what operation needs to be performed",
  },
  {
    /*57*/
    question: "What is the execute cycle?",
    options: ["The process of fetching the next instruction", "The process of performing the operation specified by the instruction", "The process of determining the address of the operand", "The process of storing the instruction in a register"],
    correct: "The process of performing the operation specified by the instruction",
  },
  {
    /*58*/
    question: "What are status flags in a microprocessor?",
    options: ["Registers that store data values", "Bits that indicate the result of an operation or the status of the processor", "Signals that control the flow of data", "Memory locations used for temporary storage"],
    correct: "Bits that indicate the result of an operation or the status of the processor",
  },
  {
    /*59*/
    question: "Which of the following is a common status flag?",
    options: ["Address flag", "Data flag", "Carry flag", "Instruction flag"],
    correct: "Carry flag",
  },
  {
    /*60*/
    question: "What is memory-mapped I/O?",
    options: ["A technique where I/O devices are assigned specific memory addresses", "A method of accessing memory directly from I/O devices", "A way to increase the speed of memory access for I/O operations", "A type of memory used exclusively for I/O"],
    correct: "A technique where I/O devices are assigned specific memory addresses",
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