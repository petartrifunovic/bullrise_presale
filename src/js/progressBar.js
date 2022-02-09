'use strict';
//Progress Bar
const progress = document.querySelectorAll('.progress-done');

progress.forEach(el => {
  el.style.width = el.getAttribute('data-done') + '%';
  el.style.opacity = 1;
  if (el.getAttribute('data-done') === '100') {
    el.style.backgroundColor = '#47cf73';
  }
});
