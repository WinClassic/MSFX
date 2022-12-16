(function () {
var css = `

@media all and (-moz-overlay-scrollbars) {
  scrollbar[root="true"] {
    position: relative;
    z-index: 9999999;
  }

  scrollbar:not([active="true"]),
  scrollbar[disabled="true"] {
    visibility: hidden;
  }
}

scrollbar 
{
	-moz-appearance: none;
	-moz-binding: url("chrome://global/content/bindings/scrollbar.xml#scrollbar");
	cursor: default;
	min-width: 16px !important;
	background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdib3g9IjAgMCAyIDIiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9Ii1tb3otZGlhbG9nIi8+PHJlY3QgZmlsbD0iVGhyZWVESGlnaGxpZ2h0IiB4PSIxIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+PHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iLW1vei1kaWFsb2ciLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHg9IjAiIHk9IjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L3N2Zz4=") repeat !important;
}

thumb
{
	-moz-appearance: none !important;
	position: relative !important;
	background-color: -moz-Dialog !important;
	min-height: 8px !important;
  	pointer-events: auto !important;
	border: 0 !important;
	box-shadow: inset -1px -1px 0 rgb(0, 0, 0), inset 1px 1px 0 -moz-Dialog, inset -2px -2px 0 ThreeDShadow, inset 2px 2px 0 ThreeDHighlight !important;
}

thumb[orient="horizontal"] {
	-moz-appearance: none;
	min-height: 16px !important;
	min-width: 8px !important;
	max-width: 100% !important;
	background-repeat: no-repeat !important;
}

scrollbarbutton
{
	min-width: 16px !important;
	min-height: 16px !important;
	-moz-default-appearance: none !important;
	background-color: -moz-Dialog !important;
	box-shadow: inset -1px -1px 0 rgb(0, 0, 0), inset 1px 1px 0 -moz-Dialog, inset -2px -2px 0 ThreeDShadow, inset 2px 2px 0 ThreeDHighlight !important;
}

scrollbarbutton:not(.disabled):hover:active 
{
	background-color: -moz-dialog !important;
	border: 1px solid ThreeDShadow !important;
	box-shadow: none !important;
}

slider,
slider[orient="vertical"] 
{
  -moz-appearance: none;
}

scrollcorner 
{ 
  -moz-appearance: none !important;
  -moz-binding: url(chrome://global/content/bindings/scrollbar.xml#scrollbar-base);
  width: 16px;
  cursor: default;
  background-color: -moz-dialog; !important;
}

scrollbarbutton[type="increment"] 
{
	-moz-appearance: none;
	background-repeat: no-repeat !important;
	background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI3IiB5PSI0IiB4PSI1IiBmaWxsPSJtZW51dGV4dCIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHk9IjUiIHg9IjYiIGZpbGw9Im1lbnV0ZXh0Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMyIgeT0iNiIgeD0iNyIgZmlsbD0ibWVudXRleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI3IiB4PSI4IiBmaWxsPSJtZW51dGV4dCIvPg0KCQ0KCQ0KPC9zdmc+") !important;
	background-position: center center !important;
}

scrollbar[orient="vertical"] > scrollbarbutton[type="increment"] 
{
	-moz-appearance: none;
	background-repeat: no-repeat !important;
	background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSI3IiB4PSIzIiB5PSI1IiBmaWxsPSJtZW51dGV4dCIvPjxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjUiIHk9IjYiIHg9IjQiIGZpbGw9Im1lbnV0ZXh0Ii8+PHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMyIgeD0iNSIgeT0iNyIgZmlsbD0ibWVudXRleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4PSI2IiB5PSI4IiBmaWxsPSJtZW51dGV4dCIvPg0KCQ0KCQ0KPC9zdmc+") !important;
	background-position: center center !important;
}

scrollbarbutton[type="decrement"] 
{
	-moz-appearance: none;
	background-repeat: no-repeat !important;
	background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI3IiB5PSI0IiB4PSI4IiBmaWxsPSJtZW51dGV4dCIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHk9IjUiIHg9IjciIGZpbGw9Im1lbnV0ZXh0Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMyIgeT0iNiIgeD0iNiIgZmlsbD0ibWVudXRleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI3IiB4PSI1IiBmaWxsPSJtZW51dGV4dCIvPg0KCQ0KCQ0KPC9zdmc+") !important;
	background-position: center center !important;
}

scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"] 
{
	-moz-appearance: none;
	background-repeat: no-repeat !important;
	background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSI3IiB5PSI4IiB4PSIzIiBmaWxsPSJtZW51dGV4dCIvPjxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjUiIHg9IjQiIHk9IjciIGZpbGw9Im1lbnV0ZXh0Ii8+PHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMyIgeT0iNiIgeD0iNSIgZmlsbD0ibWVudXRleHQiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI1IiB4PSI2IiBmaWxsPSJtZW51dGV4dCIvPg0KCQ0KCQ0KPC9zdmc+") !important;
	background-position: center center !important;
}

scrollbarbutton[type="increment"][disabled="true"] 
{
	background-repeat: no-repeat !important;
	background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjciIHk9IjQiIHg9IjUiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIyIiBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHg9IjYiIHk9IjEwIi8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMiIgZmlsbD0iVGhyZWVESGlnaGxpZ2h0IiB4PSI3IiB5PSI5Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMiIgZmlsbD0iVGhyZWVESGlnaGxpZ2h0IiB4PSI4IiB5PSI4Ii8+PHJlY3Qgd2lkdGg9IjEiIGZpbGw9IlRocmVlREhpZ2hsaWdodCIgaGVpZ2h0PSIxIiB5PSI4IiB4PSI5Ii8+PHJlY3QgZmlsbD0iVGhyZWVEU2hhZG93IiB3aWR0aD0iMSIgaGVpZ2h0PSI1IiB5PSI1IiB4PSI2Ii8+PHJlY3QgZmlsbD0iVGhyZWVEU2hhZG93IiB3aWR0aD0iMSIgaGVpZ2h0PSIzIiB5PSI2IiB4PSI3Ii8+PHJlY3QgZmlsbD0iVGhyZWVEU2hhZG93IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB5PSI3IiB4PSI4Ii8+DQoJDQoJDQo8L3N2Zz4=");
	background-position: center center !important;
}

scrollbar[orient="vertical"] > scrollbarbutton[type="increment"][disabled="true"] 
{
	background-repeat: no-repeat !important;  
	background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjciIHg9IjMiIHk9IjUiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjIiIHk9IjYiIHg9IjkiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjIiIHk9IjciIHg9IjgiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjIiIHg9IjciIHk9IjgiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIGhlaWdodD0iMSIgd2lkdGg9IjEiIHg9IjciIHk9IjkiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjUiIHk9IjYiIHg9IjQiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjMiIHg9IjUiIHk9IjciLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHg9IjYiIHk9IjgiLz4NCgkNCgkNCjwvc3ZnPg==");
	background-position: center center !important;
}

scrollbarbutton[type="decrement"][disabled="true"] 
{
	background-repeat: no-repeat !important;
	background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjciIHk9IjQiIHg9IjgiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI3IiBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHk9IjUiIHg9IjkiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHk9IjUiIHg9IjciLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjMiIHk9IjYiIHg9IjYiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHk9IjciIHg9IjUiLz4NCgkNCgkNCjwvc3ZnPg==");
	background-position: center center !important;
}

scrollbar[orient="vertical"] > scrollbarbutton[type="decrement"][disabled="true"] 
{
	background-repeat: no-repeat !important;
	background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4NCgk8cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjciIHk9IjgiIHg9IjMiLz48cmVjdCBmaWxsPSJUaHJlZURIaWdobGlnaHQiIHdpZHRoPSI3IiBoZWlnaHQ9IjEiIHk9IjkiIHg9IjQiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjUiIHg9IjQiIHk9IjciLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIGhlaWdodD0iMSIgd2lkdGg9IjMiIHk9IjYiIHg9IjUiLz48cmVjdCBmaWxsPSJUaHJlZURTaGFkb3ciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIHk9IjUiIHg9IjYiLz4NCgkNCgkNCjwvc3ZnPg==") !important;
	background-position: center !important;
}

`;
	var sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
	var uri = makeURI('data:text/css;charset=UTF=8,' + encodeURIComponent(css));

	sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);

})();