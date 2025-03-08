import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  CardMedia,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { MyAlbum } from "./Utils/Util";

function MyAlbumSongs() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlbums = MyAlbum.filter((album) =>
    album.album.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: { md: 4, lg: 4, sm: 2, xs: 1 },
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "white",
            mt: 1,
            textAlign: "center",
            fontSize: { md: "2rem", sm: "1.5rem", xs: "1.55rem" },
          }}
        >
          🎵 My Music Collection
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Albums..."
          sx={{
            mb: 3,
            backgroundColor: "white",
            borderRadius: 1,
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {!selectedAlbum ? (
          <Grid container spacing={3}>
            {filteredAlbums.map((album, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#181818",
                    color: "white",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: 3,
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                    cursor: "pointer",
                    minHeight: "100%",
                  }}
                  onClick={() => setSelectedAlbum(album)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={album.songs[0]?.image}
                    alt={album.album}
                  />
                  <Box
                    sx={{
                      px: { lg: 2, md: 2, sm: 1, xs: "3px" },
                      py: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      {album.album}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B3B3B3" }}>
                      {album.name}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            <Button
              onClick={() => setSelectedAlbum(null)}
              sx={{ mb: 2, backgroundColor: "#1DB954", color: "black" }}
            >
              🔙 Back to Albums
            </Button>
            <Typography
              variant="h5"
              sx={{ mb: 3, fontWeight: "bold", color: "white" }}
            >
              Songs from {selectedAlbum.album}
            </Typography>
            <Box className="row">
              {selectedAlbum.songs.map((song, index) => (
                <Box
                  key={index}
                  className="col-md-3 col-lg-3 col-sm-6 col-xs-6"
                >
                  <Card
                    sx={{
                      backgroundColor: "#181818",
                      mb: 2,
                      padding: 2,
                      maxHeight: "100%",
                      width: "100%",
                    }}
                  >
                    <Typography sx={{ color: "white" }} variant="h6">
                      {song.title}
                    </Typography>
                    <CardMedia
                      component="img"
                      height="150"
                      image={song.image}
                      alt={song.title}
                      sx={{ borderRadius: 2, mt: 2 }}
                    />
                    {song.audio ? (
                      <audio
                        controls
                        style={{ width: "100%", marginTop: "10px" }}
                      >
                        <source src={song.audio} type="audio/mpeg" />
                      </audio>
                    ) : (
                      <Typography sx={{ color: "#B3B3B3", mt: 1 }}>
                        No preview available
                      </Typography>
                    )}
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default MyAlbumSongs;
