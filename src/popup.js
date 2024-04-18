document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const saveBtn = document.getElementById('saveBtn');

    // Load the stored username if available
    chrome.storage.local.get(['username'], function (result) {
        if (result.username) {
            usernameInput.value = result.username;
        }
    });

    // Save the username when the Save button is clicked
    saveBtn.addEventListener('click', function () {
        const username = usernameInput.value.trim();

        if (username) {
            // Save the username to Chrome storage
            chrome.storage.local.set({ 'username': username }, function () {
                console.log('Username saved:', username);
                alert('username saved successfully!');
            });
        } else {
            alert('Please enter a valid username.');
        }
    });
});
