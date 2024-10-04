var names = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"];
var colors = ["red", "green", "blue", "black", "yellow", "red"];
var paragraphs = document.querySelectorAll('p');

for (var p of paragraphs) {
    p.textContent = names[Math.floor(Math.random() * names.length)];
    p.style.color = colors[Math.floor(Math.random() * colors.length)]; 
}