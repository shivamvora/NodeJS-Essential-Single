const express = require( 'express' );
const app = express();

const PORT = 3000;

const data = {
    id: 1,
    name: "india"
}

app.get( '/', ( req, res ) => {
    res.end( "Welcome to my Homepage" )
} )

app.get( '/about', ( req, res ) => {
    res.end( "Welcome to my about page" );
} )


app.get( '/weather', ( req, res ) => {
    setTimeout( () => {
        res.send( data )
    }, 5000 );
} )

app.get( '/send-file', ( req, res ) => {
    res.sendFile( "/Express/index.html" )
} )


app.listen( PORT, () => {
    console.log( `Server Started on PORT: ${PORT}` )
} )