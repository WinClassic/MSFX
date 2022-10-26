// 'Activity throbber' script for Firefox 60+ by Aris


Components.utils.import("resource:///modules/CustomizableUI.jsm");
var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

var at_label = "Activity Throbber";

var ActivityThrobber = {
 init: function() {
	  
  try {

	document.addEventListener("TabAttrModified", _ActivityThrobber, false);
	document.addEventListener('TabSelect', _ActivityThrobber, false);
	document.addEventListener('TabOpen', _ActivityThrobber, false);
	document.addEventListener('TabClose', _ActivityThrobber, false);
	document.addEventListener('load', _ActivityThrobber, false);

	// add or remove 'busy' tab from activity item
	function _ActivityThrobber() {
	
	  if(gBrowser.selectedTab.hasAttribute('busy')) {
		document.querySelector('#activity_throbber').setAttribute('busy','true');
	  } else document.querySelector('#activity_throbber').removeAttribute('busy');
	
	}

	// create a default toolbar button
	CustomizableUI.createWidget({
		id: "activity_throbber", // button id
		defaultArea: CustomizableUI.AREA_NAVBAR,
		removable: true,
		label: at_label, // button title
		tooltiptext: at_label, // tooltip title
		onCreated: function(button) {
		  return button;
		}
				
	});
	  
	// style button icon / embedded non-animated icon, because there is no image for then inside Fx anymore
	var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
		\
		#activity_throbber { \
			-moz-appearance: none !important; \
			background-color: #000; \
			border-left: 1px solid ThreeDHighlight; \
			box-shadow: -1px 0 0 ThreeDShadow; \
			list-style-image: none !important; \
			background-repeat: no-repeat; \
			background-position: center center; \
			min-width: 39px !important; \
			min-height: 22px !important; \
			padding: 0 !important; \
		} \
		#activity_throbber .toolbarbutton-icon { \
			display: none !important; \
			height: 0 !important; \
			width: 0 !important; \
			visbility: collaspe !important; \
			opacity: 0 !important; \
		} \
		#activity_throbber *,\
		#activity_throbber:hover * { \
		  -moz-appearance: none !important; \
		  opacity: 1.0 !important; \
		  box-shadow: unset !important; \
		  background: unset !important; \
		} \
		\
	'), null, null);
	  
	// remove old style sheet, before registering the new one
	if (sss.sheetRegistered(uri,sss.AGENT_SHEET)) { sss.unregisterSheet(uri,sss.AGENT_SHEET); }
	sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
	  
  } catch (e) { Components.utils.reportError(e); }

 }

};

document.addEventListener("DOMContentLoaded", ActivityThrobber.init(), false);