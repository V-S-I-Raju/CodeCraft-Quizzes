let quizData = [
  {
    /*1*/
    question: "Which of the following is NOT a type of graph traversal?",
    options: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Best-First Search", "Width-First Search"],
    correct: "Width-First Search",
  },
  {
    /*2*/
    question: "What is the time complexity of Breadth-First Search (BFS) in a graph with V vertices and E edges?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
    correct: "O(V + E)",
  },
  {
    /*3*/
    question: "What is the time complexity of Depth-First Search (DFS) in a graph with V vertices and E edges?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
    correct: "O(V + E)",
  },
  {
    /*4*/
    question: "Which data structure is primarily used to implement Breadth-First Search (BFS)?",
    options: ["Stack", "Queue", "Priority Queue", "Tree"],
    correct: "Queue",
  },
  {
    /*5*/
    question: "Which data structure is primarily used to implement Depth-First Search (DFS)?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    correct: "Stack",
  },
  {
    /*6*/
    question: "What is the purpose of Dijkstra's algorithm?",
    options: ["To find the shortest path between two nodes in a graph", "To sort a list of elements", "To search for an element in a data structure", "To traverse a tree"],
    correct: "To find the shortest path between two nodes in a graph",
  },
  {
    /*7*/
    question: "Dijkstra's algorithm works for graphs with:",
    options: ["Only positive edge weights", "Only negative edge weights", "Both positive and negative edge weights", "No weights"],
    correct: "Only positive edge weights",
  },
  {
    /*8*/
    question: "What is the time complexity of Dijkstra's algorithm using a binary heap?",
    options: ["O(V^2)", "O(E log V)", "O(V log E)", "O((V + E) log V)"],
    correct: "O(E log V)",
  },
  {
    /*9*/
    question: "What is the Bellman-Ford algorithm used for?",
    options: ["Finding all-pairs shortest paths", "Finding the shortest path in graphs with negative edge weights", "Sorting a graph", "Finding cycles in a graph"],
    correct: "Finding the shortest path in graphs with negative edge weights",
  },
  {
    /*10*/
    question: "What is the time complexity of the Bellman-Ford algorithm?",
    options: ["O(V)", "O(E)", "O(V * E)", "O(V + E)"],
    correct: "O(V * E)",
  },
  {
    /*11*/
    question: "What is the Floyd-Warshall algorithm used for?",
    options: ["Finding the shortest path between two nodes", "Finding all-pairs shortest paths", "Traversing a graph", "Finding the minimum spanning tree"],
    correct: "Finding all-pairs shortest paths",
  },
  {
    /*12*/
    question: "What is the time complexity of the Floyd-Warshall algorithm?",
    options: ["O(V log V)", "O(E log E)", "O(V^3)", "O(E^3)"],
    correct: "O(V^3)",
  },
  {
    /*13*/
    question: "What is a Minimum Spanning Tree (MST)?",
    options: ["A subgraph that connects all vertices with the minimum number of edges", "A subgraph that connects all vertices with the minimum total edge weight", "A tree that spans only a subset of the vertices", "A tree with the maximum possible number of edges"],
    correct: "A subgraph that connects all vertices with the minimum total edge weight",
  },
  {
    /*14*/
    question: "Which of the following algorithms can be used to find a Minimum Spanning Tree (MST)?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Prim's algorithm", "Floyd-Warshall algorithm"],
    correct: "Prim's algorithm",
  },
  {
    /*15*/
    question: "What is the time complexity of Prim's algorithm using an adjacency matrix?",
    options: ["O(V)", "O(E)", "O(V^2)", "O(E log V)"],
    correct: "O(V^2)",
  },
  {
    /*16*/
    question: "What is the time complexity of Prim's algorithm using a binary heap?",
    options: ["O(V^2)", "O(E log V)", "O(V log E)", "O((V + E) log V)"],
    correct: "O(E log V)",
  },
  {
    /*17*/
    question: "Which of the following algorithms is also used to find a Minimum Spanning Tree (MST)?",
    options: ["Topological Sort", "Kruskal's algorithm", "Depth-First Search", "Breadth-First Search"],
    correct: "Kruskal's algorithm",
  },
  {
    /*18*/
    question: "What is the time complexity of Kruskal's algorithm using the disjoint-set data structure?",
    options: ["O(V log V)", "O(E log E)", "O(E log V)", "O((V + E) log E)"],
    correct: "O(E log E)",
  },
  {
    /*19*/
    question: "What is topological sorting?",
    options: ["Sorting the vertices of a graph based on their degrees", "A linear ordering of vertices such that for every directed edge from vertex u to vertex v, u comes before v in the ordering", "Sorting the edges of a graph based on their weights", "Arranging the vertices in a breadth-first manner"],
    correct: "A linear ordering of vertices such that for every directed edge from vertex u to vertex v, u comes before v in the ordering",
  },
  {
    /*20*/
    question: "Topological sorting can only be performed on:",
    options: ["Undirected graphs", "Directed acyclic graphs (DAGs)", "Weighted graphs", "Complete graphs"],
    correct: "Directed acyclic graphs (DAGs)",
  },
  {
    /*21*/
    question: "What is the time complexity of topological sorting using Kahn's algorithm?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
    correct: "O(V + E)",
  },
  {
    /*22*/
    question: "What is strongly connected components (SCCs) in a directed graph?",
    options: ["A set of vertices where there is a path from each vertex to every other vertex in the set", "Vertices with the highest degree", "Vertices with no incoming edges", "Vertices that form a cycle"],
    correct: "A set of vertices where there is a path from each vertex to every other vertex in the set",
  },
  {
    /*23*/
    question: "Which algorithm is used to find strongly connected components (SCCs) in a directed graph?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Kosaraju's algorithm", "Prim's algorithm"],
    correct: "Kosaraju's algorithm",
  },
  {
    /*24*/
    question: "What is dynamic programming?",
    options: ["An algorithmic technique for solving optimization problems by breaking them down into smaller overlapping subproblems", "A programming paradigm based on using dynamic data structures", "A method for allocating memory dynamically", "A technique for parallelizing algorithms"],
    correct: "An algorithmic technique for solving optimization problems by breaking them down into smaller overlapping subproblems",
  },
  {
    /*25*/
    question: "Which of the following is a characteristic of dynamic programming?",
    options: ["Greedy approach", "Divide and conquer", "Optimal substructure", "Randomized approach"],
    correct: "Optimal substructure",
  },
  {
    /*26*/
    question: "What is memoization in dynamic programming?",
    options: ["Storing the results of expensive function calls to avoid recomputing them", "Dividing the problem into independent subproblems", "Solving subproblems in a bottom-up manner", "Using recursion without storing intermediate results"],
    correct: "Storing the results of expensive function calls to avoid recomputing them",
  },
  {
    /*27*/
    question: "What is the time complexity of the dynamic programming approach to solve the 0/1 Knapsack problem (where n is the number of items and W is the capacity)?",
    options: ["O(n)", "O(W)", "O(n * W)", "O(n + W)"],
    correct: "O(n * W)",
  },
  {
    /*28*/
    question: "What is the longest common subsequence (LCS) problem?",
    options: ["Finding the longest sequence that is a subsequence of all sequences in a set", "Finding the longest contiguous subsequence common to all sequences", "Finding the shortest common supersequence", "Finding the longest palindromic subsequence"],
    correct: "Finding the longest sequence that is a subsequence of all sequences in a set",
  },
  {
    /*29*/
    question: "What is the time complexity of the dynamic programming solution for the longest common subsequence (LCS) problem (where the lengths of the two sequences are m and n)?",
    options: ["O(m)", "O(n)", "O(m + n)", "O(m * n)"],
    correct: "O(m * n)",
  },
  {
    /*30*/
    question: "What is the edit distance between two strings?",
    options: ["The number of characters that are different", "The minimum number of operations (insert, delete, substitute) required to transform one string into the other", "The length of the longest common subsequence", "The number of common characters"],
    correct: "The minimum number of operations (insert, delete, substitute) required to transform one string into the other",
  },
  {
    /*31*/
    question: "What is the time complexity of the dynamic programming solution for calculating the edit distance between two strings of length m and n?",
    options: ["O(m)", "O(n)", "O(m + n)", "O(m * n)"],
    correct: "O(m * n)",
  },
  {
    /*32*/
    question: "What is a greedy algorithm?",
    options: ["An algorithm that always chooses the locally optimal choice at each step with the hope of finding a global optimum", "An algorithm that explores all possible solutions", "An algorithm that divides the problem into smaller subproblems and solves them recursively", "An algorithm that uses randomization to find a solution"],
    correct: "An algorithm that always chooses the locally optimal choice at each step with the hope of finding a global optimum",
  },
  {
    /*33*/
    question: "Which of the following problems can be solved using a greedy approach?",
    options: ["0/1 Knapsack problem", "Traveling Salesperson Problem", "Fractional Knapsack problem", "Longest Common Subsequence"],
    correct: "Fractional Knapsack problem",
  },
  {
    /*34*/
    question: "What is the time complexity of the greedy approach for the Fractional Knapsack problem (where n is the number of items)?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correct: "O(n log n)",
  },
  {
    /*35*/
    question: "What is Huffman coding used for?",
    options: ["Data compression", "Sorting data", "Searching data", "Encrypting data"],
    correct: "Data compression",
  },
  {
    /*36*/
    question: "Huffman coding is a:",
    options: ["Lossy compression algorithm", "Lossless compression algorithm", "Encryption algorithm", "Sorting algorithm"],
    correct: "Lossless compression algorithm",
  },
  {
    /*37*/
    question: "What is the time complexity of building a Huffman tree (where n is the number of characters)?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correct: "O(n log n)",
  },
  {
    /*38*/
    question: "What is backtracking?",
    options: ["An algorithmic technique for finding all (or some) solutions to computational problems by incrementally building candidates to the solutions, and abandoning each partial candidate ('backtracking') as soon as it is determined that this candidate cannot possibly lead to a valid solution", "A method for sorting data in reverse order", "A technique for traversing a graph in a depth-first manner", "A dynamic programming approach"],
    correct: "An algorithmic technique for finding all (or some) solutions to computational problems by incrementally building candidates to the solutions, and abandoning each partial candidate ('backtracking') as soon as it is determined that this candidate cannot possibly lead to a valid solution",
  },
  {
    /*39*/
    question: "Which of the following problems can be solved using backtracking?",
    options: ["Shortest path problem", "Maximum flow problem", "N-Queens problem", "Fractional Knapsack problem"],
    correct: "N-Queens problem",
  },
  {
    /*40*/
    question: "What is the time complexity of the backtracking solution for the N-Queens problem?",
    options: ["O(n)", "O(n^2)", "O(n!)", "O(2^n)"],
    correct: "O(n!)",
  },
  {
    /*41*/
    question: "What is the Hamiltonian cycle problem?",
    options: ["Finding a path that visits every vertex exactly once", "Finding a cycle that visits every vertex exactly once", "Finding the shortest cycle in a graph", "Finding the longest path in a graph"],
    correct: "Finding a cycle that visits every vertex exactly once",
  },
  {
    /*42*/
    question: "The Hamiltonian cycle problem is an example of a:",
    options: ["Polynomial-time solvable problem", "NP-complete problem", "Greedy solvable problem", "Dynamic programming solvable problem"],
    correct: "NP-complete problem",
  },
  {
    /*43*/
    question: "What is the Traveling Salesperson Problem (TSP)?",
    options: ["Finding the shortest path between two cities", "Finding the shortest tour that visits each city exactly once and returns to the starting city", "Finding the longest path between all cities", "Finding a path that visits all cities"],
    correct: "Finding the shortest tour that visits each city exactly once and returns to the starting city",
  },
  {
    /*44*/
    question: "The Traveling Salesperson Problem (TSP) is an example of a:",
    options: ["Linear programming problem", "NP-hard problem", "Divide and conquer problem", "Greedy problem"],
    correct: "NP-hard problem",
  },
  {
    /*45*/
    question: "What is the maximum flow problem?",
    options: ["Finding the maximum amount of flow that can be sent from a source to a sink in a network", "Finding the minimum cost to send a certain amount of flow", "Finding the shortest path with capacity constraints", "Finding all possible paths from source to sink"],
    correct: "Finding the maximum amount of flow that can be sent from a source to a sink in a network",
  },
  {
    /*46*/
    question: "Which algorithm is commonly used to solve the maximum flow problem?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Ford-Fulkerson algorithm", "Prim's algorithm"],
    correct: "Ford-Fulkerson algorithm",
  },
  {
    /*47*/
    question: "What is the time complexity of the basic Ford-Fulkerson algorithm (where f is the maximum flow)?",
    options: ["O(V + E)", "O(E log V)", "O(E * f)", "O(V^2 * E)"],
    correct: "O(E * f)",
  },
  {
    /*48*/
    question: "What is the minimum cut in a flow network?",
    options: ["A cut with the maximum capacity", "A cut that separates the source from the sink with the minimum capacity", "Any cut that separates the source from the sink", "A cut with the fewest number of edges"],
    correct: "A cut that separates the source from the sink with the minimum capacity",
  },
  {
    /*49*/
    question: "The Max-flow Min-cut theorem states that:",
    options: ["The maximum flow in a network is equal to the capacity of the minimum cut", "The maximum flow is always greater than the minimum cut", "The minimum flow is equal to the capacity of the maximum cut", "The maximum flow is always less than the minimum cut"],
    correct: "The maximum flow in a network is equal to the capacity of the minimum cut",
  },
  {
    /*50*/
    question: "What is string matching?",
    options: ["Finding the longest common substring between two strings", "Finding one or more occurrences of a pattern within a larger text", "Comparing two strings for equality", "Reversing a string"],
    correct: "Finding one or more occurrences of a pattern within a larger text",
  },
  {
    /*51*/
    question: "Which of the following is a string matching algorithm?",
    options: ["Bubble Sort", "Merge Sort", "Knuth-Morris-Pratt (KMP)", "Dijkstra's algorithm"],
    correct: "Knuth-Morris-Pratt (KMP)",
  },
  {
    /*52*/
    question: "What is the time complexity of the Knuth-Morris-Pratt (KMP) algorithm (where n is the length of the text and m is the length of the pattern)?",
    options: ["O(n * m)", "O(n + m)", "O(n log m)", "O(m log n)"],
    correct: "O(n + m)",
  },
  {
    /*53*/
    question: "What is the Boyer-Moore string searching algorithm known for?",
    options: ["Its simplicity", "Its efficiency in most practical cases", "Its guaranteed linear time complexity", "Its use of hashing"],
    correct: "Its efficiency in most practical cases",
  },
  {
    /*54*/
    question: "What is hashing?",
    options: ["A technique for sorting data", "A technique for searching data in O(1) average time", "A technique for encrypting data", "A technique for compressing data"],
    correct: "A technique for searching data in O(1) average time",
  },
  {
    /*55*/
    question: "What is a hash function?",
    options: ["A function that maps data of arbitrary size to a fixed-size value", "A function that sorts data", "A function that compresses data", "A function that encrypts data"],
    correct: "A function that maps data of arbitrary size to a fixed-size value",
  },
  {
    /*56*/
    question: "What is a collision in hashing?",
    options: ["When two different keys map to the same hash value", "When the hash table is full", "When a key is not found in the hash table", "When the hash function is invalid"],
    correct: "When two different keys map to the same hash value",
  },
  {
    /*57*/
    question: "Which of the following is a collision resolution technique in hashing?",
    options: ["Binary search", "Linear probing", "Depth-first search", "Breadth-first search"],
    correct: "Linear probing",
  },
  {
    /*58*/
    question: "What is a randomized algorithm?",
    options: ["An algorithm that always produces the correct output", "An algorithm that uses randomness in its logic", "An algorithm whose running time is always the same", "An algorithm that works only on sorted input"],
    correct: "An algorithm that uses randomness in its logic",
  },
  {
    /*59*/
    question: "Which of the following is an example of a randomized algorithm?",
    options: ["Merge Sort", "Quick Sort (with random pivot selection)", "Binary Search", "Dijkstra's algorithm"],
    correct: "Quick Sort (with random pivot selection)",
  },
  {
    /*60*/
    question: "What is the expected time complexity of Quick Sort with random pivot selection?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    correct: "O(n log n)",
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