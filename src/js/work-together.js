import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { openModal } from './modal'

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/requests';

const submitForm = document.querySelector('.user-form');
const validationEmail = document.querySelector('.validation-text');
const footerFormFrame = document.querySelector('.footer-form-frame');

submitForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email.value.trim();
  const userComments = event.currentTarget.elements.comments.value.trim();

  if (userEmail) {
    validationEmail.style.visibility = 'visible';
    validationEmail.style.color = 'rgba(60, 188, 129, 1)';
    footerFormFrame.style.borderBottomColor = 'rgba(60, 188, 129, 1)';
  }
  if (!userEmail) {
    validationEmail.textContent = 'Invalid email, try again';
    validationEmail.style.visibility = 'visible';
    validationEmail.style.color = 'rgba(231, 74, 59, 1)';
    footerFormFrame.style.borderBottomColor = 'rgba(231, 74, 59, 1)';
  }

  const userData = {
    email: userEmail,
    comment: userComments,
  };

  await sendData(userData);
}

async function sendData(userData) {
  try {
    const response = await axios.post(`${BASE_URL}${END_POINT}`, userData);
    validationEmail.style.visibility = 'hidden';
    footerFormFrame.style.borderBottomColor = 'rgba(250, 250, 250, 0.20)';
    submitForm.reset();
    openModal();
    
  } catch (error) {
    const instance = basicLightbox.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${error.message}</p>
		</div>
		`);

    instance.show();
  }
}