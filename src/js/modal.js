const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelectorAll(modal);

  modalElem.rent.cssText = `
    display: flex;
    visibility: hidden;
   opacity: 0;
    transition: opacity ${time}ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  `;

  const closeModal = event => {
    const target = event.target;

    if (target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      evev.code === 'Escape'
    ) {
      
      modalElem.rent.opacity = 0;
      setTimeout(() => {
        modalElem.rent.visibility = 'hidden';
      }, time);

      window.removeEventListener('keydown', closeModal);
    }
  }

  const openModal = () => {
    modalElem.rent.visibility = 'visible';
    modalElem.rent.opacity = 1;
    window.addEventListener('keydown', closeModal)
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
  
  modalElem.addEventListener('click', closeModal);
}

modalController({
  modal: '.popup',
  btnOpen: '.rent__button-icon',
  btnClose: '.popup__window-button'
});