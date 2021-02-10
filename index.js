const stringHasher = document.querySelector(".string-hasher");
const stringHasherDropdown = document.querySelector(".string-hasher-dropdown");

stringHasher.addEventListener("mouseover",()=>stringHasherDropdown.style.display="block");
stringHasher.addEventListener("mouseout",()=>stringHasherDropdown.style.display="none");