// Map templates by name (home, about, etc.)
const templates = {};
document.querySelectorAll('template.panel').forEach(t => {
  const name = t.id.replace('tpl-', ''); // "tpl-about" -> "about"
  templates[name] = t;
});

const content = document.getElementById('content');
const buttons = document.querySelectorAll('.button-container button');

function setActiveButton(name) {
  buttons.forEach(b => b.classList.toggle('active', b.dataset.panel === name));
}

function swapContent(name) {
  const tpl = templates[name];
  if (!tpl) return;

  // animate out
  content.classList.remove('fade-in');
  content.classList.add('fade-out');

  const onDone = () => {
    content.removeEventListener('animationend', onDone);
    // swap HTML
    content.innerHTML = tpl.innerHTML;
    // animate in
    content.classList.remove('fade-out');
    content.classList.add('fade-in');
  };
  content.addEventListener('animationend', onDone, { once: true });

  setActiveButton(name);
}

// Hook up clicks
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.panel;
    swapContent(name);
  });
});

// Default panel on load
setActiveButton('home'); // highlight
// If you want to force content to 'home' on first load, uncomment:
// swapContent('home');