const http = require( "http" );
const routes = {
    '/': function index( request, response ) {
        response.writeHead( 200 );
        response.end( "Node Routing Text" );
    },
    '/aboutus':
        function about( request, response ) {
            response.end( "This is About Page" )
        }
}

http.createServer( function ( req, res ) {
    if ( req.url in routes ) {
        return routes[req.url]( req, res );
    }
} ).listen( 1000 );
