let auraAnimation01 = anime({
  targets: '.aura1',
  scale: 1.5,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  loop: true
})

let auraAnimation02 = anime({
  targets: '.aura2',
  scale: 1.6,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  loop: true
})

let auraAnimation03 = anime({
  targets: '.aura3',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  loop: true
})

  auraAnimation03.onmouseenter = function(e) {
    e.target.style.border = '1px solid red'
  }

  document.body.append(auraAnimation03)
