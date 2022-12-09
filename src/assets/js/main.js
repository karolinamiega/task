//=================================================
// JS scripts
//
// @package ProjectName
// @author  Adveits <support@adveits.com>
// @version 1.0.0
//=================================================

//=================================================
// Default library
//=================================================
//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js
//= ../../../node_modules/bs-custom-file-input/dist/bs-custom-file-input.js
//= ../../../node_modules/outdated-browser-rework/dist/outdated-browser-rework.js

//= ../../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js

//=================================================
// Main
//=================================================
// Media queries
var media_xxl = 1700;
var media_xl  = 1199;
var media_lg  = 991;
var media_md  = 767;
var media_sm  = 575;

// Browsers check
var is_opera    = !! window.opera || navigator.userAgent.indexOf( ' OPR/' ) >= 0;
var is_Edge     = navigator.userAgent.indexOf( "Edge" ) > -1;
var is_chrome   = !! window.chrome && ! is_opera && ! is_Edge;
var is_explorer = typeof document !== 'undefined' && !! document.documentMode && ! is_Edge;
var is_firefox  = typeof window.InstallTrigger !== 'undefined';
var is_safari   = /^((?!chrome|android).)*safari/i.test( navigator.userAgent );

//= components/dropdown.js

//= components/input.js

//= components/loading.js

//= components/modal.js

//= components/old-browser.js

//= components/popover.js

//= components/scroll.js

//= components/scrollbar.js

//= components/tooltip.js

//= components/ui.js
