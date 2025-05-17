let quizData = [
  {
      /*1*/
      question: "What is the primary goal of system programming?",
      options: ["Developing end-user applications", "Creating software that directly interacts with computer hardware", "Designing user interfaces", "Managing network infrastructure"],
      correct: "Creating software that directly interacts with computer hardware"
  },
  {
      /*2*/
      question: "Which programming language is most commonly used for system programming?",
      options: ["Python", "Java", "C", "JavaScript"],
      correct: "C"
  },
  {
      /*3*/
      question: "What is a system call?",
      options: ["A function call within a user program", "A request from a user-level process to the operating system kernel", "A call between different hardware components", "A networking function"],
      correct: "A request from a user-level process to the operating system kernel"
  },
  {
      /*4*/
      question: "Which of the following is a common system call related to file I/O?",
      options: ["printf()", "scanf()", "open()", "malloc()"],
      correct: "open()"
  },
  {
      /*5*/
      question: "What is the purpose of the `fork()` system call in Unix-like systems?",
      options: ["To terminate a process", "To create a new process that is a copy of the calling process", "To change the priority of a process", "To load a new program into the current process"],
      correct: "To create a new process that is a copy of the calling process"
  },
  {
      /*6*/
      question: "What is the purpose of the `exec()` family of system calls?",
      options: ["To create a new thread", "To replace the current process's image with a new program", "To send a signal to another process", "To allocate memory"],
      correct: "To replace the current process's image with a new program"
  },
  {
      /*7*/
      question: "What is inter-process communication (IPC)?",
      options: ["Communication between different threads within the same process", "Communication between different processes", "Communication between different computers on a network", "Communication between the CPU and peripheral devices"],
      correct: "Communication between different processes"
  },
  {
      /*8*/
      question: "Which of the following is an IPC mechanism?",
      options: ["Function calls", "Loops", "Pipes", "Variables"],
      correct: "Pipes"
  },
  {
      /*9*/
      question: "What is a pipe in the context of IPC?",
      options: ["A variable shared between processes", "A direct communication link between two unrelated processes", "A unidirectional data channel that can be used to send data between related processes", "A mechanism for synchronizing threads"],
      correct: "A unidirectional data channel that can be used to send data between related processes"
  },
  {
      /*10*/
      question: "What are signals in Unix-like systems?",
      options: ["Data packets sent over a network", "Software interrupts used to notify a process of an event", "Functions used for inter-thread communication", "Memory addresses used for shared memory"],
      correct: "Software interrupts used to notify a process of an event"
  },
  {
      /*11*/
      question: "What is shared memory in IPC?",
      options: ["Memory that is exclusively used by a single process", "A region of memory that can be accessed by multiple processes", "Memory allocated on a network server", "Temporary storage used by the CPU"],
      correct: "A region of memory that can be accessed by multiple processes"
  },
  {
      /*12*/
      question: "What are message queues in IPC?",
      options: ["Queues used for managing threads", "Linked lists used for storing file metadata", "Data structures that allow processes to exchange messages", "Arrays used for storing environment variables"],
      correct: "Data structures that allow processes to exchange messages"
  },
  {
      /*13*/
      question: "What is a semaphore used for in system programming?",
      options: ["Managing file permissions", "Controlling access to shared resources by multiple processes or threads", "Handling network connections", "Allocating memory dynamically"],
      correct: "Controlling access to shared resources by multiple processes or threads"
  },
  {
      /*14*/
      question: "What is a mutex?",
      options: ["A type of semaphore that allows multiple processes to access a resource", "A locking mechanism that allows only one process or thread to access a shared resource at a time", "A mechanism for sending signals between processes", "A region of shared memory"],
      correct: "A locking mechanism that allows only one process or thread to access a shared resource at a time"
  },
  {
      /*15*/
      question: "What is a device driver?",
      options: ["A hardware component that controls peripheral devices", "Software that enables the operating system to interact with a hardware device", "A program that tests the functionality of a hardware device", "A utility for managing disk space"],
      correct: "Software that enables the operating system to interact with a hardware device"
  },
  {
      /*16*/
      question: "In system programming, what is memory management?",
      options: ["Organizing files on a disk", "Allocating and deallocating memory to processes", "Managing network connections", "Controlling CPU scheduling"],
      correct: "Allocating and deallocating memory to processes"
  },
  {
      /*17*/
      question: "What is dynamic memory allocation?",
      options: ["Allocating memory at compile time", "Allocating memory during the execution of a program", "Allocating a fixed amount of memory at the start", "Memory allocation managed by the hardware"],
      correct: "Allocating memory during the execution of a program"
  },
  {
      /*18*/
      question: "Which standard library function in C is used for dynamic memory allocation?",
      options: ["printf()", "scanf()", "malloc()", "fopen()"],
      correct: "malloc()"
  },
  {
      /*19*/
      question: "Which standard library function in C is used to release dynamically allocated memory?",
      options: ["allocate()", "deallocate()", "free()", "release()"],
      correct: "free()"
  },
  {
      /*20*/
      question: "What is a memory leak?",
      options: ["A condition where a program uses more memory than available", "Failure to release dynamically allocated memory, leading to wasted resources", "Corruption of data in memory", "Accessing memory outside the allocated bounds"],
      correct: "Failure to release dynamically allocated memory, leading to wasted resources"
  },
  {
      /*21*/
      question: "What is the stack in memory management?",
      options: ["Memory used for long-term storage", "A region of memory used for function calls and local variables", "Memory allocated for global variables", "Memory used for inter-process communication"],
      correct: "A region of memory used for function calls and local variables"
  },
  {
      /*22*/
      question: "What is the heap in memory management?",
      options: ["Memory used for static data", "A region of memory used for dynamic memory allocation", "Memory used for storing program instructions", "Memory used for kernel data structures"],
      correct: "A region of memory used for dynamic memory allocation"
  },
  {
      /*23*/
      question: "What is a linker in the compilation process?",
      options: ["A program that translates source code to assembly code", "A program that translates assembly code to machine code", "A program that combines object files and libraries into an executable file", "A program that checks for syntax errors in the source code"],
      correct: "A program that combines object files and libraries into an executable file"
  },
  {
      /*24*/
      question: "What is a loader in the context of system programming?",
      options: ["A program that loads the operating system kernel into memory", "A program that loads an executable file into memory for execution", "A program that loads device drivers", "A program that loads data into registers"],
      correct: "A program that loads an executable file into memory for execution"
  },
  {
      /*25*/
      question: "What are environment variables?",
      options: ["Variables used only within a specific function", "Dynamic named values that can affect the way running processes will behave on a computer", "Variables that store the state of the hardware", "Variables used for network configuration"],
      correct: "Dynamic named values that can affect the way running processes will behave on a computer"
  },
  {
      /*26*/
      question: "Which function is commonly used in C to access environment variables?",
      options: ["getenv()", "setenv()", "printenv()", "accessenv()"],
      correct: "getenv()"
  },
  {
      /*27*/
      question: "What is file I/O in system programming?",
      options: ["Input and output operations related to network sockets", "Operations for reading from and writing to files", "Communication between different processes", "Interaction with peripheral devices"],
      correct: "Operations for reading from and writing to files"
  },
  {
      /*28*/
      question: "Which function is used in C to open a file?",
      options: ["read()", "write()", "fopen()", "close()"],
      correct: "fopen()"
  },
  {
      /*29*/
      question: "Which function is used in C to read data from a file?",
      options: ["fopen()", "fwrite()", "fread()", "fclose()"],
      correct: "fread()"
  },
  {
      /*30*/
      question: "Which function is used in C to write data to a file?",
      options: ["fopen()", "fread()", "fwrite()", "fclose()"],
      correct: "fwrite()"
  },
  {
      /*31*/
      question: "Which function is used in C to close a file?",
      options: ["open()", "read()", "write()", "fclose()"],
      correct: "fclose()"
  },
  {
      /*32*/
      question: "What is a file descriptor?",
      options: ["A pointer to a file structure", "A non-negative integer that uniquely identifies an open file in the operating system", "The name of a file", "The size of a file"],
      correct: "A non-negative integer that uniquely identifies an open file in the operating system"
  },
  {
      /*33*/
      question: "What are standard input, standard output, and standard error?",
      options: ["Specific memory locations used by a program", "Default input, output, and error streams associated with a process", "Types of files used for system configuration", "Network protocols for data transfer"],
      correct: "Default input, output, and error streams associated with a process"
  },
  {
      /*34*/
      question: "In Unix-like systems, what is the file descriptor for standard input?",
      options: ["0", "1", "2", "-1"],
      correct: "0"
  },
  {
      /*35*/
      question: "In Unix-like systems, what is the file descriptor for standard output?",
      options: ["0", "1", "2", "-1"],
      correct: "1"
  },
  {
      /*36*/
      question: "In Unix-like systems, what is the file descriptor for standard error?",
      options: ["0", "1", "2", "-1"],
      correct: "2"
  },
  {
      /*37*/
      question: "What is redirection in the context of command-line interfaces?",
      options: ["Changing the current directory", "Altering the flow of execution of a program", "Changing the source or destination of standard input, output, or error streams", "Renaming files"],
      correct: "Changing the source or destination of standard input, output, or error streams"
  },
  {
      /*38*/
      question: "What is piping in the context of command-line interfaces?",
      options: ["Sending the output of one command as the input to another command", "Executing multiple commands simultaneously", "Redirecting the output of a command to a file", "Reading input from multiple files"],
      correct: "Sending the output of one command as the input to another command"
  },
  {
      /*39*/
      question: "What is a signal handler?",
      options: ["A function that processes network signals", "A function that is executed when a process receives a specific signal", "A hardware component that generates signals", "A system call used to send signals"],
      correct: "A function that is executed when a process receives a specific signal"
  },
  {
      /*40*/
      question: "Which system call is used to set up a signal handler in Unix-like systems?",
      options: ["signal()", "handler()", "catch()", "setsignal()"],
      correct: "signal()"
  },
  {
      /*41*/
      question: "What is a daemon process?",
      options: ["A process that runs in the foreground and interacts with the user", "A background process that is not under the direct control of a user", "A process that manages hardware devices", "A process that is part of the operating system kernel"],
      correct: "A background process that is not under the direct control of a user"
  },
  {
      /*42*/
      question: "What is a shell in an operating system?",
      options: ["The core of the operating system", "A command-line interpreter that allows users to interact with the OS", "A graphical user interface", "A network protocol"],
      correct: "A command-line interpreter that allows users to interact with the OS"
  },
  {
      /*43*/
      question: "What is the role of a compiler in system programming?",
      options: ["To execute machine code", "To translate high-level system programming languages into machine code or assembly code", "To link object files", "To load programs into memory"],
      correct: "To translate high-level system programming languages into machine code or assembly code"
  },
  {
      /*44*/
      question: "What is the role of an assembler in system programming?",
      options: ["To translate high-level code to machine code", "To translate assembly language into machine code", "To link object files", "To debug machine code"],
      correct: "To translate assembly language into machine code"
  },
  {
      /*45*/
      question: "What is the purpose of a debugger in system programming?",
      options: ["To optimize the performance of system software", "To find and fix errors in system software", "To compile system software", "To manage system resources"],
      correct: "To find and fix errors in system software"
  },
  {
      /*46*/
      question: "Which of the following is a common debugging tool in Unix-like systems?",
      options: ["gcc", "make", "gdb", "vi"],
      correct: "gdb"
  },
  {
      /*47*/
      question: "What is the purpose of the `make` utility?",
      options: ["To compile source code", "To automate the build process of software", "To debug compiled code", "To manage file permissions"],
      correct: "To automate the build process of software"
  },
  {
      /*48*/
      question: "What is a library in system programming?",
      options: ["A collection of hardware drivers", "A collection of pre-compiled routines that can be used by programs", "A set of system calls", "A type of executable file"],
      correct: "A collection of pre-compiled routines that can be used by programs"
  },
  {
      /*49*/
      question: "What is the difference between static and dynamic libraries?",
      options: ["Static libraries are linked at runtime, dynamic libraries are linked at compile time", "Static libraries are part of the executable, dynamic libraries are loaded at runtime", "Static libraries are only used by the kernel, dynamic libraries are used by user programs", "There is no significant difference"],
      correct: "Static libraries are part of the executable, dynamic libraries are loaded at runtime"
  },
  {
      /*50*/
      question: "What is a system administrator?",
      options: ["A programmer who writes system software", "A person responsible for managing and maintaining computer systems and networks", "A hardware engineer", "A database administrator"],
      correct: "A person responsible for managing and maintaining computer systems and networks"
  },
  {
      /*51*/
      question: "What is kernel space?",
      options: ["The memory space used by user applications", "The memory space where the operating system kernel executes and manages system resources", "A dedicated area for storing user files", "A virtual memory region"],
      correct: "The memory space where the operating system kernel executes and manages system resources"
  },
  {
      /*52*/
      question: "What is user space?",
      options: ["The memory space where the operating system kernel resides", "The memory space where user applications execute", "A dedicated area for kernel modules", "A physical memory address range"],
      correct: "The memory space where user applications execute"
  },
  {
    /*53*/
    question: "What is the role of system calls in the interaction between user space and kernel space?",
    options: ["They allow direct access to hardware from user space", "They provide a controlled interface for user-level processes to request services from the kernel", "They are used for communication between different user processes", "They are used for managing virtual memory"],
    correct: "They provide a controlled interface for user-level processes to request services from the kernel"
  },
  {
    /*54*/
    question: "What is the purpose of the `ioctl()` system call in Unix-like systems?",
    options: ["To perform basic file input/output operations", "To perform device-specific input/output and control operations", "To manage network sockets", "To control process scheduling"],
    correct: "To perform device-specific input/output and control operations"
  },
  {
    /*55*/
    question: "What is a pseudo-device driver?",
    options: ["A driver for a physical hardware device", "A software layer that provides an interface similar to a hardware device but is implemented entirely in software", "A driver used only for testing purposes", "A driver for virtual machines"],
    correct: "A software layer that provides an interface similar to a hardware device but is implemented entirely in software"
  },
  {
    /*56*/
    question: "What is the role of the system clock?",
    options: ["To provide timing for the CPU and other hardware components", "To store the system's configuration settings", "To manage network traffic", "To control the flow of data between memory and peripherals"],
    correct: "To provide timing for the CPU and other hardware components"
  },
  {
    /*57*/
    question: "What is a real-time operating system (RTOS)?",
    options: ["An operating system designed for general-purpose computing", "An operating system designed for applications with strict time constraints", "An operating system for large server systems", "An operating system for mobile devices"],
    correct: "An operating system designed for applications with strict time constraints"
  },
  {
    /*58*/
    question: "In system programming for embedded systems, what is cross-compilation?",
    options: ["Compiling code on the target hardware itself", "Compiling code on a different platform than the target hardware", "Compiling code that can run on multiple operating systems", "Compiling code without any libraries"],
    correct: "Compiling code on a different platform than the target hardware"
  },
  {
    /*59*/
    question: "What is firmware?",
    options: ["Software that runs on a desktop operating system", "Low-level software embedded in hardware devices", "High-level application software", "Software used for network management"],
    correct: "Low-level software embedded in hardware devices"
  },
  {
    /*60*/
    question: "What is the role of system programming in cloud computing?",
    options: ["It is not relevant to cloud computing", "It involves developing the underlying infrastructure and management tools for cloud platforms", "It focuses on developing user applications for the cloud", "It deals with network configuration in the cloud"],
    correct: "It involves developing the underlying infrastructure and management tools for cloud platforms"
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