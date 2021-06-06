const fs = require( 'fs' );

// Sync 

// const content = [{
//     type: "Node Application"
// }];

// fs.writeFileSync( 'test.json', JSON.stringify( content ) );

// async

const content = "Node Application";

fs.writeFile( 'text.txt', content, { flag: 'a+' }, err => {
    if ( err ) {
        console.log( err );
        return
    }
    console.log( "Successfully Done!" );
} )