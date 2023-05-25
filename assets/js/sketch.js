let data;
let buttons = [];
let arrVotes = [];
let getTally;
function preload() {
  data = loadJSON("lp_data/salad2.json");
}
function setup() {
  //   var canvas = createCanvas(400, 400);
  //   canvas.parent("salad");
  noCanvas();
  let project = Object.values(data);
  //   console.log(project[0])
  project.forEach((b) => {
    buttons[b] = createButton(b.tag);
    buttons[b].id(b.tag);
    buttons[b].addClass("p-4");
    buttons[b].addClass("rounded-full");
    buttons[b].addClass("bg-green-300");
    buttons[b].parent(salad);
    buttons[b].mousePressed(() => {
      // console.log(b.projects)
      arrVotes.push(b.projects);
        console.log(arrVotes.flat());
    });
  });

  getTally = createButton("whats the result");
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

}


function getKeyByValue(object, value) {
    return Object.keys(object).filter(key => object[key] === value);
  }