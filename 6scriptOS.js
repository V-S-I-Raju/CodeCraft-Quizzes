let quizData = [
  {
      /*1*/
      question: "What is an operating system?",
      options: ["A type of hardware", "A set of application programs", "Software that manages computer hardware and software resources", "A networking protocol"],
      correct: "Software that manages computer hardware and software resources"
  },
  {
      /*2*/
      question: "Which of the following is NOT a function of an operating system?",
      options: ["Memory management", "Process management", "File management", "Compiler design"],
      correct: "Compiler design"
  },
  {
      /*3*/
      question: "What is a kernel?",
      options: ["The outermost layer of an OS", "The smallest unit of memory allocation", "The core component of the OS that manages system resources", "A type of virus"],
      correct: "The core component of the OS that manages system resources"
  },
  {
      /*4*/
      question: "What is a process?",
      options: ["A program in secondary storage", "A single thread of execution", "An instance of a program being executed", "A type of file"],
      correct: "An instance of a program being executed"
  },
  {
      /*5*/
      question: "What is process scheduling?",
      options: ["Allocating memory to processes", "Determining which process gets to use the CPU at a given time", "Managing files used by processes", "Creating new processes"],
      correct: "Determining which process gets to use the CPU at a given time"
  },
  {
      /*6*/
      question: "Which of the following is a common process scheduling algorithm?",
      options: ["Bubble Sort", "Binary Search", "First-Come, First-Served (FCFS)", "Merge Sort"],
      correct: "First-Come, First-Served (FCFS)"
  },
  {
      /*7*/
      question: "What is a thread?",
      options: ["A heavyweight process", "A separate address space", "A lightweight subprocess that can run concurrently within a process", "A type of hardware interrupt"],
      correct: "A lightweight subprocess that can run concurrently within a process"
  },
  {
      /*8*/
      question: "What is multithreading?",
      options: ["Running multiple processes concurrently", "Executing multiple threads within a single process concurrently", "Using multiple CPUs", "Running programs sequentially"],
      correct: "Executing multiple threads within a single process concurrently"
  },
  {
      /*9*/
      question: "What is concurrency?",
      options: ["True parallel execution", "Interleaved execution of multiple tasks that appear to happen simultaneously", "Sequential execution of tasks", "Execution on a single-core processor only"],
      correct: "Interleaved execution of multiple tasks that appear to happen simultaneously"
  },
  {
      /*10*/
      question: "What is parallelism?",
      options: ["Interleaved execution", "Simultaneous execution of multiple tasks on multiple processors", "Sequential execution on a single processor", "A type of scheduling algorithm"],
      correct: "Simultaneous execution of multiple tasks on multiple processors"
  },
  {
      /*11*/
      question: "What is a deadlock?",
      options: ["A process that has terminated", "A condition where two or more processes are blocked indefinitely, waiting for each other", "A memory overflow error", "A CPU scheduling error"],
      correct: "A condition where two or more processes are blocked indefinitely, waiting for each other"
  },
  {
      /*12*/
      question: "Which of the following is a necessary condition for a deadlock to occur?",
      options: ["Preemption", "Resource sharing", "Mutual exclusion", "No waiting"],
      correct: "Mutual exclusion"
  },
  {
      /*13*/
      question: "What is memory management?",
      options: ["Managing the CPU usage by processes", "Allocating and deallocating memory space to processes", "Organizing files in the file system", "Controlling input/output devices"],
      correct: "Allocating and deallocating memory space to processes"
  },
  {
      /*14*/
      question: "What is paging?",
      options: ["Dividing memory into variable-sized blocks", "Dividing memory into fixed-sized blocks called pages", "Swapping entire processes in and out of memory", "A memory allocation scheme where blocks are contiguous"],
      correct: "Dividing memory into fixed-sized blocks called pages"
  },
  {
      /*15*/
      question: "What is segmentation?",
      options: ["Dividing memory into fixed-sized blocks", "Dividing memory into logical units called segments, which can be of variable size", "A memory protection mechanism", "A method of file organization"],
      correct: "Dividing memory into logical units called segments, which can be of variable size"
  },
  {
      /*16*/
      question: "What is virtual memory?",
      options: ["Physically present RAM", "A technique that allows a system to execute programs larger than the physical memory by using disk space", "Cache memory", "ROM"],
      correct: "A technique that allows a system to execute programs larger than the physical memory by using disk space"
  },
  {
      /*17*/
      question: "What is a page fault?",
      options: ["An error in the operating system code", "An attempt to access a page that is not currently in RAM", "A disk read error", "A CPU error"],
      correct: "An attempt to access a page that is not currently in RAM"
  },
  {
      /*18*/
      question: "Which of the following is a page replacement algorithm?",
      options: ["Shortest Job First (SJF)", "Round Robin", "Least Recently Used (LRU)", "First-Fit"],
      correct: "Least Recently Used (LRU)"
  },
  {
      /*19*/
      question: "What is file management?",
      options: ["Managing the CPU usage", "Organizing, storing, retrieving, and manipulating files", "Allocating memory to processes", "Controlling peripheral devices"],
      correct: "Organizing, storing, retrieving, and manipulating files"
  },
  {
      /*20*/
      question: "What is a file system?",
      options: ["A part of the kernel that manages processes", "A structure that organizes and manages files on a storage device", "A type of memory", "A network protocol for file sharing"],
      correct: "A structure that organizes and manages files on a storage device"
  },
  {
      /*21*/
      question: "Which of the following is a common file system?",
      options: ["HTTP", "TCP/IP", "FAT32", "RAM"],
      correct: "FAT32"
  },
  {
      /*22*/
      question: "What is a directory (folder)?",
      options: ["A type of file that contains data", "A container that organizes files and other directories", "A physical storage location on a disk", "A memory address"],
      correct: "A container that organizes files and other directories"
  },
  {
      /*23*/
      question: "What are file permissions?",
      options: ["The physical size of a file", "Rules that determine who can access and modify a file", "The date and time a file was created", "The type of file"],
      correct: "Rules that determine who can access and modify a file"
  },
  {
      /*24*/
      question: "What is input/output (I/O) management?",
      options: ["Managing the CPU", "Controlling communication between the computer and peripheral devices", "Managing memory allocation", "Scheduling processes"],
      correct: "Controlling communication between the computer and peripheral devices"
  },
  {
      /*25*/
      question: "What is a device driver?",
      options: ["A hardware component", "Software that enables the operating system to interact with a hardware device", "A type of memory controller", "A networking device"],
      correct: "Software that enables the operating system to interact with a hardware device"
  },
  {
      /*26*/
      question: "What is buffering?",
      options: ["A CPU scheduling technique", "Temporarily storing data in a buffer to handle differences in data transfer rates", "A memory allocation strategy", "A file system optimization"],
      correct: "Temporarily storing data in a buffer to handle differences in data transfer rates"
  },
  {
      /*27*/
      question: "What is spooling?",
      options: ["Simultaneous Peripheral Operations On-Line", "A method of queuing jobs for a peripheral device like a printer", "A memory management technique for large files", "A type of network communication"],
      correct: "A method of queuing jobs for a peripheral device like a printer"
  },
  {
      /*28*/
      question: "What is a real-time operating system (RTOS)?",
      options: ["An OS designed for general-purpose computing", "An OS designed for applications with strict time constraints", "An OS for large server systems", "An OS for mobile devices"],
      correct: "An OS designed for applications with strict time constraints"
  },
  {
      /*29*/
      question: "What is a distributed operating system?",
      options: ["An OS for single-user systems", "An OS that manages a group of independent computers and makes them appear as a single coherent system", "An OS for embedded systems", "An OS that runs on a mainframe computer"],
      correct: "An OS that manages a group of independent computers and makes them appear as a single coherent system"
  },
  {
      /*30*/
      question: "What is a shell in an operating system?",
      options: ["The core of the operating system", "The user interface that allows users to interact with the OS", "A type of hardware component", "A file system structure"],
      correct: "The user interface that allows users to interact with the OS"
  },
  {
      /*31*/
      question: "What is a command-line interface (CLI)?",
      options: ["A graphical user interface", "An interface where users interact with the OS by typing commands", "A type of hardware input device", "A programming language"],
      correct: "An interface where users interact with the OS by typing commands"
  },
  {
      /*32*/
      question: "What is a graphical user interface (GUI)?",
      options: ["A text-based interface", "An interface where users interact with the OS using visual elements like windows and icons", "A type of printer", "A network protocol"],
      correct: "An interface where users interact with the OS using visual elements like windows and icons"
  },
  {
      /*33*/
      question: "What is system call?",
      options: ["A call from one user program to another", "A request from a user-level process to the operating system kernel", "A hardware interrupt", "A type of library function"],
      correct: "A request from a user-level process to the operating system kernel"
  },
  {
      /*34*/
      question: "What is a monolithic kernel?",
      options: ["A kernel where all OS services run in user space", "A kernel where most OS services run in the kernel space", "A very small kernel", "A kernel for real-time systems"],
      correct: "A kernel where most OS services run in the kernel space"
  },
  {
      /*35*/
      question: "What is a microkernel?",
      options: ["A large kernel with many services", "A kernel that provides minimal services, with other services running in user space", "A kernel for embedded systems", "A kernel for distributed systems"],
      correct: "A kernel that provides minimal services, with other services running in user space"
  },
  {
      /*36*/
      question: "What is a hybrid kernel?",
      options: ["A kernel that combines features of monolithic and microkernels", "A very simple kernel", "A kernel for single-user systems", "A kernel that runs only on specific hardware"],
      correct: "A kernel that combines features of monolithic and microkernels"
  },
  {
      /*37*/
      question: "What is context switching?",
      options: ["Switching between different user accounts", "Saving the state of one process and loading the saved state of another process", "Switching between different files", "Changing the priority of a process"],
      correct: "Saving the state of one process and loading the saved state of another process"
  },
  {
      /*38*/
      question: "What is thrashing?",
      options: ["Excessive swapping of pages between memory and disk, leading to low CPU utilization", "A type of disk failure", "A CPU overheating issue", "A network congestion problem"],
      correct: "Excessive swapping of pages between memory and disk, leading to low CPU utilization"
  },
  {
      /*39*/
      question: "What is memory fragmentation?",
      options: ["A condition where memory is fully utilized", "A condition where available memory is broken into small, non-contiguous blocks", "A type of memory error", "A technique to improve memory access time"],
      correct: "A condition where available memory is broken into small, non-contiguous blocks"
  },
  {
      /*40*/
      question: "What is internal fragmentation?",
      options: ["Memory allocated to a process is larger than needed, and the extra space within the partition is wasted", "Available memory is broken into small pieces that are too small to satisfy requests", "Fragmentation within the file system", "Fragmentation in virtual memory"],
      correct: "Memory allocated to a process is larger than needed, and the extra space within the partition is wasted"
  },
  {
      /*41*/
      question: "What is external fragmentation?",
      options: ["Wasted space within allocated memory partitions", "Total memory space exists to satisfy a request, but it is not contiguous", "Fragmentation in secondary storage", "Fragmentation in the CPU cache"],
      correct: "Total memory space exists to satisfy a request, but it is not contiguous"
  },
  {
      /*42*/
      question: "What is compaction?",
      options: ["A memory allocation technique where blocks are non-contiguous", "A memory management technique to reduce external fragmentation by moving allocated memory to create larger contiguous free blocks", "A disk defragmentation process", "A method to compress data in memory"],
      correct: "A memory management technique to reduce external fragmentation by moving allocated memory to create larger contiguous free blocks"
  },
  {
      /*43*/
      question: "What is memory protection?",
      options: ["Protecting the physical memory from damage", "Preventing one process from accessing the memory space of another process", "Increasing the speed of memory access", "Allocating more memory to important processes"],
      correct: "Preventing one process from accessing the memory space of another process"
  },
  {
      /*44*/
      question: "What is a semaphore?",
      options: ["A signaling mechanism used to control access to shared resources in a concurrent system", "A type of memory address", "A CPU scheduling algorithm", "A file access control method"],
      correct: "A signaling mechanism used to control access to shared resources in a concurrent system"
  },
  {
      /*45*/
      question: "What is a mutex?",
      options: ["A type of semaphore that allows multiple processes to access a resource simultaneously", "A locking mechanism that allows only one process to access a shared resource at a time", "A memory management unit", "A process scheduling priority"],
      correct: "A locking mechanism that allows only one process to access a shared resource at a time"
  },
  {
      /*46*/
      question: "What is starvation in the context of operating systems?",
      options: ["A process that consumes excessive CPU time", "A condition where a process is indefinitely denied necessary resources", "A memory leak", "A disk space issue"],
      correct: "A condition where a process is indefinitely denied necessary resources"
  },
  {
      /*47*/
      question: "What is aging in scheduling algorithms?",
      options: ["Reducing the priority of processes that have run for a long time", "Increasing the priority of processes that have been waiting for a long time", "Giving the same priority to all processes", "Removing old processes from the system"],
      correct: "Increasing the priority of processes that have been waiting for a long time"
  },
  {
      /*48*/
      question: "What is a distributed file system?",
      options: ["A file system on a single machine", "A file system that allows access to files stored on multiple networked computers", "A file system for real-time systems", "A file system for embedded devices"],
      correct: "A file system that allows access to files stored on multiple networked computers"
  },
  {
      /*49*/
      question: "What is network operating system?",
      options: ["An OS for personal computers", "An OS that provides support for network connectivity and services", "An OS for mainframe computers", "An OS for mobile devices"],
      correct: "An OS that provides support for network connectivity and services"
  },
  {
    /*50*/
    question: "What is a virtual machine?",
    options: ["A physical computer", "A software-based emulation of a computer system", "A type of operating system", "A high-speed network device"],
    correct: "A software-based emulation of a computer system"
  },
  {
    /*51*/
    question: "What is a hypervisor?",
    options: ["A type of application software", "Software that creates and runs virtual machines", "The kernel of an operating system", "A network management tool"],
    correct: "Software that creates and runs virtual machines"
  },
  {
    /*52*/
    question: "What is a container in the context of operating systems?",
    options: ["A type of physical storage device", "A lightweight, isolated environment for running applications", "A heavy-weight virtual machine", "A network security tool"],
    correct: "A lightweight, isolated environment for running applications"
  },
  {
    /*53*/
    question: "Which of the following is a popular containerization platform?",
    options: ["VMware", "VirtualBox", "Docker", "Hyper-V"],
    correct: "Docker"
  },
  {
    /*54*/
    question: "What is cloud computing?",
    options: ["Running applications on a local desktop", "Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”)", "Using physical servers in an office", "A type of embedded system"],
    correct: "Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”)"
  },
  {
    /*55*/
    question: "What is a security vulnerability in an operating system?",
    options: ["A feature that enhances user experience", "A weakness in the OS that can be exploited by attackers", "A type of hardware failure", "A normal operating condition"],
    correct: "A weakness in the OS that can be exploited by attackers"
  },
  {
    /*56*/
    question: "What is a firewall?",
    options: ["A piece of hardware that cools the CPU", "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules", "A type of antivirus software", "A tool for managing files"],
    correct: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules"
  },
  {
    /*57*/
    question: "What is an access control list (ACL)?",
    options: ["A list of all users on a system", "A list of permissions attached to an object, specifying which users or system processes are granted access to those objects and what operations are allowed on given objects", "A list of all running processes", "A list of available network resources"],
    correct: "A list of permissions attached to an object, specifying which users or system processes are granted access to those objects and what operations are allowed on given objects"
  },
  {
    /*58*/
    question: "What is encryption?",
    options: ["A method of compressing files", "The process of encoding information so that only authorized parties can understand it", "A way to speed up data transfer", "A technique for error detection"],
    correct: "The process of encoding information so that only authorized parties can understand it"
  },
  {
    /*59*/
    question: "What is authentication?",
    options: ["The process of granting access to resources", "The process of verifying the identity of a user or process", "A method of backing up data", "A way to optimize system performance"],
    correct: "The process of verifying the identity of a user or process"
  },
  {
    /*60*/
    question: "What is authorization?",
    options: ["Verifying the identity of a user", "Determining what actions a user or process is allowed to perform", "Encrypting sensitive data", "Monitoring system resources"],
    correct: "Determining what actions a user or process is allowed to perform"
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