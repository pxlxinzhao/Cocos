var res = {
	// pics
    HelloWorld_png : "res/images/HelloWorld.png",
    CloseNormal_png : "res/images/CloseNormal.png",
    CloseSelected_png : "res/images/CloseSelected.png",
    Tower_png : "res/images/tower.png",
    Monster_png : "res/images/monster.png",
    Bullet_png : "res/images/bullet.png",
    Blueland_png : "res/images/blue_land.png",
    	
    //sound
    calmbgm_sound: "res/sound/calmbgm.wav"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}