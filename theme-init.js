// Apply the saved theme before styles load to avoid a flash on reload.
(function () {
  let theme;
  try { theme = localStorage.getItem('bobbert-theme'); } catch (error) {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();
