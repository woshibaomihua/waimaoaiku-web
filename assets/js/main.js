
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=8613928231487&text=Hello+LYL+Clean+Air%2C+I+am+interested+in+your+OEM%2FODM+air+purifier+products.+Please+send+me+product+catalog%2C+quotation+details%2C+MOQ%2C+customization+options+and+lead+time.&type=phone_number&app_absent=0`;
const grid=document.getElementById('productGrid');

function galleryMarkup(images, name){
  const imgs = images.map((src,i)=>`<img src="${src}" alt="${name} image ${i+1}" class="gallery-img ${i===0?'active':''}" loading="lazy">`).join('');
  const dots = images.map((_,i)=>`<button class="gallery-dot ${i===0?'active':''}" type="button" aria-label="Show image ${i+1}"></button>`).join('');
  return `<div class="product-gallery" data-gallery data-autoplay="hover"><div class="gallery-stage">${imgs}<button class="gallery-arrow gallery-prev" type="button" aria-label="Previous image">‹</button><button class="gallery-arrow gallery-next" type="button" aria-label="Next image">›</button></div><div class="gallery-dots">${dots}</div></div>`;
}

function initGalleries(scope=document){
  scope.querySelectorAll('[data-gallery]').forEach(gallery=>{
    if(gallery.dataset.ready==='true') return;
    gallery.dataset.ready='true';
    const images=[...gallery.querySelectorAll('.gallery-img')];
    const dots=[...gallery.querySelectorAll('.gallery-dot')];
    const prev=gallery.querySelector('.gallery-prev');
    const next=gallery.querySelector('.gallery-next');
    let index=0;
    let timer=null;
    function show(i){
      index=(i+images.length)%images.length;
      images.forEach((img,n)=>img.classList.toggle('active',n===index));
      dots.forEach((dot,n)=>dot.classList.toggle('active',n===index));
    }
    function startAuto(){
      if(images.length < 2 || timer) return;
      timer=setInterval(()=>show(index+1), 1200);
    }
    function stopAuto(){ if(timer){ clearInterval(timer); timer=null; } }
    prev?.addEventListener('click',()=>{stopAuto(); show(index-1)});
    next?.addEventListener('click',()=>{stopAuto(); show(index+1)});
    dots.forEach((dot,n)=>dot.addEventListener('click',()=>{stopAuto(); show(n)}));
    gallery.addEventListener('mouseenter', startAuto);
    gallery.addEventListener('mouseleave', stopAuto);
    gallery.addEventListener('focusin', startAuto);
    gallery.addEventListener('focusout', stopAuto);
    gallery.addEventListener('touchstart', ()=>show(index+1), {passive:true});
  });
}

async function renderProducts(){
  if(!grid) return;
  try{
    const res=await fetch('./product-data.json');
    const data=await res.json();
    grid.innerHTML=data.map(p=>`<article class="product-card"><div class="pic">${galleryMarkup(p.images || [p.image], p.name)}</div><span class="tag">${p.category}</span><h3>${p.name}</h3><p class="card-summary">${p.summary||''}</p><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul><div class="card-actions"><a class="btn btn-light" href="${p.url}">View Details</a><a class="btn btn-primary" href="${WHATSAPP_URL}" target="_blank" rel="noopener">Get Quote</a></div></article>`).join('');
    initGalleries(grid);
  }catch(e){grid.innerHTML='<p>Product data could not be loaded. Please check product-data.json.</p>'}
}

renderProducts();
initGalleries();

const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

document.getElementById('quoteForm')?.addEventListener('submit',function(){
  const btn=this.querySelector('button[type="submit"]');
  if(btn){ btn.textContent='Sending...'; btn.disabled=true; }
});
