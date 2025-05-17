let quizData = [
  {
      /*1*/
      question: "Who developed the Java programming language?",
      options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
      correct: "James Gosling"
  },
  {
      /*2*/
      question: "What is the primary goal of the Java programming language?",
      options: ["To run on a specific operating system", "To be platform-independent", "To be primarily used for web development", "To have very low-level memory control"],
      correct: "To be platform-independent"
  },
  {
      /*3*/
      question: "Which of the following is NOT a primitive data type in Java?",
      options: ["int", "boolean", "char", "String"],
      correct: "String"
  },
  {
      /*4*/
      question: "What is the size of an `int` data type in Java?",
      options: ["16 bits", "32 bits", "64 bits", "Depends on the operating system"],
      correct: "32 bits"
  },
  {
      /*5*/
      question: "What is the keyword used to define a constant variable in Java?",
      options: ["static", "final", "const", "immutable"],
      correct: "final"
  },
  {
      /*6*/
      question: "What is the purpose of the `main` method in Java?",
      options: ["To define instance variables", "To handle exceptions", "The entry point for the Java Virtual Machine (JVM)", "To perform garbage collection"],
      correct: "The entry point for the Java Virtual Machine (JVM)"
  },
  {
      /*7*/
      question: "Which of the following is a valid declaration of the `main` method in Java?",
      options: ["public static void main()", "static public void main(String args)", "public void main(String[] args)", "public static void main(String[] args)"],
      correct: "public static void main(String[] args)"
  },
  {
      /*8*/
      question: "What is an object in Java?",
      options: ["A blueprint for creating instances", "A variable that stores data", "An instance of a class", "A method that performs an action"],
      correct: "An instance of a class"
  },
  {
      /*9*/
      question: "What is a class in Java?",
      options: ["An instance of an object", "A primitive data type", "A blueprint for creating objects", "A keyword used for loops"],
      correct: "A blueprint for creating objects"
  },
  {
      /*10*/
      question: "What is encapsulation in Java?",
      options: ["Hiding the implementation details of a class", "The ability of an object to take on many forms", "Deriving new classes from existing ones", "Performing operations on objects"],
      correct: "Hiding the implementation details of a class"
  },
  {
      /*11*/
      question: "What is inheritance in Java?",
      options: ["Hiding data within a class", "The ability to create new classes based on existing ones", "Performing the same action in different ways", "Creating instances of a class"],
      correct: "The ability to create new classes based on existing ones"
  },
  {
      /*12*/
      question: "What keyword is used to implement inheritance in Java?",
      options: ["implements", "extends", "inherits", "new"],
      correct: "extends"
  },
  {
      /*13*/
      question: "What is polymorphism in Java?",
      options: ["The ability to have multiple classes with the same name", "The ability of an object to take on many forms", "Hiding data within a class", "Creating new classes"],
      correct: "The ability of an object to take on many forms"
  },
  {
      /*14*/
      question: "What is method overloading in Java?",
      options: ["Defining multiple methods with the same name but different parameters within the same class", "Overriding a method in a subclass", "Calling a method from another class", "Defining a method with no parameters"],
      correct: "Defining multiple methods with the same name but different parameters within the same class"
  },
  {
      /*15*/
      question: "What is method overriding in Java?",
      options: ["Defining multiple methods with the same name in the same class", "Providing a specific implementation of a method in a subclass that is already defined in its superclass", "Calling a method of the superclass", "Defining a new method in a subclass"],
      correct: "Providing a specific implementation of a method in a subclass that is already defined in its superclass"
  },
  {
      /*16*/
      question: "What is an abstract class in Java?",
      options: ["A class that cannot be instantiated", "A class with all methods implemented", "A class that can only be used for inheritance", "A class with no methods"],
      correct: "A class that cannot be instantiated"
  },
  {
      /*17*/
      question: "What keyword is used to declare an abstract class in Java?",
      options: ["virtual", "abstract", "interface", "static"],
      correct: "abstract"
  },
  {
      /*18*/
      question: "What is an interface in Java?",
      options: ["A class with only concrete methods", "A blueprint of methods that a class can implement", "An instance of a class", "A way to define primitive data types"],
      correct: "A blueprint of methods that a class can implement"
  },
  {
      /*19*/
      question: "What keyword is used to implement an interface in Java?",
      options: ["extends", "inherits", "implements", "uses"],
      correct: "implements"
  },
  {
      /*20*/
      question: "What is a package in Java?",
      options: ["A way to store primitive data types", "A mechanism to group related classes and interfaces", "A keyword used for loops", "A tool for compiling Java code"],
      correct: "A mechanism to group related classes and interfaces"
  },
  {
      /*21*/
      question: "Which keyword is used to import a package in Java?",
      options: ["include", "using", "import", "package"],
      correct: "import"
  },
  {
      /*22*/
      question: "What is an exception in Java?",
      options: ["A normal event in the program execution", "An error that occurs at compile time", "An event that disrupts the normal flow of the program", "A warning message"],
      correct: "An event that disrupts the normal flow of the program"
  },
  {
      /*23*/
      question: "Which block is used to handle exceptions in Java?",
      options: ["try", "catch", "handle", "except"],
      correct: "catch"
  },
  {
      /*24*/
      question: "Which block is always executed, regardless of whether an exception is thrown or not?",
      options: ["try", "catch", "finally", "else"],
      correct: "finally"
  },
  {
      /*25*/
      question: "What is multithreading in Java?",
      options: ["Executing multiple programs simultaneously", "Executing multiple parts of the same program concurrently", "Running a program in the background", "Compiling code into bytecode"],
      correct: "Executing multiple parts of the same program concurrently"
  },
  {
      /*26*/
      question: "Which interface is used to create a thread in Java?",
      options: ["Runnable", "Threadable", "Executable", "Concurrent"],
      correct: "Runnable"
  },
  {
      /*27*/
      question: "Which method is used to start a thread in Java?",
      options: ["run()", "start()", "execute()", "init()"],
      correct: "start()"
  },
  {
      /*28*/
      question: "What is synchronization in multithreading?",
      options: ["Making threads run faster", "Controlling the access of multiple threads to shared resources", "Preventing the creation of new threads", "Terminating threads"],
      correct: "Controlling the access of multiple threads to shared resources"
  },
  {
      /*29*/
      question: "What is a deadlock in multithreading?",
      options: ["A situation where a thread terminates unexpectedly", "A situation where two or more threads are blocked indefinitely, waiting for each other", "A thread that is running too slowly", "A condition where all threads are actively executing"],
      correct: "A situation where two or more threads are blocked indefinitely, waiting for each other"
  },
  {
      /*30*/
      question: "What is garbage collection in Java?",
      options: ["A process of manually freeing up memory", "An automatic memory management process", "A technique for optimizing code execution", "A way to handle exceptions"],
      correct: "An automatic memory management process"
  },
  {
      /*31*/
      question: "Which keyword is used to explicitly suggest garbage collection to the JVM (though not guaranteed)?",
      options: ["collect()", "gc()", "free()", "release()"],
      correct: "gc()"
  },
  {
      /*32*/
      question: "What are Java Applets?",
      options: ["Standalone Java applications", "Small Java programs that run within a web browser", "Server-side Java programs", "Java programs for mobile devices"],
      correct: "Small Java programs that run within a web browser"
  },
  {
      /*33*/
      question: "What is JDBC used for in Java?",
      options: ["Creating graphical user interfaces", "Connecting to and interacting with databases", "Handling network communication", "Developing web applications"],
      correct: "Connecting to and interacting with databases"
  },
  {
      /*34*/
      question: "What does JVM stand for?",
      options: ["Java Virtual Machine", "Java Visual Machine", "Java Vector Machine", "Java Volatile Memory"],
      correct: "Java Virtual Machine"
  },
  {
      /*35*/
      question: "What is bytecode in Java?",
      options: ["The source code written by the programmer", "The machine code executed by the processor", "An intermediate code generated by the Java compiler", "Code that is specific to a particular operating system"],
      correct: "An intermediate code generated by the Java compiler"
  },
  {
      /*36*/
      question: "Which of the following is NOT a type of loop in Java?",
      options: ["for", "while", "do-while", "repeat-until"],
      correct: "repeat-until"
  },
  {
      /*37*/
      question: "What is the purpose of the `break` statement in a loop?",
      options: ["To skip the current iteration and continue to the next", "To terminate the loop immediately", "To go back to the beginning of the loop", "To execute the loop in reverse order"],
      correct: "To terminate the loop immediately"
  },
  {
      /*38*/
      question: "What is the purpose of the `continue` statement in a loop?",
      options: ["To terminate the loop", "To execute the next iteration of the loop", "To go to a specific label", "To exit the current method"],
      correct: "To execute the next iteration of the loop"
  },
  {
      /*39*/
      question: "What is an array in Java?",
      options: ["A single variable that can store multiple values of different types", "A collection of elements of the same data type stored in contiguous memory locations", "A class that can hold objects of any type", "A dynamic data structure that can grow or shrink in size"],
      correct: "A collection of elements of the same data type stored in contiguous memory locations"
  },
  {
      /*40*/
      question: "How do you declare an array of integers named `numbers` of size 5 in Java?",
      options: ["int numbers[5];", "int[] numbers = new int[5];", "array<int> numbers(5);", "int numbers = new array(5);"],
      correct: "int[] numbers = new int[5];"
  },
  {
      /*41*/
      question: "What is a String in Java?",
      options: ["A primitive data type", "A mutable sequence of characters", "An immutable sequence of characters", "An array of characters"],
      correct: "An immutable sequence of characters"
  },
  {
      /*42*/
      question: "Which method is used to compare two strings in Java for equality, ignoring case?",
      options: ["equals()", "equalsIgnoreCase()", "compareTo()", "compareIgnoreCase()"],
      correct: "equalsIgnoreCase()"
  },
  {
      /*43*/
      question: "What is a constructor in Java?",
      options: ["A method used to define the behavior of an object", "A special method used to initialize objects", "A method that returns the state of an object", "A method used to destroy objects"],
      correct: "A special method used to initialize objects"
  },
  {
      /*44*/
      question: "Can a class have multiple constructors in Java?",
      options: ["No", "Yes, through method overloading", "Yes, using a special keyword 'construct'", "Only if the class is abstract"],
      correct: "Yes, through method overloading"
  },
  {
      /*45*/
      question: "What is the default value of an instance variable of type `int` if it's not explicitly initialized?",
      options: ["null", "0", "undefined", "Depends on the JVM"],
      correct: "0"
  },
  {
      /*46*/
      question: "What is the difference between `==` and `.equals()` method in Java?",
      options: ["`==` compares the content, `.equals()` compares the references", "`==` compares the references, `.equals()` compares the content (for objects)", "Both compare the content", "Both compare the references"],
      correct: "`==` compares the references, `.equals()` compares the content (for objects)"
  },
  {
      /*47*/
      question: "What are static variables in Java?",
      options: ["Variables that are specific to each instance of a class", "Variables that are shared among all instances of a class", "Variables that cannot be modified", "Variables that are only accessible within a specific method"],
      correct: "Variables that are shared among all instances of a class"
  },
  {
      /*48*/
      question: "What are static methods in Java?",
      options: ["Methods that can only be called on specific instances of a class", "Methods that belong to the class itself rather than to any specific instance", "Methods that cannot be overridden", "Methods that are automatically executed when an object is created"],
      correct: "Methods that belong to the class itself rather than to any specific instance"
  },
  {
      /*49*/
      question: "What is the purpose of the `super` keyword in Java?",
      options: ["To refer to the current instance of the class", "To call a method of the superclass", "To define a static variable", "To create a new object"],
      correct: "To call a method of the superclass"
  },
  {
      /*50*/
      question: "What is the purpose of the `this` keyword in Java?",
      options: ["To refer to the superclass", "To refer to the current instance of the class", "To define a constant", "To create a new class"],
      correct: "To refer to the current instance of the class"
  },
  {
      /*51*/
      question: "What are inner classes in Java?",
      options: ["Classes defined outside of any other class", "Classes defined within another class", "Abstract classes", "Final classes"],
      correct: "Classes defined within another class"
  },
  {
      /*52*/
      question: "What is an anonymous inner class in Java?",
      options: ["An inner class with a name", "An inner class that is defined and instantiated in a single statement without a name", "A static inner class", "A private inner class"],
      correct: "An inner class that is defined and instantiated in a single statement without a name"
  },
  {
      /*53*/
      question: "What are lambda expressions in Java (introduced in Java 8)?",
      options: ["Anonymous methods", "Named methods", "Abstract methods", "Static methods"],
      correct: "Anonymous methods"
  },
  {
      /*54*/
      question: "What is a stream in Java 8?",
      options: ["A sequence of characters", "A sequence of elements supporting sequential and parallel aggregate operations", "A way to handle input/output", "A type of collection"],
      correct: "A sequence of elements supporting sequential and parallel aggregate operations"
  },
  {
    /*55*/
    question: "What is the purpose of the `transient` keyword in Java?",
    options: ["To make a variable persistent", "To indicate that a field should not be serialized", "To declare a constant variable", "To define a static variable"],
    correct: "To indicate that a field should not be serialized"
  },
  {
    /*56*/
    question: "What are annotations in Java (introduced in Java 5)?",
    options: ["Comments in the code", "Metadata about the code", "Keywords used for loops", "Ways to define variables"],
    correct: "Metadata about the code"
  },
  {
    /*57*/
    question: "What is reflection in Java?",
    options: ["The ability of a program to examine and modify its own structure and behavior at runtime", "A way to optimize code performance", "A technique for handling exceptions", "A method for creating graphical user interfaces"],
    correct: "The ability of a program to examine and modify its own structure and behavior at runtime"
  },
  {
    /*58*/
    question: "What is the Java Collections Framework?",
    options: ["A set of interfaces and classes for representing and manipulating collections of objects", "A way to handle input and output operations", "A framework for building web applications", "A set of tools for compiling Java code"],
    correct: "A set of interfaces and classes for representing and manipulating collections of objects"
  },
  {
    /*59*/
    question: "Which of the following is an interface in the Java Collections Framework?",
    options: ["ArrayList", "HashSet", "HashMap", "List"],
    correct: "List"
  },
  {
    /*60*/
    question: "Which of the following is a class in the Java Collections Framework?",
    options: ["Set", "Map", "Collection", "LinkedList"],
    correct: "LinkedList"
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