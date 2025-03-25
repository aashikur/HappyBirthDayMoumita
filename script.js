const autoplayCarousel = document.querySelectorAll('.block-carousel');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Function to handle carousel animation state
function handleCarouselState(shouldReduce) {
  autoplayCarousel.forEach((scroller) => {
    if (shouldReduce) {
      scroller.removeAttribute('data-animated');
      const clonedItems = scroller.querySelectorAll('.clone');
      clonedItems.forEach(item => item.remove());
    } else {
      scroller.setAttribute('data-animated', true);
      const scrollerInner = scroller.querySelector('.carousel-items');
      Array.from(scrollerInner.children)
        .filter(item => !item.classList.contains('clone'))
        .forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          duplicatedItem.classList.add('clone');
          scrollerInner.appendChild(duplicatedItem);
        });
    }
  });
}

// Initial setup
handleCarouselState(prefersReducedMotion.matches);

// Listen for preference changes
prefersReducedMotion.addEventListener('change', (e) => handleCarouselState(e.matches));




function first(){
    const first = document.getElementById('first');
    const secound = document.getElementById('secound');
    const secondBtn = document.getElementById('secondBtn');

    first.style.display = 'none';
    setTimeout(()=>{
        secound.classList.remove('hidden')
        secound.classList.add('animate-pop2')
    },400)


     setTimeout(()=>{
        secondBtn.classList.remove('hidden');
        secondBtn.classList.add('animate-pop2');
     },10)
}


function second(){
    document.getElementById('secound').classList.add('hidden'); third

    document.getElementById('third').classList.remove('hidden'); 
    document.getElementById('third').classList.add('animate-pop2'); 

}


function cakeEat(){
    document.getElementById('cake1').classList.remove('hidden')
    document.getElementById('cake2').classList.add('hidden');
    setTimeout(()=>{
        document.getElementById('third').classList.add('hidden');
        document.getElementById('sms').classList.remove('hidden');

        setTimeout(()=>{
            const thisText =  document.getElementById('text');

             let smallSMS = 'ThanQ For Everything. May Allah Grand your deepest wish in this Ramadan.'
             smallSMS = smallSMS.split('');
             console.log(smallSMS);
             let i = 0; 
             let end = smallSMS.length;
            setInterval(()=>{

                if(i ==0 ) {
                    thisText.innerHTML = '';
                    thisText.classList.remove('wish');

                }
                if(i<end)
               {
                smallSMS.forEach(txt => {
                    thisText.innerHTML += txt;
                })
                
               }


            },100);
        },3000);
    },2000)
}


