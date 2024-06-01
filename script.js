function openGiftBox() {
    const lid = document.querySelector('.lid');
    const message = document.getElementById('message');
    
    lid.style.transform = 'rotate(-30deg)';
    lid.style.top = '-40px';
    
    setTimeout(() => {
        message.style.display = 'block';
    }, 500);
}
