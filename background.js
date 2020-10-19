

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: "https://ofsds.org/"};
    },
    {
        urls: [
            '*://www.facebook.com/*'
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
