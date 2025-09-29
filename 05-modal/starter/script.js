'use strict';

// modal elements

const modalEl = document.querySelector('.modal');

//overlay model

const overlayEl = document.querySelector('.overlay');

//close model
const btnCloseModalEl = document.querySelector('.close-modal');

//open model
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

let lastFocusButton = null;

const openModal = function () {
  //removing hidden classname in modal
  modalEl.classList.remove('hidden');

  //removing the hidden keyword classname in overlay
  overlayEl.classList.remove('hidden');

  modalEl.focus();
  lastFocusButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');
  if (lastFocusButton) {
    lastFocusButton.focus();
  }
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('roll', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close-modal');


