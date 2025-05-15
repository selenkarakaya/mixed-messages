const button = document.getElementById("messageBtn");
const message = document.getElementById("message");

const generateMessage = () => {
  // fetch message data
  fetch("messageData.json")
    .then((response) => response.json())
    .then((data) => {
      // print data for control
      console.log(data);

      // invoke randomElement for generate subjects, verbs and endings
      const subjects = randomElement(data.subjects);
      const verbs = randomElement(data.verbs);
      const endings = randomElement(data.endings);

      // create message
      const mixedMessage = `${subjects}  ${verbs}  ${endings}`;

      // add mixed message in html
      message.textContent = mixedMessage;
    })
    .catch((error) => console.error("Error loading JSON:", error));
};

const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

generateMessage();
button.addEventListener("click", generateMessage);
