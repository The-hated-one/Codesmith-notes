function rockPaperScissors(num) {
  if (num === 0) return [];

  function rps(num, path){
    if (num === 0) return outcomes.push(path);

    rps(num - 1, [...path, 'rock']);
    rps(num - 1, [...path, 'paper']);
    rps(num - 1, [...path, 'scissors']);
  }

  const outcomes = [];
  rps(num, []);
  return outcomes;
}

rockPaperScissors(1); // -> [['rock'],['paper'],['scissors']]
rockPaperScissors(2); // ->
// [['rock','rock'],['rock','paper'],['rock','scissors'],
// ['paper','paper'],['paper','scissors'],['paper','rock'],
// ['scissors','scissors'],['scissors','paper'],['scissors','rock']]

