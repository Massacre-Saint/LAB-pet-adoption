const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "adopted.jpg"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "adopted.jpg"
    }
  ];
  /* This is  for adding id value to array*/
const petsId = () =>
  pets.forEach((pet,index) => {
  pet.id = index + 1;                         
});

/****************************************** */

            /* Utility Function*/
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const petBtnModal = () => {
  const domString = `
  <!-- Button trigger modal -->
  <button type="button" class="add-pet-modal" data-bs-toggle="modal" data-bs-target="#petModal">
  Heartless Bastard
  </button>
  <!-- Modal -->
  <div class="modal fade" id="petModal" tabindex="-1" aria-labelledby="petModal" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">About your furry friend..</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-body">

        <form>
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Pet Name" id="name" aria-label="Pet Name" required>
          <label for="name">Pet's Name</label>
        </div>
    
        <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Pet's Favorite Color" id="color" aria-label="Favorite Color" required>
        <label for="color">Favorite Color</label>
      </div>

      <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Pet's Skill" id="specialSkill" aria-label="Pet's Skill" required>
      <label for="specialSkill">Special Skill</label>
    </div>

        <div class="form-floating mb-3">
          <select class="form-select form-control-lg" id="type" aria-label="Pet type" required>
            <option value="">Select a species</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="dino">Dino</option>
          </select>
          <label for="type">Type</label>
        </div>

        <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Title" id="imageUrl" aria-label="title" required>
      <label for="imageUrl">Select an Image</label>
    </div>
    
        <button 
          type="submit" class="btn btn-success">Submit
        </button>
      </form>
        </div>
      </div>
    </div>
  </div>
  `;
  renderToDom('#add-pet', domString);
};

/******************* Buttons******************/
const filterButtons = () => {
  const domString = `
  <div class="filter-buttons">
    <button id="cat">Cats</button>
    <button id="dog">Dogs</button>
    <button id="dino">Dinos</button>
    <button id="clear">Clear Filter</button>
  </div> `;
  renderToDom('#filter-buttons', domString);
};

/******************* Cards******************/
const cardsOnDom = (pets) => {
  let domString = '';
  for (const pet of pets) {
        domString += `
        <div class="card" style="width: 18rem;">
        <h5>${pet.name}</h5>
        <div class="card-body">
          <img src="${pet.imageUrl}" class="card-img-top" alt="...">
            <p class="card-text">${pet.color}</p>
            <p class="card-text">${pet.specialSkill}</p>
          </div>
          <p class="type">${pet.type}</p>
          <button class="btn btn-danger" id="delete--${pet.id}">X</button>
      </div>
      `;
  }
  renderToDom('#petApp', domString);
}
/******************* Events Listeners******************/
const eventListeners = () => {
  // Bootstrap for grabbing modal so can manually open and close
  const formModal = new bootstrap.Modal(document.querySelector('#petModal'));

/******************* Filter Button Row******************/
  document.querySelector('#filter-buttons').addEventListener('click', (e) => {
    // console.log("Ck", e.target.id);
    if (e.target.id === 'clear') {
      cardsOnDom(pets);
    } else if (e.target.id) {
      const species = pets.filter(taco => taco.type === e.target.id);
      cardsOnDom(species);
    }
  });
  // Buttons on Cards
  document.querySelector('#petApp').addEventListener('click', (e) => {
    if (e.target.id) {
      const [method, id] = e.target.id.split('--'); /*destructuring */
      const index = pets.findIndex(assignedPet => assignedPet.id === parseInt(id));
      if (e.target.id.includes("delete")) {
        pets.splice(index,1);
        cardsOnDom(pets);
      }
    }
  });
// Forms
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();  
    const newPetObj = {
      name: document.querySelector("#name").value,
      color:document.querySelector('#color').value,
      specialSkill: document.querySelector('#specialSkills'),
      type: document.querySelector('#type').value,
      imageUrl: document.querySelector('#imageUrl').value
    }
    pets.push(newPetObj);
    cardsOnDom(pets);
    petsId(pets);
    formModal.hide();
    form.reset();
  });
};

/***Funtions to Start Application **********/
const startApp = () => {
petBtnModal();
filterButtons();
cardsOnDom(pets);
petsId(pets);
eventListeners(); /* last*/
};

startApp();
