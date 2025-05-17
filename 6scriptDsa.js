let quizData = [
  {
    /*1*/
    question: "Which of the following is NOT a linear data structure?",
    options: ["Array", "Linked List", "Stack", "Tree"],
    correct: "Tree",
  },
  {
    /*2*/
    question: "What is the time complexity of accessing an element in an array by its index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(1)",
  },
  {
    /*3*/
    question: "What is the time complexity of inserting an element at the beginning of an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(n)",
  },
  {
    /*4*/
    question: "What is a linked list?",
    options: ["A collection of elements stored in contiguous memory locations", "A linear data structure where elements are stored in nodes, and each node contains a data part and a pointer to the next node", "A non-linear data structure", "A data structure that follows the LIFO principle"],
    correct: "A linear data structure where elements are stored in nodes, and each node contains a data part and a pointer to the next node",
  },
  {
    /*5*/
    question: "What is the time complexity of searching for an element in a singly linked list in the worst case?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(n)",
  },
  {
    /*6*/
    question: "What is a stack?",
    options: ["A linear data structure that follows the FIFO (First-In, First-Out) principle", "A non-linear data structure", "A linear data structure that follows the LIFO (Last-In, First-Out) principle", "A data structure where elements are stored in a hierarchical manner"],
    correct: "A linear data structure that follows the LIFO (Last-In, First-Out) principle",
  },
  {
    /*7*/
    question: "Which operation adds an element to the top of a stack?",
    options: ["Pop", "Push", "Peek", "Dequeue"],
    correct: "Push",
  },
  {
    /*8*/
    question: "Which operation removes an element from the top of a stack?",
    options: ["Push", "Pop", "Enqueue", "Peek"],
    correct: "Pop",
  },
  {
    /*9*/
    question: "What is a queue?",
    options: ["A linear data structure that follows the LIFO principle", "A non-linear data structure", "A linear data structure that follows the FIFO principle", "A data structure where elements are accessed randomly"],
    correct: "A linear data structure that follows the FIFO (First-In, First-Out) principle",
  },
  {
    /*10*/
    question: "Which operation adds an element to the rear of a queue?",
    options: ["Dequeue", "Enqueue", "Pop", "Push"],
    correct: "Enqueue",
  },
  {
    /*11*/
    question: "Which operation removes an element from the front of a queue?",
    options: ["Enqueue", "Dequeue", "Push", "Pop"],
    correct: "Dequeue",
  },
  {
    /*12*/
    question: "What is a binary tree?",
    options: ["A tree in which each node has at most one child", "A tree in which each node has at most two children", "A tree in which each node has exactly two children", "A linear data structure represented as a tree"],
    correct: "A tree in which each node has at most two children",
  },
  {
    /*13*/
    question: "What is a complete binary tree?",
    options: ["A binary tree where all levels are completely filled except possibly the last level, which is filled from left to right", "A binary tree where all nodes have two children", "A binary tree where the left subtree is always smaller than the right subtree", "A binary tree that is perfectly balanced"],
    correct: "A binary tree where all levels are completely filled except possibly the last level, which is filled from left to right",
  },
  {
    /*14*/
    question: "What is a full binary tree?",
    options: ["A binary tree where all levels are completely filled", "A binary tree where each node has either zero or two children", "A binary tree where the right subtree is always larger than the left subtree", "A binary tree that is not balanced"],
    correct: "A binary tree where each node has either zero or two children",
  },
  {
    /*15*/
    question: "What is a perfect binary tree?",
    options: ["A binary tree where all leaf nodes are at the same level and every non-leaf node has two children", "A binary tree where all nodes have at most one child", "A binary tree that is complete but not full", "A binary tree with a minimum number of nodes for its height"],
    correct: "A binary tree where all leaf nodes are at the same level and every non-leaf node has two children",
  },
  {
    /*16*/
    question: "What is a binary search tree (BST)?",
    options: ["A binary tree where the value of each node is greater than or equal to the values in its left subtree and less than or equal to the values in its right subtree", "A binary tree where the left child is always greater than the right child", "A binary tree that is perfectly balanced", "A binary tree used only for searching"],
    correct: "A binary tree where the value of each node is greater than or equal to the values in its left subtree and less than or equal to the values in its right subtree",
  },
  {
    /*17*/
    question: "What is the time complexity of searching for an element in a balanced binary search tree in the worst case?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(log n)",
  },
  {
    /*18*/
    question: "What is a heap?",
    options: ["A linear data structure", "A tree-based data structure that satisfies the heap property", "A data structure used for sorting only", "A data structure that follows the FIFO principle"],
    correct: "A tree-based data structure that satisfies the heap property",
  },
  {
    /*19*/
    question: "What is a min-heap?",
    options: ["A heap where the value of each node is greater than or equal to the value of its parent", "A heap where the value of each node is less than or equal to the value of its parent", "A binary tree that is sorted", "A complete binary tree where the root has the largest element"],
    correct: "A heap where the value of each node is greater than or equal to the value of its parent",
  },
  {
    /*20*/
    question: "What is a max-heap?",
    options: ["A heap where the value of each node is less than or equal to the value of its parent", "A heap where the value of each node is greater than or equal to the value of its parent", "A balanced binary search tree", "A complete binary tree where the root has the smallest element"],
    correct: "A heap where the value of each node is greater than or equal to the value of its parent",
  },
  {
    /*21*/
    question: "What is the time complexity of inserting an element into a binary heap?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(log n)",
  },
  {
    /*22*/
    question: "What is the time complexity of deleting the root element from a binary heap?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(log n)",
  },
  {
    /*23*/
    question: "What is hashing?",
    options: ["A technique for sorting data", "A technique for searching data in (on average) O(1) time", "A method for compressing data", "A way to encrypt data"],
    correct: "A technique for searching data in (on average) O(1) time",
  },
  {
    /*24*/
    question: "What is a hash function?",
    options: ["A function that maps keys to indices in a hash table", "A function that sorts data", "A function that balances a tree", "A function that compresses data"],
    correct: "A function that maps keys to indices in a hash table",
  },
  {
    /*25*/
    question: "What is a collision in hashing?",
    options: ["When two different keys map to the same index in the hash table", "When the hash table is full", "When a key is not found", "When the hash function is perfect"],
    correct: "When two different keys map to the same index in the hash table",
  },
  {
    /*26*/
    question: "Which of the following is a collision resolution technique?",
    options: ["Binary search", "Linear probing", "Depth-first search", "Breadth-first search"],
    correct: "Linear probing",
  },
  {
    /*27*/
    question: "What is a graph?",
    options: ["A linear data structure", "A collection of nodes (vertices) and edges that connect them", "A hierarchical data structure", "A data structure that follows the LIFO principle"],
    correct: "A collection of nodes (vertices) and edges that connect them",
  },
  {
    /*28*/
    question: "What is a directed graph?",
    options: ["A graph where edges have no direction", "A graph where edges have a direction associated with them", "A graph with only one path between any two vertices", "A graph with no cycles"],
    correct: "A graph where edges have a direction associated with them",
  },
  {
    /*29*/
    question: "What is an undirected graph?",
    options: ["A graph where edges have a direction", "A graph where edges have no direction", "A graph with multiple paths between vertices", "A graph that is always connected"],
    correct: "A graph where edges have no direction",
  },
  {
    /*30*/
    question: "What is a weighted graph?",
    options: ["A graph where all edges have the same weight", "A graph where edges have associated weights or costs", "A graph with no cycles", "A graph that is not connected"],
    correct: "A graph where edges have associated weights or costs",
  },
  {
    /*31*/
    question: "What is Breadth-First Search (BFS)?",
    options: ["A graph traversal algorithm that explores as far as possible along each branch before backtracking", "A graph traversal algorithm that explores the neighbor nodes first", "A search algorithm used only for trees", "A sorting algorithm for graphs"],
    correct: "A graph traversal algorithm that explores the neighbor nodes first",
  },
  {
    /*32*/
    question: "What data structure is used for implementing BFS?",
    options: ["Stack", "Queue", "Heap", "Tree"],
    correct: "Queue",
  },
  {
    /*33*/
    question: "What is Depth-First Search (DFS)?",
    options: ["A graph traversal algorithm that explores the neighbor nodes first", "A graph traversal algorithm that explores as far as possible along each branch before backtracking", "A search algorithm that uses a queue", "A sorting algorithm for graphs"],
    correct: "A graph traversal algorithm that explores as far as possible along each branch before backtracking",
  },
  {
    /*34*/
    question: "What data structure is used for implementing DFS?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    correct: "Stack",
  },
  {
    /*35*/
    question: "What is a spanning tree of a graph?",
    options: ["A subgraph that includes all the vertices and forms a tree", "A subgraph with the minimum number of edges", "A subgraph that contains all the edges", "A tree that is not connected"],
    correct: "A subgraph that includes all the vertices and forms a tree",
  },
  {
    /*36*/
    question: "What is a Minimum Spanning Tree (MST)?",
    options: ["A spanning tree with the maximum total edge weight", "A spanning tree with the minimum total edge weight", "Any spanning tree of a graph", "A tree that connects only a subset of the vertices"],
    correct: "A spanning tree with the minimum total edge weight",
  },
  {
    /*37*/
    question: "Which algorithm can be used to find the MST of a graph?",
    options: ["Binary Search", "Merge Sort", "Prim's algorithm", "Quick Sort"],
    correct: "Prim's algorithm",
  },
  {
    /*38*/
    question: "What is sorting?",
    options: ["Arranging elements in a specific order", "Searching for an element", "Deleting elements", "Inserting elements"],
    correct: "Arranging elements in a specific order",
  },
  {
    /*39*/
    question: "Which of the following is a comparison-based sorting algorithm?",
    options: ["Counting Sort", "Radix Sort", "Bucket Sort", "Merge Sort"],
    correct: "Merge Sort",
  },
  {
    /*40*/
    question: "What is the time complexity of Bubble Sort in the worst case?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correct: "O(n^2)",
  },
  {
    /*41*/
    question: "What is the time complexity of Insertion Sort in the worst case?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correct: "O(n^2)",
  },
  {
    /*42*/
    question: "What is the time complexity of Selection Sort in the worst case?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correct: "O(n^2)",
  },
  {
    /*43*/
    question: "What is the time complexity of Merge Sort in the worst case?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correct: "O(n log n)",
  },
  {
    /*44*/
    question: "What is the time complexity of Quick Sort in the average case?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correct: "O(n log n)",
  },
  {
    /*45*/
    question: "What is searching?",
    options: ["Arranging elements", "Finding the location of a specific element", "Deleting elements", "Inserting elements"],
    correct: "Finding the location of a specific element",
  },
  {
    /*46*/
    question: "What is the time complexity of Linear Search in the worst case?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: "O(n)",
  },
  {
    /*47*/
    question: "What is the time complexity of Binary Search in the worst case (for a sorted array)?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correct: "O(log n)",
  },
  {
    /*48*/
    question: "What is recursion?",
    options: ["A function that calls itself", "A loop that iterates a fixed number of times", "A way to define variables", "A method for memory allocation"],
    correct: "A function that calls itself",
  },
  {
    /*49*/
    question: "Which data structure is often used to implement recursion?",
    options: ["Queue", "Stack", "Heap", "Linked List"],
    correct: "Stack",
  },
  {
    /*50*/
    question: "What is dynamic programming?",
    options: ["A programming technique that avoids recomputing results for the same subproblems", "A method for dynamic memory allocation", "A type of recursion", "A way to sort data dynamically"],
    correct: "A programming technique that avoids recomputing results for the same subproblems",
  },
  {
    /*51*/
    question: "What is memoization?",
    options: ["A way to forget computed results", "Storing the results of expensive function calls to avoid recomputing them", "A technique for dynamic memory allocation", "A type of iterative approach"],
    correct: "Storing the results of expensive function calls to avoid recomputing them",
  },
  {
    /*52*/
    question: "What is a trie (prefix tree)?",
    options: ["A binary tree used for storing sorted data", "A tree-like data structure used to store a dynamic set of strings", "A type of graph", "A linear data structure optimized for searching numbers"],
    correct: "A tree-like data structure used to store a dynamic set of strings",
  },
  {
    /*53*/
    question: "What is a disjoint set data structure (Union-Find)?",
    options: ["A data structure for storing sets that are mutually exclusive", "A data structure used for sorting", "A data structure for representing graphs", "A data structure for implementing queues"],
    correct: "A data structure for storing sets that are mutually exclusive",
  },
  {
    /*54*/
    question: "Which of the following operations is supported by a disjoint set data structure?",
    options: ["Search", "Sort", "Find", "Reverse"],
    correct: "Find",
  },
  {
    /*55*/
    question: "Which of the following operations is also supported by a disjoint set data structure?",
    options: ["Insert", "Delete", "Union", "Update"],
    correct: "Union",
  },
  {
    /*56*/
    question: "What is a segment tree?",
    options: ["A binary tree where each node represents a segment (interval)", "A linear data structure used for storing segments", "A tree used for sorting segments", "A graph where nodes represent segments"],
    correct: "A binary tree where each node represents a segment (interval)",
  },
  {
    /*57*/
    question: "What type of queries are efficiently supported by a segment tree?",
    options: ["Point updates and range sum queries", "Finding the median", "Sorting a range", "Finding the smallest element in the entire array"],
    correct: "Point updates and range sum queries",
  },
  {
    /*58*/
    question: "What is a Fenwick tree (Binary Indexed Tree)?",
    options: ["A tree used for storing binary numbers", "A data structure that can efficiently update elements and calculate prefix sums in an array", "A balanced binary search tree", "A tree used for representing file systems"],
    correct: "A data structure that can efficiently update elements and calculate prefix sums in an array",
  },
  {
    /*59*/
    question: "Compared to a segment tree, a Fenwick tree generally has:",
    options: ["Higher time complexity for updates", "Lower space complexity", "Higher query time complexity", "More complex implementation"],
    correct: "Lower space complexity",
  },
  {
    /*60*/
    question: "What is a B-tree?",
    options: ["A binary tree with a maximum of two children per node", "A self-balancing tree data structure that is optimized for disk-oriented data structures", "A tree where nodes can have any number of children", "A tree used only for in-memory data"],
    correct: "A self-balancing tree data structure that is optimized for disk-oriented data structures",
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