import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
    const rows = [...block.children];
    const navWrapper = document.createElement('div');
    navWrapper.className = 'header-nav';
    const brand = document.createElement('div');
    brand.className = 'header-nav-brand';
    const menusWrapper = document.createElement('div');
    menusWrapper.className = 'header-nav-menus';
    const navUl = document.createElement('ul');
    navUl.className = 'header-nav-menu';
    const langUl = document.createElement('ul');
    langUl.className = 'header-nav-lang';
    rows.forEach((row) => {
        const model = row.dataset.aueModel;
        if (!model) {
            const brandSlot = document.createElement('div');
            brandSlot.className = 'header-nav-brand-item';
            moveInstrumentation(row, brandSlot);
            while (row.firstElementChild) {
                brandSlot.append(row.firstElementChild);
            }
            brand.append(brandSlot);
            return;
        }
        if (model === 'navMenu') {
            const li = document.createElement('li');
            li.className = 'header-nav-menu-item';
            moveInstrumentation(row, li);

            const titleEl = row.querySelector('[data-aue-prop="title"]');
            const linkEl = row.querySelector('a');

            const title = titleEl?.textContent?.trim() || '';
            const href = linkEl?.getAttribute('href') || '#';

            const a = document.createElement('a');
            a.href = href;
            a.textContent = title || href;

            li.append(a);
            navUl.append(li);
            return;
        }
        if (model === 'languageOption') {
            const li = document.createElement('li');
            li.className = 'header-nav-lang-item';
            moveInstrumentation(row, li);

            const labelEl = row.querySelector('[data-aue-prop="label"]');
            const linkEl = row.querySelector('a');

            const label = labelEl?.textContent?.trim() || '';
            const href = linkEl?.getAttribute('href') || '#';

            const a = document.createElement('a');
            a.href = href;
            a.textContent = label || href;

            li.append(a);
            langUl.append(li);
        }
    });

    if (navUl.children.length) {
        menusWrapper.append(navUl);
    }

    if (langUl.children.length) {
        menusWrapper.append(langUl);
    }

    navWrapper.append(brand, menusWrapper);
    navWrapper.querySelectorAll('picture > img').forEach((img) => {
        const optimizedPic = createOptimizedPicture(img.src, img.alt || '', false, [{ width: '750' }]);
        moveInstrumentation(img, optimizedPic.querySelector('img'));
        img.closest('picture').replaceWith(optimizedPic);
    });
    block.textContent = '';
    block.append(navWrapper);
}
