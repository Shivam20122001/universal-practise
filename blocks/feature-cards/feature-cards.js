/**
 * Feature Cards Block for AEM Edge Delivery Services (Franklin)
 * -------------------------------------------------------------
 * Renders cards based on AEM-authored data or fallback template data.
 * Automatically displays placeholder cards if no authored data exists.
 */

// Import utilities from Franklin runtime (optional but good practice)
import { createOptimizedPicture } from '../../scripts/aem.js'; // used if you want optimized images (optional)

/**
 * Decorate function (mandatory Franklin block entrypoint)
 * @param {HTMLElement} block - The block element on the page
 */
export default async function decorate(block) {
  // 1️⃣ Try to get authored JSON data first (if provided by AEM)
  let data;

  try {
    const jsonAttr = block.dataset.json;
    if (jsonAttr) {
      data = JSON.parse(jsonAttr);
    }
  } catch (e) {
    console.warn('⚠️ Failed to parse authored Feature Cards data:', e);
  }

  // 2️⃣ Fallback: use template placeholder data
  if (!data || !data.cards || data.cards.length === 0) {
    data = {
      name: 'Feature Cards',
      model: 'feature-cards',
      cards: [
        {
          cardImage: 'https://placehold.co/600x400?text=Card+1',
          cardTitle: 'Smart Analytics',
          cardDescription:
            '<p>Gain powerful insights with AI-driven reports and dashboards to make data-driven decisions.</p>',
          cardCtaLabel: 'Learn More',
          cardCta: '/features/analytics',
        },
        {
          cardImage: 'https://placehold.co/600x400?text=Card+2',
          cardTitle: 'Automation Tools',
          cardDescription:
            '<p>Automate repetitive tasks to boost productivity and reduce manual work.</p>',
          cardCtaLabel: 'Explore',
          cardCta: '/features/automation',
        },
        {
          cardImage: 'https://placehold.co/600x400?text=Card+3',
          cardTitle: 'Advanced Security',
          cardDescription:
            '<p>Protect your data with enterprise-grade security and compliance features.</p>',
          cardCtaLabel: 'Read More',
          cardCta: '/features/security',
        },
      ],
    };
  }

  // 3️⃣ Create the feature cards container
  const container = document.createElement('div');
  container.classList.add('feature-cards-container');

  // 4️⃣ Loop through cards and build HTML
  data.cards.forEach((card) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('feature-card');

    // ---- Image ----
    if (card.cardImage) {
      const imgWrap = document.createElement('div');
      imgWrap.classList.add('feature-card-image');

      // optional: use Franklin's optimized picture
      const picture = createOptimizedPicture
        ? createOptimizedPicture(card.cardImage, card.cardTitle || 'Feature Image')
        : null;

      if (picture) {
        imgWrap.appendChild(picture);
      } else {
        const img = document.createElement('img');
        img.src = card.cardImage;
        img.alt = card.cardTitle || 'Feature Image';
        imgWrap.appendChild(img);
      }

      cardEl.appendChild(imgWrap);
    }

    // ---- Content ----
    const content = document.createElement('div');
    content.classList.add('feature-card-content');

    if (card.cardTitle) {
      const title = document.createElement('h3');
      title.classList.add('feature-card-title');
      title.textContent = card.cardTitle;
      content.appendChild(title);
    }

    if (card.cardDescription) {
      const desc = document.createElement('div');
      desc.classList.add('feature-card-description');
      desc.innerHTML = card.cardDescription;
      content.appendChild(desc);
    }

    if (card.cardCta && card.cardCtaLabel) {
      const cta = document.createElement('a');
      cta.classList.add('feature-card-cta');
      cta.href = card.cardCta;
      cta.textContent = card.cardCtaLabel;
      content.appendChild(cta);
    }

    cardEl.appendChild(content);
    container.appendChild(cardEl);
  });

  // 5️⃣ Replace existing block content
  block.innerHTML = '';
  block.appendChild(container);
}
