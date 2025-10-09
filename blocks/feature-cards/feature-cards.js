import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // 1️⃣ Try to get authored JSON data (injected from AEM)
  let data;
  try {
    const jsonAttr = block.dataset.json;
    if (jsonAttr) {
      data = JSON.parse(jsonAttr);
    }
  } catch (e) {
    console.warn('⚠️ Failed to parse Feature Cards authored data:', e);
  }

  // If no data, do nothing
  if (!data || !data.cards || data.cards.length === 0) {
    console.warn('⚠️ No Feature Cards data found, block will not render.');
    return;
  }

  // 2️⃣ Create UL container for Franklin-style structure
  const ul = document.createElement('ul');
  ul.classList.add('feature-cards-list');

  // 3️⃣ Loop through each card in the JSON and create HTML
  data.cards.forEach((card) => {
    const li = document.createElement('li');
    li.classList.add('feature-card');

    // ---- Card Image ----
    if (card.cardImage) {
      const picture = createOptimizedPicture(card.cardImage, card.cardTitle || 'Feature Image', false, [
        { width: '750' },
      ]);

      const imageDiv = document.createElement('div');
      imageDiv.classList.add('feature-card-image');
      imageDiv.appendChild(picture);
      li.appendChild(imageDiv);
    }

    // ---- Card Body ----
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('feature-card-body');

    // Title
    if (card.cardTitle) {
      const title = document.createElement('h3');
      title.textContent = card.cardTitle;
      bodyDiv.appendChild(title);
    }

    // Description
    if (card.cardDescription) {
      const desc = document.createElement('div');
      desc.innerHTML = card.cardDescription;
      bodyDiv.appendChild(desc);
    }

    // CTA
    if (card.cardCta && card.cardCtaLabel) {
      const cta = document.createElement('a');
      cta.href = card.cardCta;
      cta.textContent = card.cardCtaLabel;
      cta.classList.add('button', 'primary');
      bodyDiv.appendChild(cta);
    }

    li.appendChild(bodyDiv);
    moveInstrumentation(block, li); // Keeps analytics & editor hooks
    ul.appendChild(li);
  });

  // 4️⃣ Replace existing block content with rendered cards
  block.textContent = '';
  block.appendChild(ul);
}
