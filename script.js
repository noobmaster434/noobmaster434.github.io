function showYesMessage() {
    document.getElementById('response').textContent = 'I knew you would say yes❣️';
    document.body.style.backgroundImage = "url('bg2.png')"; // Replace with your second background image URL
}

function moveButton() {
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container');
    
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    let newTop, newLeft;
    
    do {
        newTop = Math.random() * (containerRect.height - btnRect.height);
        newLeft = Math.random() * (containerRect.width - btnRect.width);
    } while (newTop === btnRect.top && newLeft === btnRect.left);

    noBtn.style.position = 'absolute';
    noBtn.style.top = `${newTop}px`;
    noBtn.style.left = `${newLeft}px`;
}
