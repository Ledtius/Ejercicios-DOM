function validationString() {
  let promptValue = prompt(
    "System of rols--Typing the rol that you have\n\nNote,The rols in the system are:\n\n- admin\n- moderator \n- user \n- guest\n"
  );

  if (promptValue === null) return;

  promptValue = promptValue.trim();

  // promptValue = Number(promptValue);
  alert(typeof promptValue);

  let value = (promptValue * 5);
  alert(value);

  if (!promptValue) {
    alert("Error - empty value");
  }

  alert(promptValue);
}

validationString();
