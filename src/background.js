chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log('Tab updated:', tab.url, changeInfo)
    if (tab.url && tab.url.startsWith('https://www.beeminder.com/') && changeInfo.status === 'complete') {
        // Extract the username from the URL
        const urlUsername = tab.url.split('/')[3];
        console.log('Username from URL:', urlUsername);
        // Retrieve the locally stored username from Chrome storage
        chrome.storage.local.get(['username'], function (result) {
            const storedUsername = result.username;
            console.log('Locally stored Username:', storedUsername);

            if (urlUsername === storedUsername) {
                // Send a message to the content script to execute
                let rtnPromise = chrome.tabs.sendMessage(tabId, { action: 'executeScript', username: urlUsername });
                rtnPromise.then((response) => {
                    if (response) console.log('Response from content script:', response);
                })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            } else {
                console.log('Stored username does not match URL username.');
            }
        });
    }
});
