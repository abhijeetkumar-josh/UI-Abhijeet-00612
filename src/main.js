import Splide from '@splidejs/splide'

document.addEventListener('DOMContentLoaded', () => {
  const splide = new Splide('#blog__carousel', {
    type: 'slide',
    perPage: 3,
    perMove: 1,
    gap: '20px',
    arrows: false,
    pagination: false,
    breakpoints: {
      768: { perPage: 1 },
      1024: { perPage: 2 }
    }
  })
  splide.mount()
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      splide.go('<')
    })
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      splide.go('>')
    })
  }
})
