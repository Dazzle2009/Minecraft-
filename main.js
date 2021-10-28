var canvas= new fabric.Canvas('mycanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y, left:player_x
        });
     canvas.add(player_object);
    });
}

function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y, left:player_x
        });
     canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && e.keyCode=='80'){
        console.log("shift and p key is pressed");
        block_image_width=block_image_width +10;
        block_image_height=block_image_height +10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && e.keyCode=='77'){
        console.log("shift and m key is pressed");
        block_image_width=block_image_width -10;
        block_image_height=block_image_height -10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.keyCode=='37'){
        left();
        console.log("left");
    }
    if(e.keyCode=='38'){
        up();
        console.log("up");
    }
    if(e.keyCode=='39'){
        right();
        console.log("right");
    }
    if(e.keyCode=='40'){
        down();
        console.log("down");
    }
    if(e.keyCode=='84'){
        block_update('trunk.jpg');
        console.log("trunk image");
    }
    if(e.keyCode=='68'){
        block_update('dark_green.png');
        console.log("Dark green image");
    }
    if(e.keyCode=='67'){
        block_update('cloud.jpg');
        console.log("cloud image");
    }
    if(e.keyCode=='82'){
        block_update('roof.jpg');
        console.log("roof image");
    }
    if(e.keyCode=='85'){
        block_update('unique.png');
        console.log("unique image");
    }
    if(e.keyCode=='87'){
        block_update('wall.jpg');
        console.log("wall image");
    }
    if(e.keyCode=='71'){
        block_update('ground.png');
        console.log("ground image");
    }
    if(e.keyCode=='76'){
        block_update('light_green.png');
        console.log("light green image");
    }
    if(e.keyCode=='89'){
        block_update('yellow_wall.png');
        console.log("yellow wall image");
    }
}
function up(){
  if(player_y>=0){
player_y=player_y-block_image_height;
console.log("block image height is"+block_image_height);
 console.log("player_x="+player_x+", player_y="+player_y);
 canvas.remove(player_object);
 player_update();
}
}
function down(){
    if(player_y<=400){
  player_y=player_y+block_image_height;
  console.log("block image height is"+block_image_height);
   console.log("player_x="+player_x+", player_y="+player_y);
   canvas.remove(player_object);
   player_update();
  }
  }
  function left(){
    if(player_x>=0){
  player_x=player_x-block_image_width;
  console.log("block image width is"+block_image_width);
   console.log("player_x="+player_x+", player_y="+player_y);
   canvas.remove(player_object);
   player_update();
  }
  }

  function right(){
    if(player_x<=850){
  player_x=player_x+block_image_width;
  console.log("block image width is"+block_image_width);
   console.log("player_x="+player_x+", player_y="+player_y);
   canvas.remove(player_object);
   player_update();
  }
  }