document.getElementById('addButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const count = parseInt(document.getElementById('countInput').value);
    
    if (inputText.trim() !== '' && count > 0) {
        const outputArea = document.getElementById('outputText');
        const repeatedText = `${inputText}\n`.repeat(count);
        outputArea.value += repeatedText;

        document.getElementById('inputText').value = '';
        document.getElementById('countInput').value = '';

        const messageAdd = document.getElementById('messageAdd');
        messageAdd.classList.remove('hidden');
        setTimeout(() => {
            messageAdd.classList.add('hidden');
        }, 2000);
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputArea = document.getElementById('outputText');
    if (outputArea.value.trim() !== '') {
        outputArea.select();
        document.execCommand('copy');

        const messageCopy = document.getElementById('messageCopy');
        messageCopy.classList.remove('hidden');
        setTimeout(() => {
            messageCopy.classList.add('hidden');
        }, 2000);
    } else {
        alert('No text to copy!');
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('outputText').value = '';

    const messageClear = document.getElementById('messageClear');
    messageClear.classList.remove('hidden');
    setTimeout(() => {
        messageClear.classList.add('hidden');
    }, 2000);
});
