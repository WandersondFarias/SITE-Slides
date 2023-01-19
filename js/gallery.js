const previewBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const gallery = document.querySelector(".gallery__img");
const paragraph = document.querySelector(".info-content");
let counter = 0;

const prev = () => {
    if(counter === 0) {
        return;
    };
    counter--;
    clearItems();
    gallery.children[0].classList.add("disappear");
    paragraph.children[0].classList.add("appear");
    paragraph.children[1].classList.add("disappear");
    gallery.children[1].classList = "active-prev";
}

const next = () => {
    if(counter === 1) {
        return;
    };
    counter++;
    clearItems();
    gallery.children[0].classList.add("appear");
    paragraph.children[1].classList.add("appear");
    paragraph.children[0].classList.add("disappear");
    gallery.children[1].classList = "active-next";
}

const clearItems = () => {
    for(let i = 0; i < 2; i++) {
        gallery.children[i].classList = "";
        paragraph.children[i].classList = "testimonial";
    }
}

previewBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

