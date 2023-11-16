// Owl carousel
$(document).ready(function () {
  let owl = $(".owl-carousel").owlCarousel({
    autoplay: true,
    mouseDrag: false,
    loop: true,
    autoplayTimeout: 4000,
    dots: true,
    dotsData: true,
    nav: false,
    items: 1,
  })

  owl.on("changed.owl.carousel", function (e) {
    owl.trigger("stop.owl.autoplay")
    owl.trigger("play.owl.autoplay")
  })
  $(".owl-dot").click(function () {
    owl.trigger("to.owl.carousel", [$(this).index(), 1000])
  })
})

// Open and Close menu
let check = document.querySelector("#check")
let navList = document.querySelector(".navbar-list")
let openBtn = document.querySelector(".open-btn")
let closeBtn = document.querySelector(".close-btn")
let body = document.querySelector("body")
check.addEventListener("change", () => {
  if (!check.checked) {
    navList.classList.add("active")
    body.classList.add("noscroll")
    closeBtn.style.display = "block"
    openBtn.style.display = "none"
  } else {
    navList.classList.remove("active")
    body.classList.remove("noscroll")
    openBtn.style.display = "block"
    closeBtn.style.display = "none"
  }
})

//? Mobile dropdown

let dropBtns = document.querySelectorAll(".dropBtn")
// Only work under 839 px width
if (window.innerWidth <= 839) {
  dropBtns.forEach((btn) => {
    let dropdown = btn.querySelector(".drop-down")
    btn.addEventListener("click", (event) => {
      // This prevents the click from affecting clicks outside the document
      event.stopPropagation()

      if (!dropdown.classList.contains("activeDropDown")) {
        // Close All Open Dropdowns
        dropBtns.forEach((otherBtn) => {
          let otherDropdown = otherBtn.querySelector(".drop-down")
          otherDropdown.classList.remove("activeDropDown")
        })
        dropdown.classList.add("activeDropDown")
      } else {
        dropdown.classList.remove("activeDropDown")
      }
    })
  })

  // Hide dropdown on every click outside the document
  document.addEventListener("click", () => {
    dropBtns.forEach((btn) => {
      let dropdown = btn.querySelector(".drop-down")
      dropdown.classList.remove("activeDropDown")
    })
  })
}
