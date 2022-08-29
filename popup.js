//chrome.storage.sync.set({"mode":"dark"})
chrome.storage.sync.get("checkbox", async function(obj) {
if (obj.checkbox === true){
    document.getElementById('checkboxdark').checked = true;
}else{
    document.getElementById('checkboxdark').checked = false;
}
});
function validate() {
    if (document.getElementById('checkboxdark').checked) {
        chrome.storage.sync.set({"checkbox":true})
    } else {
        chrome.storage.sync.set({"checkbox":false})
    }
 }