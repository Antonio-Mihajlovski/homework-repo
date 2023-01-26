let paragraph = document.getElementsByTagName("p");

paragraph[0].textContent = "This was the first paragraph and now is changed in js";
paragraph[1].textContent = "This was the second paragraph and now is changed in js";

console.log(paragraph);

let header = document.getElementsByTagName("h1");

header[0].textContent = "This was the first h1 and now is changed by js";
header[1].textContent = "The was the second h1 and now is changed by js"

console.log(header);

let headerH3 = document.getElementsByTagName("h3");
headerH3[0].textContent = "This was the h3 and now is changed by js"
console.log(headerH3);
