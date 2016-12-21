function user(){
   this.name="";
   this.life=100;
   this.givelife = function givelife(targetplayer){
   targetplayer.life +=1;
   console.log(this.name + "gave 1 life to" + targetplayer.name);
   }
}
var bucky = new user();
var wandy = new user();
bucky.name = "bucky";
wandy.name = "wandy";
 bucky.givelife(wandy);
 console.log("bucky:" + bucky.life);
 console.log("wandy:" + wandy.life);

  user.prototype.uppercut = function uppercut (targetplayer){
  targetplayer.life -=3;
  console.log(this.name + "just uppercut" + targetplayer.name);
  };
  wandy.uppercut(bucky);
  console.log("bucky:" + bucky.life);
  console.log("wandy:" + wandy.life);