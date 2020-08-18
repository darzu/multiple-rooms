namespace ConnectionKind {
    export const door12 = ConnectionKind.create()
    export const door23 = ConnectionKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door1)
    tiles.placeOnRandomTile(sprite, myTiles.tile1)
    sprite.x += 16
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door2)
    tiles.placeOnRandomTile(sprite, myTiles.tile4)
    sprite.x += 16
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door2)
    tiles.placeOnRandomTile(sprite, myTiles.tile3)
    sprite.x += -16
})
tiles.onMapLoaded(function (tilemap2) {
    tiles.coverAllTiles(myTiles.tile1, myTiles.tile5)
    tiles.coverAllTiles(myTiles.tile2, myTiles.tile5)
    tiles.coverAllTiles(myTiles.tile4, myTiles.tile5)
    tiles.coverAllTiles(myTiles.tile3, myTiles.tile5)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door1)
    tiles.placeOnRandomTile(sprite, myTiles.tile2)
    sprite.x += -16
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let room_1 = tiles.createMap(tiles.createTilemap(hex`0a00070002020202020202020202020101010101010101020201010101010101010202010101010101010102020101010101010101030201010101010101010202020202020202020202`, img`
    2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . 2 
    2 . . . . . . . . . 
    2 . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,myTiles.tile2,myTiles.tile5], TileScale.Sixteen))
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
tiles.connectMapById(room_1, room_2, ConnectionKind.Door1)
tiles.connectMapById(room_2, room_3, ConnectionKind.Door2)
tiles.loadMap(room_1)
