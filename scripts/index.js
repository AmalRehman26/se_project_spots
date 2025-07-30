let initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClose = editProfileModal.querySelector(".modal__close-button");

const editProfileForm = document.querySelector(".modal__form");
const profileName = document.querySelector(".profile__name");
const inputName = document.querySelector("#username");
const profileDescription = document.querySelector(".profile__description");
const inputDescription = document.querySelector("#description");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}
editProfileButton.addEventListener("click", function () {
  openModal(editProfileModal);
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
});

editProfileClose.addEventListener("click", function () {
  closeModal(editProfileModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closeModal(editProfileModal);
}
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

const addProfileButton = document.querySelector(".profile__add-button");
const addProfileModal = document.querySelector("#new-post-modal");
const addProfileClose = addProfileModal.querySelector(".modal__close-button");
const newPostModal = document.querySelector("#new-post-modal");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const captionInput = addCardFormElement.querySelector("#caption");
const linkInput = addCardFormElement.querySelector("#image-link");

addProfileButton.addEventListener("click", function () {
  openModal(addProfileModal);
});

addProfileClose.addEventListener("click", function () {
  closeModal(addProfileModal);
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(captionInput.value);
  console.log(linkInput.value);
  closeModal(addProfileModal);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach((initialCard) => {
  console.log(initialCard.name);
});
