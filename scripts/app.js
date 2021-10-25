const question = document.querySelectorAll(".faq__question");
const answer = document.querySelectorAll(".faq__answer");
const faqItem = document.querySelectorAll(".faq__item");
const itemIndicator = document.querySelectorAll(".item__indicator");

let openState = false;
let indexOfFaq;

function showAnswer(index) {
  answer[index].classList.remove("collapsed");
  faqItem[index].classList.add("active__faq");
  indexOfFaq = index;
  openState = true;
}

function hideAnswer(index) {
  answer[index].classList.add("collapsed");
  faqItem[index].classList.remove("active__faq");
}

function faqShowHide(item, index) {
  if (!answer[index].classList.contains("collapsed")) {
    openState = true;
    indexOfFaq = index;
  }

  item.addEventListener("click", () => {
    if (answer[index].classList.contains("collapsed")) {
      if (openState == true) {
        hideAnswer(indexOfFaq);

        showAnswer(index);
      } else {
        showAnswer(index);
      }
    } else {
      hideAnswer(index);
    }
  });
}

question.forEach((item, index) => {
    faqShowHide(item, index);
});

itemIndicator.forEach((item, index) => {
    faqShowHide(item, index);
});
