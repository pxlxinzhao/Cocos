ACCELERATION_SEPARATION_LEVEL = 10;


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
        sprite.setAnchorPoint(cc.p(0,0.5));
        sprite.setPosition(cc.p(size.width/2, size.height/2));
        sprite.setScale(0.5, 0.5);
        this.addChild(sprite, 1);
        
    //--add gravity
    	//initail speed
        var speed = 1;
        
        function getAction(){
        	var move_action = new cc.MoveBy(0.3, cc.p(0, -5 * speed++));
        	return move_action;
        }
    	//-- 18 getActions to emulate gravity
        var gravity_action =  new cc.Sequence(
	        		getAction(), getAction(),getAction(), getAction(),getAction(), getAction(),
	        		getAction(),getAction(), getAction(),getAction(), getAction(),getAction(), 
	        		getAction(),getAction(), getAction(),getAction(), getAction(),getAction()
        		);
        sprite.runAction(gravity_action);
        
    //-- keyboard listener
        cc.eventManager.addListener({
        	event: cc.EventListener.KEYBOARD,
        	
        	onKeyPressed: function(key, event){
        		if (key.toString() == KEYCODE.space){
        			//-- jump and come back
        			cc.log('space');
        			sprite.stopAllActions();
//        			var jump_action = new cc.JumpBy(2, 0, 30, 30, 1);
        			sprite.runAction(jump_action);
        			sprite.runAction(gravity_action);
        		}
        	},
        	
        	onKeyReleased: function(key, event) {
        		
        	}
        }, this);
        
        cc.log(accelerationSeperation(100));
        
        return true;
    }
});
// new cc.MoveBy(2, cc.p(0 , 100))
function accelerateBy(time, x, y, sprite){
	var small_time = time/ACCELERATION_SEPARATION_LEVEL;
	var small_distance_array_x = accelerationSeperation(x);
	var small_distance_array_y = accelerationSeperation(y);
	
	function getAction(){
		var move_action = new cc.MoveBy(small_time, cc.p(small_distance_array_x.shift(), small_distance_array_y.shift()));
		return move_action;
	}
}

function accelerationSeperation(number){
		var newArray = [];
		var array = [];
		var total = 0;
		var pi = Math.PI;
		for (var i=1; i<= ACCELERATION_SEPARATION_LEVEL; i++){
			var cur =  Math.sin(pi/2/i) ;
			array.push(cur); 
			total += cur;
		}
		var newValue = number * total;
		for (var i=1; i<= ACCELERATION_SEPARATION_LEVEL; i++){
			newArray.push((array.pop()/total)*number);
		}
		return newArray;
}


var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

