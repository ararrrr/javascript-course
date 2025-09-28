'use strict';

// modal elements

const modalEl = document.querySelector('.modal');

//overlay model

const overlayEl = document.querySelector('.overlay');

//close model
const btnCloseModalEl = document.querySelector('.close-modal');

//open model
const btnsOpenModalEl = document.querySelectorAll('.show-modal');


const openModal = function () {
  //removing hidden classname in modal
  modalEl.classList.remove('hidden');

  //removing the hidden keyword classname in overlay
  overlayEl.classList.remove('hidden');
};


const closeModal = function () {
  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
