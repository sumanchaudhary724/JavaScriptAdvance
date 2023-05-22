//process
//1. select the element
// const elm = document.getElementById("first");
const elm = document.querySelector(".message");
// const text = elm.innerText;
// const text = elm.innerHTML;

//elm.innerText = "hello this is Suman";
elm.innerHTML = "<h1>hello this is Suman</h1>";
// elm.style.color = "red";

console.log(elm.classList);

// know what to change
// 2. apply the change

const makeChange = () => {
  elm.classList.toggle("success");
};

const nameElm = document.getElementById("display");
nameElm.addEventListener("click", () => {
  //login
  const text = nameElm.innerText;
  let reverse = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
  }
  nameElm.innerText = reverse;
});
