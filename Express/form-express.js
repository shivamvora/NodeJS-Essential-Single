const express = require( "express" );
const path = require( "path" );
const app = express();

const PORT = process.env.PORT || 3000

app.set( "form", path.join( __dirname, "views" ) );
app.set( "view engine", "pug" )

app.use( express.urlencoded( {
    extended: true
} ) )

app.get( '/', ( req, res ) => {
    res.render( "form", { title: "Form Handling" } );
} )

app.post( "/form_submit", ( req, res ) => {
    const username = req.body.username
    const email = req.body.email
    res.end( `Your Username : ${username} Your Email : ${email}` );
} )

app.listen( PORT, () => {
    console.log( `Listening to requests on http://localhost:${PORT}` )
} )