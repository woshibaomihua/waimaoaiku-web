
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
if (hamburger) hamburger.addEventListener('click', () => nav.classList.toggle('open'));

// Product Data Rendering
const productGrid = document.querySelector('#product-grid');
if (productGrid) {
  fetch('product-data.json')
    .then(res => res.json())
    .then(data => {
      productGrid.innerHTML = data.map(product => `
        <article class="card product-card" data-room="${product.room}" data-concern="${product.concern}">
          <span class="badge">${product.badge}</span>
          <img src="assets/images/${product.img}" alt="${product.name} air purifier">
          <h3>${product.name}</h3>
          <p>${product.coverage}</p>
          <ul class="b2b-specs">
            <li>MOQ: ${product.moq}</li>
            <li>Lead Time: ${product.leadTime}</li>
            <li>OEM: ${product.oemOptions.split(',')[0]}...</li>
          </ul>
          <div class="spec-list">
            <div class="spec"><b>${product.cadr}</b>CADR</div>
            <div class="spec"><b>${product.noise}</b>Noise</div>
            <div class="spec"><b>H13 HEPA</b>Filter</div>
            <div class="spec"><b>2-Year</b>Warranty</div>
          </div>
          <a class="btn secondary" href="oem.html">Quote This Model</a>
        </article>
      `).join('');
      
      // Re-initialize filter buttons if they exist
      initFilters();
    });
}

function initFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const productCards = document.querySelectorAll('.product-card');
  filterButtons.forEach(btn => btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.filter;
    productCards.forEach(card => {
      const show = target === 'all' || card.dataset.room === target || card.dataset.concern?.includes(target);
      card.style.display = show ? '' : 'none';
    });
  }));
}

// Initial call for hardcoded cards (like on index.html)
initFilters();

const quoteForm = document.querySelector('#quoteForm');
if (quoteForm) quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const notice = document.querySelector('#quoteNotice');
  if (notice) notice.style.display = 'block';
  quoteForm.reset();
});

const emailForms = document.querySelectorAll('.email-form');
emailForms.forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const input = form.querySelector('input');
  if (input) { input.value=''; input.placeholder='Subscribed — thank you!'; }
}));

const quizOptions = document.querySelectorAll('.quiz-option');
let quiz = {room:null, concern:null};
quizOptions.forEach(opt => opt.addEventListener('click', () => {
  const group = opt.dataset.group;
  document.querySelectorAll(`.quiz-option[data-group="${group}"]`).forEach(x => x.classList.remove('selected'));
  opt.classList.add('selected');
  quiz[group] = opt.dataset.value;
  const result = document.querySelector('.quiz-result');
  if (result && quiz.room && quiz.concern) {
    const model = quiz.room === 'small' ? 'LUNA Mini' : quiz.room === 'medium' ? 'AERLUNE S1' : quiz.room === 'large' ? 'AERLUNE Pro 600' : 'AERLUNE Pro 900';
    result.innerHTML = `<strong>Recommended:</strong> ${model} for ${quiz.concern.replace('-', ' ')} and ${quiz.room} spaces. <a href="products.html" style="color:#9ce7ff;text-decoration:underline">View products →</a>`;
    result.style.display='block';
  }
}));
