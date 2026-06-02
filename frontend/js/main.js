
(function(){
  const key='dove-nest-theme';
  const stored=localStorage.getItem(key);
  const theme=stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  document.documentElement.classList.toggle('dark', theme==='dark');
})();

document.addEventListener('DOMContentLoaded',()=>{
  const body=document.body;
  const menuBtn=document.querySelector('[data-menu-toggle]');
  const themeBtns=document.querySelectorAll('[data-theme-toggle]');
  const mobileLinks=document.querySelectorAll('.mobile-menu a');
  const toast=document.querySelector('[data-toast]');
  const setThemeIcon=()=>{const dark=document.documentElement.classList.contains('dark');themeBtns.forEach(btn=>{btn.setAttribute('aria-label',dark?'Switch to sunny theme':'Switch to night theme');btn.innerHTML=dark?'☀️':'🌙';});};
  const showToast=(text)=>{if(!toast)return;toast.textContent=text;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1900)};
  setThemeIcon();
  menuBtn?.addEventListener('click',()=>{const open=body.classList.toggle('menu-open');menuBtn.setAttribute('aria-expanded',String(open));});
  mobileLinks.forEach(a=>a.addEventListener('click',()=>{body.classList.remove('menu-open');menuBtn?.setAttribute('aria-expanded','false')}));
  themeBtns.forEach(btn=>btn.addEventListener('click',()=>{const isDark=document.documentElement.classList.toggle('dark');localStorage.setItem('dove-nest-theme',isDark?'dark':'light');setThemeIcon();showToast(isDark?'Night pool mood enabled':'Sunny Goan mood enabled');}));
  const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy);showToast('Copied to clipboard')}catch(e){showToast('Copy failed')}}));
  const bookingForm=document.querySelector('[data-booking-form]');
  bookingForm?.addEventListener('submit',(e)=>{e.preventDefault();const data=new FormData(bookingForm);const msg=`Hi Dove Nest, I want to enquire about a booking.%0AName: ${encodeURIComponent(data.get('name')||'')}%0APhone: ${encodeURIComponent(data.get('phone')||'')}%0ADate: ${encodeURIComponent(data.get('date')||'')}%0AGuests: ${encodeURIComponent(data.get('guests')||'')}%0APlan: ${encodeURIComponent(data.get('plan')||'')}%0AMessage: ${encodeURIComponent(data.get('message')||'')}`;window.open(`https://wa.me/919822182917?text=${msg}`,'_blank','noopener');});
  const hero=document.querySelector('.hero-card');
  hero?.addEventListener('pointermove',(e)=>{if(window.innerWidth<820)return;const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;hero.style.transform=`rotateX(${y*-5}deg) rotateY(${x*5}deg)`;});
  hero?.addEventListener('pointerleave',()=>{hero.style.transform='rotateX(0deg) rotateY(0deg)'});
  // Gallery filters and mobile-first progressive reveal
  const gallery=document.querySelector('[data-gallery]');
  const filterWrap=document.querySelector('[data-gallery-filters]');
  if(gallery){
    const items=[...gallery.querySelectorAll('.gallery-item')];
    items.forEach((item,i)=>{if(i>11)item.classList.add('is-extra')});
    document.querySelector('[data-load-gallery]')?.addEventListener('click',(e)=>{gallery.classList.toggle('gallery-expanded');e.currentTarget.textContent=gallery.classList.contains('gallery-expanded')?'Show fewer photos':'Show more photos';});
    filterWrap?.addEventListener('click',(e)=>{const btn=e.target.closest('button[data-filter]');if(!btn)return;filterWrap.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;gallery.classList.add('gallery-expanded');document.querySelector('[data-load-gallery]')?.classList.add('is-hidden');items.forEach(item=>{item.classList.toggle('is-hidden',filter!=='all' && item.dataset.category!==filter)});});
  }
  // Lightweight parallax for decorative PNGs
  let ticking=false;
  window.addEventListener('scroll',()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const y=window.scrollY;document.querySelectorAll('.bg-png').forEach((el,i)=>{el.style.translate=`0 ${Math.sin((y+i*80)/240)*8}px`;});ticking=false;});},{passive:true});
});
