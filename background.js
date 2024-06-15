function blockImages(details) {
  console.log("Blocking image: " + details.url);
  return { cancel: true };
}

// Add a listener to block requests for images
chrome.webRequest.onBeforeRequest.addListener(
  blockImages,
  { urls: ["<all_urls>"], types: ["image"] },
  ["blocking"]
);
