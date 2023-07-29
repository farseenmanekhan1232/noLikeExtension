function reddenPage() {
  if (window.sessionStorage.getItem("declutterOnlineJudge") == "yes") {
    document.querySelector("ytd-menu-renderer").style["display"] = "none";
    window.sessionStorage.setItem("declutterOnlineJudge", "no");
  } else {
    window.sessionStorage.setItem("declutterOnlineJudge", "yes");
    document.querySelector("ytd-menu-renderer").style["display"] = "block";
  }
}

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  console.log(url);
  window.sessionStorage("declutterOnlineJudge", "yes");
  window;
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("https://www.youtube.com/")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage,
    });
  }
});
