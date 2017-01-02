addParamTo = function (url, key, value) {
    var anchorTag = getAnchorTag(url);
    var urlParts = decodeURI(url).split('#');
    var queryParamStrings = [];
    queryParamStrings.push(encodeURI(key) + "=" + encodeURI(value));
    var withQueryParams = "?" + queryParamStrings;
    var withAnchorTag = anchorTag != "" ? "#" + anchorTag : "";
    return urlParts[0] + withQueryParams + withAnchorTag;
};

getAnchorTag = function (url) {
    var urlParts = decodeURI(url).split("#");
    return urlParts.length >= 2 ? urlParts[1] : "";
};

chrome.browserAction.onClicked.addListener(function (tab) {
    var withLangEn = addParamTo(tab.url, "lang", "en");
    chrome.tabs.update(tab.id, {url: withLangEn});
});
