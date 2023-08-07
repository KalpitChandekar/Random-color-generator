const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.getElementById('clr-code').innerHTML = randomCode;

  //automatically code copy to the clipboard
  navigator.clipboard.writeText(randomCode);
};

document.getElementById("btn").addEventListener("click", getColor);

getColor();
