'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'The Atari 2600 was released in the United States in which year?',
      answers: [
        '1977',
        '1980',
        '2001',
        '1600'
      ],
      correctAnswer: '1977'
    },
    {
      question: 'What is the name of the main protagonist of the Tomb Raider series of games?',
      answers: [
        'Michelle Obama',
        'Diana Prince',
        'Lara Croft',
        'Yuna'
      ],
      correctAnswer: 'Lara Croft'
    },
    {
      question: ' Mario first appeared in which classic video game?',
      answers: [
        'Mario Brothers',
        'Donkey Kong',
        'Super Mario',
        'The legend of Mario'
      ],
      correctAnswer: 'Donkey Kong'
    },
    {
      question: 'Which company publishes World of Warcraft?',
      answers: [
        'Respawn',
        'Thinkful Co',
        'Saga Inc',
        'Blizzard Inc'
      ],
      correctAnswer: 'Blizzard Inc'
    },
    {
      question: 'The kingdom of Hyrule is the main setting for which classic video game franchise?',
      answers: [
        'Gears of War',
        'Final Fantasy',
        'The Legend of Zelda',
        'Grand Theft Auto'
      ],
      correctAnswer: 'The Legend of Zelda'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
}

/**
   *
   * Technical requirements:
   *
   * Your app should include a render() function, that regenerates the view each time the store is updated.
   * See your course material, consult your instructor, and reference the slides for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   *
   */

/** ******** TEMPLATE GENERATION FUNCTIONS **********/

function startQuizTemplate () {
  // Set the start page
  $('main').html(`<section class="page startPage"><div class="container">
<h1>Video Game History Quiz</h1>
<h2>Think you know your video games?</h2>
<button class="startButton">Let's go!</button>
</div></section>`);

  // Initiate the start button and quiz
  $('.startButton').on('click', function() {
    questionTemplate();
    store.quizStarted = true;
  });
}

function questionTemplate () {
  // Set the question page
  let mainHtml = '';
  let questionAndScoreHtml = `<div class="question-header"><div class="question-number">Question ${store.questionNumber + 1} of ${store.questions.length}</div><div class="question-score">Current Score: ${store.score}/${store.questionNumber}</div></div>`;
  let questionHtml = `<header><h2>${store.questions[store.questionNumber].question}</h2></header>`;
  let answersHtml = '';
  let footerHtml = '<div class="question-footer"></div>';

  answersHtml += '<ul class="answers">';
  store.questions[store.questionNumber].answers.forEach((answer) => {
    answersHtml += `<li><button class="answer">${answer}</button></li>`;
  });
  answersHtml += '</ul>';

  mainHtml = '<section class="page"><div class="container">' + questionAndScoreHtml + questionHtml + answersHtml + footerHtml + '</div></section>';

  $('main').html(mainHtml);

  // Initiate question buttons
  $('.answer').on('click', function() {
    if ($(this).html() === store.questions[store.questionNumber].correctAnswer) {
      renderCorrect();
    } else {
      renderIncorrect();
    }

    $(this).addClass('selected');
    $('.answer').off('click');
  });
}

function endQuizTemplate () {
  let marioImage = '';
  if (store.score >= 3){
    marioImage = 'src="img/mario-success.png" alt="Jumping Mario"';
  } else {
    marioImage = 'src="img/mario-failure.png" alt="Sad Mario"';
  };

  $('main').html(`<section class="page finishPage"><div class="container">
  <div><img ${marioImage}></div>
  <div class="finalScore"><div>
    <h1>Your Score:</h1>
    <h2>${store.score}/${store.questions.length}</h2>
    <button class="reset">Start Over</button>
  </div></div>
  </div></section>`);


  $('.reset').on('click', function() {
    store.quizStarted = false;
    store.score = 0;
    store.questionNumber = 0;
    startQuizTemplate();
  });
}
// These functions return HTML templates

/** ******** RENDER FUNCTION(S) **********/

function renderCorrect() {
  // if it's the last question, say Finish instead of next question
  let buttonText = '';
  if (store.questionNumber === store.questions.length - 1) {
    buttonText = '<button class="finishButton">Finish</button>';
  } else {
    buttonText = '<button class="nextQuestion">Next Question</button>';
  }

  $('.question-footer').html(`<div class="alert correct">Correct!</div>${buttonText}`);

  // Set all the store variables
  store.score += 1;
  store.questionNumber += 1;

  $('.nextQuestion').on('click', function() {questionTemplate()});
  $('.finishButton').on('click', function() {endQuizTemplate ()});
}

function renderIncorrect() {
  // if it's the last question, say Finish instead of next question
  let buttonText = '';
  if (store.questionNumber === store.questions.length - 1) {
    buttonText = '<button class="finishButton">Finish</button>';
  } else {
    buttonText = '<button class="nextQuestion">Next Question</button>';
  }

  $('.question-footer').html(`<div class="alert wrong">Wrong! The correct answer was ${store.questions[store.questionNumber].correctAnswer}.</div>${buttonText}`);

  // Set all the store variables
  // Don't touch the score
  store.questionNumber += 1;

  $('.nextQuestion').on('click', function() {questionTemplate()});
  $('.finishButton').on('click', function() {endQuizTemplate ()});
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/** ******** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleQuizApp () {
  startQuizTemplate();
}

$(document).ready(function() {
  handleQuizApp();
});
