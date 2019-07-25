
window.onload = function()
{
  var btn = document.querySelector("#btn");
  btn.onclick = function()
  {
    var li = document.createElement('li');
    var ul = document.querySelector('ol');
    var inp = document.querySelector('#input');
    var content = inp.value;
    li.textContent = content;
    ul.appendChild(li);
  };
}
