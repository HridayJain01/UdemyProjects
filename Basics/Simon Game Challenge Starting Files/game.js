gamePattern=[];
bcolor=["red","blue","green","yellow"];


function getSequence()
{
  var getRandomNumber = Math.floor(Math.random()*4);
  var randomColor=bcolor[getRandomNumber];
  gamePattern.push(randomColor);
  console.log(gamePattern);
}
/*function setRandomColor(getRandomNumber,i,gamePattern,bcolor)
{
    gamePattern[i]=bcolor[getRandomNumber];
}*/


