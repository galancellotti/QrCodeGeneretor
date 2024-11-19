const InputQrCode = document.querySelector('.inputQrCode')
const buttonQrCode = document.querySelector('.ButtonQrCode')

/* Button getQRCode */
buttonQrCode.addEventListener('click', () => {
    const valorInputQrCode = InputQrCode.value;

    localStorage.setItem('qrCodeData', valorInputQrCode)
    
    window.location = "./QrCodePage.html";
})





