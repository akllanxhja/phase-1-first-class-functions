// function Monday() {
//   console.log('Go for a five-mile run');
//   console.log('Pump iron');
// }

// function Tuesday() {
//   console.log('Go for a five-mile run')
//   console.log('Swim 40 laps');
// }

// function Wednesday() {
//   console.log('Go for a five-mile run');
//   console.log('Go for a five-mile run');
// }

// function Thursday() {
//   console.log('Go for a five-mile run');
//   console.log('Pump iron');
// }

// function Friday() {
//   console.log('Go for a five-mile run');
//   console.log('Swim 40 laps');
// }

// function runFiveMiles() {
//   console.log('Go for a five-mile run');
// }

// function liftWeights() {
//   console.log('Pump iron');
// }

// function swimFortyLaps() {
//   console.log('Swim 40 laps');
// }

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }

// function Monday() {
//   exerciseRoutine(liftWeights);
// }

// Monday();

// exerciseRoutine(function () {
//   console.log('Stretch! Work that core!');
// });

// exerciseRoutine(() => {
//   console.log('Stretch! Work that core!')
// });

// exerciseRoutine(() => console.log('Stretch! Work that core!'));














































function receivesAFunction(cb) {
  return cb();
}

function namedFunction() {
  console.log('hello');
}

function returnsANamedFunction() {
  return namedFunction;
}
// // **** BELOW DID NOT PASS****
// // const returnsAnAnonymousFunction = function() {
// //   returns function(anonymous);
// // }

returnsAnAnonymousFunction(() => console.log('hello'));



