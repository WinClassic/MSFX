var internet = document.createElement("div");
var statusBarInner = document.createElement("div");
statusBarInner.classList.add('statusBarInner');
internet.classList.add('statusBarInternet');
document.getElementById('browser-bottombox').appendChild(statusBarInner);
document.getElementById('browser-bottombox').appendChild(statusBarInner.cloneNode(true)).classList.add('statusBarInnerTwoBoxes');
document.getElementById('browser-bottombox').appendChild(statusBarInner.cloneNode(true)).classList.add('statusBarInnerTwoBoxes');
document.getElementById('browser-bottombox').appendChild(internet);