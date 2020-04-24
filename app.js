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
  $('main').html(`<section class="startPage">
<h1>Video Game History Quiz</h1>
<h2>Think you know your video games?</h2>
<button class="startButton">Let's go!</button>
</section>`)
}

function questionTemplate () {

}

function incorrectResultTemplate () {

}

function correctResultTemplate () {

}

function endQuizTemplate () {

}
// These functions return HTML templates

/** ******** RENDER FUNCTION(S) **********/

function renderQuestions () {

}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/** ******** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function startGameHandle () {

}

function enterAnswerHandle () {

}

function nextQuestionHandle () {

}

function restartGamehandle () {

}

function handleQuizApp () {

}

$(handleQuizApp)
