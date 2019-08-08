var parent = document.html;
var child = document.body;
child.style.right = child.clientWidth - child.offsetWidth + "px";

let copyrightString = document.getElementById('copyright');
copyrightString.innerHTML = 'Alex Weininger 2017-' + (new Date).getFullYear();
