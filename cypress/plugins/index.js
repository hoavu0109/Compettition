module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chrome') {
            launchOptions.args.push('--app-cache-force-disabled');
        }
        return launchOptions;
    });
};
