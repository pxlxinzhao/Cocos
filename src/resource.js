var res = {
	// pics
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    Tower_png : "res/tower.png",
    Monster_png : "res/monster.png",
    Bullet_png : "res/bullet.png",
    Blueland_png : "res/blue_land.png",
    	
    //sound
    calmbgm_sound: "res/sound/calmbgm.wav"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}