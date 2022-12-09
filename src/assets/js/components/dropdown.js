//=================================================
// Dropdown
//=================================================

( function( $ ) {
    'use strict';

    // DROPDOWN CLICK EFFECT FUNCTIONS
    // Primary
    $( '.dropdown-click-effect' ).on( 'show.bs.dropdown', function() {
        $( this ).find( '.dropdown-menu' ).first().stop( true, true ).slideToggle( 300 );
    } );

    $( '.dropdown-click-effect' ).on( 'hide.bs.dropdown', function() {
        $( this ).find( '.dropdown-menu' ).first().stop( true, true ).slideToggle( 300 );
    } );

    // Secondary
    $( '.dropdown-child-click-effect .dropdown-toggle' ).click( function( e ) {
        e.preventDefault();

        $( this ).parent().toggleClass( 'show' );
        $( this ).parent().find( '.dropdown-menu' ).first().stop( true, true ).slideToggle( 300 );
    } );

    // Add hover class
    $( '.a-hover a, .a-hover .dropdown-toggle' ).on( 'mouseenter mouseleave', function() {
        $( this ).parent().toggleClass( 'hover-class' );
    } );

    // DROPDOWN HOVER FUNCTIONS
    $( '.dropdown-hover, .dropdown-hover .dropdown-submenu' ).on( 'mouseenter mouseleave', function() {
        $( this ).toggleClass( 'show' );
        $( this ).find( '> .dropdown-item:not(.active)' ).toggleClass( 'active' );
        $( this ).find( '.dropdown-menu' ).first().stop( true, true ).fadeToggle( 300 );
    } );

    // DROPDOWN SUBMENU FUNCTIONS
    $( ".dropdown-menu [data-toggle='dropdown']" ).on( 'click', function( e ) {
        e.preventDefault();
        e.stopPropagation();

        $( this ).addClass( 'active' );
        $( this ).parents( '.dropdown-submenu' ).siblings().find( '.show' ).removeClass( 'show' );
        $( this ).siblings().toggleClass( 'show' );

        $( this ).parents( '.show' ).on( 'hidden.bs.dropdown', function( e ) {
            $( '.show' ).removeClass( 'show' );

            // Current page
            $( ':not(.current-dropdown-item).active' ).removeClass( 'active' );
        } );
    } );
} )( jQuery );
