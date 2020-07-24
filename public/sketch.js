let font;
let menu;
let c, o, l, l2, a, b, o2, s, t, u, d, i, o3;


function preload() {
  c = loadImage("pngs/01.png");
  o = loadImage("pngs/02.png");
  l = loadImage("pngs/03.png");
  l2 = loadImage("pngs/04.png");
  a = loadImage("pngs/05.png");
  b = loadImage("pngs/06.png");
  o2 = loadImage("pngs/07.png");
  s = loadImage("pngs/08.png");
  t = loadImage("pngs/09.png");
  u = loadImage("pngs/10.png");
  d = loadImage("pngs/11.png");
  i = loadImage("pngs/12.png");
  o3 = loadImage("pngs/13.png");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);

  canvas.position(0, 0);
  canvas.style("z-index", "-10");
  canvas.parent("#root");
}

function draw() {
  if (windowWidth > 500) {
    smooth();
    let time = millis();
    background(255, 0);
    //  scale(0.14 + (windowWidth / 5000) + 10%( mouseY / windowHeight))
    //  rotateX(+scrollingY / 10000);
    // rotateZ(mouseY/ 1134);
    // rotateY(time/30%2000/800)
    scale(0.4 + mouseY / 4000);
    image(c, -340, -30);
    rotateY(mouseX / -12000);
    image(o3, -200, -30);
    rotateY(mouseX / -12000);
    image(l, -80, -30);
    rotateY(mouseX / -12000);
    image(l2, 30, -30);
    rotateY(mouseX / -12000);
    image(a, 140, -30);
    rotateY(mouseX / -12000);
    image(b, 260, -30);
    rotateY(mouseX / -12000);
    image(o3, 390, -30);
    // scale(0.9 + mouseY / 2000 )
    rotateX(mouseX / 10000);
    rotateX(mouseY / 1134);

    image(s, -320, 130);
    rotateY(mouseX / -12000);
    image(t, -200, 130);
    rotateY(mouseX / 120000);
    image(u, -70, 130);
    rotateY(mouseY / 22000);
    image(d, 50, 130);
    rotateY(mouseY / 12000);
    image(o3, 210, 130);
    rotateY(mouseY / 12000);
    image(i, 130, 130);
    rotateY(mouseY / 12000);

    ambientLight(0, 255, 30);

    for (let i = 0; i < 10; i++) {
      translate(-200, 32);
      rotateY(1000);
      ambientMaterial(250);
      sphere(((mouseX / 100) % 20) + 3 * i, 25, 23);
    }
  } else {
    smooth();
    let time = millis();
    background(255, 0);
    //  scale(0.14 + (windowWidth / 5000) + 10%( mouseY / windowHeight))
    //  rotateX(+mouseX / 10000);
    // rotateZ(mouseY/ 1134);
    rotateY(time/30%2000/800)
    translate(-20, -20)
    scale(0.35  );
    image(c, -340, -30);
   
    image(o3, -200, -30);
   
    image(l, -80, -30);
   
    image(l2, 30, -30);
   
    image(a, 140, -30);
   
    image(b, 260, -30);
   
    image(o3, 390, -30);
    // scale(0.9 + mouseY / 2000 )
   

    image(s, -320, 130);
  
    image(t, -200, 130);
   
    image(u, -70, 130);
  
    image(d, 50, 130);
   
    image(o3, 210, 130);
   
    image(i, 130, 130);
   

    ambientLight(0, 255, 30);

    for (let i = 0; i < 10; i++) {
      translate(-200, 32);
      rotateY(1000);
      ambientMaterial(250);
      sphere(time/30%2000/800 + 3 * i, 25, 23);
    }
  }
}
setInterval(() => {
  let h = document.getElementById("sketch");
  // let canva = document.getElementById('')
  h.appendChild(canvas);
}, 100);
