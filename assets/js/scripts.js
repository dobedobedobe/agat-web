var c = document.getElementById("salad");
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

//   myp5 = document.getElementById("defaultCanvas0")
//   c.appendChild(myp5)

let inA=[];
let data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        fetch("./lp_data/lp.json")
      .then((response) => response.json())
      .then((json) =>
      json.forEach((element) => {
        inA.push(element.ingredient)
      })));
    }, 300);
  });

  console.log(inA)




