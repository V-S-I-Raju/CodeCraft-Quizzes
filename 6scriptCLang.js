let quizData = [
    {
      /*1*/
      question: "Who is the father of C language?",
      options: ["Bjarne Stroustrup", "James A. Gosling", "Dennis Ritchie", "Dr. E.F. Codd"],
      correct: "Dennis Ritchie",
    },
    {
      /*2*/
      question: "Which of the following is not a valid C variable name?",
      options: ["int number;", "float rate;", "int variable_count;", "int $main;"],
      correct: "int $main;",
    },
    {
      /*3*/
      question: "All keywords in C are in ____________",
      options: ["UpperCase letters", "LowerCase letters", "CamelCase letters", "PascalCase letters"],
      correct: "LowerCase letters",
    },
    {
      /*4*/
      question: "Which of the following is true for variable names in C?",
      options: ["They can contain special characters", "Keywords cannot be used as variable names", "Variable names cannot start with a digit", "Variable names can be of any length"],
      correct: "Variable names cannot start with a digit",
    },
    {
      /*5*/
      question: "Which is valid C expression?",
      options: ["int my_num = 100,000;", "int my_num = 100000;", "int my num = 10000;", "int $my_num = 10000;"],
      correct: "int my_num = 100000;",
    },
    {
      /*6*/
      question: "Which of the following cannot be a variable name in C?",
      options: ["volatile", "true", "friend", "export"],
      correct: "volatile",
    },
    {
      /*7*/
      question: "What is short int in C programming?",
      options: ["Short is not a datatype", "The basic data type int can be abbreviated as short", "Short is the qualifier and int is the basic data type", "All of the mentioned"],
      correct: "Short is the qualifier and int is the basic data type",
    },
    {
      /*8*/
      question: "Which of the following declaration is not supported by C language?",
      options: ["String str;", "char *str;", "float str = 3e2;", "Both String str; & float str = 3e2;"],
      correct: "String str;",
    },
      {
      /*9*/
      question: "Which keyword is used to prevent any changes in the variable within a C program?",
      options: ["immutable", "mutable", "const", "volatile"],
      correct: "const",
    },
    {
      /*10*/
      question: "What is the result of logical or relational expression in C?",
      options: ["True or False", "0 or 1", "0 if an expression is false and any positive value if an expression is true", "Error"],
      correct: "0 or 1",
    },
    {
      /*11*/
      question: "Which of the following typecasting is accepted by C language?",
      options: ["Widening conversions", "Narrowing conversions", "Widening & Narrowing conversions", "None of the mentioned"],
      correct: "Widening & Narrowing conversions",
    },
    {
      /*12*/
      question: "Where in C the order of precedence of operators do not exist?",
      options: ["Within conditional statements, expressions", "Within while, do-while loops", "Within macro definition", "None of the mentioned"],
      correct: "None of the mentioned",
    },
    {
      /*13*/
      question: "Which of the following is NOT possible with any 2 operators in C?",
      options: ["Different precedence, same associativity", "Same precedence, different associativity", "All of the mentioned", "None of the mentioned"],
      correct: "Same precedence, different associativity",
    },
    {
      /*14*/
      question: "What is an example of iteration in C?",
      options: ["for", "while", "do-while", "all of the mentioned"],
      correct: "all of the mentioned",
    },
    {
      /*15*/
       question: "Functions can return enumeration constants in C?",
      options: ["true", "false", "depends on compiler", "depends on standard"],
      correct: "true",
    },
    {
      /*16*/
      question: "Functions in C Language are always _________",
      options: ["Internal", "External", "Both Internal and External", "External and Internal are same"],
      correct: "External",
    },
    {
      /*17*/
      question: "Which of following is not accepted in C?",
      options: ["static a = 10;", "static int func (int);", "static static int a; //a static variable prefixed with static", "All of the mentioned"],
      correct: "static static int a; //a static variable prefixed with static",
    },
    {
      /*18*/
      question: "Property which allows to produce different executable for different platforms in C is called?",
      options: ["File inclusion", "Selective inclusion", "Conditional compilation", "None of the mentioned"],
      correct: "Conditional compilation",
    },
    {
      /*19*/
      question: "What is #include <stdio.h>?",
      options: ["Preprocessor directive", "Include header file", "Both Preprocessor directive & Include header file", "None of the mentioned"],
      correct: "Preprocessor directive",
    },
    {
      /*20*/
      question: "C preprocessors can have compiler specific features.",
      options: ["True", "False", "Depends on compiler", "Depends on standard"],
      correct: "True",
    },
     {
      /*21*/
      question: "Which of the following are C preprocessors?",
      options: ["#if", "#elif", "#endif", "all of the mentioned"],
      correct: "all of the mentioned",
    },
    {
      /*22*/
      question: "The C-preprocessors are specified with _________ symbol.",
      options: ["#", "$", "``", "None of the mentioned"],
      correct: "#",
    },
    {
      /*23*/
      question: "How is search done in #include and #include “somelibrary.h” according to C standard?",
      options: ["When former is used, current directory is searched and when latter is used, standard directory is searched", "When former is used, standard directory is searched and when latter is used, current directory is searched", "When former is used, the system directory is searched and when latter is used, current directory is searched", "Both are same but standard directory is searched first"],
      correct: "When former is used, standard directory is searched and when latter is used, current directory is searched",
    },
    {
      /*24*/
      question: "How many number of pointer (*) does C have against a pointer variable declaration?",
      options: ["255", "16383", "32767", "No limits"],
      correct: "No limits",
    },
    {
      /*25*/
      question: "Which of the following is not possible statically in C language?",
      options: ["Jagged Array", "Multidimensional Array", "Array of pointers", "None of the mentioned"],
      correct: "Jagged Array",
    },
    {
      /*26*/
      question: "Which of the following return-type cannot be used for a function in C?",
      options: ["char *", "struct", "void", "none of the mentioned"],
      correct: "none of the mentioned",
    },
    {
      /*27*/
      question: "The standard header _______ is used for variable list arguments (…) in C.",
      options: ["<errno.h>", "<stddef.h>", "<stdio.h>", "<stdarg.h>"],
      correct: "<stdarg.h>",
    },
    {
      /*28*/
      question: "When a C program is started, O.S environment is responsible for opening file and providing pointer for that file?",
      options: ["Standard input", "Standard output", "Standard error", "All of the mentioned"],
      correct: "All of the mentioned",
    },
    {
      /*29*/
      question: "In C language, FILE is of which data type?",
      options: ["int", "char *", "struct", "None of the mentioned"],
      correct: "struct",
    },
    {
      /*30*/
      question: "What is the sizeof(char) in a 32-bit C compiler?",
      options: ["2 Byte", "4 Byte", "1 Byte", "Depends on the compiler"],
      correct: "1 Byte",
    },
      {
      /*31*/
      question: "Which of the following is not an operator in C?",
      options: ["*", "?:", "sizeof()", "None of the mentioned"],
      correct: "None of the mentioned",
    },
    {
      /*32*/
      question: "scanf() is a predefined function in______header file.",
      options: ["conio.h", "stdio.h", "stdlib.h", "ctype.h"],
      correct: "stdio.h",
    },
    {
      /*33*/
      question: "What is meant by 'a' in the following C operation?  fopen(“Random.txt”, “a”);",
      options: ["Attach", "Append", "Alter", "All of the mentioned"],
      correct: "Append",
    },
      {
      /*34*/
      question: "Which data structure is used to handle recursion in C?",
      options: ["Stack", "Queue", "Deque", "Trees"],
      correct: "Stack",
    },
    {
      /*35*/
      question: "Which of the following are correct file opening modes in C?",
      options: ["r", "rb", "w", "All of the above"],
      correct: "All of the above",
    },
    {
      /*36*/
      question: "Which of the following are not standard header files in C?",
      options: ["stdio.h", "stdlib.h", "string.h", "None of the above."],
      correct: "None of the above.",
    },
    {
      /*37*/
      question: "Which of the following function is used to open a file in C++?",
      options: ["fopen", "fscan", "getc", "fscanf"],
      correct: "fopen",
    },
    {
      /*38*/
      question: "Which of the following is an exit controlled loop?",
       options: ["for loop", "while loop", "do-while loop.", "None of the above."],
      correct: "do-while loop.",
    },
    {
      /*39*/
      question: "Which of the following is not a storage class specifier in C?",
      options: ["auto", "extern", "static", "volatile"],
      correct: "volatile",
    },
    {
      /*40*/
      question: "How are String represented in memory in C?",
      options: ["An array of characters.", "An object of some class.", "Same as other primitive data types.", "Linked list of characters."],
      correct: "An array of characters.",
    },
      {
      /*41*/
      question: "How is an array initialized in C language?",
      options: ["int arr[3] = {1,2,3};", "int arr(3) = {1,2,3};", "int arr{3} = {1,2,3};", "int arr[3] = (1,2,3);"],
      correct: "int arr[3] = {1,2,3};",
    },
    {
      /*42*/
      question: "How is the 3rd element in an array accessed based on pointer notation?",
      options: ["*(a + 2)", "*(a + 3)", "*(a + 4)", "a + 3"],
      correct: "*(a + 3)",
    },
    {
      /*43*/
      question: "How to declare a double-pointer in C?",
      options: ["int *ptr;", "int **ptr;", "int &ptr;", "None of the above."],
      correct: "int **ptr;",
    },
    {
      /*44*/
      question: "How to find the length of an array in C?",
      options: ["sizeof(a)", "sizeof(a) / sizeof(a[0])", "sizeof(*a)", "length(a)"],
      correct: "sizeof(a) / sizeof(a[0])",
    },
    {
      /*45*/
      question: "In which of the following languages is function overloading not possible?",
      options: ["C++", "Java", "C#", "C"],
      correct: "C",
    },
    {
      /*46*/
      question: "What does the following declaration indicate? int x: 8;",
      options: ["Error", "x is an integer with value 8.", "The above statement defines x as an 8-bit integer.", "None of the above."],
      correct: "The above statement defines x as an 8-bit integer.",
    },
    {
      /*47*/
      question: "What is the disadvantage of arrays in C?",
      options: ["Fixed size.", "Possibility of index out of bound.", "The elements of an array are stored in contiguous memory locations.", "The disadvantage of arrays is that the amount of memory to be allocated needs to be known beforehand."],
      correct: "The disadvantage of arrays is that the amount of memory to be allocated needs to be known beforehand.",
    },
    {
      /*48*/
      question: "What is the return type of the fopen() function in C?",
      options: ["An integer.", "A character pointer.", "NULL.", "The fopen() function returns a pointer to a FILE object."],
      correct: "The fopen() function returns a pointer to a FILE object.",
    },
    {
      /*49*/
      question: "What is the size of the int data type (in bytes) in C?",
      options: ["2", "4", "8", "Depends on the compiler."],
      correct: "4",
    },
    {
      /*50*/
     question: "If p is an integer pointer with a value 1000, then what will the value of p + 5 be?",
      options: ["1005", "1020", "1040", "1000"],
      correct: "1020",
    },
    {
      /*51*/
      question: "What will be the result of the following code snippet?  int a = 5;  a += a + a * ++a;  printf(“%d”, a);",
      options: ["45", "15", "25", "None of the above"],
      correct: "45",
    },
    {
      /*52*/
      question: "What will be the output of the following code snippet? #include <stdio.h>  int main() {  int a = 10, b = 20;  printf(“%d %d”, a, b);  return 0; }",
      options: ["10 20", "20 10", "10 10", "20 20"],
      correct: "10 20",
    },
    {
      /*53*/
      question: "What will be the output of the following code snippet? #include <stdio.h> int main() { int a = 3; printf(“%d”, a); return 0; }",
      options: ["0", "3", "Garbage value", "None of the above."],
      correct: "3",
    },
    {
     /*54*/
      question: "What will be the output of the following code snippet? #include <stdio.h> int main() { int a = 5; printf(“%d”, a); return 0; }",
      options: ["0", "5", "Garbage value", "None of the above."],
      correct: "5",
    },
    {
      /*55*/
      question: "What will be the output of the following code snippet? #include <stdio.h> int main() { int a = 5; printf(“%d”, a); return 0; }",
      options: ["0", "5", "Garbage value", "None of the above."],
      correct: "5",
    },
    {
      /*56*/
      question: "What will be the output of the following code snippet? #include <stdio.h> int main() { int a = 2, b = 4; printf(“%d”, a * b * (a + b)); return 0; }",
      options: ["16", "24", "48", "64"],
      correct: "64",
    },
    {
      /*57*/
      question: "What will be the output of the following code snippet? #include <stdio.h> int main() { int a = 2; printf(“%d”, sizeof(a)); return 0; }",
      options: ["2", "4", "8", "None of the above."],
      correct: "4",
    },
    {
      /*58*/
      question: "What will be the output of the following code snippet? #include <stdio.h> int main() { int a = 4, b = 9; if (a > b) { printf(“Greater”); } else { printf(“Lesser”); } return 0; }",
      options: ["Greater", "Lesser", "Equal", "None of the above."],
      correct: "Lesser",
    },
    {
      /*59*/
      question: "What will be the output of the following code snippet? #include <stdio.h> int main() { float a = 4; double b = 4.5; printf(“%d %f”, a, b); return 0; }",
      options: ["4 4.500000", "4.000000 4.500000", "4 4.5", "None of the above."],
      correct: "4 4.500000",
    },
    {
      /*60*/
      question: "What will be the output of the following code snippet? #include <stdio.h> int main() { int a = 10; a += 20; printf(“%d %d”, a, a + 10); return 0; }",
      options: ["10 30", "30 40", "20 30", "None of the above."],
      correct: "30 40",
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