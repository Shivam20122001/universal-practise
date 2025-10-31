export default function decorate(b) {
  b.classList.add('footer-brand-container-hd', 'p-0');
  const wrapper = b.querySelector('.footer-brand-wrapper');
  if (wrapper) wrapper.classList.add('w-100', 'bg-boing-neutral-gray-600');

  const primarySection = b.querySelector('.footer-brand-primary');
  if (primarySection) {
    const container = primarySection.querySelector('.footer-brand-container');
    if (container) {
      const content = container.querySelector('.footer-brand-primary--content');
      if (content) content.classList.add('d-flex', 'flex-column', 'flex-md-row', 'justify-content-md-between', 'align-items-center');

      const leftSection = container.querySelector('.footer-brand-left');
      if (leftSection) leftSection.classList.add('d-flex', 'gap-16', 'px-10', 'align-items-center', 'justify-content-center');

      const logoLink = leftSection && leftSection.querySelector('.footer-brand-logo');
      if (logoLink) {
        logoLink.classList.add('d-inline-block', 'analytics_cta_click');
        logoLink.setAttribute('target', '_blank');
        logoLink.setAttribute('aria-label', 'ITC Logo');
        const img = logoLink.querySelector('img');
        if (img) img.classList.add('object-fit-contain', 'w-100', 'h-100');
      }

      const secondaryLogo = leftSection && leftSection.querySelector('.footer-brand-secondary--logo');
      if (secondaryLogo) {
        secondaryLogo.classList.add('d-inline-block');
        const img = secondaryLogo.querySelector('img');
        if (img) img.classList.add('object-fit-contain', 'w-100');
      }

      const rightSection = container.querySelector('.footer-brand-right');
      if (rightSection) {
        const nav = rightSection.querySelector('.footer-brand-navbar');
        if (nav) {
          nav.classList.add('d-grid', 'd-md-flex');
          nav.setAttribute('aria-label', 'footer navbar');
          const navLeft = nav.querySelector('.footer-brand-navbar--left');
          if (navLeft) navLeft.classList.add('d-flex', 'flex-column', 'flex-md-row');
          const navRight = nav.querySelector('.footer-brand-navbar--right');
          if (navRight) navRight.classList.add('d-flex', 'flex-column', 'flex-md-row');
          nav.querySelectorAll('.footer-list-component').forEach(listComponent => {
            listComponent.querySelectorAll('.footer-list').forEach(list => {
              list.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'align-items-md-start', 'flex-column');
              list.querySelectorAll('.footer-list-item').forEach(item => {
                item.classList.add('footer-list-item');
                const link = item.querySelector('a');
                if (link) link.classList.add('cta-analytics', 'analytics_cta_click', 'footer-list-item--link', 'd-inline-block');
              });
            });
          });
        }
      }
    }
  }

  const secondarySection = b.querySelector('.footer-brand-secondary');
  if (secondarySection) {
    const container = secondarySection.querySelector('.footer-brand-container');
    if (container) {
      const content = container.querySelector('.footer-brand-secondary--content');
      if (content) content.classList.add('d-flex', 'flex-column', 'justify-content-md-between', 'align-items-center');
      const rightSection = content && content.querySelector('.footer-brand-right');
      if (rightSection) {
        rightSection.classList.add('d-flex', 'flex-column', 'pb-5');
        const title = rightSection.querySelector('.footer-social-media--title');
        if (title) title.classList.add('footer-social-media--title');
        const list = rightSection.querySelector('.footer-brand-right--list');
        if (list) {
          list.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'px-10', 'flex-wrap');
          list.querySelectorAll('.footer-brand-right--item').forEach(item => {
            item.classList.add('d-flex', 'justify-content-center', 'align-items-center');
            const link = item.querySelector('a');
            if (link) {
              link.classList.add('footer-brand-right--link', 'd-flex', 'justify-content-center', 'align-items-center', 'analytics_cta_click');
              link.setAttribute('target', '_blank');
              const img = link.querySelector('img');
              if (img) img.classList.add('object-fit-contain', 'w-100', 'h-100');
            }
          });
        }
      }
      const leftSection = content && content.querySelector('.footer-brand-left');
      if (leftSection) {
        leftSection.classList.add('py-5', 'd-flex', 'flex-column', 'gap-3');
        const list = leftSection.querySelector('.footer-brand-left--list');
        if (list) {
          list.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'flex-wrap');
          list.querySelectorAll('.footer-brand-left--item').forEach(item => {
            item.classList.add('footer-brand-left--item', 'footer-foot_link');
            const link = item.querySelector('a');
            if (link) {
              link.classList.add('footer-brand-left--link', 'analytics_cta_click');
              link.setAttribute('target', '_blank');
            }
          });
        }
        const copyright = leftSection.querySelector('.footer-brand-left--copyright');
        if (copyright) {
          copyright.classList.add('text-center');
          const text = copyright.querySelector('.footer-brand-left--text');
          if (text) text.classList.add('footer-brand-left--text', 'text-white');
        }
      }
    }
  }
}
