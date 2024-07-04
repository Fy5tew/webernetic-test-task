(function () {
    const loginModal = document.getElementById('login-modal');
    const mainButton = document.getElementById('main-button');
    const modalExitButton = document.getElementById('modal-exit-button');

    mainButton.addEventListener('click', () => {
        loginModal.showModal();
    });

    modalExitButton.addEventListener('click', () => {
        loginModal.close();
    });
})();
