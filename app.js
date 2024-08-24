let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 6500);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 7500);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};





// nav

(function() {
    "use strict";
  
    /***
Easy selector helper function
     ***/
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
    /***
Easy on scroll event listener 
     ***/
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
    /***
 Toggle .header-scrolled class to #header when page is scrolled
    ***/
    let selectHeader = select('#navbar')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('scrolled')
        } else {
          selectHeader.classList.remove('scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
    new PureCounter();
  })()




  // Contract me

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.plen').forEach(plen => {
      let getVar = variable => getComputedStyle(plen).getPropertyValue(variable);

      const button = plen.querySelector('.button');

      button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission (if not AJAX form)

        if (!plen.classList.contains('active')) {

          plen.classList.add('active');

          // Display .left and .right elements
          plen.querySelector('.left').style.display = 'block';
          plen.querySelector('.right').style.display = 'block';

          gsap.to(plen, {
            keyframes: [{
              '--left-wing-first-x': 50,
              '--left-wing-first-y': 100,
              '--right-wing-second-x': 50,
              '--right-wing-second-y': 100,
              duration: .2,
              onComplete() {
                gsap.set(plen, {
                  '--left-wing-first-y': 0,
                  '--left-wing-second-x': 40,
                  '--left-wing-second-y': 100,
                  '--left-wing-third-x': 0,
                  '--left-wing-third-y': 100,
                  '--left-body-third-x': 40,
                  '--right-wing-first-x': 50,
                  '--right-wing-first-y': 0,
                  '--right-wing-second-x': 60,
                  '--right-wing-second-y': 100,
                  '--right-wing-third-x': 100,
                  '--right-wing-third-y': 100,
                  '--right-body-third-x': 60
                });
              }
            },
            {
              '--left-wing-third-x': 20,
              '--left-wing-third-y': 90,
              '--left-wing-second-y': 90,
              '--left-body-third-y': 90,
              '--right-wing-third-x': 80,
              '--right-wing-third-y': 90,
              '--right-body-third-y': 90,
              '--right-wing-second-y': 90,
              duration: .2
            },
            {
              '--rotate': 50,
              '--left-wing-third-y': 95,
              '--left-wing-third-x': 27,
              '--right-body-third-x': 45,
              '--right-wing-second-x': 45,
              '--right-wing-third-x': 60,
              '--right-wing-third-y': 83,
              duration: .25
            },
            {
              '--rotate': 55,
              '--plane-x': -8,
              '--plane-y': 24,
              duration: .2
            },
            {
              '--rotate': 40,
              '--plane-x': 45,
              '--plane-y': -180,
              '--plane-opacity': 0,
              duration: .3,
              onComplete() {
                setTimeout(() => {
                  plen.removeAttribute('style');
                  gsap.fromTo(plen, {
                    opacity: 0,
                    y: -8
                  },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: .3,
                      onComplete() {
                        plen.classList.remove('active');
                        // Hide .left and .right elements again
                        plen.querySelector('.left').style.display = 'none';
                        plen.querySelector('.right').style.display = 'none';
                      }
                    });
                }, 2000);
              }
            }]
          });

          gsap.to(plen, {
            keyframes: [{
              '--text-opacity': 0,
              '--border-radius': 0,
              '--left-wing-background': getVar('--primary-darkest'),
              '--right-wing-background': getVar('--primary-darkest'),
              duration: .1
            },
            {
              '--left-wing-background': getVar('--primary'),
              '--right-wing-background': getVar('--primary'),
              duration: .1
            },
            {
              '--left-body-background': getVar('--primary-dark'),
              '--right-body-background': getVar('--primary-darkest'),
              duration: .4
            },
            {
              '--success-opacity': 1,
              '--success-scale': 1,
              duration: .25,
              delay: .25
            }]
          });
        }
      });
    });
  });