const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visiblity = 'visible';
    
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    if (result.outcome === 'accepted') {
        // A2HS stands for "Add to Home Screen"
        console.log('User accepted the A2HS prompt');
    } else {
        console.log('User dismissed the A2HS prompt');
    }
    window.deferredPrompt = null;
    butInstall.style.visiblity = 'hidden';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    
});
