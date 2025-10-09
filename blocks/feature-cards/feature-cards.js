export default function decorate(block) {

  const json = block.dataset.json ? JSON.parse(block.dataset.json) : window.featureCardsData;

  if (!json || !json.cards || json.cards.length === 0) {
    block.innerHTML = '<p>No feature cards available.</p>';
    return;
  }

  // Create container for cards
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('feature-cards-container');

  json.cards.forEach((card) => {
    // Create card wrapper
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('feature-card');

    // Card image
    if (card.cardImage) {
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('feature-card-image');
      const img = document.createElement('img');
      img.src = card.cardImage;
      img.alt = card.cardTitle || 'Feature Image';
      imgWrapper.appendChild(img);
      cardDiv.appendChild(imgWrapper);
    }

    // Card content
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('feature-card-content');

    // Title
    if (card.cardTitle) {
      const titleEl = document.createElement('h3');
      titleEl.classList.add('feature-card-title');
      titleEl.textContent = card.cardTitle;
      contentDiv.appendChild(titleEl);
    }

    // Description
    if (card.cardDescription) {
      const descEl = document.createElement('div');
      descEl.classList.add('feature-card-description');
      descEl.innerHTML = card.cardDescription;
      contentDiv.appendChild(descEl);
    }

    // CTA
    if (card.cardCta && card.cardCtaLabel) {
      const ctaEl = document.createElement('a');
      ctaEl.classList.add('feature-card-cta');
      ctaEl.href = card.cardCta;
      ctaEl.textContent = card.cardCtaLabel;
      contentDiv.appendChild(ctaEl);
    }

    // Append content
    cardDiv.appendChild(contentDiv);
    cardsContainer.appendChild(cardDiv);
  });

  // Empty the block and add the cards
  block.textContent = '';
  block.appendChild(cardsContainer);
}
