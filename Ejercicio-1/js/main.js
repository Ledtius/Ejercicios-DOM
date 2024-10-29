function stringValidation() {
  let promptValue = prompt(
    "System of roles: Typing the role that you have\n\nNote. The roles in the system are:\n\n- admin\n- moderator \n- user \n- guest\n"
  );

  if (promptValue === null) return;

  promptValue = promptValue.trim();

  promptValue = String(promptValue);

  if (!promptValue) {
    alert("Error - empty value");
    return;
  } else if (!isNaN(promptValue)) {
    alert("Error - invalid value");
    return;
  }

  return promptValue;
}

let rolesValidation = function () {
  let promptValue = stringValidation();

  if (promptValue === undefined) return;

  // let valueQuestion = repetitiveQuestion();

  // console.log(valueQuestion);

  let countAdmin = 0;
  let countModer = 0;
  let countUser = 0;
  let countGuest = 0;

  let valueQuestion = true;

  while (valueQuestion) {
    // if (promptValue === "admin" && countAdmin < 1) {
    //   countAdmin++;
    //   console.log("CountAdmin: " + countAdmin);
    // } else {
    //   alert("Error - not repeat roles");
    // }
    // if (promptValue === "moderator" && countAdmin < 1) {
    //   countModer++;
    //   console.log("CountModer: " + countModer);
    // } else {
    //   alert("Error - not repeat roles");
    // }

    if (promptValue === "admin" && countAdmin < 1) {
      countAdmin++;
      console.log("CountAdmin: " + countAdmin);
    } else if (promptValue === "moderator" && countModer < 1) {
      countModer++;

      console.log("CountModer: " + countModer);
    } else if (promptValue === "user" && countUser < 1) {
      countUser++;
      console.log("CountUser: " + countUser);
    } else if (promptValue === "guest") {
      countGuest++;
      console.log("CountGuest: " + countGuest);
    } else {
      alert("Error - not repeat roles");
    }

    if (
      promptValue === "admin" ||
      promptValue === "moderator" ||
      promptValue === "user" ||
      promptValue === "guest"
    ) {
      console.log(valueQuestion);
      valueQuestion = repetitiveQuestion();
      if (valueQuestion === true) {
        promptValue = stringValidation();
        console.log(promptValue);
      }
    } else return;
  }

  if (countAdmin === 1) {
    alert("admin role: You have total access");
  }
  if (countModer === 1) {
    alert(
      "moderator role: You have access to the comments and moderate the content"
    );
  }
  if (countUser === 1) {
    alert("user role: you have access of preview the comments");
  }
  if (countGuest === 1) {
    alert("guest role: you have access of public content");
  }

  // switch(){
  //   case
  // }
};

function repetitiveQuestion() {
  let valueQuestion = prompt(
    "You have other role?:\n\n'Press 1 to yes'\n\n'Press 2 to no'\n"
  );

  if (valueQuestion === null) return;

  valueQuestion = valueQuestion.trim();
  valueQuestion = Number(valueQuestion);

  if (valueQuestion === 1) {
    return true;
  } else if (valueQuestion === 2) {
    return false;
  }

  alert("Invalid value");
  return;
}

rolesValidation();
