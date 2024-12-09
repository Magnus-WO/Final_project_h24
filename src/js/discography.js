//Fetching elements from html
const discographySection = document.querySelector(".discography");
const discographyContainer = document.querySelector(".discography");
const audioImageContainer = document.querySelector(
  ".discography__image-container"
);
const discographyInfoContainer = document.querySelector(
  ".discography__info-container"
);

//Title containers
const titleContainer = document.querySelector(
  ".discography__info--dawn-container"
);
const titleLogoContainer = document.querySelector(
  ".dawn-container__title-logo"
);

const titleInfoContainer = document.querySelector(".dawn-container__info");

//Audio container
const audioContainer = document.querySelector(
  ".discography__info--audio-container"
);
const tracksContainer = document.querySelector(
  ".discography__info--tracks-container"
);

//Audio array
const audioArray = [
  {
    title: "Dawn",
    src: "./assets/audio/Dawn.mp3",
  },
  {
    title: "Breaking Point",
    src: "./assets/audio/Breaking Point.mp3",
  },
  {
    title: "Fading",
    src: "./assets/audio/Fading.mp3",
  },
  {
    title: "Embers",
    src: "./assets/audio/Embers.mp3",
  },
  {
    title: "Relentless",
    src: "./assets/audio/Relentless.mp3",
  },
];

//#Function for loading the discography section
const loadDiscography = () => {
  //creating audio image and appending it
  const audioImage = document.createElement("img");
  audioImage.setAttribute("src", "./assets/images/Dawn_cover.png");
  audioImage.setAttribute("alt", "an image of the cover for our EP Dawn");

  audioImageContainer.append(audioImage);

  //Creating and appending an header for the info container
  const infoHeader = document.createElement("h4");
  infoHeader.textContent = "Dawn";

  const infoText = document.querySelector("p");
  infoText.textContent = "Out now!";

  const infoHeaderIcon = document.createElement("img");
  infoHeaderIcon.setAttribute("src", "./assets/icons/Dawn_icon_white.png");
  infoHeaderIcon.setAttribute(
    "alt",
    "the logo for our EP Dawn, featuring our take on the Delta symbol"
  );

  titleLogoContainer.append(infoHeader, infoHeaderIcon);
  titleInfoContainer.append(infoText);

  //Creating and appending audioplayer
};

window.addEventListener("DOMContentLoaded", () => {
  loadDiscography();
  createAudioController();
  createTracksTitles();
});

//Creating the audioplayer
const createAudioController = () => {
  const audioTitle = document.createElement("h3");
  audioTitle.classList.add("audio__title");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("audio__button-container");

  const audioController = document.createElement("audio");
  audioController.setAttribute("controls", true);
  audioController.setAttribute("controlslist", "nodownload");

  audioController.classList.add("audio-player");

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  const nextButton = document.createElement("button");
  nextButton.dataset.audioButton = "next";
  nextButton.textContent = "Load";

  const audioButtons = [prevButton, nextButton];
  let offset = 0;
  audioButtons.forEach((button) => {
    button.classList.add("audio-button");
    button.addEventListener("click", () => {
      offset = button.dataset.audioButton === "next" ? offset + 1 : offset - 1;
      prevButton.style.visibility = "hidden";

      for (let i = offset - 1; i === offset - 1; i++) {
        audio = audioArray[i];
        audioTitle.textContent = `${i + 1}. ${audio.title}`;
        audioController.setAttribute("src", audio.src);

        if (i === audioArray.length - 1) {
          nextButton.style.visibility = "hidden";
        } else {
          nextButton.style.visibility = "visible";
          nextButton.textContent = "Next";
        }

        if (i === 0) {
          prevButton.style.visibility = "hidden";
        } else {
          prevButton.style.visibility = "visible";
        }
      }
    });
    button.addEventListener("mousedown", () => {
      button.style.backgroundColor = "black";
      button.style.color = "white";
    });
    button.addEventListener("mouseup", () => {
      button.style.backgroundColor = "transparent";
    });
  });
  buttonContainer.append(prevButton, nextButton);
  audioContainer.append(audioTitle, audioController, buttonContainer);
};

//Creating the text for the tracks
const createTracksTitles = () => {
  audioArray.forEach((title) => {
    const trackTitle = document.createElement("p");
    trackTitle.classList.add("discography__track");
    trackTitle.textContent = title.title;
    tracksContainer.append(trackTitle);
  });
};
