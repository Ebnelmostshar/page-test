// script.js

document.getElementById("share-btn").addEventListener("click", function() {
    const quote = document.getElementById("daily-quote").innerText;
    const shareData = {
        title: 'Quote of the Day',
        text: quote,
        url: window.location.href
    };
    navigator.share(shareData).catch(console.error);
});

document.getElementById("save-btn").addEventListener("click", function() {
    const quoteText = document.getElementById("daily-quote").innerText;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 200;

    ctx.fillStyle = "#f4f4f4";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "24px Arial";
    ctx.fillStyle = "#555";
    ctx.fillText(quoteText, 50, 100);

    const link = document.createElement("a");
    link.download = "quote.png";
    link.href = canvas.toDataURL();
    link.click();
});

document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing, ${email}!`);
    // Here you would typically send the email to your server or Firebase
});
