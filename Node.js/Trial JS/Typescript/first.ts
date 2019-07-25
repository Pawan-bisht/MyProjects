export {}

let btn = document.querySelector("#sub");
let txt = document.querySelector("#input");
let ul = document.querySelector("#todos");
function check(inp):boolean{
    if(inp==="")
        return false;
    else
        return true;
}



btn.onclick = function()
{
    if(check(txt.value))
    {
        let li = document.createElement('li');
li.textContent = txt.value;
ul.append(li);
      txt.value = "";
    }
    else
    {
        alert("Please provide some input");
    }
}