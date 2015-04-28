ACCELERATION_SEPARATION_LEVEL = 50;


var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
    //-- play music
        cc.audioEngine.playMusic(res.calmbgm_sound, true);
    //-- add background 
        var background_pic = new cc.Sprite.create(res.Blueland_png);
        background_pic.setAnchorPoint(cc.p(0.5,0.5));
        background_pic.setPosition(cc.p(size.width/2, size.height/2));
        this.addChild(background_pic, 0);
        
    //-- add tower
        var sprite = new cc.Sprite.create(res.Tower_png);
        sprite.setAnchorPoint(cc.p(0.5,0));
        sprite.setPosition(cc.p(size.width/2, size.height/2));
        sprite.setScale(0.5, 0.5);
        this.addChild(sprite, 1);
        
    //--add gravity
        gravitate(sprite, 1);
    //-- accelerate
        
    //-- keyboard listener
        cc.eventManager.addListener({
        	event: cc.EventListener.KEYBOARD,
        	
        	onKeyPressed: function(key, event){
        		if (key.toString() == KEYCODE.space){
        			//-- jump and come back
        			cc.log('space');
        			sprite.stopAllActions();
        			jumpUp(sprite);
        		}
        	},
        	
        	onKeyReleased: function(key, event) {
        		
        	}
        }, this);
        
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

