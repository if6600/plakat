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
  rotate: function() {
    return anime.random(0, 300);
  },
  easing: 'easeInOutQuad',
  duration: 800,
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
  direction: 'alternate',
  easing: 'easeInOutQuad',
  duration: 1500,
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


// Массив объектов. Каждый объект в массиве - звезда с ценой, массивом анимаций и селектором.
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
    'cost': 1300,
    'animations': [cubeAnimation01],
    'selector': '.cube'
  },
  {
    'cost': 1300,
    'animations': [svgAnimation],
    'selector': '.cube2'
  },
  {
    'cost': 1300,
    'animations': [ministarAnimation],
    'selector': '.ministar'
  },
  {
    'cost': 1300,
    'animations': [ministarAnimation02],
    'selector': '.ministar2'
  },
  {
    'cost': 1300,
    'animations': [krugAnimation],
    'selector': '.krug2'
  },
  {
    'cost': 500,
    'animations': [ministarAnimation03],
    'selector': '.ministar3'
  },
  {
    'cost': 10000,
    'animations': [planetAnimation],
    'selector': '.planet'
  },
  {
    'cost': 1000,
    'animations': [krugAnimation02],
    'selector': '.krug1'
  },
  {
    'cost': 1200,
    'animations': [krivayaAnimation02],
    'selector': '.krivaya'
  },
  {
    'cost': 1200,
    'animations': [littlecubeAnimation],
    'selector': '.littlecube'
  }
]

var onclickOnPlanet = 0
document.getElementById('planet_1').onclick = changeColor;
    function changeColor() {
      onclickOnPlanet++
      if (onclickOnPlanet % 2 === 0) {
        document.body.style.filter = 'invert(0%) sepia(0%) saturate(7461%) hue-rotate(254deg) brightness(100%) contrast(100%)'
        document.body.style.backgroundColor = 'white'
      } else {
        document.body.style.filter = 'invert(100%) sepia(100%) saturate(0%) hue-rotate(322deg) brightness(101%) contrast(103%)'
        document.body.style.backgroundColor = 'black'
      }
    }

// Цикл по массиву звезд
stars.forEach((item_g) => {
  let complex_stars = Array.from(document.querySelectorAll(item_g['selector']));
  let cost = document.getElementById('cost');
  //Цикл по примитивам, составляющим звезду
  complex_stars.forEach((item_l, i_l) => {
    item_l.addEventListener('mouseover', () => {
      cost.textContent = item_g['cost']; // Вывод цены
      item_g['animations'].map((animation) => animation.play()); // Инициализация анимаций примитивов
    });
  });

  //Цикл по примитивам, составляющим звезду
  complex_stars.forEach((item_l2) => {
    item_l2.addEventListener("mouseleave", () => {
      cost.textContent = '';
      item_g['animations'].map((animation) => {animation.seek(0); animation.pause();});
    });
  });

  });
