let data;
let buttons = [];
let arrVotes = [];
let getTally;
let images = [];
let answers 
function preload() {
  data = loadJSON("lp_data/salad2.json");
}
function setup() {
  //   var canvas = createCanvas(400, 400);
  //   canvas.parent("salad");
  noCanvas();
  let project = Object.values(data);
  let fixedproject=project.slice(2);
  fixedproject.forEach((b, index) => {
    let imageName = "img/lp_images/img" + ("000" + (index + 1)).slice(-3) + ".png";
    images[b] = createImg(imageName);
    images[b].id(b.tag);
    images[b].style("width","200px")
    images[b].addClass("p-4");
    images[b].parent(salad);
    images[b].mousePressed(() => {
      arrVotes.push(b.projects);
      console.log(arrVotes.flat());
    });
    // images[b].draggable();
     // Set random position
     let x = random(windowWidth);
     let y = random(windowHeight/1.2);
     images[b].position(x, y);
  });

  getTally = createButton("Get Salad");
  getTally.id("result")
  answers = createP('')
  getTally.mousePressed(countVotes);
}

function countVotes() {
  const arr = arrVotes.flat();

  const count = {};

  arr.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  voteCount = Object.values(count);
  projectName = Object.keys(count);
  // 👇️ {one: 3, two: 2, three: 1}
//   console.log(count, Math.max(...voteCount));
  maxCount = Math.max(...voteCount)
//   console.log(voteCount);
//   if(Math.max(...voteCount)>=3){
    console.log(count)
    console.log(getKeyByValue(count,maxCount));
//   }
    answers.html(getKeyByValue(count,maxCount))
}


function getKeyByValue(object, value) {
    return Object.keys(object).filter(key => object[key] === value);
  }