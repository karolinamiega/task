//=================================================
// Scrollbar
//=================================================

( function( $ ) {
    'use strict';

    // Theme: Light
    $( '.scrollbar-light' ).mCustomScrollbar( {
        theme: 'light'
    } );

    // Theme: Dark
    $( '.scrollbar-dark' ).mCustomScrollbar( {
        theme: 'dark'
    } );

    // mCSB Fix
    var rail   = $( '.mCSB_draggerRail' );
    var target = $( '.mCSB_draggerContainer' );

    if ( rail.length > 0 && rail.parent().hasClass( 'mCSB_dragger' ) ) {
        rail.appendTo( target );
    }
} )( jQuery );
