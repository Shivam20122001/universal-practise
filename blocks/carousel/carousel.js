export default function decorate(b){
  b.classList.add('carousel-position-relative');
  const swiper = b.querySelector('.swiper.carousel-primary-swiper');
  if(swiper){
    swiper.setAttribute('data-is-autoplay','true');
    swiper.setAttribute('data-delay','5000');
    swiper.setAttribute('data-autopause-disabled','true');
    swiper.setAttribute('data-is-loop','false');
  }
  const items = b.querySelectorAll('.swiper-slide.carousel-primary-swiper-slide');
  items.forEach(item=>{
    const video = item.querySelector('video.carousel-banner-video');
    if(video) video.classList.add('carousel-banner-video');
    const img = item.querySelector('img.carousel-banner-image');
    if(img){
      img.classList.add('carousel-banner-image');
      if(img.hasAttribute('alt')) img.setAttribute('alt',img.getAttribute('alt'));
    }
    const cta = item.querySelector('a.carousel-cmp-button');
    if(cta){
      cta.classList.add('carousel-cmp-button');
      if(cta.href&&!cta.href.includes(window.location.hostname)){
        cta.target='_blank';cta.rel='noopener noreferrer';
      }
      const ctaText = cta.querySelector('span.carousel-cmp-button__text');
      if(ctaText) ctaText.classList.add('carousel-cmp-button__text');
    }
  });
  const actions = b.querySelector('.carousel-cmp-carousel__actions');
  if(actions) actions.classList.add('carousel-cmp-carousel__actions');
  const pagination = b.querySelector('.carousel-swiper-pagination');
  if(pagination) pagination.classList.add('carousel-swiper-pagination');
}
