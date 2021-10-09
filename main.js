function preload()
{

}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.position(352,380)
    video=createCapture(VIDEO)
    video.hide();
    tintcolor="";
}
function draw()
{
    image(video,0,0,300,300)
    tint(tintcolor)
}
function filtercolor()
{
   tintcolor=document.getElementById("colanana").value
}
function take_snapshot() 
{
   save("geegee.png")
}