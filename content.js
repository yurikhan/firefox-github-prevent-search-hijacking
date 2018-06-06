let searchbox = document.querySelector('input[name="q"]');
let parent = searchbox.parentElement;
let next = searchbox.nextSibling;
parent.removeChild(searchbox);
searchbox.setAttribute('data-hotkey', 's');
parent.insertBefore(searchbox, next);
