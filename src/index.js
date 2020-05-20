import './styles/main.scss';
import {TimelineLite, Power4} from 'gsap';

/*const elementUno = document.querySelector('.item1');
const elementDuo = document.querySelector('.item2');
const elementTre = document.querySelector('.item3');
const elementQuattro = document.querySelector('.item4');*/
// ------------------------------------------------------------


const boxItems = document.querySelectorAll('.item');


const tl = new TimelineLite();

const duration = 3;
const xDistance = 800;
const alpha = 0.3;
const easing = Power4.easeOut;


tl
  .from(boxItems, duration, {
    x: xDistance,
    autoAlpha: alpha,
    ease: easing,
    stagger: 0.8, // 0.1 seconds between when each ".box" element starts animating
  })
  // .to(elementUno, duration, {x: xDistance, autoAlpha: alpha, ease: easing})
  // .to(elementDuo, duration, {x: xDistance, autoAlpha: alpha, ease: easing})
  // .to(elementTre, duration, {x: xDistance, autoAlpha: alpha, ease: easing})
  // .to(elementQuattro, duration, {x: xDistance, autoAlpha: alpha, ease: easing})















// timeline controls
/*const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const btnResume = document.querySelector('.resume');
const btnReverse = document.querySelector('.reverse');
const btnSpeedUp = document.querySelector('.speedUp');
const btnSlowDown = document.querySelector('.slowDown');
const btnSeek = document.querySelector('.seek');
const btnGoto = document.querySelector('.goTo');
const btnRestart = document.querySelector('.restart');

function playAnima() {
  tl.play()
}

function pauseAnima() {
  tl.pause()
}

function resumeAnima() {
  tl.resume()
}

function reverseAnima() {
  tl.reverse()
}

function speedUpAnima() {
  tl.timeScale(3);
}

function slowDownAnima() {
  tl.timeScale(0.5);
}

function seekAnima() {
  tl.seek(1)
}

function goToAnima() {
  tl.progress(0.5)
}

function restartAnima() {
  tl.restart()
  console.log('resitarera')
}

//----

const duration = 3;
const xDistance = 800;
const alpha = 0.3;
let delayValue = 1;
const easing = Power4.easeOut;

//--------------
const tl = new TimelineLite();

tl
  .to(elementUno, duration, {x: xDistance, autoAlpha: alpha, ease: easing, onComplete: ()=>{elementUno.style.visibility = 'hidden'}})
  .to(elementDuo, duration, {x: xDistance, autoAlpha: alpha, ease: easing}, '+=1.8')
  .to(elementTre, duration, {x: xDistance, autoAlpha: alpha, ease: easing}, 4)
  .to(elementQuattro, duration, {x: xDistance, autoAlpha: alpha, ease: easing}, 'label')

tl.pause();


document.querySelectorAll('.control__button').forEach(btn=>{

  document.querySelector(`.${btn.classList[1]}`)
    .addEventListener('click',()=>{
      eval(`${btn.classList[1]}Anima()`)
    })
})*/

























//time line

/*const duration = 2;
const xDistance = 800;
const alpha = 0.3;
let delayValue = 1;
const easing = Power4.easeOut;
// ---------------------------------------------------
const tl = new TimelineLite();
//-----
//using tweenlinelite



tl
  .to(elementUno, duration, {x: xDistance, autoAlpha: alpha, ease: easing})
  .add('label')
  .to(elementDuo, duration, {x: xDistance, autoAlpha: alpha, ease: easing}, '+=1.8')
  .to(elementTre, duration, {x: xDistance, autoAlpha: alpha, ease: easing}, 4)
  .to(elementQuattro, duration, {x: xDistance, autoAlpha: alpha, ease: easing}, 'label')*/









// timelines
/*

const tl = new TimelineLite();

// ------------------
/!*TweenLite.to(elementUno, duration, {x: xDistance, autoAlpha: alpha, delay: delayValue});
TweenLite.to(elementDuo, duration, {x: xDistance, autoAlpha: alpha, delay: delayValue+=1});
TweenLite.to(elementTre, duration, {x: xDistance, autoAlpha: alpha, delay: delayValue+=1});
TweenLite.to(elementQuattro, duration, {x: xDistance, autoAlpha: alpha, delay: delayValue+=1});*!/

tl
  .to(elementUno, duration, {x: xDistance, autoAlpha: alpha, ease: easing})
  .to(elementDuo, duration, {x: xDistance, autoAlpha: alpha, ease: easing})
  .to(elementTre, duration, {x: xDistance, autoAlpha: alpha, ease: easing})
  .to(elementQuattro, duration, {x: xDistance, autoAlpha: alpha, ease: easing})


*/





//callbacks


/*let count = 0;

function startAnima() {
  console.log('animation started')
}

function endAnima() {
  console.log('animation finished')
  elementUno.style.backgroundColor = 'red';
  elementUno.style.color = 'blue';
  elementUno.style.borderColor = 'firebrick'
}

function progressAnima() {
  //console.log('animation is in progress')
  elementUno.innerHTML = count++
}

TweenLite.to(elementUno, 4, {
  x: 500,
  delay: 1,
  onStart: startAnima,
  onUpdate: progressAnima,
  onComplete: endAnima,
})*/
