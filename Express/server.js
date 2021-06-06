
const express = require( 'express' );
const app = express();

app.get( "/ping", ( req, res ) => {
    res.send( "Express Application" )
} );

app.listen( 3000, () => { console.log( "Server started on port 3000" ) } )