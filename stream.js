const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer( function ( req, res ) {
    fs.readFile( 'test.json', ( err, data ) => {
        res.end( data );
    } )
} )

server.listen( 3000, () => { console.log( "Application Started on PORT 3000" ) } )