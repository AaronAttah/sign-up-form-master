//  function validateForm() {
//     var input1 = document.getElementById("first name").value;

//    if(input1 =="") {
//      //alert("name here");
//      document.getElementById("myDropdown").classList.add("show");
//      document.getElementById("first name").classList.add("bordercolor");
//      document.getElementById("form").classList.add("formNew-width");
//      document.getElementById("excla1").classList.add("exclamation");

//           return false;
//      }

//    }

const App = (function () {
  let $form;
  let $inputs;

  //function to call the cache doms
  function init() {
    cacheDom();
    bindEvents();
  }

  //now the cachedoms
  function cacheDom() {
    $form = document.querySelector("form");
    $inputs = Array.from($form.querySelectorAll("input"));
  }

  function bindEvents() {
    $form.addEventListener("submit", handleFormSubmit);

    $inputs.forEach((inputEl) => {
      inputEl.addEventListener("blur", handleInputBlur);
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    $inputs.forEach((inputEl) => validateInput(inputEl)); // what this simply means is that as you
    // are calling the validate function, pass an arguement in it called inputEl
    // then we ARE now saying what ever that will happen let happen in foe each of the inputs
    //and since is going to happen to all the inputs, let the inputs have a special attribut called inputEl which was used to pass an arguement
  }
  function handleInputBlur(e) {
    validateInput(e.target);
    
  }

  function validateInput(inputEl) {
    const label = inputEl.parentElement;
    const value = inputEl.value;
    const errorMessage = label.querySelector(".error");
    const excla = label.querySelector(".excla");
    if (value == "") {
      inputEl.classList.add("bordercolor");
      errorMessage.classList.add("show");
      excla.classList.add("show");
    } else {
      inputEl.classList.remove("bordercolor");
      errorMessage.classList.remove("show");
      excla.classList.remove("show");
    }
  }

  return {
    init,
  };
})();
App.init();
