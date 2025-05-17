let quizData = [
  {
    /*1*/
    question: "What is a computer network?",
    options: ["A collection of hardware components", "A group of interconnected computers", "A system of software applications", "A method of data storage"],
    correct: "A group of interconnected computers",
  },
  {
    /*2*/
    question: "Which of the following is NOT a type of network topology?",
    options: ["Star", "Bus", "Ring", "Triangle"],
    correct: "Triangle",
  },
  {
    /*3*/
    question: "What does LAN stand for?",
    options: ["Local Area Network", "Large Area Network", "Logical Area Network", "Limited Area Network"],
    correct: "Local Area Network",
  },
  {
    /*4*/
    question: "What is the primary function of a router?",
    options: ["To display web pages", "To connect multiple networks", "To provide wireless connectivity", "To store data"],
    correct: "To connect multiple networks",
  },
  {
    /*5*/
    question: "Which layer of the OSI model is responsible for routing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    correct: "Network",
  },
  {
    /*6*/
    question: "What is the purpose of a MAC address?",
    options: ["To identify a network", "To identify a device on a network", "To specify a network protocol", "To encrypt data"],
    correct: "To identify a device on a network",
  },
  {
    /*7*/
    question: "Which protocol is used for sending emails?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    correct: "SMTP",
  },
  {
    /*8*/
    question: "What does TCP stand for?",
    options: ["Transmission Control Protocol", "Transfer Control Protocol", "Technical Communication Protocol", "Telecommunication Control Protocol"],
    correct: "Transmission Control Protocol",
  },
  {
    /*9*/
    question: "What is the function of a DNS server?",
    options: ["To assign IP addresses", "To translate domain names to IP addresses", "To manage network security", "To store website files"],
    correct: "To translate domain names to IP addresses",
  },
  {
    /*10*/
    question: "Which of the following is a network security device?",
    options: ["Printer", "Scanner", "Firewall", "Monitor"],
    correct: "Firewall",
  },
  {
    /*11*/
    question: "What is an IP address?",
    options: ["A physical address", "A logical address that identifies a device on a network", "A network password", "A type of cable"],
    correct: "A logical address that identifies a device on a network",
  },
  {
    /*12*/
    question: "What is the purpose of subnetting?",
    options: ["To increase network speed", "To divide a network into smaller, manageable parts", "To encrypt network traffic", "To compress data"],
    correct: "To divide a network into smaller, manageable parts",
  },
  {
    /*13*/
    question: "Which cable is commonly used for wired LANs?",
    options: ["Coaxial", "Fiber optic", "Twisted pair", "Parallel"],
    correct: "Twisted pair",
  },
  {
    /*14*/
    question: "What is the function of a switch in a network?",
    options: ["To connect networks", "To forward data packets between devices within the same network", "To provide internet access", "To amplify network signals"],
    correct: "To forward data packets between devices within the same network",
  },
  {
    /*15*/
    question: "What is the difference between TCP and UDP?",
    options: ["TCP is faster than UDP", "TCP is connection-oriented, while UDP is connectionless", "UDP is more reliable than TCP", "TCP is used for video streaming, while UDP is for email"],
    correct: "TCP is connection-oriented, while UDP is connectionless",
  },
  {
    /*16*/
    question: "Which protocol is used for accessing web pages?",
    options: ["FTP", "SMTP", "HTTP", "DNS"],
    correct: "HTTP",
  },
  {
    /*17*/
    question: "What is a VPN?",
    options: ["A type of network cable", "A virtual private network that provides secure connection over a public network", "A video playback network", "A voice over network protocol"],
    correct: "A virtual private network that provides secure connection over a public network",
  },
  {
    /*18*/
    question: "What is the purpose of a firewall?",
    options: ["To speed up network traffic", "To protect a network from unauthorized access", "To provide wireless connectivity", "To store network data"],
    correct: "To protect a network from unauthorized access",
  },
  {
    /*19*/
    question: "What is the difference between IPv4 and IPv6?",
    options: ["IPv6 is faster than IPv4", "IPv6 uses 128-bit addresses, while IPv4 uses 32-bit addresses", "IPv4 is more secure than IPv6", "IPv6 is only used for local networks"],
    correct: "IPv6 uses 128-bit addresses, while IPv4 uses 32-bit addresses",
  },
  {
    /*20*/
    question: "What is network latency?",
    options: ["The speed of data transfer", "The delay in data transfer over a network", "The distance between network devices", "The number of devices on a network"],
    correct: "The delay in data transfer over a network",
  },
  {
    /*21*/
    question: "What is bandwidth in networking?",
    options: ["The physical size of the network", "The range of frequencies available for data transmission", "The amount of data that can be transmitted over a network in a given time", "The number of devices connected to a network"],
    correct: "The amount of data that can be transmitted over a network in a given time",
  },
  {
    /*22*/
    question: "What is a network protocol?",
    options: ["A set of rules for data communication", "A type of network hardware", "A network operating system", "A method for data storage"],
    correct: "A set of rules for data communication",
  },
  {
    /*23*/
    question: "What is the purpose of the TCP/IP model?",
    options: ["To define network hardware specifications", "To provide a standard for how data is transmitted over the internet", "To manage network security", "To compress network data"],
    correct: "To provide a standard for how data is transmitted over the internet",
  },
  {
    /*24*/
    question: "Which layer of the TCP/IP model corresponds to the OSI model's Network layer?",
    options: ["Application", "Transport", "Internet", "Data Link"],
    correct: "Internet",
  },
  {
    /*25*/
    question: "What is a network topology?",
    options: ["The physical or logical arrangement of network nodes and connections", "The speed of data transfer", "The number of devices on a network", "The type of cables used in a network"],
    correct: "The physical or logical arrangement of network nodes and connections",
  },
  {
    /*26*/
    question: "What is a star topology?",
    options: ["A topology where all devices are connected in a circle", "A topology where all devices are connected to a central hub or switch", "A topology where devices are connected in a linear sequence", "A wireless network topology"],
    correct: "A topology where all devices are connected to a central hub or switch",
  },
  {
    /*27*/
    question: "What is a bus topology?",
    options: ["A topology where devices are connected in a star shape", "A topology where devices are connected to a single cable", "A topology where devices are connected in a ring", "A wireless network topology"],
    correct: "A topology where devices are connected to a single cable",
  },
  {
    /*28*/
    question: "What is a ring topology?",
    options: ["A topology where devices are connected to a central hub", "A topology where devices are connected in a circular path", "A topology where devices are connected in a line", "A wireless network topology"],
    correct: "A topology where devices are connected in a circular path",
  },
  {
    /*29*/
    question: "What is a mesh topology?",
    options: ["A topology with a central connection point", "A topology where each device is connected to every other device", "A topology with a single cable connection", "A wireless network topology"],
    correct: "A topology where each device is connected to every other device",
  },
  {
    /*30*/
    question: "What is a hybrid topology?",
    options: ["A network with only wireless connections", "A combination of two or more network topologies", "A network with only wired connections", "A network with only one type of device"],
    correct: "A combination of two or more network topologies",
  },
  {
    /*31*/
    question: "What is a MAN?",
    options: ["A small local network", "A network covering a city or large area", "A network connecting devices in a home", "A network for personal devices"],
    correct: "A network covering a city or large area",
  },
  {
    /*32*/
    question: "What is a WAN?",
    options: ["A network within a building", "A network that spans a large geographical area", "A network for connecting peripherals", "A network for gaming consoles"],
    correct: "A network that spans a large geographical area",
  },
  {
    /*33*/
    question: "What is a PAN?",
    options: ["A network for large organizations", "A network for personal devices over a short range", "A network for public access", "A network for data centers"],
    correct: "A network for personal devices over a short range",
  },
  {
    /*34*/
    question: "What is a SAN?",
    options: ["A network for audio devices", "A high-speed network for storage devices", "A network for sensors", "A network for industrial control systems"],
    correct: "A high-speed network for storage devices",
  },
  {
    /*35*/
    question: "What is a VLAN?",
    options: ["A physical network segment", "A logical network within a physical network", "A very large network", "A virtual private network"],
    correct: "A logical network within a physical network",
  },
  {
    /*36*/
    question: "What is network congestion?",
    options: ["Too many devices on a network", "A delay due to excessive traffic", "A physical blockage in the network", "A security breach"],
    correct: "A delay due to excessive traffic",
  },
  {
    /*37*/
    question: "What is QoS in networking?",
    options: ["Quality of service, prioritizing certain types of traffic", "The speed of the network", "The security of the network", "The cost of the network"],
    correct: "Quality of service, prioritizing certain types of traffic",
  },
  {
    /*38*/
    question: "What is network security?",
    options: ["Protecting network data and resources from unauthorized access", "Making a network faster", "Making a network larger", "Making a network cheaper"],
    correct: "Protecting network data and resources from unauthorized access",
  },
  {
    /*39*/
    question: "What is encryption in networking?",
    options: ["Compressing network data", "Converting data into a coded form to prevent unauthorized access", "Making a network faster", "Making a network more reliable"],
    correct: "Converting data into a coded form to prevent unauthorized access",
  },
  {
    /*40*/
    question: "What is a network administrator?",
    options: ["Someone who uses a network", "Someone who designs, sets up, and maintains a network", "Someone who attacks networks", "Someone who sells network hardware"],
    correct: "Someone who designs, sets up, and maintains a network",
  },
  {
    /*41*/
    question: "What is the purpose of DHCP?",
    options: ["To assign IP addresses automatically", "To translate domain names", "To manage network security", "To route network traffic"],
    correct: "To assign IP addresses automatically",
  },
  {
    /*42*/
    question: "What is a subnet mask?",
    options: ["A network password", "A number that defines the range of IP addresses in a subnet", "A type of network cable", "A physical network address"],
    correct: "A number that defines the range of IP addresses in a subnet",
  },
  {
    /*43*/
    question: "What is a default gateway?",
    options: ["The main network server", "The device that allows network traffic to leave the local network", "The fastest device on the network", "The most secure device on the network"],
    correct: "The device that allows network traffic to leave the local network",
  },
  {
    /*44*/
    question: "What is a port in networking?",
    options: ["A physical connection point", "A logical channel for data exchange", "A network speed measurement", "A type of network cable"],
    correct: "A logical channel for data exchange",
  },
  {
    /*45*/
    question: "What is the purpose of FTP?",
    options: ["To display web pages", "To transfer files between computers", "To send emails", "To manage network security"],
    correct: "To transfer files between computers",
  },
  {
    /*46*/
    question: "What is SSH?",
    options: ["A protocol for web browsing", "A secure protocol for remote access", "A protocol for sending emails", "A protocol for file transfer"],
    correct: "A secure protocol for remote access",
  },
  {
    /*47*/
    question: "What is SNMP?",
    options: ["A protocol for network management", "A protocol for video streaming", "A protocol for voice communication", "A protocol for data encryption"],
    correct: "A protocol for network management",
  },
  {
    /*48*/
    question: "What is a proxy server?",
    options: ["A server that acts as an intermediary for requests from clients", "A server that stores website files", "A server that manages network security", "A server that assigns IP addresses"],
    correct: "A server that acts as an intermediary for requests from clients",
  },
  {
    /*49*/
    question: "What is load balancing in networking?",
    options: ["Distributing network traffic across multiple servers", "Compressing network data", "Encrypting network traffic", "Prioritizing network traffic"],
    correct: "Distributing network traffic across multiple servers",
  },
  {
    /*50*/
    question: "What is a network sniffer?",
    options: ["A device that boosts network signals", "A tool for capturing and analyzing network traffic", "A device that cleans network cables", "A tool for testing network speed"],
    correct: "A tool for capturing and analyzing network traffic",
  },
  {
    /*51*/
    question: "What is a honeypot in network security?",
    options: ["A type of firewall", "A decoy system to attract and detect attackers", "A tool for encrypting data", "A device for load balancing"],
    correct: "A decoy system to attract and detect attackers",
  },
  {
    /*52*/
    question: "What is a DDoS attack?",
    options: ["A physical attack on network hardware", "A distributed denial-of-service attack that floods a network with traffic", "An attempt to steal network data", "An attempt to guess network passwords"],
    correct: "A distributed denial-of-service attack that floods a network with traffic",
  },
  {
    /*53*/
    question: "What is a packet in networking?",
    options: ["A physical network cable", "A unit of data transmitted over a network", "A network security protocol", "A type of network device"],
    correct: "A unit of data transmitted over a network",
  },
  {
    /*54*/
    question: "What is a frame in networking?",
    options: ["A type of network cable connector", "A data unit at the Data Link layer", "A network speed measurement", "A type of network topology"],
    correct: "A data unit at the Data Link layer",
  },
  {
    /*55*/
    question: "What is a segment in networking?",
    options: ["A part of a network cable", "A data unit at the Transport layer", "A network security device", "A type of network address"],
    correct: "A data unit at the Transport layer",
  },
  {
    /*56*/
    question: "What is the purpose of NAT?",
    options: ["To speed up network traffic", "To translate private IP addresses to public IP addresses", "To encrypt network data", "To manage network security"],
    correct: "To translate private IP addresses to public IP addresses",
  },
  {
    /*57*/
    question: "What is a MAC address?",
    options: ["A logical network address", "A physical address that identifies a device on a network", "A network password", "A type of network protocol"],
    correct: "A physical address that identifies a device on a network",
  },
  {
    /*58*/
    question: "What is ARP?",
    options: ["A protocol for sending emails", "A protocol for resolving IP addresses to MAC addresses", "A protocol for web browsing", "A protocol for file transfer"],
    correct: "A protocol for resolving IP addresses to MAC addresses",
  },
  {
    /*59*/
    question: "What is RARP?",
    options: ["A protocol for routing network traffic", "A protocol for resolving MAC addresses to IP addresses", "A protocol for network security", "A protocol for data compression"],
    correct: "A protocol for resolving MAC addresses to IP addresses",
  },
  {
    /*60*/
    question: "What is ICMP?",
    options: ["A protocol for sending emails", "A protocol for error reporting and diagnostics", "A protocol for web browsing", "A protocol for file transfer"],
    correct: "A protocol for error reporting and diagnostics",
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