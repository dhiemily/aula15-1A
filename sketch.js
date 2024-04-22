//preparar e rodar um código
function setup() {
  createCanvas(400, 400);//criar tela
  background("rgb(197,98,241)");
}

//responsável por desenhar
function draw() {
  stroke ("yellow");
  fill ("orange");
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,25,25);
  }
}
