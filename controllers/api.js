module.exports = {
    hello: ( req, res ) => {
        const arr = ['a', 'b', 'c', 'd', 'e', 'f']
        const num = Math.floor( Math.random() * arr.length )
        res.json( { message: arr[num] } );
    }
}