import React from "react";
import { Box, Container, Card, CardMedia, Typography } from "@mui/material";

function AudioCheck() {
  return (
    <>
      <Container sx={{ maxWidth: "sm", marginTop: 4 }}>
        <Card sx={{ borderRadius: 2, boxShadow: 3, overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="300"
            image="https://img.freepik.com/free-photo/top-view-sunflowers-frame-with-copy-space_23-2150250795.jpg?t=st=1741172187~exp=1741175787~hmac=cba4f42f652d2a3d998cfb8aadbd09f7569fac1c95f688d37bb4d11bb73cdf98&w=1380"
            alt="Sunflowers"
          />
          <Box
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#f7f7f7",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Enjoy Your Music!
            </Typography>
            <audio controls style={{ width: "100%" }}>
              <source
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                type="audio/mpeg"
              />
            </audio>
          </Box>
        </Card>
      </Container>

      {playList.map((data, i) => {
        return (
          <Card className="border p-1 px-2 fw-bold m-1 mx-3" key={i}>
            <Typography> {data.song}</Typography>
          </Card>
        );
      })}
    </>
  );
}

export default AudioCheck;

const playList = [
  {
    id: 1,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/7rVW1Rbk56/VW1MEg9BWk/size_l_1734769712.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/5sA8bs7r5e/Ttkad9Z9M2/size_l_1734769789.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 3,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/0g65xU4W9D/lPZbEXA7eb/size_l_1734769675.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 4,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/3o4uPOqMw5/2IowBhlZXP/size_l_1734769632.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 5,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/6t81Wc2JmA/0Tb5rtY8lw/size_l_1734769620.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 6,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/4sYjkxYvE4/Fqn8lr9L41/size_l_1734769552.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 7,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/0d5xwGVH5Z/xS5JqZTqEm/size_l_1734769499.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 8,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/2q8JwN56eF/ZyAxoR5miu/size_l_1734769448.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 9,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/6vZZ5l0P2b/TByebQNrO4/size_l_1734769362.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 10,
    image:
      "https://a10.gaanacdn.com/gn_pl_img/playlists/7oZ17K6EHz/mhHoggn0Tq/size_l_1734769291.webp",
    song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
];
