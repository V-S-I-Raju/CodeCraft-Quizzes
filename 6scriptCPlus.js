let quizData = [
  {
    /*1*/
    question: "Who developed the C++ language?",
    options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
    correct: "Bjarne Stroustrup",
  },
  {
    /*2*/
    question: "Which of the following is NOT a fundamental data type in C++?",
    options: ["int", "float", "char", "string"],
    correct: "string",
  },
  {
    /*3*/
    question: "What is the purpose of a constructor in C++?",
    options: ["To destroy objects", "To allocate memory for objects", "To initialize objects", "To define member functions"],
    correct: "To initialize objects",
  },
  {
    /*4*/
    question: "What is the purpose of a destructor in C++?",
    options: ["To initialize objects", "To allocate memory for objects", "To deallocate memory for objects", "To define member variables"],
    correct: "To deallocate memory for objects",
  },
  {
    /*5*/
    question: "What is operator overloading in C++?",
    options: ["Giving multiple meanings to an operator", "Creating new operators", "Changing the precedence of operators", "Using operators with different data types"],
    correct: "Giving multiple meanings to an operator",
  },
  {
    /*6*/
    question: "What is inheritance in C++?",
    options: ["Deriving new classes from existing classes", "Creating objects of a class", "Defining member functions", "Allocating memory for objects"],
    correct: "Deriving new classes from existing classes",
  },
  {
    /*7*/
    question: "What is polymorphism in C++?",
    options: ["The ability of an object to take on many forms", "The ability to define multiple constructors", "The ability to overload operators", "The ability to use virtual functions"],
    correct: "The ability of an object to take on many forms",
  },
  {
    /*8*/
    question: "What are virtual functions in C++?",
    options: ["Functions that are defined inside a class", "Functions that can be called without creating an object", "Functions that can be overridden in derived classes", "Functions that are used for memory management"],
    correct: "Functions that can be overridden in derived classes",
  },
  {
    /*9*/
    question: "What are abstract classes in C++?",
    options: ["Classes that cannot have objects", "Classes with all member functions defined", "Classes that are used for inheritance only", "Classes with at least one pure virtual function"],
    correct: "Classes with at least one pure virtual function",
  },
  {
    /*10*/
    question: "What are pure virtual functions in C++?",
    options: ["Virtual functions that are defined outside the class", "Virtual functions that must be overridden in derived classes", "Virtual functions that cannot be overridden", "Virtual functions used for dynamic memory allocation"],
    correct: "Virtual functions that must be overridden in derived classes",
  },
  {
    /*11*/
    question: "What are templates in C++?",
    options: ["Blueprints for creating generic classes and functions", "Keywords used for exception handling", "Mechanisms for code modularity", "Features for runtime polymorphism"],
    correct: "Blueprints for creating generic classes and functions",
  },
  {
    /*12*/
    question: "What is exception handling in C++?",
    options: ["A way to handle errors during compilation", "A mechanism to deal with runtime errors", "A feature for memory management", "A technique for code optimization"],
    correct: "A mechanism to deal with runtime errors",
  },
  {
    /*13*/
    question: "What are namespaces in C++?",
    options: ["Regions for declaring variables", "Scopes for identifiers to avoid naming conflicts", "Keywords for loop control", "Mechanisms for file input/output"],
    correct: "Scopes for identifiers to avoid naming conflicts",
  },
  {
    /*14*/
    question: "What are friend functions in C++?",
    options: ["Functions that can access private members of a class", "Member functions of a class", "Functions that are defined outside a class", "Static member functions"],
    correct: "Functions that can access private members of a class",
  },
  {
    /*15*/
    question: "What are static members of a class in C++?",
    options: ["Members that are specific to each object", "Members that belong to the class as a whole", "Members that can only be accessed by friend functions", "Members that are used for constant values"],
    correct: "Members that belong to the class as a whole",
  },
  {
    /*16*/
    question: "What is the difference between pass by value and pass by reference in C++?",
    options: ["Pass by value modifies the original variable, while pass by reference creates a copy", "Pass by reference modifies the original variable, while pass by value creates a copy", "Pass by value is faster than pass by reference", "Pass by reference is only used for objects"],
    correct: "Pass by reference modifies the original variable, while pass by value creates a copy",
  },
  {
    /*17*/
    question: "What is a pointer in C++?",
    options: ["A variable that stores a memory address", "A keyword used for loops", "A function that returns a value", "A data type for storing integers"],
    correct: "A variable that stores a memory address",
  },
  {
    /*18*/
    question: "What is the difference between `new` and `malloc` in C++?",
    options: ["`new` is a function, `malloc` is an operator", "`new` calls constructors and destructors, `malloc` does not", "`malloc` is type-safe, `new` is not", "There is no difference between them"],
    correct: "`new` calls constructors and destructors, `malloc` does not",
  },
  {
    /*19*/
    question: "What is the purpose of the `const` keyword in C++?",
    options: ["To define constant variables", "To make member functions modifiable", "To declare virtual functions", "To specify the scope of a variable"],
    correct: "To define constant variables",
  },
  {
    /*20*/
    question: "What is the Standard Template Library (STL) in C++?",
    options: ["A library for file input/output", "A collection of classes and functions for common data structures and algorithms", "A library for graphical user interfaces", "A set of keywords for memory management"],
    correct: "A collection of classes and functions for common data structures and algorithms",
  },
  {
    /*21*/
    question: "Which of the following is a container in the C++ STL?",
    options: ["cout", "cin", "vector", "main"],
    correct: "vector",
  },
  {
    /*22*/
    question: "Which of the following is an algorithm in the C++ STL?",
    options: ["class", "template", "sort", "namespace"],
    correct: "sort",
  },
  {
    /*23*/
    question: "What are iterators in C++ STL?",
    options: ["Pointers to elements in containers", "Keywords for loop control", "Functions for input/output", "Classes for exception handling"],
    correct: "Pointers to elements in containers",
  },
  {
    /*24*/
    question: "What is function overloading?",
    options: ["Defining multiple functions with the same name but different parameters", "Defining a function inside another function", "Calling a function recursively", "Giving multiple names to the same function"],
    correct: "Defining multiple functions with the same name but different parameters",
  },
  {
    /*25*/
    question: "What is operator precedence?",
    options: ["The order in which operators are evaluated", "The number of operands an operator takes", "The associativity of operators", "The different types of operators"],
    correct: "The order in which operators are evaluated",
  },
  {
    /*26*/
    question: "What is the scope resolution operator in C++?",
    options: ["`::`", "`:`", "`.`", "`->`"],
    correct: "`::`",
  },
  {
    /*27*/
    question: "What is a reference variable in C++?",
    options: ["An alias for an existing variable", "A pointer to a variable", "A constant variable", "A global variable"],
    correct: "An alias for an existing variable",
  },
  {
    /*28*/
    question: "What is dynamic memory allocation in C++?",
    options: ["Allocating memory at compile time", "Allocating memory at runtime", "Allocating memory in the stack", "Allocating memory for static variables"],
    correct: "Allocating memory at runtime",
  },
  {
    /*29*/
    question: "What is the purpose of the `inline` keyword in C++?",
    options: ["To define inline functions that may be expanded at the point of call", "To declare variables inside a loop", "To define functions outside a class", "To specify the return type of a function"],
    correct: "To define inline functions that may be expanded at the point of call",
  },
  {
    /*30*/
    question: "What is the difference between a structure and a class in C++?",
    options: ["Structures have private members by default, classes have public members by default", "Classes have private members by default, structures have public members by default", "Structures can have member functions, classes cannot", "Classes can have data members, structures cannot"],
    correct: "Classes have private members by default, structures have public members by default",
  },
  {
    /*31*/
    question: "What is a friend class in C++?",
    options: ["A class that cannot access private members of another class", "A class that can access private members of another class", "A base class", "A derived class"],
    correct: "A class that can access private members of another class",
  },
  {
    /*32*/
    question: "What is the order of execution of constructors in multiple inheritance?",
    options: ["Base class constructors are called in the order of their declaration", "Derived class constructor is called first", "Constructors are called in reverse order of declaration", "Order is not guaranteed"],
    correct: "Base class constructors are called in the order of their declaration",
  },
  {
    /*33*/
    question: "What is the order of execution of destructors in multiple inheritance?",
    options: ["Base class destructors are called in the order of their declaration", "Derived class destructor is called first", "Destructors are called in reverse order of declaration", "Order is not guaranteed"],
    correct: "Destructors are called in reverse order of declaration",
  },
  {
    /*34*/
    question: "What is early binding (static binding) in C++?",
    options: ["Binding function calls at runtime", "Binding function calls at compile time", "Binding data members at runtime", "Binding data members at compile time"],
    correct: "Binding function calls at compile time",
  },
  {
    /*35*/
    question: "What is late binding (dynamic binding) in C++?",
    options: ["Binding function calls at compile time", "Binding function calls at runtime", "Binding data members at compile time", "Binding data members at definition"],
    correct: "Binding function calls at runtime",
  },
  {
    /*36*/
    question: "Which keyword is used to implement late binding in C++?",
    options: ["static", "const", "virtual", "inline"],
    correct: "virtual",
  },
  {
    /*37*/
    question: "What is the purpose of the `this` pointer in C++?",
    options: ["To point to the base class object", "To point to the current object", "To point to a derived class object", "To point to a static member"],
    correct: "To point to the current object",
  },
  {
    /*38*/
    question: "What is a copy constructor in C++?",
    options: ["A constructor that creates a new object", "A constructor that initializes an object with values from another object of the same class", "A constructor that overloads the assignment operator", "A constructor that takes no arguments"],
    correct: "A constructor that initializes an object with values from another object of the same class",
  },
  {
    /*39*/
    question: "What is the assignment operator overloading in C++?",
    options: ["Defining a new assignment operator for a class", "Overloading the `=` operator to define how objects are assigned", "Creating a copy of an object", "Assigning values to member variables"],
    correct: "Overloading the `=` operator to define how objects are assigned",
  },
  {
    /*40*/
    question: "What is the difference between shallow copy and deep copy?",
    options: ["Shallow copy copies only primitive data types, deep copy copies all data types", "Deep copy copies only primitive data types, shallow copy copies all data types", "Shallow copy copies the values, deep copy copies the memory locations", "Shallow copy copies the memory locations, deep copy creates new copies of dynamically allocated memory"],
    correct: "Shallow copy copies the memory locations, deep copy creates new copies of dynamically allocated memory",
  },
  {
    /*41*/
    question: "What are smart pointers in C++?",
    options: ["Pointers that automatically manage memory", "Pointers that can only point to constant data", "Pointers that are used for function calls", "Pointers that are allocated on the stack"],
    correct: "Pointers that automatically manage memory",
  },
  {
    /*42*/
    question: "Which of the following is a type of smart pointer in C++?",
    options: ["void pointer", "dangling pointer", "unique_ptr", "null pointer"],
    correct: "unique_ptr",
  },
  {
    /*43*/
    question: "What is RTTI (Run-Time Type Information) in C++?",
    options: ["A mechanism to determine the type of an object at runtime", "A feature for code optimization", "A way to handle exceptions", "A method for template metaprogramming"],
    correct: "A mechanism to determine the type of an object at runtime",
  },
  {
    /*44*/
    question: "Which keyword is used to perform downcasting safely in C++?",
    options: ["static_cast", "reinterpret_cast", "dynamic_cast", "const_cast"],
    correct: "dynamic_cast",
  },
  {
    /*45*/
    question: "What are lambda expressions in C++?",
    options: ["Unnamed functions defined inline", "Functions that can only be called once", "Functions defined outside a class", "Functions used for exception handling"],
    correct: "Unnamed functions defined inline",
  },
  {
    /*46*/
    question: "What is move semantics in C++?",
    options: ["A way to move objects in memory", "A mechanism to transfer ownership of resources efficiently", "A feature for copying objects", "A technique for optimizing function calls"],
    correct: "A mechanism to transfer ownership of resources efficiently",
  },
  {
    /*47*/
    question: "What are rvalue references in C++?",
    options: ["References to constant values", "References to temporary objects", "References that cannot be modified", "References to lvalue expressions"],
    correct: "References to temporary objects",
  },
  {
    /*48*/
    question: "What is perfect forwarding in C++?",
    options: ["Forwarding a function call to the correct overload", "Forwarding arguments to another function while preserving their value category", "Forwarding exceptions to the calling function", "Forwarding data between objects without copying"],
    correct: "Forwarding arguments to another function while preserving their value category",
  },
  {
    /*49*/
    question: "What are variadic templates in C++?",
    options: ["Templates that can take a fixed number of arguments", "Templates that can take a variable number of arguments", "Templates that can only work with specific data types", "Templates used for exception handling"],
    correct: "Templates that can take a variable number of arguments",
  },
  {
    /*50*/
    question: "What is SFINAE (Substitution Failure Is Not An Error) in C++?",
    options: ["A rule for template instantiation", "A mechanism for handling template errors at compile time", "A feature for runtime polymorphism with templates", "A way to define template specializations"],
    correct: "A rule for template instantiation",
  },
  {
    /*51*/
    question: "What are constexpr functions in C++?",
    options: ["Functions that can only be evaluated at runtime", "Functions that can be evaluated at compile time", "Functions that cannot have side effects", "Functions that are always inlined"],
    correct: "Functions that can be evaluated at compile time",
  },
  {
    /*52*/
    question: "What are user-defined literals in C++?",
    options: ["Literals for built-in data types", "Literals with custom suffixes to define their type", "Literals that can only be used in constexpr functions", "Literals defined using preprocessor directives"],
    correct: "Literals with custom suffixes to define their type",
  },
  {
    /*53*/
    question: "What is the memory layout of a C++ object with virtual functions?",
    options: ["Only data members", "Data members followed by virtual function pointers", "A virtual pointer (vptr) to a virtual table (vtbl) and then data members", "Only virtual function pointers"],
    correct: "A virtual pointer (vptr) to a virtual table (vtbl) and then data members",
  },
  {
    /*54*/
    question: "What is the diamond problem in C++ inheritance?",
    options: ["Ambiguity arising when a class inherits from two classes that have a common base class", "A problem with virtual function calls", "An issue with memory allocation in inheritance", "A limitation of multiple inheritance"],
    correct: "Ambiguity arising when a class inherits from two classes that have a common base class",
  },
  {
    /*55*/
    question: "How is the diamond problem typically resolved in C++?",
    options: ["By using virtual inheritance", "By using static inheritance", "By disallowing multiple inheritance", "By explicitly specifying which base class member to use"],
    correct: "By using virtual inheritance",
  },
  {
    /*56*/
    question: "What are exception specifications in C++ (deprecated in C++11)?",
    options: ["A way to specify the exceptions a function might throw", "Keywords for defining custom exceptions", "Mechanisms for handling uncaught exceptions", "A way to prevent exceptions from being thrown"],
    correct: "A way to specify the exceptions a function might throw",
  },
  {
    /*57*/
    question: "What is the `noexcept` specifier in C++11?",
    options: ["A way to specify that a function will not throw exceptions", "A way to specify the exceptions a function might throw", "A keyword for handling exceptions", "A way to suppress all exceptions"],
    correct: "A way to specify that a function will not throw exceptions",
  },
  {
    /*58*/
    question: "What is the purpose of the `static_cast` operator in C++?",
    options: ["For type conversions that are inherently safe or well-defined", "For casting away constness", "For low-level type conversions", "For dynamic type checking in inheritance hierarchies"],
    correct: "For type conversions that are inherently safe or well-defined",
  },
  {
    /*59*/
    question: "What is the purpose of the `dynamic_cast` operator in C++?",
    options: ["For any type conversion", "For casting between unrelated pointer types", "For safe downcasting in inheritance hierarchies", "For casting away volatility"],
    correct: "For safe downcasting in inheritance hierarchies",
  },
  {
    /*60*/
    question: "What is the purpose of the `reinterpret_cast` operator in C++?",
    options: ["For standard type conversions", "For casting away constness", "For low-level type conversions that might be unsafe", "For dynamic type checking"],
    correct: "For low-level type conversions that might be unsafe",
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