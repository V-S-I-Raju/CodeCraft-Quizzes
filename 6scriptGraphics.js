let quizData = [
  {
    /*1*/
    question: "What is the primary goal of computer graphics?",
    options: ["To process textual data efficiently", "To generate images and animations from data", "To manage computer hardware resources", "To analyze network traffic"],
    correct: "To generate images and animations from data",
  },
  {
    /*2*/
    question: "Which of the following is NOT a common type of computer graphics?",
    options: ["2D Graphics", "3D Graphics", "Holographic Graphics", "1D Graphics"],
    correct: "1D Graphics",
  },
  {
    /*3*/
    question: "What is a pixel?",
    options: ["A 3D model representation", "The smallest addressable element in an image", "A mathematical curve", "A method of rendering"],
    correct: "The smallest addressable element in an image",
  },
  {
    /*4*/
    question: "What does RGB stand for in color representation?",
    options: ["Red Green Blue", "Resolution Graphics Buffer", "Raster Graphics Bit", "Real Gradient Blend"],
    correct: "Red Green Blue",
  },
  {
    /*5*/
    question: "Which of the following is an additive color model?",
    options: ["CMYK", "HSV", "RGB", "HSL"],
    correct: "RGB",
  },
  {
    /*6*/
    question: "Which of the following is a subtractive color model?",
    options: ["RGB", "HSL", "CMYK", "HSV"],
    correct: "CMYK",
  },
  {
    /*7*/
    question: "What is rasterization?",
    options: ["The process of creating 3D models", "The process of converting vector graphics into pixels", "The process of adding textures to surfaces", "The process of animating objects"],
    correct: "The process of converting vector graphics into pixels",
  },
  {
    /*8*/
    question: "What are vector graphics?",
    options: ["Images composed of pixels", "Images defined by mathematical curves and shapes", "Animated sequences of images", "Realistic 3D renderings"],
    correct: "Images defined by mathematical curves and shapes",
  },
  {
    /*9*/
    question: "Which of the following is an advantage of vector graphics over raster graphics?",
    options: ["Better for photorealistic images", "Resolution independence", "Smaller file sizes for complex images", "Easier to edit individual pixels"],
    correct: "Resolution independence",
  },
  {
    /*10*/
    question: "What is aliasing in computer graphics?",
    options: ["The smooth appearance of curved lines", "The jagged or stair-stepped appearance of lines and edges", "The process of adding detail to a model", "A technique for realistic lighting"],
    correct: "The jagged or stair-stepped appearance of lines and edges",
  },
  {
    /*11*/
    question: "What is anti-aliasing?",
    options: ["A technique to make edges appear smoother", "A method to create sharp lines", "A way to reduce the file size of an image", "A process of converting 3D to 2D"],
    correct: "A technique to make edges appear smoother",
  },
  {
    /*12*/
    question: "What is a frame buffer?",
    options: ["A part of memory that stores the image being displayed", "A high-speed processor for graphics calculations", "A storage device for image files", "A connection interface for display devices"],
    correct: "A part of memory that stores the image being displayed",
  },
  {
    /*13*/
    question: "What is the purpose of the Graphics Processing Unit (GPU)?",
    options: ["To handle general-purpose computing tasks", "To accelerate graphics rendering", "To manage system memory", "To control input/output devices"],
    correct: "To accelerate graphics rendering",
  },
  {
    /*14*/
    question: "What is a vertex in 3D graphics?",
    options: ["A surface of a 3D object", "A point in 3D space", "An edge connecting two points", "A collection of polygons"],
    correct: "A point in 3D space",
  },
  {
    /*15*/
    question: "What is an edge in 3D graphics?",
    options: ["A point in 3D space", "A line segment connecting two vertices", "A flat surface", "A curved surface"],
    correct: "A line segment connecting two vertices",
  },
  {
    /*16*/
    question: "What is a face (polygon) in 3D graphics?",
    options: ["A single point", "A line segment", "A flat surface bounded by edges", "A collection of vertices"],
    correct: "A flat surface bounded by edges",
  },
  {
    /*17*/
    question: "What is a mesh in 3D graphics?",
    options: ["A single polygon", "A collection of interconnected vertices, edges, and faces that define the shape of a 3D object", "A way to apply textures", "A method of animation"],
    correct: "A collection of interconnected vertices, edges, and faces that define the shape of a 3D object",
  },
  {
    /*18*/
    question: "What is rendering in computer graphics?",
    options: ["The process of creating 3D models", "The process of generating a 2D image from a 3D scene", "The process of animating objects over time", "The process of capturing real-world images"],
    correct: "The process of generating a 2D image from a 3D scene",
  },
  {
    /*19*/
    question: "Which of the following is a common 3D rendering technique?",
    options: ["Vectorization", "Rasterization", "Pixelation", "Quantization"],
    correct: "Rasterization",
  },
  {
    /*20*/
    question: "What is shading in 3D graphics?",
    options: ["The process of creating the overall shape of an object", "The process of calculating the color of each pixel based on lighting and surface properties", "The process of moving objects in a scene", "The process of adding textures to surfaces"],
    correct: "The process of calculating the color of each pixel based on lighting and surface properties",
  },
  {
    /*21*/
    question: "What is texture mapping?",
    options: ["Applying a 2D image to the surface of a 3D model", "Creating 3D models from 2D images", "Simulating realistic lighting effects", "Defining the material properties of an object"],
    correct: "Applying a 2D image to the surface of a 3D model",
  },
  {
    /*22*/
    question: "What is lighting in 3D graphics?",
    options: ["The process of defining the shape of objects", "The simulation of how light interacts with objects in a scene", "The process of adding textures", "The process of animation"],
    correct: "The simulation of how light interacts with objects in a scene",
  },
  {
    /*23*/
    question: "Which of the following is a type of light source in 3D graphics?",
    options: ["Pixel light", "Vector light", "Point light", "Mesh light"],
    correct: "Point light",
  },
  {
    /*24*/
    question: "What is a normal vector in 3D graphics?",
    options: ["A vector that defines the position of a vertex", "A vector perpendicular to the surface of a polygon", "A vector pointing towards a light source", "A vector defining the direction of an edge"],
    correct: "A vector perpendicular to the surface of a polygon",
  },
  {
    /*25*/
    question: "What is reflection in computer graphics?",
    options: ["The bending of light as it passes through a surface", "The bouncing of light off a surface", "The absorption of light by a surface", "The emission of light from a surface"],
    correct: "The bouncing of light off a surface",
  },
  {
    /*26*/
    question: "What is refraction in computer graphics?",
    options: ["The bouncing of light", "The bending of light as it passes through a surface", "The absorption of light", "The emission of light"],
    correct: "The bending of light as it passes through a surface",
  },
  {
    /*27*/
    question: "What is animation in computer graphics?",
    options: ["Creating static images", "Creating the illusion of movement over time", "Rendering a single frame", "Modeling 3D objects"],
    correct: "Creating the illusion of movement over time",
  },
  {
    /*28*/
    question: "What is keyframe animation?",
    options: ["Animating every single frame manually", "Defining specific poses at certain points in time, with the computer interpolating the in-between frames", "Using only one frame for the entire animation", "Animating based on physical simulations only"],
    correct: "Defining specific poses at certain points in time, with the computer interpolating the in-between frames",
  },
  {
    /*29*/
    question: "What is motion capture?",
    options: ["Capturing still images", "Recording the movement of real-world objects or actors to animate digital characters", "Creating motion blur effects", "Analyzing the motion of fluids"],
    correct: "Recording the movement of real-world objects or actors to animate digital characters",
  },
  {
    /*30*/
    question: "What is morphing in animation?",
    options: ["Gradually transforming one shape into another", "Moving an object along a path", "Changing the color of an object over time", "Scaling an object up or down"],
    correct: "Gradually transforming one shape into another",
  },
  {
    /*31*/
    question: "What is virtual reality (VR)?",
    options: ["Creating realistic 2D images", "An immersive experience that simulates a real or imagined environment", "Displaying graphics on a standard monitor", "A type of animation technique"],
    correct: "An immersive experience that simulates a real or imagined environment",
  },
  {
    /*32*/
    question: "What is augmented reality (AR)?",
    options: ["Replacing the real world with a virtual environment", "Superimposing computer-generated imagery on the real world", "Creating highly detailed 3D models", "Analyzing real-world data using graphics"],
    correct: "Superimposing computer-generated imagery on the real world",
  },
  {
    /*33*/
    question: "What is ray tracing?",
    options: ["A fast rendering technique that approximates lighting", "A rendering technique that simulates the path of light rays to create realistic images", "A method for creating vector graphics", "A technique for real-time animation"],
    correct: "A rendering technique that simulates the path of light rays to create realistic images",
  },
  {
    /*34*/
    question: "What is z-buffering?",
    options: ["A technique for storing color information", "A method for handling depth perception and visibility of objects", "A way to optimize rendering speed", "A technique for applying textures"],
    correct: "A method for handling depth perception and visibility of objects",
  },
  {
    /*35*/
    question: "What is backface culling?",
    options: ["Removing the back faces of objects from rendering to improve performance", "Adding more detail to the back of objects", "A technique for making objects transparent", "A way to render only wireframes"],
    correct: "Removing the back faces of objects from rendering to improve performance",
  },
  {
    /*36*/
    question: "What are shaders?",
    options: ["Programs that run on the CPU to control the overall rendering process", "Programs that run on the GPU to determine how pixels are rendered", "Files that store 3D model data", "Software used for animation"],
    correct: "Programs that run on the GPU to determine how pixels are rendered",
  },
  {
    /*37*/
    question: "Which of the following is a common shading model?",
    options: ["Vector shading", "Pixel shading", "Phong shading", "Wireframe shading"],
    correct: "Phong shading",
  },
  {
    /*38*/
    question: "What is bump mapping?",
    options: ["A technique to add fine surface detail without increasing the polygon count", "A method for creating smooth surfaces", "A way to change the overall shape of an object", "A technique for applying colors"],
    correct: "A technique to add fine surface detail without increasing the polygon count",
  },
  {
    /*39*/
    question: "What is parallax mapping?",
    options: ["A more advanced technique than bump mapping that creates a stronger illusion of depth", "A simpler technique than bump mapping", "A method for animating textures", "A way to simulate reflections"],
    correct: "A more advanced technique than bump mapping that creates a stronger illusion of depth",
  },
  {
    /*40*/
    question: "What is ambient occlusion?",
    options: ["A lighting technique that simulates soft shadows caused by indirect lighting", "A method for creating bright highlights", "A way to make objects fully transparent", "A technique for rendering wireframes"],
    correct: "A lighting technique that simulates soft shadows caused by indirect lighting",
  },
  {
    /*41*/
    question: "What is a scene graph?",
    options: ["A linear list of objects in a scene", "A hierarchical data structure that organizes the objects in a 3D scene", "A visual representation of the rendering pipeline", "A method for storing texture data"],
    correct: "A hierarchical data structure that organizes the objects in a 3D scene",
  },
  {
    /*42*/
    question: "What are transformations in computer graphics?",
    options: ["Changing the color of objects", "Modifying the position, orientation, or size of objects", "Adding textures to surfaces", "Rendering the final image"],
    correct: "Modifying the position, orientation, or size of objects",
  },
  {
    /*43*/
    question: "Which of the following is a basic 2D transformation?",
    options: ["Extrusion", "Rotation", "Sweeping", "Spherization"],
    correct: "Rotation",
  },
  {
    /*44*/
    question: "What is scaling in 2D transformations?",
    options: ["Moving an object", "Changing the size of an object", "Rotating an object", "Skewing an object"],
    correct: "Changing the size of an object",
  },
  {
    /*45*/
    question: "What is translation in 2D transformations?",
    options: ["Changing the size", "Moving the position", "Rotating", "Reflecting"],
    correct: "Moving the position",
  },
  {
    /*46*/
    question: "What is rotation in 2D transformations?",
    options: ["Changing the position", "Changing the orientation", "Changing the size", "Skewing"],
    correct: "Changing the orientation",
  },
  {
    /*47*/
    question: "What are homogeneous coordinates used for in computer graphics?",
    options: ["Representing colors", "Performing affine transformations using matrix multiplication", "Storing texture data", "Defining 3D models"],
    correct: "Performing affine transformations using matrix multiplication",
  },
  {
    /*48*/
    question: "What is a viewing pipeline in 3D graphics?",
    options: ["The sequence of steps involved in creating a 3D model", "The sequence of steps involved in projecting a 3D scene onto a 2D screen", "The process of applying materials to objects", "The steps for animating objects"],
    correct: "The sequence of steps involved in projecting a 3D scene onto a 2D screen",
  },
  {
    /*49*/
    question: "What is projection in 3D graphics?",
    options: ["Transforming 2D images into 3D", "Mapping 3D points onto a 2D plane", "Creating realistic lighting", "Defining object materials"],
    correct: "Mapping 3D points onto a 2D plane",
  },
  {
    /*50*/
    question: "Which of the following is a type of 3D projection?",
    options: ["Raster projection", "Vector projection", "Perspective projection", "Pixel projection"],
    correct: "Perspective projection",
  },
  {
    /*51*/
    question: "What is perspective projection?",
    options: ["Parallel lines appear parallel", "Objects appear smaller as they are farther away", "Objects maintain their relative sizes", "Used primarily for technical drawings"],
    correct: "Objects appear smaller as they are farther away",
  },
  {
    /*52*/
    question: "What is orthographic projection?",
    options: ["Objects appear smaller with distance", "Parallel lines converge to a vanishing point", "Parallel lines remain parallel, and objects maintain their relative sizes", "Used for realistic rendering"],
    correct: "Parallel lines remain parallel, and objects maintain their relative sizes",
  },
  {
     /*53*/
     question: "What is clipping in computer graphics?",
     options: ["Removing parts of objects that are outside the viewing frustum", "Adding details to the edges of objects", "Changing the color of objects based on distance", "A technique for optimizing rendering speed"],
     correct: "Removing parts of objects that are outside the viewing frustum",
   },
   {
     /*54*/
     question: "What is a viewing frustum?",
     options: ["The visible portion of the 3D scene that is projected onto the 2D screen", "The entire 3D scene being rendered", "A type of lighting effect", "A method for creating textures"],
     correct: "The visible portion of the 3D scene that is projected onto the 2D screen",
   },
   {
     /*55*/
     question: "Which of the following is a common clipping algorithm?",
     options: ["Bubble clipping", "Cohen-Sutherland line clipping", "Merge clipping", "Quick clipping"],
     correct: "Cohen-Sutherland line clipping",
   },
   {
     /*56*/
     question: "What is hidden surface removal?",
     options: ["Making all surfaces transparent", "Determining which surfaces are visible to the viewer and should be rendered", "A technique for simplifying complex geometry", "A method for applying shadows"],
     correct: "Determining which surfaces are visible to the viewer and should be rendered",
   },
   {
     /*57*/
     question: "What is the painter's algorithm?",
     options: ["A hidden surface removal algorithm that renders objects from farthest to nearest", "An algorithm for creating digital paintings", "A method for applying textures layer by layer", "An animation technique based on layering drawings"],
     correct: "A hidden surface removal algorithm that renders objects from farthest to nearest",
   },
   {
     /*58*/
     question: "What is motion blur?",
     options: ["A technique to make stationary objects appear sharper", "The blurring of moving objects in an image or animation", "A type of lighting effect", "A way to reduce the file size of an animation"],
     correct: "The blurring of moving objects in an image or animation",
   },
   {
     /*59*/
     question: "What is depth of field?",
     options: ["The distance between the nearest and farthest objects in a scene that appear acceptably sharp in an image", "The overall depth of the 3D scene", "A technique for making distant objects appear blurry", "A method for measuring the size of objects"],
     correct: "The distance between the nearest and farthest objects in a scene that appear acceptably sharp in an image",
   },
   {
     /*60*/
     question: "What are fractals in computer graphics?",
     options: ["Simple geometric shapes", "Complex patterns that exhibit self-similarity at different scales", "Techniques for creating smooth surfaces", "Methods for realistic animation of natural phenomena"],
     correct: "Complex patterns that exhibit self-similarity at different scales",
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