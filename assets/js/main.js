
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
if (hamburger) hamburger.addEventListener('click', () => nav.classList.toggle('open'));

const filterButtons = document.querySelectorAll('[data-filter]');
const productCards = document.querySelectorAll('[data-room]');
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const target = btn.dataset.filter;
  productCards.forEach(card => {
    const show = target === 'all' || card.dataset.room === target || card.dataset.concern?.includes(target);
    card.style.display = show ? '' : 'none';
  });
}));

const quoteForm = document.querySelector('#quoteForm');
if (quoteForm && !quoteForm.dataset.realInquiry) quoteForm.addEventListener('submit', (e) => {
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

const contactForm = document.querySelector('#contactForm');
if (contactForm && !contactForm.dataset.realInquiry) contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const notice = document.querySelector('#contactNotice');
  if (notice) notice.style.display = 'block';
  contactForm.reset();
});


const supportForm = document.querySelector('#supportForm');
if (supportForm && !supportForm.dataset.realInquiry) supportForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const notice = document.querySelector('#supportNotice');
  if (notice) notice.style.display = 'block';
  supportForm.reset();
});
const supportSearch = document.querySelector('.support-search');
if (supportSearch) supportSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = supportSearch.querySelector('input');
  if (input) input.value = '';
  if (input) input.placeholder = 'Search submitted — connect live site search before launch';
});


// V9 lead form tracking: pass source page and UTM parameters into email submission.
document.querySelectorAll('form[data-real-inquiry="true"]').forEach(form => {
  const url = new URL(window.location.href);
  const source = form.querySelector('input[name="Source Page"]');
  const utmSource = form.querySelector('input[name="UTM Source"]');
  const utmCampaign = form.querySelector('input[name="UTM Campaign"]');
  if (source) source.value = window.location.href;
  if (utmSource) utmSource.value = url.searchParams.get('utm_source') || '';
  if (utmCampaign) utmCampaign.value = url.searchParams.get('utm_campaign') || '';
});
