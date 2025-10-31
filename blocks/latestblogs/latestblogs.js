export default function decorate(b) {
  b.classList.add('latestblogs-wrapper');
  const listing = b.querySelector('.latestblogs-listing');
  if (listing) {
    const firstSection = listing.querySelector('.latestblogs-listing_section--first');
    if (firstSection) {
      firstSection.classList.add('latestblogs-text--white', 'latestblogs-text-center');
      const title = firstSection.querySelector('h2.latestblogs-listing--title');
      if (title) title.classList.add('latestblogs--text__heading-1', 'latestblogs-text--white', 'latestblogs-pb-3');
      const desc = firstSection.querySelector('p.latestblogs-listing--desc');
      if (desc) desc.classList.add('latestblogs--text__body-2', 'latestblogs-pb-4');
      const btnWrapper = firstSection.querySelector('.latestblogs-listing--btnwrapper');
      if (btnWrapper) {
        const cta = btnWrapper.querySelector('a');
        if (cta) {
          cta.classList.add('latestblogs--text__title-3', 'latestblogs-listing--btn', 'analytics_cta_click');
          if (cta.href && !cta.href.includes(window.location.hostname)) {
            cta.target = '_blank';
            cta.rel = 'noopener noreferrer';
          }
        }
      }
    }
    const secondSection = listing.querySelector('.latestblogs-listing_section--second');
    if (secondSection) {
      secondSection.classList.add('latestblogs-d-flex');
      const cards = secondSection.querySelectorAll('a.latestblogs-listing--cardwrapper');
      cards.forEach(card => {
        card.classList.add('analytics_cta_click');
        const cardsDiv = card.querySelector('.latestblogs-listing--cards');
        if (cardsDiv) {
          const imageWrapper = cardsDiv.querySelector('.latestblogs-listing--cardimagewrapper');
          if (imageWrapper) {
            const img = imageWrapper.querySelector('img.latestblogs-listing--cardimage');
            if (img) img.classList.add('latestblogs-w-100', 'latestblogs-h-100');
          }
          const contentWrapper = cardsDiv.querySelector('.latestblogs-cards_content--wrapper');
          if (contentWrapper) {
            const date = contentWrapper.querySelector('.latestblogs--text__body-5.latestblogs-published_date');
            if (date) date.classList.add('latestblogs-p-0', 'latestblogs-m-0', 'latestblogs-mb-3');
            const blogTitle = contentWrapper.querySelector('.latestblogs--text__body-2.latestblogs--text__body');
            if (blogTitle) blogTitle.classList.add('latestblogs--text__body-2', 'latestblogs--text__body');
          }
        }
      });
    }
  }
}
