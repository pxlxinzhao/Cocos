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

function addGravity(sprite){
	accelerateBySin(1, 0, -1000, sprite);
}

function jumpUp(sprite, timeRatio){
	decelerateBySin(1, 0, 100, sprite);
	gravitate(sprite);
}

function gravitate(sprite, timeRatio, reverse){
	var direction;
	if (reverse === true){
		direction = 1;
	}else {
		direction = -1;
	}
	if (!timeRatio){
		timeRatio = 1;
	}
	timeRatio = timeRatio / 20;
	var speed = 0;
	var ratio = 1;
	var time = 0.1;
	var acceleration_action =  createGetActionSequence50(getAction);
	sprite.runAction(acceleration_action);
	function getAction(){
		speed += ratio;
		var move_action = new cc.MoveBy(timeRatio, cc.p(0, direction * speed));
		return move_action;
	}
}

function accelerateBySin(time, x, y, sprite){
	var small_time = time/ACCELERATION_SEPARATION_LEVEL;
	var small_distance_array_x = accelerationSeperation(x);
	var small_distance_array_y = accelerationSeperation(y);

	var acceleration_action =  createGetActionSequence50(getAction);
	sprite.runAction(acceleration_action);
	function getAction(){
		var move_action = new cc.MoveBy(small_time, cc.p(small_distance_array_x.shift(), small_distance_array_y.shift()));
		return move_action;
	}
}

function decelerateBySin(time, x, y, sprite){
	var small_time = time/ACCELERATION_SEPARATION_LEVEL;
	var small_distance_array_x = accelerationSeperation(x);
	var small_distance_array_y = accelerationSeperation(y);

	var acceleration_action =  createGetActionSequence50(getAction);
	sprite.runAction(acceleration_action);
	function getAction(){
		var move_action = new cc.MoveBy(small_time, cc.p(small_distance_array_x.pop(), small_distance_array_y.pop()));
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

function createGetActionSequence50(getAction){
	//-- getAction times == ACCELERATION_SEPARATION_LEVEL
	return new cc.Sequence(
			getAction(),getAction(),getAction(), getAction(),getAction(),
			getAction(),getAction(), getAction(),getAction(),getAction(),
			getAction(),getAction(),getAction(), getAction(),getAction(),
			getAction(),getAction(), getAction(),getAction(),getAction(),
			getAction(),getAction(),getAction(), getAction(),getAction(),
			getAction(),getAction(), getAction(),getAction(),getAction(),
			getAction(),getAction(),getAction(), getAction(),getAction(),
			getAction(),getAction(), getAction(),getAction(),getAction(),
			getAction(),getAction(),getAction(), getAction(),getAction(),
			getAction(),getAction(), getAction(),getAction(),getAction()
	);
}

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
function randValue(number){
	return Math.random() * number;
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
	    a: 65,
	    d: 68
}