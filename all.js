let action = "ENCODE_DECODE";

const btn = document.querySelector(".buttons");

const frontActionBtn = document.querySelector(".front-action-btn");
const reverseActionBtn = document.querySelector(".reverse-action-btn");
const textInput = document.querySelector(".textarea-input");
const outputMsg = document.querySelector(".output-msg");
const textOutput = document.querySelector(".textarea-output");

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

  switch (param) {
    case "ENCODE_DECODE":
      frontActionBtn.value = `${clickTo} ENCODE`;
      reverseActionBtn.value = `${clickTo} DECODE`;
      outputMsg.innerHTML = "ENCODED URL:";
      reverseActionBtn.style.display = "inline";
      utilityInfo.innerHTML = "ENCODER &#8644 DECODER";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
      break;
    case "MD5_HASH":
      hashBtn.value = `${clickTo} MD5 HASH`;
      outputMsg.innerHTML = "MD5 HASHED STRING:";
      utilityInfo.innerHTML = "MD5 HASHER";
      btn.style.display = "none";
      hashBtnDiv.style.display = "block";
      break;
    case "SHA1_HASH":
      hashBtn.value = `${clickTo} SHA1 HASH`;
      outputMsg.innerHTML = "SHA1 HASHED STRING:";
      utilityInfo.innerHTML = "SHA1 HASHER";
      btn.style.display = "none";
      hashBtnDiv.style.display = "block";
      break;
    case "SHA256_HASH":
      hashBtn.value = `${clickTo} SHA256 HASH`;
      outputMsg.innerHTML = "SHA256 HASHED STRING:";
      utilityInfo.innerHTML = "SHA256 HASHER";
      btn.style.display = "none";
      hashBtnDiv.style.display = "block";
      break;
    case "SHA512_HASH":
      hashBtn.value = `${clickTo} SHA512 HASH`;
      outputMsg.innerHTML = "SHA512 HASHED STRING:";
      utilityInfo.innerHTML = "SHA512 HASHER";
      btn.style.display = "none";
      hashBtnDiv.style.display = "block";
      break;
    case "MILES_KM":
      frontActionBtn.value = "CONVERT MILES TO KM";
      reverseActionBtn.value = "CONVERT KM TO MILES";
      reverseActionBtn.style.display = "inline";
      outputMsg.innerHTML = "RESULT IN KMS:";
      utilityInfo.innerHTML = "MILES &#8644 KM";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
      break;
    case "FAH_CEL":
      frontActionBtn.value = "CONVERT FAH TO CEL";
      reverseActionBtn.value = "CONVERT CEL TO FAH";
      reverseActionBtn.style.display = "inline";
      outputMsg.innerHTML = "RESULT IN CELCIUS:";
      utilityInfo.innerHTML = "FAHRENHEIT &#8644 CELCIUS";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
      break;
    case "ACRE_SQFT":
      frontActionBtn.value = "CONVERT ACRE TO SQFT";
      reverseActionBtn.value = "CONVERT SQFT TO ACRE";
      reverseActionBtn.style.display = "inline";
      outputMsg.innerHTML = "RESULT IN SQUARE FEET:";
      utilityInfo.innerHTML = "ACRE &#8644 SQUAREFOOT";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
      break;
    case "HR_SEC":
      frontActionBtn.value = "CONVERT HOUR TO SEC";
      reverseActionBtn.value = "CONVERT SEC TO HOUR";
      reverseActionBtn.style.display = "inline";
      outputMsg.innerHTML = "RESULT IN SECONDS:";
      utilityInfo.innerHTML = "HOUR &#8644 SECOND";
      btn.style.display = "block";
      hashBtnDiv.style.display = "none";
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
      outputMsg.innerHTML = "MD5 HASHED STRING:";
      break;
    case "SHA1_HASH":
      if (textInput.value !== "") {
        textOutput.value = CryptoJS.SHA1(textInput.value);
      }
      outputMsg.innerHTML = "SHA1 HASHED STRING:";
      break;
    case "SHA256_HASH":
      if (textInput.value !== "") {
        textOutput.value = CryptoJS.SHA256(textInput.value);
      }
      outputMsg.innerHTML = "SHA256 HASHED STRING:";
      break;
    case "SHA512_HASH":
      if (textInput.value !== "") {
        textOutput.value = CryptoJS.SHA512(textInput.value);
      }
      outputMsg.innerHTML = "SHA512 HASHED STRING:";
      break;
    case "MILES_KM":
      if (textInput.value !== "") {
        textOutput.value = mileToKm(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN KMS:";
      break;
    case "FAH_CEL":
      if (textInput.value !== "") {
        textOutput.value = fahToCel(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN CELCIUS:";
      break;
    case "ACRE_SQFT":
      if (textInput.value !== "") {
        textOutput.value = acreToSquareft(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN SQUARE FEET:";
      break;
    case "HR_SEC":
      if (textInput.value !== "") {
        textOutput.value = hrToSec(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN SECONDS:";
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
      outputMsg.innerHTML = "RESULT IN MILES:";
      break;
    case "FAH_CEL":
      if (textInput.value !== "") {
        textOutput.value = celToFah(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN FAHRENHEIT:";
      break;
    case "ACRE_SQFT":
      if (textInput.value !== "") {
        textOutput.value = squareftToAcre(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN ACRE:";
      break;
    case "HR_SEC":
      if (textInput.value !== "") {
        textOutput.value = secToHr(textInput.value);
      }
      outputMsg.innerHTML = "RESULT IN HOURS:";
      break;
  }
};

btnEvent = (input) => {
  if (input === frontActionBtn) {
    frontActionBtn.style.backgroundColor = "green";
    reverseActionBtn.style.backgroundColor = "thistle";
    outputMsg.innerHTML = "ENCODED URL:";
  } else if (input === hashBtn) {
    hashBtn.style.backgroundColor = "green";
  } else {
    frontActionBtn.style.backgroundColor = "thistle";
    reverseActionBtn.style.backgroundColor = "green";
    outputMsg.innerHTML = "DECODED URL:";
  }
};

//Encode-decode-hash-convert events
frontActionBtn.addEventListener("click", () => frontAction());
reverseActionBtn.addEventListener("click", () => reverseAction());
hashBtn.addEventListener("click", () => frontAction());
