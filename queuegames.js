function Hero(opts){
    this.name = opts.name;
    this.icon = opts.icon;
    this.sprite = game.add.sprite(opts.x, opts.y, opts.name.toLowerCase());
    this.tween = null;
};

var qg = {
    preload: function(){
        game.load.image('disruptor', 'images/disruptor.png');
    },
    
    create: function(){
        qg.heroes = {
            disruptor: new Hero({name: "Disruptor", x: 10, y: 30})
        };
        qg.units.push(qg.heroes.disruptor);
        qg.activeUnit = qg.heroes.disruptor;

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.disableVisibilityChange = true;

        game.physics.arcade.enable(qg.activeUnit.sprite);

        qg.activeUnit.sprite.body.collideWorldBounds = true;

        game.input.onDown.add(qg.moveHero, this);
    },

    update: function(){
    },

    mouse: {
        x: 0,
        y: 0
    },

    moveHero: function(pointer){
        distance = game.physics.arcade.distanceBetween(qg.activeUnit.sprite, {x: pointer.x - 25, y: pointer.y - 25});
        if(qg.activeUnit.sprite.tween) qg.activeUnit.sprite.tween.stop();
        qg.activeUnit.sprite.tween = game.add.tween(qg.activeUnit.sprite).to({x: pointer.x - 25, y: pointer.y - 25}, distance * 2);
        qg.activeUnit.sprite.tween.start();
    },

    units: [],

    activeUnit: null, 

    abilities: {
        glimpse: function(hero){
            if(hero instanceof Hero){
                var glimpseX = hero.sprite.x;
                var glimpseY = hero.sprite.y;
                setTimeout(function(){
                    console.log(hero);
                    console.log(glimpseX);
                    console.log(glimpseY);
                }, 10000, hero, glimpseX, glimpseY);
                return "casting glimpse on " + hero.name;
            }
            else { return "params were not a hero"; }
        }
    },
    heroes: {
    }
}

var game = new Phaser.Game(500,300, Phaser.AUTO, 'game', {preload: qg.preload, create: qg.create, update: qg.update});
