function Hero(opts){
    this.name = opts.name;
    this.x = opts.x;
    this.y = opts.y;
    this.icon = opts.icon;
};

var queuegames = {
    abilities: {
        glimpse: function(hero){
            if(hero instanceof Hero){
                var glimpseX = hero.x;
                var glimpseY = hero.y;
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
        disruptor: new Hero({name: "Disruptor", x: 10, y: 30}),
        chaosKnight: new Hero({name: "Chaos Knight", x: 40, y: 80})
    }
}
