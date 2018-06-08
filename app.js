const express = require( 'express' ),
    app = express(),
    port = process.env.PORT || 5000,
    apiRouter = require( './routers/api' );

app.use( '/api', apiRouter );

app.listen( port, ( err ) => {
    if ( err ) throw err

    console.log( `Listening on port ${port}` );
} );