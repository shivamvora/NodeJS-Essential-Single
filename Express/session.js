const express = require( "express" );
const app = express();
const session = require( 'express-session' );


const PORT = process.env.PORT || 3000

app.use( session( {
    secret: "Your Secret Key",
    resave: true,
    saveUninitialized: true
} ) );

app.get( "/", ( req, res ) => {
    req.session.name = "Shivam";
    return res.send( "Session Set" )
} )

app.get( "/session", ( req, res ) => {
    var name = req.session.name;

    return res.send( name );
} )

app.get( "/destroy", ( req, res ) => {
    req.session.destroy( function ( error ) {
        console.log( "Session Destroyed" );
    } )
} )

app.listen( PORT, () => {
    console.log( `Listening to requests on http://localhost:${PORT}` );
} )