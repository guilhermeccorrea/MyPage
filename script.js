const about_btn = document.getElementById('about_btn');
const ed_btn = document.getElementById('ed_btn');
const work_btn = document.getElementById('work_btn');
const courses_btn = document.getElementById('courses_btn');
const contact_btn = document.getElementById('contact_btn');
const main_container = document.querySelector('.main_section');


document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: main_container,
    threshold: 0.05
  }
  let observer = new IntersectionObserver(beTouching, options);
  document.querySelectorAll('main section').forEach(section => {
    observer.observe(section)
  })
})

const beTouching = (elements) => {
  elements.forEach(element => {
    if (element.isIntersecting) {
      if (element.target.id == "about_me") {
        about_btn.classList.add('selected');
      } else {
        about_btn.classList.remove('selected');
      }
      if (element.target.id == "education") {
        ed_btn.classList.add('selected');
      } else {
        ed_btn.classList.remove('selected');
      }
      if (element.target.id == "work") {
        work_btn.classList.add('selected');
      } else {
        work_btn.classList.remove('selected');
      }
      if (element.target.id == "certificates") {
        courses_btn.classList.add('selected');
      } else {
        courses_btn.classList.remove('selected');
      }
      if (element.target.id == "contact") {
        contact_btn.classList.add('selected');
      } else {
        contact_btn.classList.remove('selected');
      }
    }
  })
}