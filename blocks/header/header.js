export default function decorate(b) {
  b.classList.add('header-position-relative', 'header-mb-15');

  const appName = b.querySelector('.header-app-name');
  if (appName) {
    appName.classList.add('header-d-none', 'header-app-name');
    if (appName.dataset && appName.dataset.appName) {
      b.dataset.appName = appName.dataset.appName;
    }
  }

  const header = b.querySelector('.header-boing-container');
  if (header) {
    header.classList.add(
      'header-boing-container',
      'header-d-flex',
      'header-justify-content-between',
      'header-align-items-center',
      'header-h-15',
      'header-px-5',
      'header-py-2',
      'header-fixed-top',
      'header-w-100',
      'header-bg-white'
    );
    const logoDiv = header.querySelector('.header-d-flex.header-w-25');
    if (logoDiv) {
      logoDiv.classList.add('header-d-flex', 'header-w-25');
    }
    const logoLinkWrap = header.querySelector('a[a-label="header-logo-boing"]');
    if (logoLinkWrap) {
      logoLinkWrap.classList.add('header-analytics_cta_click');
      const logoImg = logoLinkWrap.querySelector('.header__logo-img');
      if (logoImg) {
        logoImg.classList.add('header__logo-img');
      }
    }
    const loginWrap = header.querySelector('.header__login-btn-wrapper');
    if (loginWrap) {
      loginWrap.classList.add('header__login-btn-wrapper', 'header-analytics_cta_click');
      const loginBtn = loginWrap.querySelector('.header__login-btn');
      if (loginBtn) {
        loginBtn.classList.add(
          'header__login-btn',
          'header-btn',
          'header-text-boing-primary',
          'header-bg-transparent',
          'header-fw-semibold',
          'header-rounded-4',
          'header-btn-sm',
          'header-py-3',
          'header-px-4'
        );
      }
    }
  }

  const submenu = b.querySelector('.header-submenu-container');
  if (submenu) {
    submenu.classList.add(
      'header-submenu-container',
      'header-position-fixed',
      'header-top-0',
      'header-start-0',
      'header-end-0',
      'header-m-auto',
      'header-overflow-hidden'
    );
    const sidebar = submenu.querySelector('.header-sidebar');
    if (sidebar) {
      sidebar.classList.add('header-sidebar', 'header-start-0', 'header-bg-white', 'header-position-absolute');
      const menu = sidebar.querySelector('.header-sidebar__menu');
      if (menu) {
        menu.classList.add('header-sidebar__menu', 'header-list-unstyled', 'header-px-4');
        menu.querySelectorAll('.header-sidebar__menu-item').forEach(li => {
          li.classList.add('header-sidebar__menu-item', 'header-py-6', 'header-border-bottom', 'header-border-boing-neutral-gray-200');
          const link = li.querySelector('.header-sidebar__menu-link');
          if (link) {
            link.classList.add(
              'header-sidebar__menu-link',
              'header-d-flex',
              'header-align-items-center',
              'header-text-decoration-none',
              'header-px-6',
              'header-fw-medium',
              'header-analytics_cta_click'
            );
            const icon = link.querySelector('.header-sidebar__menu-icon');
            if (icon) {
              icon.classList.add('header-sidebar__menu-icon', 'header-me-4');
            }
          }
        });
      }
      const curve = sidebar.querySelector('.header-sidebar__curve');
      if (curve) {
        curve.classList.add('header-sidebar__curve');
      }
    }
    const overlay = submenu.querySelector('.header-overlay');
    if (overlay) {
      overlay.classList.add(
        'header-overlay',
        'header-position-absolute',
        'header-top-0',
        'header-start-0',
        'header-w-100',
        'header-h-100',
        'header-bg-black',
        'header-opacity-25'
      );
    }
    const footerBrand = submenu.querySelector('.header-footer-brand');
    if (footerBrand) {
      footerBrand.classList.add('header-footer-brand', 'header-w-100', 'header-bg-boing-neutral-gray-600');
      const primary = footerBrand.querySelector('.header-footer-brand__primary');
      if (primary) {
        primary.classList.add('header-footer-brand__primary');
        const primaryContent = primary.querySelector('.header-footer-brand__primary--content');
        if (primaryContent) {
          primaryContent.classList.add(
            'header-footer-brand__primary--content',
            'header-d-flex',
            'header-flex-column',
            'header-flex-md-row',
            'header-justify-content-md-between',
            'header-align-items-center'
          );
        }
        const left = primary.querySelector('.header-footer-brand__left');
        if (left) {
          left.classList.add(
            'header-footer-brand__left',
            'header-d-flex',
            'header-gap-16',
            'header-px-10',
            'header-align-items-center',
            'header-justify-content-center'
          );
        }
        const right = primary.querySelector('.header-footer-brand__right');
        if (right) {
          right.classList.add('header-footer-brand__right');
        }
        const navbar = primary.querySelector('.header-footer-brand__navbar');
        if (navbar) {
          navbar.classList.add('header-footer-brand__navbar', 'header-d-grid', 'header-d-md-flex');
          const navbarLeft = navbar.querySelector('.header-footer-brand__navbar--left');
          if (navbarLeft) {
            navbarLeft.classList.add('header-footer-brand__navbar--left', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');
            navbarLeft.querySelectorAll('.header-footerList').forEach(footerList => {
              footerList.querySelectorAll('.header-footer-list__item').forEach(item => {
                item.classList.add('header-footer-list__item');
                const link = item.querySelector('.header-footer-list__item--link');
                if (link) {
                  link.classList.add(
                    'header-cta-analytics',
                    'header-analytics_cta_click',
                    'header-footer-list__item--link',
                    'header-d-inline-block'
                  );
                }
              });
            });
          }
          const navbarRight = navbar.querySelector('.header-footer-brand__navbar--right');
          if (navbarRight) {
            navbarRight.classList.add('header-footer-brand__navbar--right', 'header-d-flex', 'header-flex-column', 'header-flex-md-row');
            navbarRight.querySelectorAll('.header-footerList').forEach(footerList => {
              footerList.querySelectorAll('.header-footer-list__item').forEach(item => {
                item.classList.add('header-footer-list__item');
                const link = item.querySelector('.header-footer-list__item--link');
                if (link) {
                  link.classList.add(
                    'header-cta-analytics',
                    'header-analytics_cta_click',
                    'header-footer-list__item--link',
                    'header-d-inline-block'
                  );
                }
              });
            });
          }
        }
      }
      const secondary = footerBrand.querySelector('.header-footer-brand__secondary');
      if (secondary) {
        secondary.classList.add('header-footer-brand__secondary');
        const secondaryContent = secondary.querySelector('.header-footer-brand__secondary--content');
        if (secondaryContent) {
          secondaryContent.classList.add(
            'header-footer-brand__secondary--content',
            'header-d-flex',
            'header-flex-column',
            'header-justify-content-md-between',
            'header-align-items-center'
          );
        }
        const right = secondary.querySelector('.header-footer-brand__right');
        if (right) {
          right.classList.add('header-footer-brand__right', 'header-d-flex', 'header-flex-column', 'header-pb-5');
          const socialTitle = right.querySelector('.header-social_media--title');
          if (socialTitle) {
            socialTitle.classList.add('header-social_media--title');
          }
          const socialList = right.querySelector('.header-footer-brand__right--list');
          if (socialList) {
            socialList.classList.add(
              'header-footer-brand__right--list',
              'header-d-flex',
              'header-align-items-center',
              'header-justify-content-center',
              'header-px-10',
              'header-flex-wrap'
            );
            socialList.querySelectorAll('.header-footer-brand__right--item').forEach(item => {
              item.classList.add('header-footer-brand__right--item', 'header-d-flex', 'header-justify-content-center', 'header-align-items-center');
              const link = item.querySelector('.header-footer-brand__right--link');
              if (link) {
                link.classList.add(
                  'header-footer-brand__right--link',
                  'header-d-flex',
                  'header-justify-content-center',
                  'header-align-items-center',
                  'header-analytics_cta_click'
                );
                const icon = link.querySelector('img');
                if (icon) {
                  icon.classList.add('header-object-fit-contain', 'header-w-100', 'header-h-100');
                }
              }
            });
          }
        }
        const left = secondary.querySelector('.header-footer-brand__left');
        if (left) {
          left.classList.add(
            'header-footer-brand__left',
            'header-py-5',
            'header-d-flex',
            'header-flex-column',
            'header-gap-3'
          );
          const leftList = left.querySelector('.header-footer-brand__left--list');
          if (leftList) {
            leftList.classList.add(
              'header-footer-brand__left--list',
              'header-d-flex',
              'header-align-items-center',
              'header-justify-content-center',
              'header-flex-wrap'
            );
            leftList.querySelectorAll('.header-footer-brand__left--item').forEach(item => {
              item.classList.add('header-footer-brand__left--item', 'header-foot_link');
              const link = item.querySelector('.header-footer-brand__left--link');
              if (link) {
                link.classList.add('header-footer-brand__left--link', 'header-analytics_cta_click');
              }
            });
          }
          const copyright = left.querySelector('.header-footer-brand__left--copyright');
          if (copyright) {
            copyright.classList.add('header-footer-brand__left--copyright', 'header-text-center');
            const copyrightText = copyright.querySelector('.header-footer-brand__left--text');
            if (copyrightText) {
              copyrightText.classList.add('header-footer-brand__left--text', 'header-text-white');
            }
          }
        }
      }
    }
  }
}
