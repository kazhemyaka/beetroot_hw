var playList = [
  {
   author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN"
  },
  {
   author: "QUEEN",
   song:"BOHEMIAN RHAPSODY"
  },
  {
   author: "LYNYRD SKYNYRD",
   song:"FREE BIRD"
  },
  {
   author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER"
  },
  {
   author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER"
  },
  {
   author: "AC/DC",
   song:"BACK IN BLACK"
  },
  {
   author: "QUEEN",
   song:"WE WILL ROCK YOU"
  },
  {
   author: "METALLICA",
   song:"ENTER SANDMAN"
  }
];

const ol = document.createElement('ol');
playList.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = `${item.author} - ${item.song}`;
  ol.appendChild(li);
});
document.body.appendChild(ol);