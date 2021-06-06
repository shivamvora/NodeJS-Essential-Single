const events = require( 'events' );

let ev = new events.EventEmitter();

// ev.on( 'my_event', function ( data ) {
//     console.log( "Event :", data );
// } )

ev.once( 'eventOnce', ( code, msg ) => console.log( `Got ${code} and ${msg}` ) )

ev.emit( 'eventOnce', 200, 'OK' );