
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        // add background 
        var background_pic = new cc.Sprite.create(res.Blueland_png);
        background_pic.setAnchorPoint(cc.p(0.5,0.5));
        background_pic.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(background_pic, 0);
        
        // add tower
        var sprite = new cc.Sprite.create(res.Tower_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        sprite.setPosition(cc.p(size.width/2, size.height/2));
        sprite.setScale(0.5, 0.5);
        this.addChild(sprite, 1);
        
        var moveAction = cc.RepeatForever.create(
	        				cc.Sequence.create(
        						cc.MoveBy.create(0.2, cc.p(0,50)),
		        				cc.MoveBy.create(0.2, cc.p(0,-50))
	        				)
        				);
        sprite.runAction(moveAction);
        
        return true;
    }
});

function touchScreenEdge(sprite, callback){
	while(true){
		var winSize = cc.winSize;
		var position = sprite.getPosition();
		var size = sprite.getContentSize();
		
		if (position.x - size.width/2 < 0 || position.x + size.width/2 > winSize.width){
			callback();
			break;
		}else if(position.y - size.height/2 < 0 || position.y + size.height/2 > winSize.height) {
			callback();
		}
	}
}

function randValue(){

}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

