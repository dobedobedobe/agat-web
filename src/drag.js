let arrVotes = [];
let jsonData;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  let organicgroup = document.querySelector("#organicgroup");
  organicgroup.style.display = "none";
  let ingredient = document.getElementById(data).id;
  logSaladData().then((data) => {
    data.forEach((el) => {
      if (el.tag == ingredient) {
        arrVotes.push(el.projects);
      }
    });
  });
  let divAcount = document.querySelectorAll("#div1 > img").length;

  if (divAcount > 2) {
    countVotes();
  }
}

function countVotes() {
  const arr = arrVotes.flat();
  const count = {};
  arr.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  voteCount = Object.values(count);
  projectName = Object.keys(count);
  maxCount = Math.max(...voteCount);

  //counts the votes
  console.log(count);

  //announces the winner
  let winner = getKeyByValue(count, maxCount);
  console.log(winner);
  // answers.html(winner)
  getCards(winner);
  // return winner
}

function getKeyByValue(object, value) {
  return Object.keys(object).filter((key) => object[key] === value);
}

async function logSaladData() {
  const response = await fetch("lp_data/salad2.json");
  jsonData = await response.json();
  return jsonData;
}

async function logJSONData() {
  const response = await fetch("lp_data/lp2.json");
  jsonData = await response.json();
  return jsonData;
}

function getCards(v) {
  logJSONData().then((data) => {
    // console.log(data);
    v.forEach((el) => {
      // console.log(el);
      data.forEach((cd) => {
        console.log(cd);
        if (el == cd.title) {
          //  addItem(btn.innerText);
          renderItem(cd.title, cd.url, cd.thumb);
          // console.log(divWork);
        }
      });
    });
  });
}

function addItem(item) {
  // have we seen it? Yes exit
  if (items.includes(item)) return;

  // add the item
  items.push(item);

  // show it
  renderItem(item);
}

function renderItem(title, url, thumb) {
  let arrowSVG = "img/next-arrow.svg";
  let card;
  let arrow;
  let a;
  let c;
  //  console.log(cd.title, cd.thumb);
  card = document.getElementById("cards");
  // console.log(cd.thumb);
  arrow = document.createElement("img");
  arrow.src = arrowSVG;
  a = document.createElement("div");
  c = document.createAttribute("class");
  c.value = "eachCard";
  a.setAttributeNode(c);
  let projecturl = document.createElement("a");
  let projectTitle = document.createElement("p");
  projectTitle.innerHTML = title;
  projecturl.href = url;
  d = document.createAttribute("class");
  d.value = "worklink";
  projecturl.setAttributeNode(d);

  a.style.backgroundImage =
    "url(" +
    thumb +
    "), linear-gradient(to left,rgba(0,0,0,0.3), rgba(0,0,0,0.8))";
  projecturl.appendChild(projectTitle);
  projecturl.appendChild(arrow);
  a.appendChild(projecturl);
  card.appendChild(a);
  let divWork = document.querySelectorAll("#cards > .eachCard");
  console.log(divWork);
}
