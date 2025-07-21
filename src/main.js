document.addEventListener('DOMContentLoaded', () => {
  // const container = document.getElementsByClassName('carousel-container')
  // const cards = Array.from(document.querySelectorAll('.card'))
  // const prevBtn = document.getElementById('prevBtn')
  // const nextBtn = document.getElementById('nextBtn')
  // console.log(container)
  // // console.log(cards)
  // let currentIndex = 0
  // const cardsToShow = 3
  // // const cardsize = document.querySelector('.cards')
  // // const size = cardsize.offsetWidth
  // const size = 365
  // function renderCards(val) {
  //   // cards.forEach(card => {
  //   //   card.style.display = 'none'
  //   // })
  //   // for (
  //   //   let i = currentIndex;
  //   //   i < currentIndex + cardsToShow && i < cards.length;
  //   //   i += 1
  //   // ) {
  //   //   cards[i].style.display = 'block'
  //   // }
  //   // /const offset = -(cardWidth * currentIndex);
  //   if (val === 0) container.style.transform = `translateX(${-size}px)`
  //   if (val === 1) container.style.transform = `translateX(${size}px)`
  // }
  // // function updateCarousel() {
  // //   const offset = -(cardWidth * currentIndex);
  // //   carousel.style.transform = `translateX(${offset}px)`;
  // // }
  // prevBtn.addEventListener('click', () => {
  //   if (currentIndex > 0) {
  //     currentIndex -= 1
  //     renderCards(0)
  //   }
  // })
  // nextBtn.addEventListener('click', () => {
  //   if (currentIndex < cards.length - cardsToShow) {
  //     currentIndex += 1
  //     renderCards(1)
  //   }
  // })
  // renderCards(2)
  // document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track')
  const cards = document.querySelectorAll('.carousel-track .card')
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')
  const visibleCards = 3
  const cardWidth = cards[0].getBoundingClientRect().width
  const gap = 20
  const totalCards = cards.length
  let currentIndex = 0
  function updateCarousel() {
    const offset = -(currentIndex * (cardWidth + gap))
    track.style.transform = `translateX(${offset}px)`
  }
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1
      updateCarousel()
    }
  })
  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex += 1
      updateCarousel()
    }
  })
})
