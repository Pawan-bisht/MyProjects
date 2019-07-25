"use strict";
exports.__esModule = true;
var btn = document.querySelector("#sub");
var txt = document.querySelector("#input");
var ul = document.querySelector("#todos");
function check(inp) {
    if (inp === "")
        return false;
    else
        return true;
}
btn.onclick = function () {
    if (check(txt.value)) {
        var li = document.createElement('li');
        li.textContent = txt.value;
        ul.append(li);
        txt.value = "";
    }
    else {
        alert("Please provide some input");
    }
};
