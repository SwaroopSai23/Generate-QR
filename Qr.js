let qrCode;

function generateQRCode() {
    const url = document.getElementById('url-input').value.trim();
    const message = document.getElementById('message');
    message.textContent = "";

    if (!url) {
        message.style.color = 'red';
        message.textContent = "Please enter a URL!";
        return;
    }
    const qrDiv = document.getElementById('qrcode');
    qrDiv.innerHTML = "";

    qrCode = new QRCode(qrDiv, {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}

function downloadQRCode() {
    const img = document.querySelector('#qrcode img');
    const canvas = document.querySelector('#qrcode canvas');
    const message = document.getElementById('message');
    message.textContent = "";

    if (img) {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'qrcode.png';
        link.click();
        message.style.color = 'green';
        message.textContent = "QR Code downloaded!";
    } else if (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'qrcode.png';
        link.click();
        message.style.color = 'green';
        message.textContent = "QR Code downloaded!";
    } else {
        message.style.color = 'red';
        message.textContent = "Please generate QR code first!";
    }
}

function copyToClipboard() {
    const url = document.getElementById('url-input').value.trim();
    const message = document.getElementById('message');

    if (!url) {
        message.style.color = 'red';
        message.textContent = "Nothing to copy!";
        return;
    }

    navigator.clipboard.writeText(url).then(() => {
        message.style.color = 'green';
        message.textContent = "URL copied to clipboard!";
    }).catch(err => {
        message.style.color = 'red';
        message.textContent = "Failed to copy!";
    });
}
