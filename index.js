const tutorials = [
  [
  'What Does The This Keyword Mean?',
  'What Is The Constructor OO Pattern?',
  'Implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What Is NaN And How Can We Check For It',
  'What Is The Difference Between StopPropagation And PreventDefault?',
  'Immutable State And Pure Functions',
  'What Is The Difference Between == And ===?',
  'What Is The Difference Between Event Capturing And Bubbling?',
  'What Is JSONP?'
]
];

function titleCased() {
  return tutorials.map(tutorial => {
    let result = '';
    let capitalizeNext = true;

    for (let i = 0; i < tutorial.length; i++) {
      const char = tutorial[i];

      if (capitalizeNext && char !== ' ') {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char.toLowerCase();
      }

      if (char === ' ') {
        capitalizeNext = true;
      }
    }