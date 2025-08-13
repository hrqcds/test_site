document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alertButton');
    
    alertButton.addEventListener('click', function() {
        alert('Olá! Você clicou no botão! 🎉');
    });
    
    alertButton.addEventListener('mouseenter', function() {
        this.textContent = 'Clique em mim!';
    });
    
    alertButton.addEventListener('mouseleave', function() {
        this.textContent = 'Clique Aqui';
    });
});
