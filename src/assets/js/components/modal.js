//=================================================
// Modal
//=================================================

( function( $ ) {
    'use strict';

    // Multi modals
    var multiModals = function() {
        $( '.modal' ).on( 'show.bs.modal', function( e ) {
            $( this ).addClass( 'in' );
        } );

        $( '.modal' ).on( 'hidden.bs.modal', function( e ) {
            $( this ).removeClass( 'in' );

            if ( $( '.modal' ).hasClass( 'in show' ) ) {
                $( 'body' ).addClass( 'modal-open' );
            }
        } );
    }

    // Hide modal when link ID
    var hideModalLinkID = function() {
        $( '.modal a[href*="#"]' ).on( 'click', function( ev ) {
            ev.preventDefault();

            var $button = $( ev.target );

            $( this ).closest( '.modal' ).on( 'hidden.bs.modal', function( e ) {
                var $href = $button.attr( 'href' );

                window.location.href = $href;
            } );

            $( '.modal' ).modal( 'hide' );
        } );
    }

    $( function() {
        multiModals();
        hideModalLinkID();
    } );
} )( jQuery );
