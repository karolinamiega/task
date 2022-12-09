//=================================================
// Old browser
//
// Detects outdated browsers and advises users to upgrade to a new version. Handles mobile devices!
//=================================================

( function( $ ) {
    'use strict';

    outdatedBrowserRework( {
        browserSupport: {
            'Chrome': 45,
            'Firefox': 38,
            'Edge': 12,
            'IE': 10,
            'Mobile Safari': 9,
            'Safari': 9,
            'Opera': 30,
            'Vivaldi': 1
        },
        requireChromeOnAndroid: true,
        isUnknownBrowserOK: false
    } );
} )( jQuery );
