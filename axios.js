const axios = require( "axios" );

const data = JSON.stringify( {
    name: "Shivam Vora",
    Job: "MERN Stack Developer"
} );


axios.post( 'https://reqres.in/api/users', data ).then( res => {
    console.log( `Status Code : ${res.status}` );
    console.log( `Body : ${JSON.stringify( res.data )}` );

} ).catch( err => {
    console.log( err )
} )