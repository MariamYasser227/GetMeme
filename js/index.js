let div = document.querySelector("#Main");
let photoDiv = document.querySelector("#photoDiv");
let input = document.querySelector("#Input");
let btn = document.querySelector("#btn");

fetch("https://api.imgflip.com/get_memes")
  .then((response) => response.json())
  .then((result) => {
    btn.addEventListener("click", () => {
      let memes = result.data.memes;
      let index = +input.value;
      if (index >= memes.length || input.value === "" || isNaN(index)) {
        photoDiv.innerHTML = `<h1 class="text-danger"> Please Enter Valid Number </h1>`;
      } else {
        let selectedMeme = memes[index];
        let imageOfMeme = selectedMeme.url;
        let userName = selectedMeme.name;
        photoDiv.innerHTML = `<h1 class="text-danger"> ${userName} </h1>
        <img class="img-fluid w-50" src="${imageOfMeme}" />`;
      }
      input.value = "";
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
