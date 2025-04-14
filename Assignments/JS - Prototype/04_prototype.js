// Create a Playlist constructor that initializes with an empty songs array. Add a method addSong (song) to the prototype that adds a new song to the playlist.

// Challenge
// « Implement a constructor function Playlist that initializes an empty songs array.
// « Attach a method addSong (song) to its prototype that adds the song to the songs array.

// You need to implement the Playlist constructor function and its prototype method

function Playlist() {
  // Initialize songs property
  this.songs = [];
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
};

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { song } = JSON.parse(input);
  const playlist = new Playlist();
  playlist.addSong(song);
  process.stdout.write(JSON.stringify(playlist.songs));
});
