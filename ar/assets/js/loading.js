// Redirect to the target page stored in sessionStorage after 2 seconds
window.onload = function () {
    const targetUrl = sessionStorage.getItem('targetUrl') || 'index.html';
    setTimeout(() => {
        sessionStorage.removeItem('targetUrl');
        window.location.href = targetUrl;
    }, 1000);
}; 