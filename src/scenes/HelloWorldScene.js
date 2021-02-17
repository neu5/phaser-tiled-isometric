import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        // this work
        // this.load.image('tileset_2d', 'assets/tilesets/2d_tileset.png');
        // this.load.tilemapTiledJSON('map', 'assets/tilemaps/map_2d.json');

        // this doesn't work
        this.load.image('image_iso', 'assets/images/dirtTiles_E.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/map_iso.json');
    }

    create()
    {
        const map = this.make.tilemap({ key: 'map' });

        // this work
        // const tileset = map.addTilesetImage('platform', 'tileset_2d');

        // this doesn't work
        const tileset = map.addTilesetImage('iso_tileset', 'image_iso');

        const platforms = map.createLayer('Ground', tileset, 0, 200);
    }
}
