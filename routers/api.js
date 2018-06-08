const express = require( 'express' ),
    router = express.Router(),
    controller = require( '../controllers' );

router.get( '/hello', controller.api.hello );

module.exports = router;