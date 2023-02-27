console.log('hamza')
document.querySelector('.cross').style.display = 'none';
document.querySelector('.header').classList.add('.hedaergo')
var btn = document.querySelector('.hamburger')
btn.onclick = function () {
    document.querySelector('.header').classList.toggle('headergo');
    if (document.querySelector('.header').classList.contains('headergo')) {
        document.querySelector('.cross').style.display = 'none';
        setTimeout(() => {

            document.querySelector('.ham').style.display = 'inline';
        }, 300);

    } else {
        setTimeout(() => {

            document.querySelector('.cross').style.display = 'inline';
        }, 300);
        document.querySelector('.ham').style.display = 'none';
    }
}


