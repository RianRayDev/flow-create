// Minimal JS to show wiring works
(() => {
  const btn = document.getElementById('actionBtn');
  const out = document.getElementById('output');

  function formatTime(date = new Date()) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  btn?.addEventListener('click', () => {
    const msg = `Button clicked at ${formatTime()}`;
    console.log(msg);
    if (out) {
      out.textContent = msg;
    }
  });

  // Sticky navbar animation
  (() => {
    const nav = document.querySelector('[data-nav]');
    if (!nav) return;

    let lastY = window.scrollY;
    let ticking = false;

    const updateNavHeight = () => {
      const h = nav.offsetHeight || 0;
      document.documentElement.style.setProperty('--nav-h', h + 'px');
    };

    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle('nav--scrolled', y > 8);
      updateNavHeight();
      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
    window.addEventListener('resize', () => {
      updateNavHeight();
    });
    onScroll();
  })();

  // Mobile nav toggle (feature-detected)
  (() => {
    const toggle = document.querySelector('[data-nav-toggle]');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      menu.dataset.open = open ? 'true' : 'false';
    };
    setOpen(false);

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        setOpen(false);
      }
    });
  })();

  console.log('Vanilla site ready.');
})();
