//=================================================
// Loading
//
// Controls a loading time and animation.
//=================================================

( function( $ ) {
    'use strict';

    setTimeout( function() {
        $( '.loading' ).addClass( 'animated slideOutRight' );
    }, 1000 );

    // Android check
    var ua        = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf( 'android' ) > -1;

    if ( isAndroid ) {
        setTimeout( function() {
            $( '.loading' ).css( 'display', 'none' );
        }, 1000 );
    }
} )( jQuery );
