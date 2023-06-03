// Exporting a function called 'mySketch'
export const mySketch = (p) => {
  let data;
  let lpdata;
  let buttons = [];
  let arrVotes = [];
  let getTally;
  let images = [];
  let answers;
  let projecttitle;
  let projecturl;
  let projectthumb;
  let saladDiv;
  p.preload = () => {
    data = p.loadJSON("../lp_data/salad2.json");
    lpdata = p.loadJSON("../lp_data/lp2.json");
  };
  p.setup = () => {
    //   var canvas = createCanvas(400, 400);
    //   canvas.parent("salad");
    p.noCanvas();
    saladDiv = p.select("#salad");
    answers = p.select("#addans");
    answers.hide();
    // console.log(saladDiv.width)
    let project = Object.values(data);
    let fixedproject = project.slice(2);
    console.log(fixedproject);
    fixedproject.forEach((b, index) => {
      let imageName =
        "../img/lp_images/img" + ("000" + (index + 1)).slice(-3) + ".png";
      images[b] = p.createImg(imageName);
      images[b].id(b.tag);
      images[b].addClass("veg");
      images[b].style("width", "100px");
      // images[b].style("height", "100%");
      images[b].addClass("p-4");
      images[b].parent("#vegetables");
      images[b].mousePressed(() => {
        arrVotes.push(b.projects);
        console.log(arrVotes.flat());
      });
      // images[b].draggable();
      // Set random position

      // let x = p.random(saladDiv.width)-images[b].width;
      // let y = p.random(saladDiv.height)-images[b].height;
      // images[b].position(x, y);
    });

    getTally = p.select("#result");
    getTally.mousePressed(countVotes);
  };

  function countVotes() {
    let organicgroup = p.select("#organicgroup");
    organicgroup.hide();
    // answers.show()
    answers.style("display", "flex");
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
    // answers.html(winner)
    getCards(winner);
    // return winner
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).filter((key) => object[key] === value);
  }

  function getCards(v) {
    let arrowSVG = "img/next-arrow.svg";
    let cardDetails = Object.values(lpdata);
    // let win = Object.values(v)
    let a;
    let arrow;
    console.log(cardDetails, v);
    v.forEach((el) => {
      cardDetails.forEach((cd) => {
        if (el == cd.title) {
          a = p.createDiv();
          a.addClass("cards");
          // console.log(cd.title, cd.url, cd.thumb);
          arrow = p.createImg(arrowSVG);
          arrow.addClass("next-arrow");
          projecturl = p.createA(cd.url, "");
          projecturl.style(
            "background-image",
            "url(" +
              cd.thumb +
              "), linear-gradient(to left,rgba(0,0,0,0.3), rgba(0,0,0,0.8))"
          );
          projecturl.addClass("worklink");
          // projectthumb.addClass("imgthumb")
          projecttitle = p.createP(cd.title);
          projecttitle.addClass("proj");
          projecttitle.addClass("text-2xl");
          // projectthumb.parent(projecturl)
          projecttitle.parent(a);
          arrow.parent(a);
          a.parent(projecturl);
          projecturl.parent("#addans");
        }
      });
    });
  }
};
