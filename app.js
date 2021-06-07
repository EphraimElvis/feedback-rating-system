// hightligt Stars
function Star(id, number, callback) {
  const starID = document.querySelector(id);
  let selected = -1;

  // "fas fa-star"
  // "far fa-star-o"

  const div = document.createDocumentFragment();

  for (let i = 1; i <= number; i += 1) {
    const starIcon = document.createElement("i");
    starIcon.className = "far fa-star-o";
    starIcon.id = `index${i}`;
    div.appendChild(starIcon);
  }
  starID.appendChild(div);

  // select all children
  const parentStar = document.getElementById("stars");

  // set stars to full star
  const setFullStar = function setFullStar(val) {
    parentStar.children[val].className = "fas fa-star";
  };

  // set stars to remove full star
  // eslint-disable-next-line func-names
  const removeStar = function removeStar(val) {
    parentStar.children[val].className = "far fa-star-o";
  };

  const totalNumberOfStars = parentStar.children.length;

  // click event to set or remove full star
  parentStar.addEventListener("mousedown", function onMouseDown(e) {
    const getNumberOfYellowStars = e.target.dataset.indexNumber;

    for (let i = 0; i < parentStar.children.length; i += 1) {
      // console.log('selected ', getNumberOfYellowStars);

      // get number of selected stars
      selected = getNumberOfYellowStars;
      callback(selected);
      if (i < getNumberOfYellowStars) {
        setFullStar(i);
      } else if (getNumberOfYellowStars <= i) {
        removeStar(i);
      }
    }
  });

  // moouseover event to set or remove stars
  parentStar.addEventListener("mouseover", function onMouseOver(e) {
    const currentStar = e.target.dataset.indexNumber;
    // console.log('mouseover star ', getNumberOfYellowStars);
    // debugger;
    for (let i = 0; i < totalNumberOfStars; i += 1) {
      if (currentStar > i || i < selected) {
        setFullStar(i);
      } else {
        removeStar(i);
      }
    }
  });
}

function getStar(value) {
  document.querySelector("#display-star").innerText = value;
}

// const newStarObj = new Star();
Star("#stars", 6, getStar);
//
