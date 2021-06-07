/* eslint-disable no-alert */
/* eslint-disable no-console */
import "./styles.css";
import "./all.css";

const selectedFullStar = "fas fa-star";
const deSelectFullStar = "far fa-star-o";

class Star {
  constructor(id, number, callback) {
    this.id = id;
    this.number = number;

    const getStorageStar = Number(localStorage.getItem("currentStar"));
    this.selected = !getStorageStar ? -1 : getStorageStar;
    this.createStars(id, number);
    callback(getStorageStar);
    const parentStar = document.querySelector(id);
    parentStar.addEventListener("mousedown", (e) =>
      this.onMouseDown(e, callback)
    );
    parentStar.addEventListener("mouseleave", (e) => this.onMouseLeave(e));
    parentStar.addEventListener("mouseover", (e) => this.onMouseOver(e));
  }

  createStars() {
    const starID = document.querySelector(this.id);
    const div = document.createDocumentFragment();

    for (let i = 1; i <= this.number; i += 1) {
      const starIcon = document.createElement("i");
      if (i <= this.selected) {
        starIcon.className = selectedFullStar;
        starIcon.dataset.indexNumber = i;
      } else {
        starIcon.className = deSelectFullStar;
        starIcon.dataset.indexNumber = i;
      }

      div.appendChild(starIcon);
    }
    starID.appendChild(div);
  }

  loadStorage() {
    if (!localStorage.getItem(this.getStorageStar)) {
      // eslint-disable-next-line no-lone-blocks
      localStorage.setItem("currentStar", this.getStorageStar);
    }

    console.log("get localstorage ", localStorage.getItem(this.getStorageStar));
  }

  // click event to set or remove full star
  onMouseDown(e, callback) {
    if (e.target.nodeName === "I") {
      const getYellowStars = e.target.dataset.indexNumber;
      // eslint-disable-next-line no-unused-vars
      this.selected = getYellowStars;
      localStorage.setItem("currentStar", this.selected);

      for (let i = 1; i <= this.number; i += 1) {
        const currElem = document.querySelector(`i[data-index-number="${i}"]`);
        // get number of selected stars

        if (i <= getYellowStars) {
          currElem.classList.value = selectedFullStar;
        } else if (getYellowStars <= i) {
          currElem.classList.value = deSelectFullStar;
        }
      }
    }
    callback(this.selected);
  }

  // mouseover event to set or remove stars
  onMouseOver(e) {
    const currentStar = e.target.dataset.indexNumber;
    // loop through number of stars
    for (let i = 1; i <= this.number; i += 1) {
      if (i <= currentStar) {
        document.querySelector(`i[data-index-number="${i}"]`).classList.value =
          "fas fa-star";
      } else {
        document.querySelector(`i[data-index-number="${i}"]`).classList.value =
          "far fa-star-o";
      }
    }
  }

  // mouse leave event
  onMouseLeave(e) {
    // let currentStar = Number(event.target.id.toString().slice(5));
    const currentStar = e.target.dataset.indexNumber;

    for (let i = 1; i <= this.number; i += 1) {
      if (i <= currentStar || i <= this.selected) {
        document.querySelector(
          `i[data-index-number="${i}"]`
        ).classList.value = selectedFullStar;
      } else {
        document.querySelector(
          `i[data-index-number="${i}"]`
        ).classList.value = deSelectFullStar;
      }
    }
  }
}

// hightligt Stars
/* function Star(
    id, 
    number, 
    callback, 
    ){

    const starID = document.querySelector(id);
    let selected = -1;

    const selectedFullStar = "fas fa-star";
    const deSelectFullStar = "far fa-star-o";

    const div = document.createDocumentFragment();
    
    for(let i = 1; i <= number; i++){
        const starIcon = document.createElement('i');
        starIcon.className = deSelectFullStar;
        starIcon.dataset.indexNumber = i;
        //starIcon.id = `index${i}`;
        div.appendChild(starIcon);
    }

    starID.appendChild(div);
    
    //select parent element
    const parentStar = document.getElementById('stars');
    
    //set stars to full star
    const setFullStar = function(val) {
        //parentStar.children[val].className = selectedFullStar; 
        parentStar.children[val].classList.value = selectedFullStar;
    }
    
    //set stars to remove full star
    const removeStar = function(val) {
        //parentStar.children[val].className = deSelectFullStar;  
        parentStar.children[val].classList.value = deSelectFullStar;
    } 
    
    //Get total length of stars
    let totalNumberOfStars = parentStar.children.length;

    //click event to set or remove full star
    parentStar.addEventListener('mousedown', function (event) {
        //let getNumberOfYellowStars = Number(event.target.id.toString().slice(5));
        //console.log('current star ', event);
        let getYellowStars = event.target.dataset.indexNumber;

        for (let i = 0; i < parentStar.children.length; i++) {
            //get number of selected stars
            selected = getYellowStars;
            
            if (i < getYellowStars) {
                setFullStar(i);
            } else if (getYellowStars <= i) {
                removeStar(i);             
            }
            
        } 
       callback.call(this,getYellowStars);
        
    });

    //moouseover event to set or remove stars
    parentStar.addEventListener('mouseover', function(event) {
        
        //get current star 
        //let currentStar = Number(event.target.id.toString().slice(5));
        let currentStar = event.target.dataset.indexNumber;

        //Get total length of stars
        //loop through number of stars
        for (let i = 0; i < totalNumberOfStars; i++) {
            
            if (currentStar > i ) {
                //console.log(this);  
                setFullStar.call(this, i);  
            } 
            else {           
                removeStar.call(this,i);
            }     
        }
    });

    parentStar.addEventListener('mouseleave', function(event) {
        
        //let currentStar = Number(event.target.id.toString().slice(5));
        let currentStar = event.target.dataset.indexNumber;
        
        for(let i = 0; i < totalNumberOfStars; i++) {
            if (currentStar > i || i < selected) {
                setFullStar(i);        
            } 
            else {           
                removeStar(i);
            }
        }
    });
}
*/

function getStar(value) {
  document.querySelector("#display-star").innerText = value;
}

// const starObj = new Star("#stars", 5, getStar);

// eslint-disable-next-line no-new
new Star("#stars", 5, getStar);
