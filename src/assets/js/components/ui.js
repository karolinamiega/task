//=================================================
// UI
//=================================================

( function( $ ) {
    'use strict';

    var uiAClass         = $( '.ui #aside' );
    var asideStickyClass = $( '#aside-sticky' );

    // Prevent default for .bg-example a
    var UIPreventDefault = function() {
        $( '.bd-example a' ).click( function( e ) {
            e.preventDefault();
        } );
    }

    // UI Scrollbar
    var UIScrollbar = function() {
        uiAClass.mCustomScrollbar( {
            theme: 'dark',
            advanced: {
                updateOnContentResize: true,
                updateOnSelectorChange: '.ui #aside'
            }
        } );

        // mCSB Fix
        var rail   = uiAClass.find( '.mCSB_draggerRail' );
        var target = uiAClass.find( '.mCSB_draggerContainer' );

        if ( rail.length > 0 && rail.parent().hasClass( 'mCSB_dragger' ) ) {
            rail.appendTo( target );
        }
    }

    // UI Sticky
    var UISticky = function() {
        if ( asideStickyClass.length ) {
            $( window ).scroll( function() {
                if ( asideStickyClass.length ) {
                    var position    = $( window ).scrollTop() - asideStickyClass.offset().top;
                    var parentwidth = asideStickyClass.width();

                    asideStickyClass.find( '>' ).toggleClass( 'sticky-fixed-md', position > 0 ).width( parentwidth );
                }
            } );
        }
    }

    $( function() {
        UIPreventDefault();
        UIScrollbar();
        UISticky();
    } );
} )( jQuery );
