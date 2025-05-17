let quizData = [
  {
    /*1*/
    question: "Who is known as the 'father of AI'?",
    options: ["Alan Turing", "John McCarthy", "Geoffrey Hinton", "Yann LeCun"],
    correct: "John McCarthy",
  },
  {
    /*2*/
    question: "What is the primary goal of Artificial Intelligence?",
    options: ["To eliminate human jobs", "To create machines that can think and act intelligently", "To develop faster computers", "To automate all industrial processes"],
    correct: "To create machines that can think and act intelligently",
  },
  {
    /*3*/
    question: "Which of the following is NOT a branch of Artificial Intelligence?",
    options: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Quantum Computing"],
    correct: "Quantum Computing",
  },
  {
    /*4*/
    question: "What is the Turing Test used to evaluate?",
    options: ["The speed of a computer", "The intelligence of a machine", "The efficiency of an algorithm", "The complexity of a program"],
    correct: "The intelligence of a machine",
  },
  {
    /*5*/
    question: "Which of the following is a type of Machine Learning?",
    options: ["Expert Systems", "Fuzzy Logic", "Supervised Learning", "Robotics"],
    correct: "Supervised Learning",
  },
  {
    /*6*/
    question: "What does NLP stand for in the context of AI?",
    options: ["Neural Language Processing", "Natural Learning Process", "Natural Language Processing", "Network Linguistic Programming"],
    correct: "Natural Language Processing",
  },
  {
    /*7*/
    question: "Which AI technique is primarily used for decision making based on rules?",
    options: ["Neural Networks", "Genetic Algorithms", "Expert Systems", "Reinforcement Learning"],
    correct: "Expert Systems",
  },
  {
    /*8*/
    question: "What is a 'chatbot' an application of?",
    options: ["Computer Vision", "Natural Language Processing", "Robotics", "Planning"],
    correct: "Natural Language Processing",
  },
  {
    /*9*/
    question: "Which of the following is a key component of a typical AI agent?",
    options: ["Actuator", "Perceptron", "Environment", "All of the above"],
    correct: "All of the above",
  },
  {
    /*10*/
    question: "What is 'Deep Learning' a subfield of?",
    options: ["Robotics", "Expert Systems", "Machine Learning", "Computer Vision"],
    correct: "Machine Learning",
  },
  {
    /*11*/
    question: "Which algorithm is commonly used for supervised classification tasks?",
    options: ["K-Means", "Principal Component Analysis", "Support Vector Machines", "Apriori"],
    correct: "Support Vector Machines",
  },
  {
    /*12*/
    question: "What is the role of a 'knowledge base' in an AI system?",
    options: ["To store the program code", "To hold the data used for training", "To store facts and rules about the world", "To manage the user interface"],
    correct: "To store facts and rules about the world",
  },
  {
    /*13*/
    question: "Which of the following is an example of an 'unsupervised' learning task?",
    options: ["Image classification", "Spam detection", "Customer segmentation", "Machine translation"],
    correct: "Customer segmentation",
  },
  {
    /*14*/
    question: "What is 'Computer Vision' primarily concerned with?",
    options: ["Enabling computers to understand human language", "Developing robots that can perform physical tasks", "Enabling computers to 'see' and interpret images", "Creating intelligent agents that can play games"],
    correct: "Enabling computers to 'see' and interpret images",
  },
  {
    /*15*/
    question: "Which of the following is a challenge in the field of Artificial Intelligence?",
    options: ["Data scarcity", "Ethical concerns", "Lack of computational power", "All of the above"],
    correct: "All of the above",
  },
  {
    /*16*/
    question: "What is the term for AI systems that can learn and improve from experience without explicit programming?",
    options: ["Rule-based systems", "Expert systems", "Machine learning", "Symbolic AI"],
    correct: "Machine learning",
  },
  {
    /*17*/
    question: "Which of the following is a common application of AI in healthcare?",
    options: ["Predictive maintenance of equipment", "Fraud detection in banking", "Medical diagnosis and treatment planning", "Optimizing supply chain logistics"],
    correct: "Medical diagnosis and treatment planning",
  },
  {
    /*18*/
    question: "What is the main difference between 'strong AI' and 'weak AI'?",
    options: ["Strong AI is more reliable than weak AI", "Strong AI can perform any intellectual task that a human being can, while weak AI is limited to specific tasks", "Weak AI is cheaper to develop than strong AI", "There is no real difference between strong AI and weak AI"],
    correct: "Strong AI can perform any intellectual task that a human being can, while weak AI is limited to specific tasks",
  },
  {
    /*19*/
    question: "Which of the following is a key component of a neural network?",
    options: ["Decision trees", "Support vector machines", "Neurons (nodes)", "Genetic algorithms"],
    correct: "Neurons (nodes)",
  },
  {
    /*20*/
    question: "What is 'reinforcement learning'?",
    options: ["A type of machine learning where an agent learns to behave in an environment by performing actions and receiving rewards or penalties", "A type of AI used for natural language processing", "A technique for training neural networks", "A method for building expert systems"],
    correct: "A type of machine learning where an agent learns to behave in an environment by performing actions and receiving rewards or penalties",
  },
  {
    /*21*/
    question: "Which of the following is an example of a 'supervised' learning task?",
    options: ["Clustering customer data", "Predicting stock prices based on historical data", "Grouping news articles by topic", "Reducing the dimensionality of a dataset"],
    correct: "Predicting stock prices based on historical data",
  },
  {
    /*22*/
    question: "What is the purpose of an 'activation function' in a neural network?",
    options: ["To prevent overfitting", "To introduce non-linearity into the network", "To reduce the number of layers", "To speed up the training process"],
    correct: "To introduce non-linearity into the network",
  },
  {
    /*23*/
    question: "Which of the following is a common application of AI in the financial industry?",
    options: ["Self-driving cars", "Virtual personal assistants", "Fraud detection", "Robotic surgery"],
    correct: "Fraud detection",
  },
  {
    /*24*/
    question: "What is 'backpropagation'?",
    options: ["A technique for optimizing database queries", "An algorithm used to train neural networks", "A method for compressing images", "A type of artificial neural network"],
    correct: "An algorithm used to train neural networks",
  },
  {
    /*25*/
    question: "Which of the following is a key component of an expert system?",
    options: ["A user interface", "A knowledge base", "An inference engine", "All of the above"],
    correct: "All of the above",
  },
  {
    /*26*/
    question: "What is the goal of 'natural language generation' (NLG)?",
    options: ["To translate text from one language to another", "To enable computers to understand human language", "To generate human-like text from structured data", "To recognize and classify objects in images"],
    correct: "To generate human-like text from structured data",
  },
  {
    /*27*/
    question: "Which of the following is a common application of AI in e-commerce?",
    options: ["Predictive maintenance of machinery", "Personalized product recommendations", "Robotic process automation", "Generating realistic images"],
    correct: "Personalized product recommendations",
  },
  {
    /*28*/
    question: "What is 'overfitting' in machine learning?",
    options: ["When a model performs well on the training data but poorly on unseen data", "When a model is too simple to capture the underlying patterns in the data", "When the training data is noisy or contains errors", "When the model is trained for too long"],
    correct: "When a model performs well on the training data but poorly on unseen data",
  },
  {
    /*29*/
    question: "Which of the following is a type of 'unsupervised' learning algorithm?",
    options: ["Linear regression", "Logistic regression", "K-means clustering", "Support vector machine"],
    correct: "K-means clustering",
  },
  {
    /*30*/
    question: "What is the purpose of 'feature engineering' in machine learning?",
    options: ["To select the best machine learning algorithm", "To optimize the hyperparameters of a model", "To transform raw data into features that are suitable for modeling", "To evaluate the performance of a model"],
    correct: "To transform raw data into features that are suitable for modeling",
  },
  {
    /*31*/
    question: "Which of the following is a common application of AI in transportation?",
    options: ["Generating realistic 3D models", "Self-driving cars", "Predicting weather patterns", "Detecting fraudulent transactions"],
    correct: "Self-driving cars",
  },
  {
    /*32*/
    question: "What is the 'bias-variance tradeoff' in machine learning?",
    options: ["The tradeoff between the accuracy and interpretability of a model", "The tradeoff between the computational cost and performance of a model", "The tradeoff between a model's ability to fit the training data and its ability to generalize to unseen data", "The tradeoff between the amount of data used for training and testing a model"],
    correct: "The tradeoff between a model's ability to fit the training data and its ability to generalize to unseen data",
  },
  {
    /*33*/
    question: "Which of the following is a technique for reducing the dimensionality of data?",
    options: ["Principal Component Analysis (PCA)", "K-Nearest Neighbors (KNN)", "Recurrent Neural Network (RNN)", "Convolutional Neural Network (CNN)"],
    correct: "Principal Component Analysis (PCA)",
  },
  {
    /*34*/
    question: "What is the difference between 'precision' and 'recall' in classification?",
    options: ["Precision measures the accuracy of the model, while recall measures its efficiency", "Precision measures the proportion of true positives among the predicted positives, while recall measures the proportion of true positives among the actual positives", "Precision is used for binary classification, while recall is used for multi-class classification", "There is no difference between precision and recall"],
    correct: "Precision measures the proportion of true positives among the predicted positives, while recall measures the proportion of true positives among the actual positives",
  },
  {
    /*35*/
    question: "Which of the following is a common application of AI in manufacturing?",
    options: ["Personalized advertising", "Robotic process automation", "Virtual reality simulations", "Generating music"],
    correct: "Robotic process automation",
  },
  {
    /*36*/
    question: "What is 'transfer learning' in machine learning?",
    options: ["Training a model on a large dataset and then using it for a different task", "Transferring data between different databases", "Using a model trained on one task to improve performance on a related task", "Transferring the code of a model from one programming language to another"],
    correct: "Using a model trained on one task to improve performance on a related task",
  },
  {
    /*37*/
    question: "Which of the following is a type of recurrent neural network (RNN)?",
    options: ["Convolutional Neural Network (CNN)", "Long Short-Term Memory (LSTM)", "Support Vector Machine (SVM)", "K-Nearest Neighbors (KNN)"],
    correct: "Long Short-Term Memory (LSTM)",
  },
  {
    /*38*/
    question: "What is 'regularization' in machine learning?",
    options: ["A technique for preventing overfitting", "A method for speeding up the training process", "A way to improve the interpretability of a model", "A technique for selecting the best features"],
    correct: "A technique for preventing overfitting",
  },
  {
    /*39*/
    question: "Which of the following is a common application of AI in customer service?",
    options: ["Generating realistic images", "Chatbots and virtual assistants", "Predicting stock prices", "Optimizing supply chain logistics"],
    correct: "Chatbots and virtual assistants",
  },
  {
    /*40*/
    question: "What is the 'vanishing gradient problem' in neural networks?",
    options: ["When the weights of the network become too large", "When the training data is noisy", "When the gradients become very small during training, making it difficult for the network to learn", "When the network has too many layers"],
    correct: "When the gradients become very small during training, making it difficult for the network to learn",
  },
  {
    /*41*/
    question: "Which of the following is a technique for evaluating the performance of a classification model?",
    options: ["Mean Squared Error (MSE)", "R-squared", "Confusion matrix", "Root Mean Squared Error (RMSE)"],
    correct: "Confusion matrix",
  },
  {
    /*42*/
    question: "What is 'federated learning'?",
    options: ["Training a model on a central server", "Training a model across multiple decentralized devices or servers without exchanging data", "Training a model using only publicly available data", "Training a model using a single, very large dataset"],
    correct: "Training a model across multiple decentralized devices or servers without exchanging data",
  },
  {
    /*43*/
    question: "Which of the following is a common application of AI in agriculture?",
    options: ["Generating music", "Predictive maintenance of machinery", "Precision farming and crop monitoring", "Detecting fraudulent transactions"],
    correct: "Precision farming and crop monitoring",
  },
  {
    /*44*/
    question: "What is 'Bayesian optimization'?",
    options: ["A technique for optimizing the hyperparameters of a machine learning model", "A method for training Bayesian networks", "A way to visualize high-dimensional data", "A technique for compressing images"],
    correct: "A technique for optimizing the hyperparameters of a machine learning model",
  },
  {
    /*45*/
    question: "Which of the following is a type of convolutional neural network (CNN)?",
    options: ["Long Short-Term Memory (LSTM)", "Recurrent Neural Network (RNN)", "VGGNet", "K-Nearest Neighbors (KNN)"],
    correct: "VGGNet",
  },
  {
    /*46*/
    question: "What is 'explainable AI' (XAI)?",
    options: ["AI systems that are easy to understand and interpret", "AI systems that are designed to be ethical and fair", "AI systems that can explain their reasoning and decision-making processes", "All of the above"],
    correct: "AI systems that can explain their reasoning and decision-making processes",
  },
  {
    /*47*/
    question: "Which of the following is a common application of AI in gaming?",
    options: ["Generating realistic images", "Creating intelligent game agents", "Predicting weather patterns", "Detecting fraudulent transactions"],
    correct: "Creating intelligent game agents",
  },
  {
    /*48*/
    question: "What is 'generative adversarial network' (GAN)?",
    options: ["A type of neural network used for classification", "A type of neural network used for regression", "A framework consisting of two neural networks (a generator and a discriminator) that compete with each other", "A technique for reducing the dimensionality of data"],
    correct: "A framework consisting of two neural networks (a generator and a discriminator) that compete with each other",
  },
  {
    /*49*/
    question: "Which of the following is a technique for handling imbalanced datasets in classification?",
    options: ["Mean Squared Error (MSE)", "R-squared", "Oversampling and undersampling", "Root Mean Squared Error (RMSE)"],
    correct: "Oversampling and undersampling",
  },
  {
    /*50*/
    question: "What is 'active learning'?",
    options: ["A type of machine learning where the algorithm actively queries the user for labels", "A method for training neural networks on very large datasets", "A technique for reducing the dimensionality of data", "A way to visualize high-dimensional data"],
    correct: "A type of machine learning where the algorithm actively queries the user for labels",
  },
  {
    /*51*/
    question: "Which of the following is a common application of AI in cybersecurity?",
    options: ["Generating music", "Predictive maintenance of machinery", "Detecting and preventing cyberattacks", "Precision farming and crop monitoring"],
    correct: "Detecting and preventing cyberattacks",
  },
  {
    /*52*/
    question: "What is 'meta-learning'?",
    options: ["Learning how to learn", "Learning from very large datasets", "Learning without any supervision", "Learning from a single example"],
    correct: "Learning how to learn",
  },
  {
    /*53*/
    question: "Which of the following is a technique for handling missing data?",
    options: ["Imputation", "Normalization", "Regularization", "Activation"],
    correct: "Imputation",
  },
  {
    /*54*/
    question: "What is 'ensemble learning'?",
    options: ["Combining multiple machine learning models to improve performance", "Training a single, very large neural network", "Learning from a small number of examples", "Learning without any supervision"],
    correct: "Combining multiple machine learning models to improve performance",
  },
  {
    /*55*/
    question: "Which of the following is a common application of AI in robotics?",
    options: ["Generating realistic images", "Controlling industrial robots", "Predicting weather patterns", "Detecting fraudulent transactions"],
    correct: "Controlling industrial robots",
  },
  {
    /*56*/
    question: "What is 'self-supervised learning'?",
    options: ["Learning from data where the labels are automatically generated from the data itself", "Learning without any supervision", "Learning from a single example", "Learning from a small number of labeled examples"],
    correct: "Learning from data where the labels are automatically generated from the data itself",
  },
  {
    /*57*/
    question: "Which of the following is a technique for evaluating the performance of a regression model?",
    options: ["Confusion matrix", "F1-score", "Mean Squared Error (MSE)", "AUC-ROC"],
    correct: "Mean Squared Error (MSE)",
  },
  {
    /*58*/
    question: "What is 'few-shot learning'?",
    options: ["Learning from a large number of examples", "Learning from a small number of labeled examples", "Learning without any supervision", "Learning from data where the labels are automatically generated"],
    correct: "Learning from a small number of labeled examples",
  },
  {
    /*59*/
    question: "Which of the following is a common application of AI in supply chain management?",
    options: ["Generating music", "Predictive maintenance of machinery", "Optimizing logistics and inventory management", "Detecting fraudulent transactions"],
    correct: "Optimizing logistics and inventory management",
  },
  {
    /*60*/
    question: "What is 'zero-shot learning'?",
    options: ["Learning from a large number of examples", "Learning without seeing any examples of the new task", "Learning from a small number of labeled examples", "Learning from data where the labels are automatically generated"],
    correct: "Learning without seeing any examples of the new task",
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