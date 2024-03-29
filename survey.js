const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};
rl.question("What's your name? Nicknames are also acceptable: ", answer1 => {
  answers.name = answer1;
  rl.question("What's an activity you like doing?", answer2 => {
    answers.activity = answer2;
    rl.question("What do you listen to while doing that?", answer3 => {
      answers.music = answer3;
      rl.question("Which meal is your favourite?", answer4 => {
        answers.favMeal = answer4;
        rl.question("What's your favourite thing to eat for meal?", answer5 => {
          answers.favFood = answer5;
          rl.question("Which sport is your absolute favourite? ", answer6 => {
            answers.favSport = answer6;
            rl.question(
              "What is your superpower? In a few words, tell us what you are amazing at!",
              answer7 => {
                answers.superPower = answer7;
                console.log(
                  `${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.favFood} for ${answers.favMeal}, prefers ${answers.favSport} over any other sport, and is amazing at ${answers.superPower}`
                );
                rl.close();
              }
            );
          });
        });
      });
    });
  });
});
