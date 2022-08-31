function getCurrentTab() {
	alert("tab.url");
}
  
  chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: getCurrentTab
	});
  });