const express = require( 'express' );
const app = express();

const myLogger = function ( req, res, next ) {
    console.log( "LOGGED" );

    next();
}

app.use( myLogger )

app.get( '/', function ( req, res ) {
    res.send( "Home Route" );
} )

app.listen( 3000, () => {
    console.log( 'App started on 3000 port' )
} )