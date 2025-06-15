// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function(task = "go to the office") {
  return `This Monday, I will ${task}.`;
};
function wrapAdjective(flair = "*") {
  // This is the inner function (a closure) that has access to 'flair' from its outer scope.
  return function(adjective = "special") { // Inner function's parameter defaults to "special"
    return `You are ${flair}${adjective}${flair}!`;
  };
}