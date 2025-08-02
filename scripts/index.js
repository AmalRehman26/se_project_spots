let initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },

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

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLink = cardElement.querySelector(".card__image");
  cardLink.src = data.link;
  cardLink.alt = data.name;
  cardTitle.textContent = data.name;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardLink.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaption.textContent = data.name;
    openModal(previewModal);
  });
  return cardElement;
}

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

previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

addProfileClose.addEventListener("click", function () {
  closeModal(addProfileModal);
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  // console.log(captionInput.value);
  // console.log(linkInput.value);
  const inputValues = {
    name: captionInput.value,
    link: linkInput.value,
  };
  const cardEl = getCardElement(inputValues);
  cardList.prepend(cardEl);
  closeModal(addProfileModal);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

function renderCard(data) {
  const el = getCardElement(data);
  cardList.prepend(el);
}

initialCards.forEach((card) => {
  renderCard(card);
});

initialCards.forEach((initialCard) => {
  const el = getCardElement(initialCard);
  cardList.append(el);
});
