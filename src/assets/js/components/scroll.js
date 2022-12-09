//=================================================
// Scroll
//=================================================

( function( $ ) {
    'use strict';

    var animateS = 900;

    if ( is_firefox || is_chrome || is_opera ) {
        var animateS = 0;
    }

    // Smooth Scroll to ID
    // Class to use: .scroll-to-id
    var scrollToID = function() {
        if ( $( '.scroll-to-id' ).length ) {
            $( '.scroll-to-id' ).click( function( event ) {
                if ( this.hash !== '' ) {
                    event.preventDefault();

                    var hash = this.hash;
                    var scrollToTop;

                    scrollToTop = $( hash ).offset().top;

                    if ( typeof scrollToTop === 'undefined' ) {
                        scrollToTop = 0;
                    }

                    $( 'html, body' ).stop().animate( {
                        scrollTop: scrollToTop
                    }, animateS, function() {
                        // window.location.hash = hash;
                    } );
                } else {
                    var scrollToTop = 0;

                    $( 'html, body' ).stop().animate( {
                        scrollTop: scrollToTop
                    }, animateS, function() {
                        // window.location.hash = hash;
                    } );
                }
            } );
        }
    }

    $( function() {
        scrollToID();
    } );
} )( jQuery );
