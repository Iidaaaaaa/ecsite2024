const Minas = document.querySelector(".goods__minas");
const Plus = document.querySelector(".goods__plus");
const Count = document.querySelector(".goods__countnum");

const Btn = document.querySelector(".goods__cart");

Plus.addEventListener("click", () => {
  Count.textContent = parseInt(Count.textContent) + 1;
});
Minas.addEventListener("click", () => {
  if (parseInt(Count.textContent) > 0) {
    Count.textContent = parseInt(Count.textContent) - 1;
  }
});

Btn.addEventListener("click", () => {
  window.location.href = "/02_ecsite";
});

// スライドショー

const SlideImage = document.querySelectorAll(".goods__slideimg");

const MainImage = document.querySelector(".goods__image");
for (let i = 0; i < SlideImage.length; i++) {
  SlideImage[i].addEventListener("click", () => {
    MainImage.src = SlideImage[i].src;
  });
}

let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % SlideImage.length;
  MainImage.src = SlideImage[currentIndex].src;
}, 3000);
