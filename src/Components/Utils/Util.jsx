// const clientId = "522157dae09042dd9a3b57aa40938a8d";
// const clientSecret = "a730f2aaf94a48ab84d65d0a3ee6b783";

import axios from "axios";

export const GenerateToken = async () => {
  const clientId = "522157dae09042dd9a3b57aa40938a8d";
  const clientSecret = "a730f2aaf94a48ab84d65d0a3ee6b783";
  const authString = btoa(`${clientId}:${clientSecret}`);

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authString}`,
        },
      }
    );
    return response.data.access_token;
    // console.log(response);
  } catch (error) {
    console.error("Error fetching token:", error);
  }
};

export const GetArtistAlbums = async (token) => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/new-releases",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.albums.items;
    // console.log(response);
  } catch (error) {
    console.error("Error fetching albums:", error);
  }
};

export const GetArtistTopTracks = async (albumId, token) => {
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/albums/${albumId}/tracks`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching tracks:", error);
  }
};

export const MyAlbum = [ 
  {
    name: "Michael Jackson",
    album: "Thriller",
    songs: [
      {
        title: "Billie Jean",
        audio: "https://example.com/billie-jean.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5e/Michael_Jackson_-_Billie_Jean.png",
      },
      {
        title: "Thriller",
        audio: "https://example.com/thriller.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_Thriller.png",
      },
      {
        title: "Beat It",
        audio: "https://example.com/beat-it.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/e/e4/Michael_Jackson_Beat_It.jpg",
      },
      {
        title: "Smooth Criminal",
        audio: "https://example.com/smooth-criminal.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/0/02/Michael_Jackson_Smooth_Criminal.png",
      },
      {
        title: "Black or White",
        audio: "https://example.com/black-or-white.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/42/Michael_Jackson_-_Black_or_White.png",
      },
      {
        title: "Man in the Mirror",
        audio: "https://example.com/man-in-the-mirror.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/5a/Michael_Jackson_-_Man_in_the_Mirror.png",
      },
      {
        title: "Don't Stop 'Til You Get Enough",
        audio: "https://example.com/dont-stop.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/83/Michael_Jackson_-_Don%27t_Stop_%27Til_You_Get_Enough.png",
      },
      {
        title: "The Way You Make Me Feel",
        audio: "https://example.com/the-way-you-make-me-feel.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/32/Michael_Jackson_The_Way_You_Make_Me_Feel.png",
      },
      {
        title: "Rock With You",
        audio: "https://example.com/rock-with-you.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/1/1c/Michael_Jackson_Off_the_Wall.png",
      },
      {
        title: "Heal the World",
        audio: "https://example.com/heal-the-world.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/7/78/Michael_Jackson_-_Heal_the_World.png",
      },
    ],
  },
  {
    name: "Ed Sheeran",
    album: "÷ (Divide)",
    songs: [
      {
        title: "Shape of You",
        audio: "https://example.com/shape-of-you.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
      },
      {
        title: "Perfect",
        audio: "https://example.com/perfect.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/d/d6/Ed_Sheeran_Perfect_Single_cover.jpg",
      },
      {
        title: "Galway Girl",
        audio: "https://example.com/galway-girl.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/7/74/Galway_Girl_%28Ed_Sheeran_song%29.jpg",
      },
      {
        title: "Castle on the Hill",
        audio: "https://example.com/castle-on-the-hill.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/2/23/Ed_Sheeran_Castle_on_the_Hill.png",
      },
      {
        title: "Happier",
        audio: "https://example.com/happier.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/7/7a/Ed_Sheeran_Happier.png",
      },
      {
        title: "New Man",
        audio: "https://example.com/new-man.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
      },
      {
        title: "Supermarket Flowers",
        audio: "https://example.com/supermarket-flowers.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
      },
      {
        title: "Dive",
        audio: "https://example.com/dive.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
      },
      {
        title: "Barcelona",
        audio: "https://example.com/barcelona.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
      },
      {
        title: "What Do I Know?",
        audio: "https://example.com/what-do-i-know.mp3",
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png",
      },
    ],
  },
];
