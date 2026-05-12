// Loader of chirolift here
function createPreloader() {
  const preloader = document.createElement('div');
  preloader.id = 'preloader';
  const wrapper = document.createElement('div');
  wrapper.className = "position-relative";
  const spinner = document.createElement('div');
  spinner.className = "spinner";
  const image = document.createElement('img');
  image.src = "assets/image/loader.png";
  wrapper.appendChild(spinner);
  wrapper.appendChild(image);
  preloader.appendChild(wrapper);
  document.body.appendChild(preloader);
}
function removePreloader() {
  const preloader = document.getElementById('preloader');
  const siterapper = document.querySelector('.site-wrapper');
  if (preloader) {
    preloader.remove();
    siterapper.style.visibility = "visible";
    siterapper.style.overflow = "visible";
    siterapper.style.height = "unset";
  }
}
createPreloader();
window.addEventListener('load', function () {
  setTimeout(() => {
    removePreloader();
  }, 1000);
});






// right-sidebar
function open_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
function close_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

let slid = document.getElementById("slid-btn");
if (slid !== null) {
  slid.onclick = () => {
    let dropdwon = document.getElementById("slid-drop");
    dropdwon.classList.toggle("aside-dropdwon");
  };
}


// header 1.1. Dropdowns slide js started here
const dropdowns = document.querySelectorAll('.navbar .dropdown');
dropdowns.forEach(dropdown => {
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');
  dropdownMenu.style.maxHeight = '0';
  dropdown.addEventListener('mouseenter', () => {
    dropdownMenu.style.visibility = 'visible';
    dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
  });
  dropdown.addEventListener('mouseleave', () => {
    dropdownMenu.style.visibility = 'hidden';
    dropdownMenu.style.maxHeight = '0';
  });
});
// header 1.1. Dropdowns slide js ended here


//  1.8. Testimonials section 
let TestimonialsSlider = document.querySelector(".TestimonialsSlider");
if (TestimonialsSlider !== null) {
  $(document).ready(function () {
    var $slider = $(".TestimonialsSlider");

    $slider.slick({
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 900,
      slidesToShow: 2,
      slidesToScroll: 1,
      pauseOnHover: false,
      pauseOnDotsHover: true,
      draggable: true,

      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".button-class").on("click", function () {
      $slider.slick("slickNext");
    });

    $(".slick-slide").on("mousedown touchstart", function (event) {
      if ($(event.target).hasClass("slick-slide")) {
        event.stopImmediatePropagation();
      }
    });
  });
}
//  End of 1.8. Testimonials section 


//  CompaniesSlider section 
let CompaniesSlider = document.querySelector(".CompaniesSlider");
if (CompaniesSlider !== null) {
  $(".CompaniesSlider").slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });
}
//  End of  CompaniesSlider section ==


//   1.3. Inputs section ==
document.addEventListener("DOMContentLoaded", function () {
  var select = document.getElementById("options");
  if (select !== null) {
    select.value = "option1";
  }
});


//   1.13. Blog section ==
document.addEventListener("DOMContentLoaded", function () {
  let currentDate = new Date();
  let formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  formattedDate = formattedDate.replace(/(\d+),/, "$1,");
  let dateElements = document.getElementsByClassName("date");
  for (let i = 0; i < dateElements.length; i++) {
    dateElements[i].innerText = formattedDate;
  }
});
//  End of 1.13. Blog section ==


//  Counters section ==
function animateNumbers(num, finalValue, duration) {
  let start = null;
  const finalValueStr = num.getAttribute("data-final-value");
  const charCount = finalValueStr.length;
  num.style.display = "inline-block";
  num.style.width = `${charCount - charCount / 3}ch`;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    num.textContent = Math.floor(progress * finalValue);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}
function startNumberAnimation() {
  const numbers = document.querySelectorAll(".number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const finalValue = parseInt(
            entry.target.getAttribute("data-final-value")
          );
          animateNumbers(entry.target, finalValue, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  numbers.forEach((num) => observer.observe(num));
}
startNumberAnimation();
window.addEventListener("load", startNumberAnimation);

//  End of Counters section ==


//    1.3. Inputs section ==
document.addEventListener("DOMContentLoaded", () => {
  const HeroInput = document.querySelector(".Input_fields form");
  const HeroMsg = document.querySelector(".Input_fields .validation");

  if (HeroInput !== null) {
    HeroInput.addEventListener("submit", (event) => {
      event.preventDefault();
      HeroMsg.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <h4>Congratulations</h4>
                <h5>Appointment Submitted Successfully</h5>
            `;
      HeroMsg.style.display = "block";
      HeroInput.reset();
      setTimeout(() => {
        HeroMsg.style.display = "none";
      }, 3000);
    });
  }
});
//   End of 1.3. Inputs section ==


// ======== 3.2. Getinformation section ========

document.addEventListener("DOMContentLoaded", () => {
  const Getinformation = document.querySelector(".Getinformation form");
  const GetinfoMsg = document.querySelector(".Getinformation .validation");

  if (Getinformation !== null) {
    Getinformation.addEventListener("submit", (event) => {
      event.preventDefault();
      GetinfoMsg.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <h4>Congratulations</h4>
                <h5>Submitted Successfully</h5>
            `;
      GetinfoMsg.style.display = "block";
      Getinformation.reset();
      setTimeout(() => {
        GetinfoMsg.style.display = "none";
      }, 3000);
    });
  }
});

// ========End of 3.2. Getinformation section ========


// ======== 5.2. BlogComment section ========
document.addEventListener("DOMContentLoaded", () => {
  const BlogComment = document.querySelector(".BlogComment form");
  const BlogComentMsg = document.querySelector(".BlogComment .validation");

  if (BlogComment !== null) {
    BlogComment.addEventListener("submit", (event) => {
      event.preventDefault();
      BlogComentMsg.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <h4>Congratulations</h4>
                <h5>Posted Successfully</h5>
            `;
      BlogComentMsg.style.display = "block";
      BlogComment.reset();
      setTimeout(() => {
        BlogComentMsg.style.display = "none";
      }, 3000);
    });
  }
});
// ======== End of 5.2. BlogComment section ========


// ======== 1.14. Footer section ========
document.addEventListener("DOMContentLoaded", () => {
  const FooterSubscribe = document.querySelector("footer form");
  const FooterSubscribMsg = document.querySelector("footer .validation");

  if (FooterSubscribe !== null) {
    FooterSubscribe.addEventListener("submit", (event) => {
      event.preventDefault();
      FooterSubscribMsg.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <h4>Congratulations</h4>
                <h5>Successfully Subscribed</h5>
            `;
      FooterSubscribMsg.style.display = "block";
      FooterSubscribe.reset();
      setTimeout(() => {
        FooterSubscribMsg.style.display = "none";
      }, 3000);
    });
  }
});
// ======== End of 1.14. Footer section ========


// Back to Home Button
if (document.getElementById("backToTop") !== null) {
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

// End of Back to Home Button

