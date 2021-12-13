const body = document.body;
body.addEventListener("keypress", run);

function create(el) {
  // helper function to easily create new elements
  return document.createElement(el);
}
function assignProp(el) {
  // to easily assign id's
  return `chromeFind${el}`;
}

function styleModalEl(modalEl) {
  // To style the modal elements
  modalEl.findForm.style.width = "100%";
  modalEl.findForm.style.textAlign = "center";

  modalEl.findInput.style.width = "80%";
  modalEl.findInput.style.marginTop = "20px";
  modalEl.findInput.style.border = "1px solid lightgreen";
  modalEl.findInput.style.height = "40px";
  modalEl.findInput.style.outline = "none";
  modalEl.findInput.style.padding = "5px 10px 5px 10px";

  modalEl.btn.style.padding = "8px 50px";
  modalEl.btn.style.letterSpacing = "1px";
  modalEl.btn.style.borderRadius = "50px";
  modalEl.btn.style.outline = "none";
  modalEl.btn.style.backgroundColor = "lightgreen";
  modalEl.btn.style.border = "none";
  modalEl.btn.style.fontWeight = "bold";
  modalEl.btn.style.marginTop = "20px";
  modalEl.btn.style.cursor = "pointer";
  modalEl.btn.style.fontSize = "18px";
  modalEl.btn.style.transition = "0.25s all";

  modalEl.closeBtn.style.width = "18px";
  modalEl.closeBtn.style.height = "18px";
  modalEl.closeBtn.style.position = "absolute";
  modalEl.closeBtn.style.right = "7px";
  modalEl.closeBtn.style.top = "5px";
  modalEl.closeBtn.style.cursor = "pointer";

  modalEl.contDiv.style.position = "relative";
  modalEl.contDiv.style.height = "100%";
}

function createModalElements(modal) {
  const contDiv = create("div");
  const firstImg = create("img");
  const findForm = create("form");
  const findInput = create("input");
  const btnDiv = create("div");
  const btn = create("input");
  const closeBtn = create("img");

  firstImg.id = assignProp("Img");
  findForm.setAttribute("name", assignProp("Form"));
  findInput.setAttribute("name", assignProp("Input"));
  btnDiv.setAttribute("name", assignProp("Div"));
  btn.setAttribute("name", assignProp("Input"));
  closeBtn.setAttribute(
    "src",
    "https://cdn-icons-png.flaticon.com/128/463/463612.png"
  );
  contDiv.setAttribute("id", "cont " + assignProp("Div"));

  btn.setAttribute("type", "submit");
  btn.setAttribute("value", "Find");
  btnDiv.append(btn);

  findForm.append(findInput);
  findForm.append(btnDiv);

  styleModalEl({
    firstImg,
    findForm,
    findInput,
    btnDiv,
    btn,
    closeBtn,
    contDiv,
  });

  contDiv.append(closeBtn);
  contDiv.append(firstImg);
  contDiv.append(findForm);

  modal.append(contDiv);

  btn.addEventListener("mouseenter", () => {
    // hover effect for the btn
    btn.style.transform = "translate(0px, -5%)";
    btn.style.backgroundColor = "rgb(85, 202, 85)";
    btn.style.boxShadow = "0px 5px 5px grey";
  });
  btn.addEventListener("mouseleave", () => {
    // hover effect for the btn
    btn.style.transform = "none";
    btn.style.backgroundColor = "lightgreen";
    btn.style.boxShadow = "none";
  });

  findInput.addEventListener("focus", function () {
    // To style the findInput
    this.style.boxShadow = "0 0 10px lightgreen";
  });
  findInput.addEventListener("blur", function () {
    // To style the findInput
    this.style.boxShadow = "none";
  });
}

function createModal(objSetting) {
  // function to create the modal
  const modal = create("div");
  modal.className = "chrome-modal";
  const keysArray = Object.keys(objSetting); // ["position", "top"...]

  keysArray.forEach((key) => {
    modal.style[key] = objSetting[key];
  });

  createModalElements(modal); // Pass in the modal object

  document.body.append(modal);
}

function run(e) {
  // run if any key on the keyboard is pressed
  const pressedKey = e.which || e.keyCode; // For older browsers
  if (pressedKey === 92) {
    // If the key pressed is "backslash"
    const settings = {
      // Call this function and pass in this object
      position: "absolute",
      top: "5px",
      left: "5px",
      zIndex: "10000000",
      width: "400px",
      minWidth: "400px",
      height: "180px",
      backgroundColor: "#f3f3f3",
      border: "1.5px solid lightgreen",
      borderRadius: "20px",
    };
    createModal(settings); // call this function with the appropriate settings
  }
}

// Event Delegation to listen to when the findForm is being submitted
document.addEventListener("submit", (e) => {
  const submitForm = e.target;

  if (submitForm.name === "chromeFindForm") {
    e.preventDefault();
    const findThis = submitForm.elements.chromeFindInput.value;
    alert(findThis);
  }
});
