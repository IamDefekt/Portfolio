'use strict';

const modal = document.getElementById('maquette-modal');

if (modal) {
    const modalImg = modal.querySelector('.modal-img');

    function openModal(card) {
        modalImg.src = card.dataset.full;
        modalImg.alt = card.querySelector('img').alt;
        modal.hidden = false;
    }

    function closeModal() {
        modal.hidden = true;
    }

    document.querySelectorAll('#maquettes .card').forEach((card) => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(card);
        });
    });

    modal.querySelectorAll('[data-close]').forEach((el) => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
}