let circleAnimation = anime({
  targets: '.aura',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  loop: true,
  autoplay: false
})

let lineAnimation01 = anime({
  targets: '#lineright',
  rotate: {
    value: 200,
    duration: 1300,
    easing: 'easeInOutSine'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  loop: true,
  autoplay: false
})

let lineAnimation02 = anime({
  targets: '#lineleft',
  rotate: {
    value: -200,
    duration: 1300,
    easing: 'easeInOutSine'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  loop: true,
  autoplay: false
})

let circleAnimation02 = anime({
  targets: '#circle',
  translateY: [
    { value: 30, duration: 500, delay: 183 },
    { value: 0, duration: 500, delay: 183 }
  ],
  scaleY: [
    { value: 2, duration: 50, delay: 183, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.75, duration: 50, delay: 183, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true,
  autoplay: false
})

let curveDashedAnimation = anime({
  targets: '.curvedashed',
  translateX: [
    { value: -150, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  scaleX: [
    { value: 2, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 },
    { value: 2, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true,
  autoplay: false
});

let cubeAnimation01 = anime({
  targets: '.cube',
  translateY: 20,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true,
  delay: function(el, i, l) {
    return i * 100;
  },
  endDelay: function(el, i, l) {
    return (l - i) * 100;
  },
  autoplay: false
})

var path = anime.path('path');
let svgAnimation = anime({
  targets: '.svgt .cube2',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'easeInOutQuad',
  duration: 2600,
  loop: true,
  autoplay: false
});

let ministarAnimation = anime({
  targets: '.ministar',
  opacity: ['100%', '0%'],
  rotate: ['0deg', '90deg'],
  scale: ['1', '1.5'],
  easing: 'easeInOutQuad',
  duration: 1000,
  direction: 'alternate',
  loop: true,
  autoplay: false
});

let ministarAnimation02 = anime({
  targets: '.ministar2',
  rotate: ['0deg', '-180deg'],
  scale: ['1', '2'],
  easing: 'easeInOutExpo',
  duration: 800,
  direction: 'alternate',
  loop: true,
  autoplay: false
});

let ministarAnimation03 = anime({
  targets: '.ministar3',
  rotate: {
    value: -180,
    duration: 1200,
    easing: 'easeInOutSine'
  },
  scale: {
    value: -2,
    duration: 1000,
    delay: 200,
    easing: 'easeInOutQuart'
  },
  duration: 1500,
  direction: 'alternate',
  loop: true,
  autoplay: false
});

let krugAnimation = anime({
  targets: '.krug2',
  width: {
    value: '-=40px',
    duration: 1500,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=3turn',
    duration: 1500,
    easing: 'easeInOutSine'
  },
  direction: 'alternate',
  loop: true,
  autoplay: false
});

let planetAnimation = anime({
  targets: '.planet',
  scale: 1.3,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  duration: 1500,
  loop: true,
  autoplay: false
});


let krugAnimation02 = anime({
  targets: '.krug1',
  height: {
    value: '-=20px',
    duration: 1200,
    easing: 'easeInOutSine'
  },
  width: {
    value: '+=30px',
    duration: 1200,
    easing: 'easeInOutSine'
  },
  direction: 'alternate',
  loop: true,
  autoplay: false
});

let krivayaAnimation02 = anime({
  targets: '.krivaya',
  scale: 2,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  autoplay: false
});

let littlecubeAnimation = anime({
  targets: '.littlecube',
  scale: 1.5,
  translateY: function() { return anime.random(0, 50); },
  rotate: function() { return anime.random(0, 360); },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  autoplay: false
});

let miniplaneteAnimation = anime({
  targets: '.miniplanet',
  width: '10%',
  rotate: '-360deg',
  scale: {
    value: 0.5,
    duration: 1000,
    delay: 200,
    easing: 'easeInOutQuart'
  },
  easing: 'easeInOutQuad',
  duration: 1200,
  direction: 'alternate',
  loop: true,
  autoplay: false
});

let threestarAnimation = anime({
  targets: '#krushochek2',
  scale: {
    value: 2,
    duration: 700,
    delay: 200,
    easing: 'easeInOutCirc'
  },
  direction: 'alternate',
  duration: 1200,
  loop: true,
  autoplay: false
});

let threestarAnimation02 = anime({
  targets: '#krushochek',
  scale: {
    value: 1.2,
    duration: 700,
    delay: 200,
    easing: 'easeInOutCirc'
  },
  direction: 'alternate',
  duration: 1200,
  loop: true,
  autoplay: false
});

let threestarAnimation03 = anime({
  targets: '#krushochek3',
  translateX: 110,
  duration: 900,
  direction: 'alternate',
  easing: 'easeInOutCirc',
  loop: true,
  autoplay: false
});

let sferastAnimation = anime({
  targets: '.sferast',
  scale: 2.5,
  duration: 900,
  direction: 'alternate',
  easing: 'easeInOutCirc',
  loop: true,
  autoplay: false
});

let krugstAnimation = anime({
  targets: '.krugst',
  scale: 1.5,
  translateX: [-10, 10],
  duration: 900,
  direction: 'alternate',
  easing: 'easeInOutCirc',
  loop: true,
  autoplay: false
});

let linesstAnimation = anime({
  targets: '.linesst',
  translateX: [-10, 10],
  duration: 900,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true,
  autoplay: false
});

let sputnikAnimation = anime({
  targets: '.sputnuk',
  easing: 'easeInOutQuad',
  strokeWidth: '3',
  translateY: [-10, 10],
  direction: 'alternate',
  duration: 1000,
  loop: true,
  autoplay: false
});

let triangleAnimation = anime({
  targets: '.triangle',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 3000,
  loop: true
});

let moonAnimation = anime({
  targets: '.moon',
  scale: {
    value: -1.1,
    duration: 1000,
    delay: 200,
    easing: 'easeInOutQuart',
    direction: 'alternate'
  },
  direction: 'alternate',
  duration: 3000,
  loop: true,
  autoplay: false
});





// Массив объектов. Каждый объект в массиве - звезда с ценой, массивом анимаций и селектором
let stars = [
  {
    'cost': 1000,
    'animations': [circleAnimation],
    'selector': '.star2'
  },
  {
    'cost': 2000,
    'animations': [lineAnimation01, lineAnimation02, circleAnimation02],
    'selector': '.star1'
  },
  {
   'cost': 1500,
   'animations': [curveDashedAnimation],
   'selector': '.curvedashed-wrap'
  },
  {
    'cost': 2000,
    'animations': [cubeAnimation01],
    'selector': '.cube'
  },
  {
    'cost': 1400,
    'animations': [svgAnimation],
    'selector': '.cube2'
  },
  {
    'cost': 5500,
    'animations': [ministarAnimation],
    'selector': '.ministar'
  },
  {
    'cost': 1500,
    'animations': [ministarAnimation02],
    'selector': '.ministar2'
  },
  {
    'cost': 1300,
    'animations': [krugAnimation],
    'selector': '.krug2'
  },
  {
    'cost': 2500,
    'animations': [ministarAnimation03],
    'selector': '.ministar3'
  },
  {
    'cost': 100000,
    'animations': [planetAnimation],
    'selector': '.planet'
  },
  {
    'cost': 1000,
    'animations': [krugAnimation02],
    'selector': '.krug1'
  },
  {
    'cost': 4000,
    'animations': [krivayaAnimation02],
    'selector': '.krivaya'
  },
  {
    'cost': 1200,
    'animations': [littlecubeAnimation],
    'selector': '.littlecube'
  },
  {
    'cost': 1200,
    'animations': [miniplaneteAnimation],
    'selector': '.miniplanet'
  },
  {
    'cost': 9000,
    'animations': [threestarAnimation, threestarAnimation02, threestarAnimation03],
    'selector': '.threestar'
  },
  {
    'cost': 5000,
    'animations': [krugstAnimation, sferastAnimation, linesstAnimation],
    'selector': '.largestar'
  },
  {
    'cost': 8500,
    'animations': [moonAnimation],
    'selector': '.moon'
  },
  {
    'cost': 1300,
    'animations': [sputnikAnimation],
    'selector': '.sputnuk'
  }
]

// Счетчик с изменением цвета по клику
var onclickOnPlanet = 0
document.getElementById('planet_1').onclick = changeColor
    function changeColor() {
      onclickOnPlanet++
      if (onclickOnPlanet % 2 === 0) {
        document.body.style.filter = 'invert(0%) sepia(0%) saturate(7461%) hue-rotate(254deg) brightness(100%) contrast(100%)'
        document.body.style.backgroundColor = 'white'
        document.body.style.transition = '1000ms'
      } else {
        document.body.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(322deg) brightness(100%) contrast(100%)'
        document.body.style.backgroundColor = 'black'
        document.body.style.transition = '1000ms'
      }
    }

// Счетчик изменения статичных фигур
let triangle = document.querySelector(".triangle")
let triangle2 = document.querySelector(".triangle2")
let circlestatic = document.querySelector(".circlestatic")
let cubestatic = document.querySelector(".cubestatic")
var onclickOnSpheres = 1
document.getElementById('largestar').onclick = changePosition
  function changePosition() {
    onclickOnSpheres++
    if (onclickOnSpheres % 2 === 0) {
      triangle.style.left = '1vw'
      triangle.style.transition = '200ms'
      triangle2.style.left = '20vw'
      triangle2.style.top = '350px'
      triangle2.style.transition = '200ms'
      circlestatic.style.width = '30px'
      circlestatic.style.height = '30px'
      circlestatic.style.transition = '200ms'
      cubestatic.style.width = '40px'
      cubestatic.style.height = '40px'
      cubestatic.style.transform = 'rotate(30deg)'
      cubestatic.style.transition = '200ms'
    } else {
      triangle.style.left = '60vw'
      triangle.style.transition = '200ms'
      triangle2.style.left = '-5vw'
      triangle2.style.top = '50px'
      triangle2.style.transition = '200ms'
      circlestatic.style.width = '10px'
      circlestatic.style.height = '10px'
      circlestatic.style.transition = '200ms'
      cubestatic.style.width = '10px'
      cubestatic.style.height = '10px'
      cubestatic.style.transform = 'rotate(0deg)'
      cubestatic.style.transition = '200ms'
    }
  }

// Анимация всех объектов при нажатии
  var onclickOnThreestar = 1
  document.getElementById('threestar').onclick = animationStart
      function animationStart() {
        onclickOnThreestar++
        if (onclickOnThreestar % 2 === 0) {
          moonAnimation.play()
          circleAnimation.play()
          lineAnimation01.play()
          lineAnimation02.play()
          circleAnimation02.play()
          curveDashedAnimation.play()
          cubeAnimation01.play()
          svgAnimation.play()
          ministarAnimation.play()
          ministarAnimation02.play()
          krugAnimation.play()
          ministarAnimation03.play()
          planetAnimation.play()
          krugAnimation02.play()
          krivayaAnimation02.play()
          littlecubeAnimation.play()
          miniplaneteAnimation.play()
          threestarAnimation.play()
          threestarAnimation02.play()
          threestarAnimation03.play()
          krugstAnimation.play()
          sferastAnimation.play()
          linesstAnimation.play()
          sputnikAnimation.play()
        } else {
          moonAnimation.seek(0)
          moonAnimation.pause()
          circleAnimation.seek(0)
          circleAnimation.pause()
          lineAnimation01.seek(0)
          lineAnimation01.pause()
          lineAnimation02.seek(0)
          lineAnimation02.pause()
          circleAnimation02.seek(0)
          circleAnimation02.pause()
          curveDashedAnimation.seek(0)
          curveDashedAnimation.pause()
          cubeAnimation01.seek(0)
          cubeAnimation01.pause()
          svgAnimation.seek(0)
          svgAnimation.pause()
          ministarAnimation.seek(0)
          ministarAnimation.pause()
          ministarAnimation02.seek(0)
          ministarAnimation02.pause()
          krugAnimation.seek(0)
          krugAnimation.pause()
          ministarAnimation03.seek(0)
          ministarAnimation03.pause()
          planetAnimation.seek(0)
          planetAnimation.pause()
          krugAnimation02.seek(0)
          krugAnimation02.pause()
          krivayaAnimation02.seek(0)
          krivayaAnimation02.pause()
          littlecubeAnimation.seek(0)
          littlecubeAnimation.pause()
          miniplaneteAnimation.seek(0)
          miniplaneteAnimation.pause()
          threestarAnimation.seek(0)
          threestarAnimation.pause()
          threestarAnimation02.seek(0)
          threestarAnimation02.pause()
          threestarAnimation03.seek(0)
          threestarAnimation03.pause()
          krugstAnimation.seek(0)
          krugstAnimation.pause()
          sferastAnimation.seek(0)
          sferastAnimation.pause()
          linesstAnimation.seek(0)
          linesstAnimation.pause()
          sputnikAnimation.seek(0)
          sputnikAnimation.pause()
        }
      }

      // Добавление кружков-звезд, статичных для айпада и телефона
      let addCircles = document.getElementById('star2')
      addCircles.onclick = function() {
          let numberOfCircles = 20
          for(let i = 0; i < numberOfCircles; i++) {
              let divCircles = document.createElement('div')
              divCircles.classList.toggle('addrandomcircle')
              if (anime.random(0,100) % 2 === 0) {
                let size = `${anime.random(0,30)}px`
                divCircles.style.width = size
                divCircles.style.height = size
                divCircles.style.borderRadius = '100%'
                divCircles.style.background = 'black'
              } else {
                divCircles.style.width = `${anime.random(0,30)}px`
                divCircles.style.height = `${anime.random(0,30)}px`
                divCircles.style.borderRadius = '100%'
                divCircles.style.border = '1px solid black'
              }
              divCircles.style.transition = '1000ms'
              divCircles.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
              document.body.append(divCircles)

              divCircles.onmouseenter = function(e) {
                let elStyle = e.target.style
                let elWidthNum = Number(elStyle.width.slice(0,-2))
                let elHeightNum = Number(elStyle.height.slice(0,-2))

                if (elWidthNum === elHeightNum) {
                  let size = `${anime.random(0,30)}px`
                  elStyle.width = size
                  elStyle.height = size
                } else {
                  elStyle.width = `${anime.random(0,30)}px`
                  elStyle.height = `${anime.random(0,30)}px`
                }
                elStyle.transition = '1000ms'
                elStyle.transform = `translate(${anime.random(0,50)}vw,${anime.random(0,50)}vh) rotate(${anime.random(0,360)}deg)`
              }
          }
      }

// Цикл по массиву звезд
stars.forEach((item_g) => {
  let complex_stars = Array.from(document.querySelectorAll(item_g['selector']));
  let cost = document.getElementById('cost');
  // Цикл по примитивам, составляющим звезду
  complex_stars.forEach((item_l, i_l) => {
    item_l.addEventListener('mouseover', () => {
      cost.textContent = item_g['cost']; // Вывод цены
      item_g['animations'].map((animation) => animation.play()); // Инициализация анимаций примитивов
    });
  });

  // Цикл по примитивам, составляющим звезду
  complex_stars.forEach((item_l2) => {
    item_l2.addEventListener("mouseleave", () => {
      cost.textContent = '';
      item_g['animations'].map((animation) => {animation.seek(0); animation.pause();});
    });
  });

  });
