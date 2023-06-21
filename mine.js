function row(key) {
  const scrrenSize = window.screen.width

  let card_hidden_1 =
    document.getElementsByClassName("hidden_accordion_1")[0].style.display;
  let card_hidden_2 =
    document.getElementsByClassName("hidden_accordion_2")[0].style.display;
  let card_hidden_3 =
    document.getElementsByClassName("hidden_accordion_3")[0].style.display;

  if (card_hidden_1 != "none") {
    document.getElementsByClassName("hidden_accordion_1")[0].style.display =
      "none";
    document.getElementsByClassName("accordion_1")[0].style.display = "grid";
  }
  if (card_hidden_2 != "none") {
    document.getElementsByClassName("hidden_accordion_2")[0].style.display =
      "none";
    document.getElementsByClassName("accordion_2")[0].style.display = "grid";
  }
  if (card_hidden_3 != "none") {
    document.getElementsByClassName("hidden_accordion_3")[0].style.display =
      "none";
    document.getElementsByClassName("accordion_3")[0].style.display = "grid";
  }

  document.getElementsByClassName(`hidden_accordion_${key}`)[0].style[
    "grid-column"
  ] = scrrenSize > 479 ? `${key} / ${+key + 2}` : `${key} / 1`;
  document.getElementsByClassName(`hidden_accordion_${key}`)[0].style.display =
    "grid";
  document.getElementsByClassName(`accordion_${key}`)[0].style.display = "none";
}

let current_img = {
  block_1: 1,  
  block_2: 1,  
  block_3: 1,  
};

function imageActions(index, key) {
  if (key === "next" && current_img[`block_${index}`] < 3) {
    current_img[`block_${index}`] += 1;

    document.getElementsByClassName(`block-images-${index}`)[0].style[
      "background-image"
    ] = `url('./images/block_${index}/conferanc-place-${current_img['block_' + index]}.png')`;

  } else if (key === "next") {
    current_img[`block_${index}`] = 1;

    document.getElementsByClassName(`block-images-${index}`)[0].style[
      "background-image"
    ] = `url('./images/block_${index}/conferanc-place-${current_img[`block_${index}`]}.png')`;

  }

  if (key === "back" && current_img[`block_${index}`] > 1) {
    current_img[`block_${index}`] -= 1;

    document.getElementsByClassName(`block-images-${index}`)[0].style[
      "background-image"
    ] = `url('./images/block_${index}/conferanc-place-${current_img['block_'+ index]}.png')`;
    
  } else if (key === "back") {
    current_img[`block_${index}`] = 3;

    document.getElementsByClassName(`block-images-${index}`)[0].style[
      "background-image"
    ] = `url('./images/block_${index}/conferanc-place-${current_img[`block_${index}`]}.png')`;
  }
}
