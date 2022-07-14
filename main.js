var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img)
    {
        blockobject=Img;

        blockobject.scaleToWidth(700);
        blockobject.scaleToHeight(510);
        blockobject.set({
            top:0,
            left:0
        });
canvas.add(blockobject);
    });
	
}

function playsound(){
x.play();	
}
