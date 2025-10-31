export default function decorate(b){
  b.classList.add('featurecards-block');
  const wrapper = b.querySelector('.featurecards-wrapper');
  if(wrapper){
    const titleDiv = wrapper.querySelector('.featurecards-text');
    if(titleDiv){
      titleDiv.classList.add('featurecards-header');
      const h1 = titleDiv.querySelector('.featurecards-title');
      if(h1) h1.classList.add('featurecards-main-title');
      const partial = titleDiv.querySelector('.featurecards-title-partial');
      if(partial) partial.classList.add('featurecards-title-highlight');
    }

    const cards = wrapper.querySelectorAll('.featurecards-section.featurecards-card');
    cards.forEach((card) => {
      card.classList.add('featurecards-card-block');
      const link = card.querySelector('.featurecards-link');
      if(link){
        link.classList.add('featurecards-card-link');
        const imgDiv = link.querySelector('.featurecards-image');
        if(imgDiv){
          imgDiv.classList.add('featurecards-card-image');
          const img = imgDiv.querySelector('img');
          if(img){
            img.classList.add('featurecards-card-img');
          }
        }
        const textCenter = link.querySelector('.featurecards-text-center');
        if(textCenter){
          textCenter.classList.add('featurecards-card-content');
          const h2 = textCenter.querySelector('.featurecards-title-h2');
          if(h2) h2.classList.add('featurecards-card-title');
          const descP = textCenter.querySelector('.featurecards-desc');
          if(descP) descP.classList.add('featurecards-card-desc');
        }
        const btnDiv = link.querySelector('.featurecards-redirected-btn');
        if(btnDiv){
          btnDiv.classList.add('featurecards-card-btn-wrapper');
          const btn = btnDiv.querySelector('.featurecards-arrow-icon-btn');
          if(btn) btn.classList.add('featurecards-card-btn');
        }
        if(link.href && !link.href.includes(window.location.hostname)){
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
        }
      }
    });

    const sitareCards = wrapper.querySelectorAll('.featurecards-bolte-sitare-card-section');
    sitareCards.forEach((a) => {
      a.classList.add('featurecards-alt-card');
      const wrapperDiv = a.querySelector('.featurecards-bolte-sitare-card-section--wrapper');
      if(wrapperDiv){
        wrapperDiv.classList.add('featurecards-alt-card-wrapper');
        const imgDiv = wrapperDiv.querySelector('.featurecards-bolte-sitare-card-section--img');
        if(imgDiv){
          imgDiv.classList.add('featurecards-alt-card-img');
          const img = imgDiv.querySelector('img');
          if(img){
            img.classList.add('featurecards-card-img');
          }
        }
        const content = wrapperDiv.querySelector('.featurecards-content-wrapper');
        if(content){
          content.classList.add('featurecards-alt-card-content');
          const h2 = content.querySelector('.featurecards-bolte-sitare-card-section--title');
          if(h2) h2.classList.add('featurecards-alt-card-title');
          const p = content.querySelector('.featurecards-bolte-sitare-card-section--text');
          if(p) p.classList.add('featurecards-alt-card-desc');
          const btn = content.querySelector('.featurecards-bolte-sitare-card-section--btn');
          if(btn) btn.classList.add('featurecards-alt-card-btn');
        }
      }
      if(a.href && !a.href.includes(window.location.hostname)){
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });

    const curve = wrapper.querySelector('.featurecards-curve-container');
    if(curve) curve.classList.add('featurecards-block-curve');
  }
}
