let status = document.createElement("vbox");
status.setAttribute("id", "browser-bottombox");
status.innerHTML = `
<div class="statusBarInner">
	<div class="statusBarIcon"></div>
	<div class="statusBarDone">Done</div>
</div>
<div class="statusBarInner statusBarInnerTwoBoxes">
</div>
<div class="statusBarInner statusBarInnerTwoBoxes">
</div>
<div class="statusBarInternet">
</div>
`;
document.body.appendChild(status);