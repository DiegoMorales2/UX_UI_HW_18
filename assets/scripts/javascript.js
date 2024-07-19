

// const elts = {
//     text1: document.getElementById("text1"),
//     text2: document.getElementById("text2")
// };

// const texts = [
//     "Hello, I am",
//     "CAMERON",
//     "I am a",
//     "UX/UI Designer",
//     "Front end Developer",
// ];


// const morphTime = 1;
// const cooldownTime = 0.25;

// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;

// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// function doMorph() {
//     morph -= cooldown;
//     cooldown = 0;
    
//     let fraction = morph / morphTime;
    
//     if (fraction > 1) {
//         cooldown = cooldownTime;
//         fraction = 1;
//     }
    
//     setMorph(fraction);
// }

// function setMorph(fraction) {
    
//     elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
//     fraction = 1 - fraction;
//     elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
//     elts.text1.textContent = texts[textIndex % texts.length];
//     elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }

// function doCooldown() {
//     morph = 0;
    
//     elts.text2.style.filter = "";
//     elts.text2.style.opacity = "100%";
    
//     elts.text1.style.filter = "";
//     elts.text1.style.opacity = "0%";
// }


// function animate() {
//     requestAnimationFrame(animate);
    
//     let newTime = new Date();
//     let shouldIncrementIndex = cooldown > 0;
//     let dt = (newTime - time) / 1000;
//     time = newTime;
    
//     cooldown -= dt;
    
//     if (cooldown <= 0) {
//         if (shouldIncrementIndex) {
//             textIndex++;
//         }
        
//         doMorph();
//     } else {
//         doCooldown();
//     }
// }


// animate();

// $(document).ready(function(){
//     $("#asideOne").on("click", function(){
//       $("#card-container").css("display", "flex");
//     });
//   });

// Function to handle haptic feedback
// function vibrate() {
//     if ("vibrate" in navigator) {
//       navigator.vibrate(200); // Vibrate for 200 milliseconds
//     }
//   }
  
//   // Function to handle the intersection
//   function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         $("#card-container").css("display", "flex");
//         vibrate();
//       } else {
//         $("#card-container").css("display", "none");
//       }
//     });
//   }
  
//   // Create the observer
//   let options = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px',
//     threshold: 1 // Trigger when 50% of the target is visible
//   };
  
//   let observer = new IntersectionObserver(handleIntersection, options);
  
//   // Observe the target element
//   observer.observe(document.querySelector("#asideOne"));

function vibrate() {
    if ("vibrate" in navigator) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
  }

//   // Function to handle the intersection
//   function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       const cardContainer = $(entry.target).find('.card-container');
//       if (entry.isIntersecting) {
//         cardContainer.css("display", "flex");
//         vibrate();
//       } else {
//         cardContainer.css("display", "none");
//       }
//     });
//   }

//   // Create the observer
//   let options = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px',
//     threshold: 0.5 // Trigger when 50% of the target is visible
//   };

//   let observer = new IntersectionObserver(handleIntersection, options);

//   // Observe all aside elements
//   document.querySelectorAll("aside").forEach(aside => {
//     observer.observe(aside);
//   });