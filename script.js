let names = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"];
let colors = ["red", "green", "blue", "black", "yellow", "red"];
let paragraphs = document.querySelectorAll('p');

for (let p of paragraphs) {
    p.textContent = names[Math.floor(Math.random() * names.length)];
    p.style.color = colors[Math.floor(Math.random() * colors.length)]; 
}
