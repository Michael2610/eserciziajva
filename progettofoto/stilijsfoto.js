const body = document.body
const sSlide = document.querySelectorAll('.slide')
const left = document.getElementById('left')
const right = document.getElementById('right')

let ASlide = 0

right.addEventListener('click', () => {
  ASlide++

  if (ASlide > sSlide.length - 1) {
    ASlide = 0
  }

  setBgToBody()
  setASlide()
})

left.addEventListener('click', () => {
  ASlide--

  if (ASlide < 0) {
    ASlide = sSlide.length - 1
  }

  setBgToBody()
  setASlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = sSlide[ASlide].style.backgroundImage
}

function setASlide() {
  sSlide.forEach((sSlide) => sSlide.classList.remove('active'))

  sSlide[ASlide].classList.add('active')
}