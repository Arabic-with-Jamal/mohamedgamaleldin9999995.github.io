const store = {};

const playSound = (directory) => {
  if (typeof store !== "string") {
    throw new Error("directory must be a string");
  }
  if (!store.hasOwnProperty(directory)) {
    store[directory] = new Audio(directory);
  }
  const audio = store[directory];
  audio.play();
};

export default playSound;

/*
  how to use:
  <script src="playSound.js"></script>


  <div onclick={playSound("./sounds/file.mp3")}>
  
  </div>

*/