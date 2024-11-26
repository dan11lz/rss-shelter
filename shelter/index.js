console.log(
  '[1]-(26/26)\n[2]-(0/36)\n[3]-(0/36)\n[4]-(12/12)'
);

const pets = [
  {
    "name": "Jennifer",
    "img": "assets/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Sophia",
    "img": "assets/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Woody",
    "img": "assets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
    },
    {
    "name": "Scarlett",
    "img": "assets/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Katrine",
    "img": "assets/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Timmy",
    "img": "assets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
    },
    {
    "name": "Freddie",
    "img": "assets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Charly",
    "img": "assets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
    }
];

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('menu').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('toggle');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('menu').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('toggle');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('menu').addEventListener('click', function () {
    document.querySelector('.blur').classList.toggle('shadow');
  });
});

document.getElementById('navigation').addEventListener('click', (event) => {
  event.outside = true;
});
document.getElementById('menu').addEventListener('click', (event) => {
  event.outside = true;
});
document.body.addEventListener('click', (event) => {
  if (event.outside) return;
  document.querySelector('.nav').classList.remove('toggle');
});
document.body.addEventListener('click', (event) => {
  if (event.outside) return;
  document.querySelector('.menu').classList.remove('toggle');
});
document.body.addEventListener('click', (event) => {
  if (event.outside) return;
  document.querySelector('.blur').classList.remove('shadow');
});

const list = document.getElementById('navigation');
const menu = document.getElementById('menu');
const blur = document.getElementById('blur');
document.querySelectorAll('.nav-link').forEach((a) => {
  a.addEventListener('click', function () {
    if (list.classList.contains('toggle')) {
      list.classList.remove('toggle');
      menu.classList.remove('toggle');
      blur.classList.remove('shadow');
      document.body.classList.remove('lock');
    }
  });
});

menu.addEventListener('click', function (e) {
  document.body.classList.toggle('lock');
});

document.body.addEventListener('click', (event) => {
  if (event.outside) return;
  document.querySelector('body').classList.remove('lock');
});



const cards = document.querySelector('.bar-active');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalContentContainer = document.querySelector('.modal-content-container');
const modalButton = document.querySelector('.modal-button');

function clickModal() {
    cards.childNodes.forEach(card => {
        card.addEventListener('click', () => {
            if (card.id === 'Jennifer') {
                modalContentContainer.appendChild(createModalWindow(pets[0]));
            } else if (card.id === 'Sophia') {
                modalContentContainer.appendChild(createModalWindow(pets[1]));
            } else if (card.id === 'Woody') {
                modalContentContainer.appendChild(createModalWindow(pets[2]));
            } else if (card.id === 'Scarlett') {
                modalContentContainer.appendChild(createModalWindow(pets[3]));
            } else if (card.id === 'Katrine') {
                modalContentContainer.appendChild(createModalWindow(pets[4]));
            } else if (card.id === 'Timmy') {
                modalContentContainer.appendChild(createModalWindow(pets[5]));
            } else if (card.id === 'Freddie') {
                modalContentContainer.appendChild(createModalWindow(pets[6]));
            } else if (card.id === 'Charly') {
                modalContentContainer.appendChild(createModalWindow(pets[7]));
            }
            modalWrapper.classList.add('open');
            document.body.style.overflow = 'hidden';
        })
    })
}
clickModal();

function createModalWindow(pet) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <img class="modal-image" src="${pet.img}"></img>
    <div class="modal-content">
    <h3 class="modal-name">${pet.name}</h3>
    <p class="modal-breed">${pet.type} - ${pet.breed}</p>
    <p class="modal-description">${pet.description}</p>
    <ul class="modal-lists">
        <li class="modal-list"><b>Age:</b> ${pet.age}</li>
        <li class="modal-list"><b>Inoculations:</b> ${pet.inoculations}</li>
        <li class="modal-list"><b>Diseases:</b> ${pet.diseases}</li>
        <li class="modal-list"><b>Parasites:</b> ${pet.parasites}</li>
    </ul>
    </div>`;
    return modal;
}

modalWrapper.addEventListener('click', (event) => {
    if (event.target === modalWrapper) {
      modalWrapper.classList.remove('open');
      modalContentContainer.innerHTML = '';
      document.body.style.overflow = '';
    }
});
modalButton.addEventListener('click', () => {
    modalWrapper.classList.remove('open');
    modalContentContainer.innerHTML = '';
    document.body.style.overflow = '';
});