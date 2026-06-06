const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0];
//   arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false,
//   isDragging = false,
//   prevPageX,
//   prevScrollLeft,
//   positionDiff;
// const showHideIcons = () => {
//   let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
//   arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "block" : "block";
//   arrowIcons[1].style.display =
//     carousel.scrollLeft >= scrollWidth ? "none" : "block";
// };

// // Trigger the showHideIcons function initially
// showHideIcons();

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let firstImgWidth = firstImg.clientWidth + 14;
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

//     if (icon.id == "left") {
//       carousel.scrollLeft -= firstImgWidth;
//     } else {
//       carousel.scrollLeft += firstImgWidth;
//       // Check if reached the end, then reset to the beginning
//       if (carousel.scrollLeft >= scrollWidth) {
//         carousel.scrollLeft = 0;
//       }
//     }

//     showHideIcons(); // Call showHideIcons after updating scrollLeft
//     setTimeout(() => showHideIcons(), 60);
//   });
// });

const autoSlide = () => {
  let firstImgWidth = firstImg.clientWidth + 14;
  let scrollWidth = carousel.scrollWidth;

  if (carousel.scrollLeft + carousel.clientWidth + 14 >= scrollWidth) {
    // If at the end, smoothly scroll to the beginning
    carousel.scrollLeft = 0;
  } else {
    // Otherwise, smoothly scroll to the next image
    carousel.scrollLeft += firstImgWidth;
  }
  showHideIcons();
};



// Set interval to trigger autoSlide every 1 second
setInterval(autoSlide, 3000);

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

window.addEventListener("load", function () {
  var childImage = document.querySelector(".pop");
  childImage.classList.add("pop-animation");
});

window.addEventListener("load", function () {
  var element = document.querySelector(".scroll-in");
  element.classList.add("scroll-in-animation");
});

window.addEventListener("load", function () {
  // Remove the page loader when the page is loaded
  document.querySelector(".page-loader").style.display = "none";
});

// Select the image you want to animate
var image = document.querySelector(".schoolimg");

// Create a new Intersection Observer
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // Add the scroll-in-left class when the image is in view
      image.classList.add("scroll-in-left");
      // Stop observing the image
      observer.unobserve(entry.target);
    }
  });
});

// Start observing the image
observer.observe(image);

// Define the slogan text
var sloganText = "~ where education meets innovation";

// Get the slogan element
var sloganElement = document.getElementById("slogan");

// Function to animate the text
function typeWriter(text, index) {
  if (index < text.length) {
    sloganElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(function () {
      typeWriter(text, index);
    }, 50); // Adjust the speed of the animation by changing the timeout value
  }
}

// Call the typeWriter function with the slogan text
typeWriter(sloganText, 0);

document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;
  var email = document.getElementById('email').value;

  var mailtoLink = 'mailto:sanskaarschooljaipurkhor@gmail.com'
                + '?subject=Query from ' + encodeURIComponent(name)
                + '&body=' + encodeURIComponent( message);

  window.location.href = mailtoLink;
});
