const buttonDownload = document.getElementById('downloadQrCode')
const buttonShare = document.getElementById('share')
const containerQrcode = document.getElementById('.QrCode')

const QrCodeData = localStorage.getItem('qrCodeData')

const QrCode = document.querySelector('.img');
QrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QrCodeData}`;


/* Button Download */
buttonDownload.addEventListener('click', async () => {


    const responseQrcode = await fetch(QrCode.src);
    const QrcodeBlob = await responseQrcode.blob();

    const blobUrl = URL.createObjectURL(QrcodeBlob);

    const link = document.createElement('a')
    link.href = blobUrl;
    link.download = `Qrcode-${QrCodeData}.png`;
    link.click();

    URL.revokeObjectURL(blobUrl);


})

/* Button Share */
buttonShare.addEventListener('click', async () => {

    if (navigator.share) {
        try {
            const imageUrl = QrCode.src;

            // Usar a API de compartilhamento
            await navigator.share({
                title: 'Confira esta imagem!',
                text: 'Achei esta imagem interessante.',
                url: imageUrl // URL ou link da imagem
            });

            console.log('Conteúdo compartilhado com sucesso!');

        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    }
})
