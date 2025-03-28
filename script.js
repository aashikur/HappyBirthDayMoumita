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




document.getElementById('F_btn').addEventListener('click',()=>{

    const counter = document.getElementById('counter');
    let count = 9;

    const first = document.getElementById('first');
    const secound = document.getElementById('secound');
    const secondBtn = document.getElementById('secondBtn');

    first.style.display = 'none';
    setTimeout(()=>{
   
        secound.classList.remove('hidden')
        secound.classList.add('animate-pop2')
        const intervalId = setInterval(() => {
          counter.innerText = count--;
        }, 1000);

        setTimeout(() => {
          clearInterval(intervalId);
        }, 10000);
    },0)


     setTimeout(()=>{
        secondBtn.classList.remove('hidden');
        secondBtn.classList.add('animate-pop2');


        const p1 = document.getElementById('counter');
        const p2 = document.getElementById('more');
        p2.classList.add('hidden')

        setTimeout(()=>{

          p1.classList.add('hidden')
          p2.classList.remove('hidden')

        },10000)

     },10)

}) 



function second(){
    document.getElementById('secound').classList.add('hidden'); third

    document.getElementById('third').classList.remove('hidden'); 
    document.getElementById('third').classList.add('animate-pop2'); 

}

let SintervalID = 0;
function cakeEat(){
    document.getElementById('cake1').classList.remove('hidden')
    document.getElementById('cake2').classList.add('hidden');
    setTimeout(()=>{
        document.getElementById('third').classList.add('hidden');
        document.getElementById('sms').classList.remove('hidden');

      setTimeout(()=>{
        document.getElementById('Random').classList.remove('hidden');
      },3000)


        setTimeout(()=>{
            const thisText =  document.getElementById('text');

             let smallSMS = 'ThanQ For Everything. May Allah Grand your deepest wish in this Ramadan.'
             smallSMS = smallSMS.split('');
            //  console.log(smallSMS);
             let i = 0; 
             let end = smallSMS.length;
             SintervalID = setInterval(()=>{



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
            
             setTimeout(()=>{
              clearInterval(SintervalID);
             },110)
            

        },3000);
    },2000)
}



function Random(){
  const thisText =  document.getElementById('text');
  const randomNumber = Math.floor(Math.random() * 19);
  const motivationalWishes = [
    // "Keep going—you're closer than you think!",
    // "Every step you take brings you closer to your dreams.",
    // "You are capable of achieving greatness, one day at a time.",
    // "Believe in yourself; you've got this!",
    // "Every challenge is an opportunity to grow.",
    // "Stay focused and keep pushing forward—success is on the horizon.",
    // "You are stronger than you realize.",
    // "You are stronger than you realize.",
    // "Keep dreaming big, and make it happen.",
    // "Your hard work will pay off—stay persistent.",
    // "Believe in progress, not perfection. You're on the right track!",
    'If you continue to wait for the right time, you will "Waste" your "entire" life, and nothing will happen.',
    "Work hard So hard that, they call it talent. ",
    'You’ll be much happier if you forgive your parents and stop blaming them for your problems',
    "You don't need 100 self-help books. All you need is action. Plus, self-discipline",
    'The most difficult mission on earth is to focus on your dreams, and the easiest "TASK" is to complain',
    "It's Easy to Have Faith when everything going smoothly. But remember It's that Strom, that test the strongest sailor. Will you be Standing?",
    "Who am I to judge another when I myself walk as an imperfect",
    "People's always looking for the right person but no one want to be the right person.",
    "Most beautifull persons is with rich personally and Mindset; which Remain eternal while looks is just temporary. ",
    "Nothing is better than memories, and nothing is worse than them.",
    "You can not control your heart; but you can control your action.",
    "Make Mistakes,  but don't regrate them, because regrate is the hardest thing to carry when you get older. ",
    "What he lost that he Found Allah, and what he found that he lost Allah.",
    "Silence doesn't always mean you have nothing to say. It may mean you realize that no matter what you say, it won't change anything.",
    "Just because you lost me as a friend doesn't mean you gained me as an enemy. I'm bigger than that. I still wanna see you eat, just not at my table",
    "Every single good thing and bad thing will lead you to where you're meant to be",
    "Sometimes, you need to listen to your own advice. You always know what to do but can't decide.",
    "You will understand the true meaning of life when reality hits you.",
    "Time doesn't heal any pain; it just makes you strong enough to bear it with a smile."

  ];

  console.log(randomNumber)
  thisText.innerHTML = motivationalWishes[randomNumber];
}



function Starter(){
  const Date = document.getElementById('Date');
  const Time = document.getElementById('Time');
  const Starter  = document.getElementById('Starter');

  console.log(Date.innerText)
  console.log(Time.innerText)
  console.log(Starter)


  let sec= 58;
  const timeID = setInterval(()=>{
    Time.innerHTML = `11 : 59 : ${sec++}`
  },1000);


  setTimeout(() => {
    clearInterval(timeID);
    Date.innerHTML = `25-Mar-2025`;
    Time.innerHTML = `12 : 00 : 00`

    // calling First Section 
    setTimeout(()=>{
      Starter.classList.add('hidden');
     document.getElementById('first').classList.remove('hidden');
     
     // Name Decoration 
      const subName = document.getElementById('SubjectName');
      setTimeout(()=>{
        subName.innerHTML = ''
      },500) 

      setTimeout(()=>{
        subName.innerHTML = `Fatema`
      },1000) 

      setTimeout(()=>{
        subName.innerHTML = `Fatema-Tuj`
      },1500) 

      setTimeout(()=>{
        subName.innerHTML = `Fatema-Tuj-Zahura-`
      },2000) 

      setTimeout(()=>{
        subName.innerHTML = `Fatema-Tuj-Zahura-Moumita`
      },3000) 

      

    },1000)


  }, 3000);

}


Starter();