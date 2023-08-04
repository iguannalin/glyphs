window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const content = document.getElementById("content");
  
  function getLines(t) {
    for (let i = 0; i < 15; i++) {
      const p = document.createElement("p");
      const length = 10;
      const index = getRandomInt(length, t.length - length);
      p.innerHTML = t.substring(index-length, index);
      p.style.paddingTop = `${getRandomInt(0,27)}px`;
      p.style.paddingLeft = `${getRandomInt(0,20)}px`;
      p.style.paddingRight = `${getRandomInt(0,20)}px`;
      content.appendChild(p);
      console.log(p.innerText);
    }
  }

  //  紅樓夢 text from https://archive.org/details/20210126_20210126_1456
  fetch("hlm.txt").then((file) => file.text()).then((t) => {
    content.innerHTML = "";
    getLines(t);
  })
});