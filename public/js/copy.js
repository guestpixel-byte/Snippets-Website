function copyToClipboard(id) {
    const codeElement = document.getElementById(id);
    const range = document.createRange();
    range.selectNodeContents(codeElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    alert(
        id === 'html-code'
        ? 'HTML copied!'
        : 'CSS copied!');
}