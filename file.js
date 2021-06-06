const fs = require( "fs" );

fs.readFile( "test.txt", 'utf8', ( err, data ) => {
    if ( err ) throw err;
    console.log( data );
} )

const data = fs.readFileSync( 'test.txt', { encoding: 'utf-8', flag: 'r' } );

console.log( data );

fs.stat( 'test.txt', ( err, stats ) => {
    if ( err ) {
        console.log( err );
        return;
    }
    console.log( stats.isFile() )
    console.log( stats.isDirectory() )
    console.log( stats.size )
} )