
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var sprite = new cc.Sprite.create(res.Tower_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        sprite.setPosition(cc.p(size.width/2, size.height/2));
        sprite.setScale(0.5, 0.5);
        this.addChild(sprite, 0);
        
        var moveAction = cc.MoveTo.create(2,cc.p(0,0));
        sprite.runAction(moveAction);
        
        
        
        function randValue(){
        	
        }
        
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

