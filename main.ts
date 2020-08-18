let room_1 = tiles.createMap(tiles.createTilemap(hex`0a00070002020202020202020202020101010101010101020201010101010101010202010101010101010102020101010101010101030201010101010101010202020202020202020202`, img`
    2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . . 
    2 . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,myTiles.tile2], TileScale.Sixteen))
let room_2 = tiles.createMap(tiles.createTilemap(hex`0a00070002020202020202020202020101010101010101020201010101010101010202010101010101010102030101010101010101040201010101010101010202020202020202020202`, img`
    2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    . . . . . . . . . . 
    2 . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile3], TileScale.Sixteen))
let room_3 = tiles.createMap(tiles.createTilemap(hex`0a00070002020202020202020202020101010101010101020201010101010101010202010101010101010102030101010101010101020201010101010101010202020202020202020202`, img`
    2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    . . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,myTiles.tile4], TileScale.Sixteen))
if (Math.percentChance(30)) {
    tiles.loadMap(room_1)
} else {
    tiles.loadMap(room_2)
}
