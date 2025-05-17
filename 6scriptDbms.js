let quizData = [
  {
    /*1*/
    question: "What does DBMS stand for?",
    options: ["Data Backup Management System", "Database Management System", "Digital Business Management System", "Distributed Binary Management System"],
    correct: "Database Management System",
  },
  {
    /*2*/
    question: "Which of the following is NOT a type of database?",
    options: ["Relational", "Network", "Hierarchical", "Sequential"],
    correct: "Sequential",
  },
  {
    /*3*/
    question: "What is a primary key in a database table?",
    options: ["A key used for sorting data", "A key that uniquely identifies each record", "A key used for searching data", "A foreign key"],
    correct: "A key that uniquely identifies each record",
  },
  {
    /*4*/
    question: "What is a foreign key in a database table?",
    options: ["A primary key from another table used to establish relationships", "A key that is not unique", "A key used for indexing", "A key used for encryption"],
    correct: "A primary key from another table used to establish relationships",
  },
  {
    /*5*/
    question: "What is SQL?",
    options: ["Structured Question Language", "Standard Query Language", "Simple Query Logic", "Systematic Query Language"],
    correct: "Structured Query Language",
  },
  {
    /*6*/
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["UPDATE", "DELETE", "INSERT", "SELECT"],
    correct: "SELECT",
  },
  {
    /*7*/
    question: "Which SQL command is used to add new records to a table?",
    options: ["SELECT", "CREATE", "INSERT", "ALTER"],
    correct: "INSERT",
  },
  {
    /*8*/
    question: "Which SQL command is used to modify existing records in a table?",
    options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
    correct: "UPDATE",
  },
  {
    /*9*/
    question: "Which SQL command is used to remove records from a table?",
    options: ["REMOVE", "ERASE", "DELETE", "DROP"],
    correct: "DELETE",
  },
  {
    /*10*/
    question: "What is a database schema?",
    options: ["A set of commands for querying the database", "A blueprint of how the database is structured", "The actual data stored in the database", "A tool for managing the database"],
    correct: "A blueprint of how the database is structured",
  },
  {
    /*11*/
    question: "What is data normalization?",
    options: ["Organizing data to reduce redundancy and improve data integrity", "Storing all data in a single table", "Encrypting sensitive data", "Backing up the database"],
    correct: "Organizing data to reduce redundancy and improve data integrity",
  },
  {
    /*12*/
    question: "What is the first normal form (1NF)?",
    options: ["Eliminating all duplicate columns", "Ensuring that each column contains atomic values", "Removing transitive dependencies", "Ensuring that all non-key attributes are fully functionally dependent on the primary key"],
    correct: "Ensuring that each column contains atomic values",
  },
  {
    /*13*/
    question: "What is the second normal form (2NF)?",
    options: ["Being in 1NF and eliminating partial dependencies", "Eliminating all transitive dependencies", "Having a primary key", "Having no multivalued dependencies"],
    correct: "Being in 1NF and eliminating partial dependencies",
  },
  {
    /*14*/
    question: "What is the third normal form (3NF)?",
    options: ["Being in 2NF and eliminating transitive dependencies", "Eliminating all partial dependencies", "Having a composite primary key", "Ensuring atomicity of columns"],
    correct: "Being in 2NF and eliminating transitive dependencies",
  },
  {
    /*15*/
    question: "What is a database transaction?",
    options: ["A single SQL query", "A sequence of operations performed as a single logical unit of work", "A backup of the database", "A report generated from the database"],
    correct: "A sequence of operations performed as a single logical unit of work",
  },
  {
    /*16*/
    question: "Which of the following is NOT an ACID property of a transaction?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability", "Speed"],
    correct: "Speed",
  },
  {
    /*17*/
    question: "What does Atomicity in ACID refer to?",
    options: ["All operations in a transaction must be completed or none", "Transactions must maintain the integrity of the database", "Multiple transactions should execute independently", "Changes made by committed transactions are permanent"],
    correct: "All operations in a transaction must be completed or none",
  },
  {
    /*18*/
    question: "What does Consistency in ACID refer to?",
    options: ["All operations in a transaction must be completed", "Transactions must maintain the integrity of the database", "Multiple transactions should execute independently", "Changes are permanent"],
    correct: "Transactions must maintain the integrity of the database",
  },
  {
    /*19*/
    question: "What does Isolation in ACID refer to?",
    options: ["All operations are completed or none", "Database integrity is maintained", "Multiple transactions should execute independently", "Changes are permanent"],
    correct: "Multiple transactions should execute independently",
  },
  {
    /*20*/
    question: "What does Durability in ACID refer to?",
    options: ["All operations are completed", "Database integrity is maintained", "Transactions execute independently", "Changes made by committed transactions are permanent"],
    correct: "Changes made by committed transactions are permanent",
  },
  {
    /*21*/
    question: "What is a database index?",
    options: ["A way to store data in a sorted order", "A data structure that improves the speed of data retrieval operations", "A backup of the database", "A constraint on the data"],
    correct: "A data structure that improves the speed of data retrieval operations",
  },
  {
    /*22*/
    question: "Which of the following is a type of database index?",
    options: ["Primary Index", "Secondary Index", "Clustered Index", "All of the above"],
    correct: "All of the above",
  },
  {
    /*23*/
    question: "What is data warehousing?",
    options: ["Storing all transactional data in one place", "A subject-oriented, integrated, time-variant, and non-volatile collection of data in support of management's decision-making process", "Managing real-time data streams", "Securing the database from unauthorized access"],
    correct: "A subject-oriented, integrated, time-variant, and non-volatile collection of data in support of management's decision-making process",
  },
  {
    /*24*/
    question: "What is data mining?",
    options: ["Extracting knowledge from large volumes of data", "Managing the database efficiently", "Designing the database schema", "Backing up the database regularly"],
    correct: "Extracting knowledge from large volumes of data",
  },
  {
    /*25*/
    question: "What is a data model?",
    options: ["A diagram of the database tables", "A set of concepts to describe the structure of a database", "The actual data stored in the database", "A query language"],
    correct: "A set of concepts to describe the structure of a database",
  },
  {
    /*26*/
    question: "Which of the following is a type of data model?",
    options: ["Physical Model", "Logical Model", "Conceptual Model", "All of the above"],
    correct: "All of the above",
  },
  {
    /*27*/
    question: "What is an entity-relationship (ER) model?",
    options: ["A high-level conceptual data model diagram", "A model that describes the physical storage of data", "A model used for network databases", "A model used for hierarchical databases"],
    correct: "A high-level conceptual data model diagram",
  },
  {
    /*28*/
    question: "In an ER diagram, what does a rectangle represent?",
    options: ["An attribute", "A relationship", "An entity", "A key"],
    correct: "An entity",
  },
  {
    /*29*/
    question: "In an ER diagram, what does an oval represent?",
    options: ["An entity", "A relationship", "An attribute", "A primary key"],
    correct: "An attribute",
  },
  {
    /*30*/
    question: "In an ER diagram, what does a diamond represent?",
    options: ["An entity", "A relationship", "A key attribute", "A multivalued attribute"],
    correct: "A relationship",
  },
  {
    /*31*/
    question: "What is cardinality in the context of relationships in an ER model?",
    options: ["The number of entities in the database", "The number of attributes of an entity", "The number of instances of one entity that can be associated with the number of instances of another entity", "The type of relationship (one-to-one, one-to-many, many-to-many)"],
    correct: "The number of instances of one entity that can be associated with the number of instances of another entity",
  },
  {
    /*32*/
    question: "What is a one-to-one relationship?",
    options: ["One entity in A is associated with many entities in B", "Many entities in A are associated with one entity in B", "One entity in A is associated with at most one entity in B, and vice-versa", "Many entities in A are associated with many entities in B"],
    correct: "One entity in A is associated with at most one entity in B, and vice-versa",
  },
  {
    /*33*/
    question: "What is a one-to-many relationship?",
    options: ["One entity in A is associated with exactly one entity in B", "One entity in A is associated with zero or more entities in B", "Many entities in A are associated with one entity in B", "Many entities in A are associated with many entities in B"],
    correct: "One entity in A is associated with zero or more entities in B",
  },
  {
    /*34*/
    question: "What is a many-to-many relationship?",
    options: ["One A to many B", "Many A to one B", "One A to one B", "Many A to many B"],
    correct: "Many A to many B",
  },
  {
    /*35*/
    question: "What is a self-referencing relationship?",
    options: ["A relationship between two different databases", "A relationship where an entity relates to itself", "A relationship involving more than two entities", "A relationship where a foreign key references a primary key in a different table"],
    correct: "A relationship where an entity relates to itself",
  },
  {
    /*36*/
    question: "What is a composite key?",
    options: ["A key made up of multiple attributes to uniquely identify a record", "A key that is not unique", "A foreign key that references multiple primary keys", "A key used for indexing multiple columns"],
    correct: "A key made up of multiple attributes to uniquely identify a record",
  },
  {
    /*37*/
    question: "What is a candidate key?",
    options: ["A primary key that is not yet chosen", "An attribute or set of attributes that uniquely identifies a record", "A foreign key that could become a primary key", "A key used for searching"],
    correct: "An attribute or set of attributes that uniquely identifies a record",
  },
  {
    /*38*/
    question: "What is a super key?",
    options: ["A key that uniquely identifies a row and may contain redundant attributes", "A minimal candidate key", "A foreign key", "A key used for sorting"],
    correct: "A key that uniquely identifies a row and may contain redundant attributes",
  },
  {
    /*39*/
    question: "What is data integrity?",
    options: ["Ensuring the accuracy and consistency of data in a database", "Protecting the database from unauthorized access", "Improving the performance of database queries", "Backing up the database regularly"],
    correct: "Ensuring the accuracy and consistency of data in a database",
  },
  {
    /*40*/
    question: "Which of the following is a type of data integrity constraint?",
    options: ["Domain Integrity", "Referential Integrity", "Entity Integrity", "All of the above"],
    correct: "All of the above",
  },
  {
    /*41*/
    question: "What is domain integrity?",
    options: ["Ensuring that values in a column are of a specific data type", "Ensuring that foreign key values match primary key values", "Ensuring that primary keys are unique and not null", "Ensuring data is backed up"],
    correct: "Ensuring that values in a column are of a specific data type",
  },
  {
    /*42*/
    question: "What is referential integrity?",
    options: ["Ensuring primary keys are unique", "Ensuring foreign key values match corresponding primary key values", "Ensuring data types are correct", "Ensuring data is consistent across all tables"],
    correct: "Ensuring foreign key values match corresponding primary key values",
  },
  {
    /*43*/
    question: "What is entity integrity?",
    options: ["Ensuring data types are correct", "Ensuring foreign keys are valid", "Ensuring primary keys are unique and not null", "Ensuring data is consistent"],
    correct: "Ensuring primary keys are unique and not null",
  },
  {
    /*44*/
    question: "What is concurrency control in DBMS?",
    options: ["Managing simultaneous access to the database by multiple users", "Ensuring data integrity", "Improving query performance", "Backing up the database"],
    correct: "Managing simultaneous access to the database by multiple users",
  },
  {
    /*45*/
    question: "Which of the following is a concurrency control technique?",
    options: ["Locking", "Timestamping", "Two-phase locking", "All of the above"],
    correct: "All of the above",
  },
  {
    /*46*/
    question: "What is a deadlock in DBMS?",
    options: ["A situation where two or more transactions are blocked indefinitely, waiting for each other to release resources", "A very slow transaction", "A transaction that violates data integrity", "A failure of the database system"],
    correct: "A situation where two or more transactions are blocked indefinitely, waiting for each other to release resources",
  },
  {
    /*47*/
    question: "How can deadlocks be handled in DBMS?",
    options: ["Prevention", "Detection and recovery", "Avoidance", "All of the above"],
    correct: "All of the above",
  },
  {
    /*48*/
    question: "What is database recovery?",
    options: ["Restoring the database to a consistent state after a failure", "Improving query performance", "Securing the database", "Normalizing the database"],
    correct: "Restoring the database to a consistent state after a failure",
  },
  {
    /*49*/
    question: "Which of the following is a database recovery technique?",
    options: ["Backup and restore", "Logging", "Checkpoints", "All of the above"],
    correct: "All of the above",
  },
  {
    /*50*/
    question: "What is a view in SQL?",
    options: ["A physical table in the database", "A virtual table based on the result of an SQL statement", "A stored procedure", "A trigger"],
    correct: "A virtual table based on the result of an SQL statement",
  },
  {
    /*51*/
    question: "What is a stored procedure?",
    options: ["A function written in SQL that can be executed", "A view of the data", "A trigger that automatically executes", "A backup of the database"],
    correct: "A function written in SQL that can be executed",
  },
  {
    /*52*/
    question: "What is a trigger in SQL?",
    options: ["A condition that causes a database operation to execute automatically", "A stored procedure that is executed manually", "A view of the data", "A constraint on a column"],
    correct: "A condition that causes a database operation to execute automatically",
  },
  {
    /*53*/
    question: "What is data independence?",
    options: ["The ability to modify the schema at one level without affecting the schema at the next higher level", "The ability to access data without knowing the physical storage details", "Ensuring data is consistent", "Allowing multiple users to access data concurrently"],
    correct: "The ability to modify the schema at one level without affecting the schema at the next higher level",
  },
  {
    /*54*/
    question: "What are the two types of data independence?",
    options: ["Physical and Logical", "Conceptual and External", "Internal and External", "Primary and Secondary"],
    correct: "Physical and Logical",
  },
  {
    /*55*/
    question: "What is physical data independence?",
    options: ["Changes in the conceptual schema do not affect the external schemas", "Changes in the physical schema do not affect the logical schema", "Users do not need to know the physical storage details", "Data is stored independently of applications"],
    correct: "Changes in the physical schema do not affect the logical schema",
  },
  {
    /*56*/
    question: "What is logical data independence?",
    options: ["Changes in the physical schema do not affect the logical schema", "Changes in the logical schema do not affect the external schemas", "Users can access data without knowing the conceptual schema", "Data is stored logically"],
    correct: "Changes in the logical schema do not affect the external schemas",
  },
  {
    /*57*/
    question: "What is data redundancy?",
    options: ["Storing the same data multiple times", "Storing data efficiently", "Avoiding null values", "Ensuring data integrity"],
    correct: "Storing the same data multiple times",
  },
  {
    /*58*/
    question: "What are the disadvantages of data redundancy?",
    options: ["Increased storage space, data inconsistency, data anomalies", "Improved data access speed", "Enhanced data security", "Simplified data management"],
    correct: "Increased storage space, data inconsistency, data anomalies",
  },
  {
    /*59*/
    question: "What is a database administrator (DBA)?",
    options: ["Someone who designs the database schema", "Someone who manages and maintains the database system", "Someone who queries the database for information", "Someone who develops applications that use the database"],
    correct: "Someone who manages and maintains the database system",
  },
  {
    /*60*/
    question: "What is NoSQL?",
    options: ["A type of relational database", "A category of databases that do not adhere to the traditional relational model", "A query language for relational databases", "A tool for database administration"],
    correct: "A category of databases that do not adhere to the traditional relational model",
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