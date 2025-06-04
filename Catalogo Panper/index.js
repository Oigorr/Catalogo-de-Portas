
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeModal");

// Abrir modal com animação
document.querySelectorAll('.container-doors img').forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
    });
});

// Fechar modal com animação
function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // tempo da animação
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
    this.classList.toggle('open');
});



