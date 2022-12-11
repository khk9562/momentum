const images = [
    "img01.jfif", "img02.jfif", "img03.jfif", "img04.jfif", "img05.jfif", "img06.jfif", "img07.jfif", "img08.jfif", "img09.jfif", "img10.jfif"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);