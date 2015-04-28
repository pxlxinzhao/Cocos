//-- object initialization

var SampleObj = cc.Node.extend({
	ctor:function () {
		this._super();
		this.gnode = cc.Node.create();
		this.gnode.retain();
	},
	run: function(){
		console.log('running self-defined object!');
	},
	onExit:function() {
		this.gnode.release();
		this._super();
	},
});



//-- Use repeat and sequence

var moveAction = cc.RepeatForever.create(
		cc.Sequence.create(
				cc.MoveBy.create(0.2, cc.p(0,50)),
				cc.MoveBy.create(0.2, cc.p(0,-50))
		)
);

//-- touch screen edge

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

//-- random value
function randValue(){
	return 
}

//-- key pressed

KEYCODE = {
		space: 32,
		up: 38,
		down: 40,
		left: 37,
		right: 39,
		enter: 13,
	    w: 87,
	    s: 83,
	    a:65,
	    d: 68
}