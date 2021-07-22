let Model = `<div class="pop-up-model">
<p>Allow Access to Camera</p>
<div class="buttons-wrapper">
    <button>Allow</button>
    <button class="dont-allow">Dont Allow</button>
</div>
</div>`;
let CloseIcon = document.querySelector(".close-icon");
let StartingPopUpSubmit = document.querySelector("#email-model-submit");
let StaringPopUpMask = document.querySelector(".new-letter-modal > .mask");
let Camera = document.querySelector(".camera-image");

const HandleClosePopUp = (e) => {
  document.querySelector(".pop-up-model").remove();
};

const HandleStartingPopUp = (e) => {
  e.preventDefault();
  let StartingPopUpWrapper = document.querySelector(".new-letter-modal");

  StartingPopUpWrapper.remove();
};

const HandlePopUp = (e) => {
  Camera.insertAdjacentHTML("afterend", Model);
  document
    .querySelector(".dont-allow")
    .addEventListener("click", HandleClosePopUp);
};

StaringPopUpMask.addEventListener("click", HandleStartingPopUp);
StartingPopUpSubmit.addEventListener("click", HandleStartingPopUp);
CloseIcon.addEventListener("click", HandleStartingPopUp);
Camera.addEventListener("click", HandlePopUp);
