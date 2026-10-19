const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));document.querySelector('#year').textContent=new Date().getFullYear();

const themeToggle=document.querySelector('.theme-toggle');
const systemTheme=window.matchMedia('(prefers-color-scheme: dark)');
let savedTheme;try{savedTheme=localStorage.getItem('bobbert-theme');}catch(e){}
let manualTheme=savedTheme==='light'||savedTheme==='dark';
function applyTheme(theme){
 document.documentElement.dataset.theme=theme;
 const dark=theme==='dark';
 themeToggle.textContent=dark?'Light mode':'Dark mode';
 themeToggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
 themeToggle.setAttribute('aria-pressed',String(dark));
}
applyTheme(document.documentElement.dataset.theme);
themeToggle.addEventListener('click',()=>{
 const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
 manualTheme=true;applyTheme(next);
 try{localStorage.setItem('bobbert-theme',next);}catch(e){}
});
systemTheme.addEventListener('change',event=>{if(!manualTheme)applyTheme(event.matches?'dark':'light');});
