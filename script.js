const btnYes = document.getElementById('btnyes');
const btnNo = document.getElementById('btnno');


btnYes.addEventListener('click', () => {
    window.location.href = './LUTTMATS.html';
});


btnNo.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * window.innerWidth);
    const j = Math.floor(Math.random() * window.innerHeight);
    btnNo.style.position = 'absolute';
    btnNo.style.left = i + 'px';
    btnNo.style.top = j + 'px';
});
