const strengthColors = ["#ff0000", "#ff0000", "#ffa700", "#fff400", "#a3ff00", "#2cba00"];

const calculatePasswordStrength = (password) => {
  let strength = 0;
  // Password is at least 8 characters
  if (password.length > 7) {
    strength += 1;
  }
  // Password has at least three lowercase letters
  if (password.match(/(?=.*[a-z].*[a-z].*[a-z])/)) {
    strength += 1;
  }
  // Password has at least two uppercase letters
  if (password.match(/(?=.*[A-Z].*[A-Z])/)) {
    strength += 1;
  }
  // Password has at least two digits
  if (password.match(/(?=.*[0-9].*[0-9])/)) {
    strength += 1;
  }
  // Password has at least one character that is not letter or number
  if (password.match(/(?=[^a-zA-Z0-9])/)) {
    strength += 1;
  }
  return strength;
};

const setPasswordStrengthElementStyling = (passwordStrength) => {
  const passwordStrengthElement = document.getElementById("password-strength");
  passwordStrengthElement.style.width = `${20 * passwordStrength}%`;
  passwordStrengthElement.style.backgroundColor = strengthColors[passwordStrength];
}

const checkPassword = (event) => {
  const password = event.target.value;
  const passwordStrength = calculatePasswordStrength(password);
  setPasswordStrengthElementStyling(passwordStrength);
};

const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", checkPassword);