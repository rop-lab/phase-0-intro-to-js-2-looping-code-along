function writeCards(namesArray, eventName) {
  let messagesArray = [];

  for (let i = 0; i < namesArray.length; i++) {
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
    messagesArray.push(message);
  }

  return messagesArray;
}

module.exports = {
  writeCards 
};

function countDown(startingNumber) {
  for (let i = startingNumber; i >= 0; i--) {
    console.log(i);
  }
}

module.exports = {
  countDown 
};
