let action = "ENCODE_DECODE";

const btn = document.querySelector(".buttons");
const mainSection = document.querySelector(".main-section");

const frontActionBtn = document.querySelector(".front-action-btn");
const reverseActionBtn = document.querySelector(".reverse-action-btn");
const textInput = document.querySelector(".textarea-input");
const outputMsg = document.querySelector(".output-msg");
const textOutput = document.querySelector(".textarea-output");

//Date and time Objects
const dateAndTime = document.querySelector(".date-and-time");
const timerStopwatchLink = document.querySelector(".timer-stopwatch-link");
const stopwatchTimerMainSection = document.querySelector(
  ".stopwatch-timer-main-section"
);
const stopwatch = document.querySelector(".stopwatch");
const start = document.querySelector("#start");
const stop_ = document.querySelector("#stop");
const pause = document.querySelector("#pause");
const lapse = document.querySelector("#lapse");
const hourLabel = document.querySelector("#hour-label");
const minLabel = document.querySelector("#min-label");
const secLabel = document.querySelector("#sec-label");
const milSecLabel = document.querySelector("#mil-sec-label");
const lapseSection = document.querySelector(".lapse-section");

//Date and time events
timerStopwatchLink.addEventListener("click", () =>
  selectUtility("TIMER_AND_STOPWATCH")
);

start.addEventListener("click", () => stopwatchEvents("START"));
stop_.addEventListener("click", () => stopwatchEvents("STOP"));
lapse.addEventListener("click", () => stopwatchEvents("LAPSE"));
let isPause = true;
let intervalId;
let div;

//
const showDateAndTime = () => {
  let date = new Date();
  dateAndTime.innerHTML = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

setInterval(showDateAndTime, 1000);

const stopwatchEventActions = (action) => {
  switch (action) {
    case "START":
      //bde0fe

      if (isPause) {
        start.value = "PAUSE";
        isPause = false;
      } else {
        start.value = "RESUME";
        isPause = true;
        clearInterval(intervalId);
      }

      if (!isPause) {
        intervalId = setInterval(function () {
          secLabel.innerHTML = parseInt(secLabel.innerHTML) + 1;

          if (secLabel.innerHTML == 60) {
            minLabel.innerHTML = parseInt(minLabel.innerHTML) + 1;
            secLabel.innerHTML = 1;
          }

          if (minLabel.innerHTML == 60) {
            hourLabel.innerHTML = parseInt(hourLabel.innerHTML) + 1;
            minLabel.innerHTML = 1;
          }
        }, 1000);
      }
      break;
    case "LAPSE":
      console.log(action);
      break;
  }
};

stopwatchEvents = (action) => {
  switch (action.toUpperCase()) {
    case "START":
      stopwatchEventActions(action.toUpperCase());
      break;
    case "STOP":
      clearInterval(intervalId);
      lapseSection.innerHTML = null;
      hourLabel.innerHTML = "00";
      minLabel.innerHTML = "00";
      secLabel.innerHTML = "00";
      start.value = "START";
      isPause = true;
      break;
    case "LAPSE":
      if (isPause == false) {
        div = document.createElement("div");
        div.style.fontSize = "40px";
        div.innerHTML = `${hourLabel.innerHTML}:${minLabel.innerHTML}:${secLabel.innerHTML}`;
        lapseSection.appendChild(div);
        break;
      }
  }
};

//Encoder Decoder objects
const encodeDecodeLink = document.querySelector(".encode-decode-link");
const encoderDecoderFlexDiv = document.querySelector(
  ".encoder-decoder-flex-div"
);
const utilityInfo = document.querySelector(".utility-info");

//Hasher Objects
const md5HasherBtn = document.querySelector(".md5-btn-link");
const sha1HasherBtn = document.querySelector(".sha1-btn-link");
const sha256HasherBtn = document.querySelector(".sha256-btn-link");
const sha512hasherBtn = document.querySelector(".sha512-btn-link");
const stringHasher = document.querySelector(".string-hasher");
const stringHasherDropdown = document.querySelector(".string-hasher-dropdown");
const hashBtn = document.querySelector(".hash-btn");
const hashBtnDiv = document.querySelector(".hash-btn-div");

//Converter Objects
const unitConverter = document.querySelector(".unit-converter");
const unitConverterDropdown = document.querySelector(
  ".unit-converter-dropdown"
);
const milesKmBtn = document.querySelector(".miles-km-link");
const fahCelBtn = document.querySelector(".fah-cel-link");
const acreSqftBtn = document.querySelector(".acre-sqft-link");
const hrSecBtn = document.querySelector(".hr-sec-link");

//Encoder Decoder Event
encodeDecodeLink.addEventListener("click", () =>
  selectUtility("ENCODE_DECODE")
);

//Hasher events
stringHasher.addEventListener(
  "mouseover",
  () => (stringHasherDropdown.style.display = "block")
);
stringHasher.addEventListener(
  "mouseout",
  () => (stringHasherDropdown.style.display = "none")
);
sha1HasherBtn.addEventListener("click", () => selectUtility("SHA1_HASH"));
sha256HasherBtn.addEventListener("click", () => selectUtility("SHA256_HASH"));
sha512hasherBtn.addEventListener("click", () => selectUtility("SHA512_HASH"));
md5HasherBtn.addEventListener("click", () => selectUtility("MD5_HASH"));

//Converter events
unitConverter.addEventListener(
  "mouseover",
  () => (unitConverterDropdown.style.display = "block")
);
unitConverter.addEventListener(
  "mouseout",
  () => (unitConverterDropdown.style.display = "none")
);
milesKmBtn.addEventListener("click", () => selectUtility("MILES_KM"));
fahCelBtn.addEventListener("click", () => selectUtility("FAH_CEL"));
acreSqftBtn.addEventListener("click", () => selectUtility("ACRE_SQFT"));
hrSecBtn.addEventListener("click", () => selectUtility("HR_SEC"));

//Converter Methods
const mileToKm = (input) => {
  if (isNaN(input)) {
    return "Please input only Numbers!!";
  }

  return input * 1.609;
};

const fahToCel = (input) => {
  if (isNaN(input)) {
    return "Please input only Numbers!!";
  }

  return (input - 32) * 5556;
};

const acreToSquareft = (input) => {
  if (isNaN(input)) {
    return "Please input only Numbers!!";
  }

  return input * 43560;
};

const hrToSec = (input) => {
  if (isNaN(input)) {
    return "Please input only Numbers!!";
  }

  return input * 60 * 60;
};

const kmToMile = (input) => {
  if (isNaN(input)) {
    return "Please input only Numbers!!";
  }

  return input / 1.609;
};

const celToFah = (input) => {
  if (isNaN(input)) {
    return "Please input only Numbers!!";
  }

  return (input * 9) / 5 + 32;
};

const squareftToAcre = (input) => {
  if (isNaN(input)) {
    return "Please input only Numbers!!";
  }

  return input / 43560;
};

const secToHr = (input) => {
  if (isNaN(input)) {
    return "Please input only Numbers!!";
  }

  return input / (60 * 60);
};

//ENcoder-Decoder Methods
const encodeURI = (input) => encodeURIComponent(input);
const decodeURI = (input) => decodeURIComponent(input);

//Main Event Buttons
frontActionBtn.addEventListener("click", () => btnEvent(frontActionBtn));
reverseActionBtn.addEventListener("click", () => btnEvent(reverseActionBtn));
hashBtn.addEventListener("click", () => btnEvent(hashBtn));

//SelectUtility
selectUtility = (param) => {
  textInput.value = "";
  textOutput.value = "";
  hashBtn.style.backgroundColor = "thistle";

  const clickTo = "CLICK TO";
  const convertFrom = "CONVERT FROM";

  if (param === "TIMER_AND_STOPWATCH") {
    stopwatchTimerMainSection.style.display = "flex";
    mainSection.style.display = "none";
  } else {
    stopwatchTimerMainSection.style.display = "none";
    mainSection.style.display = "block";
  }

  switch (param) {
    case "ENCODE_DECODE":
      frontActionBtn.value = `${clickTo} ENCODE`;
      reverseActionBtn.value = `${clickTo} DECODE`;
      outputMsg.innerHTML = "ENCODED URL";
      reverseActionBtn.style.display = "inline";
      utilityInfo.innerHTML = "BASE64 ENCODER &#8644 DECODER";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
      break;
    case "MD5_HASH":
      hashBtn.value = `${clickTo} MD5 HASH`;
      outputMsg.innerHTML = "MD5 HASHED STRING";
      utilityInfo.innerHTML = "MD5 HASHER";
      btn.style.display = "none";
      hashBtnDiv.style.display = "block";
      break;
    case "SHA1_HASH":
      hashBtn.value = `${clickTo} SHA1 HASH`;
      outputMsg.innerHTML = "SHA1 HASHED STRING";
      utilityInfo.innerHTML = "SHA1 HASHER";
      btn.style.display = "none";
      hashBtnDiv.style.display = "block";
      break;
    case "SHA256_HASH":
      hashBtn.value = `${clickTo} SHA256 HASH`;
      outputMsg.innerHTML = "SHA256 HASHED STRING";
      utilityInfo.innerHTML = "SHA256 HASHER";
      btn.style.display = "none";
      hashBtnDiv.style.display = "block";
      break;
    case "SHA512_HASH":
      hashBtn.value = `${clickTo} SHA512 HASH`;
      outputMsg.innerHTML = "SHA512 HASHED STRING";
      utilityInfo.innerHTML = "SHA512 HASHER";
      btn.style.display = "none";
      hashBtnDiv.style.display = "block";
      break;
    case "MILES_KM":
      frontActionBtn.value = "CONVERT MILES TO KM";
      reverseActionBtn.value = "CONVERT KM TO MILES";
      reverseActionBtn.style.display = "inline";
      outputMsg.innerHTML = "RESULT IN KMS";
      utilityInfo.innerHTML = "MILES &#8644 KM";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
      break;
    case "FAH_CEL":
      frontActionBtn.value = "CONVERT FAH TO CEL";
      reverseActionBtn.value = "CONVERT CEL TO FAH";
      reverseActionBtn.style.display = "inline";
      outputMsg.innerHTML = "RESULT IN CELCIUS";
      utilityInfo.innerHTML = "FAHRENHEIT &#8644 CELCIUS";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
      break;
    case "ACRE_SQFT":
      frontActionBtn.value = "CONVERT ACRE TO SQFT";
      reverseActionBtn.value = "CONVERT SQFT TO ACRE";
      reverseActionBtn.style.display = "inline";
      outputMsg.innerHTML = "RESULT IN SQUARE FEET";
      utilityInfo.innerHTML = "ACRE &#8644 SQUAREFOOT";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
      break;
    case "HR_SEC":
      frontActionBtn.value = "CONVERT HOUR TO SEC";
      reverseActionBtn.value = "CONVERT SEC TO HOUR";
      reverseActionBtn.style.display = "inline";
      outputMsg.innerHTML = "RESULT IN SECONDS";
      utilityInfo.innerHTML = "HOUR &#8644 SECOND";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
      break;
    case "TIMER_AND_STOPWATCH":
      utilityInfo.innerHTML = "STOPWATCH &#8644 TIMER";
      break;
  }

  action = param;
};

frontAction = () => {
  switch (action) {
    case "ENCODE_DECODE":
      textOutput.value = encodeURI(textInput.value);
      break;
    case "MD5_HASH":
      if (textInput.value !== "") {
        textOutput.value = CryptoJS.MD5(textInput.value);
      }
      outputMsg.innerHTML = "MD5 HASHED STRING";
      break;
    case "SHA1_HASH":
      if (textInput.value !== "") {
        textOutput.value = CryptoJS.SHA1(textInput.value);
      }
      outputMsg.innerHTML = "SHA1 HASHED STRING";
      break;
    case "SHA256_HASH":
      if (textInput.value !== "") {
        textOutput.value = CryptoJS.SHA256(textInput.value);
      }
      outputMsg.innerHTML = "SHA256 HASHED STRING";
      break;
    case "SHA512_HASH":
      if (textInput.value !== "") {
        textOutput.value = CryptoJS.SHA512(textInput.value);
      }
      outputMsg.innerHTML = "SHA512 HASHED STRING";
      break;
    case "MILES_KM":
      if (textInput.value !== "") {
        textOutput.value = mileToKm(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN KMS";
      break;
    case "FAH_CEL":
      if (textInput.value !== "") {
        textOutput.value = fahToCel(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN CELCIUS";
      break;
    case "ACRE_SQFT":
      if (textInput.value !== "") {
        textOutput.value = acreToSquareft(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN SQUARE FEET";
      break;
    case "HR_SEC":
      if (textInput.value !== "") {
        textOutput.value = hrToSec(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN SECONDS";
      break;
  }
};

reverseAction = () => {
  switch (action) {
    case "ENCODE_DECODE":
      textOutput.value = decodeURI(textInput.value);
      outputMsg.innerHTML = "DECODED STRING";
      break;
    case "MILES_KM":
      if (textInput.value !== "") {
        textOutput.value = kmToMile(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN MILES";
      break;
    case "FAH_CEL":
      if (textInput.value !== "") {
        textOutput.value = celToFah(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN FAHRENHEIT";
      break;
    case "ACRE_SQFT":
      if (textInput.value !== "") {
        textOutput.value = squareftToAcre(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN ACRE";
      break;
    case "HR_SEC":
      if (textInput.value !== "") {
        textOutput.value = secToHr(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN HOURS";
      break;
  }
};

btnEvent = (input) => {
  if (input === frontActionBtn) {
    frontActionBtn.style.backgroundColor = "#b7e4c7";
    reverseActionBtn.style.backgroundColor = "thistle";
    outputMsg.innerHTML = "ENCODED URL";
  } else if (input === hashBtn) {
    hashBtn.style.backgroundColor = "#b7e4c7";
  } else {
    frontActionBtn.style.backgroundColor = "thistle";
    reverseActionBtn.style.backgroundColor = "#b7e4c7";
    outputMsg.innerHTML = "DECODED URL";
  }
};

//Encode-decode-hash-convert events
frontActionBtn.addEventListener("click", () => frontAction());
reverseActionBtn.addEventListener("click", () => reverseAction());
hashBtn.addEventListener("click", () => frontAction());
