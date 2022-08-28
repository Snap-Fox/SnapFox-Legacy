chrome.action.setBadgeText({ text: "!" });
chrome.action.setBadgeBackgroundColor({ color: "#ffae00" });

chrome.runtime.onInstalled.addListener(function (object) {
  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: "https://snapfox.glitch.me" });
  }
  if (
    chrome.runtime.getManifest().version_name.toLowerCase().includes("beta")
  ) {
    chrome.action.setBadgeText({ text: "BETA" });
    chrome.action.setBadgeBackgroundColor({ color: "#ffae00" });
  }
});
