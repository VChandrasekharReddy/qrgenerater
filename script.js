document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const textInput = document.getElementById('textInput').value;
    const sizeSelect = document.getElementById('sizeSelect').value;
    const qrcodeContainer = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';

    // Generate QR Code with selected size
    const qrCode = new QRCode(qrcodeContainer, {
        text: textInput,
        width: parseInt(sizeSelect),
        height: parseInt(sizeSelect),
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.style.display = 'inline-block';


    downloadBtn.addEventListener('click', function() {
        const canvas = qrcodeContainer.querySelector('canvas');
        const imageUrl = canvas.toDataURL("image/png");

        const link = document.createElement('a');
        link.href = imageUrl;            // Set the link href to the image URL
        link.download = 'qrcode.png';    // Specify the download file name

        // Trigger the download by simulating a click on the link
        link.click();
    });
});
