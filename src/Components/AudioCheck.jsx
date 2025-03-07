import React, { useEffect, useState } from "react";
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
import axios from "axios";

function AudioCheck() {
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
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
        setToken(response.data.access_token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (!token) return;

    const fetchAlbums = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/browse/new-releases",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const albumData = response.data.albums.items;
        setAlbums(albumData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [token]);

  const fetchAlbumTracks = async (albumId) => {
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/albums/${albumId}/tracks`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSelectedAlbum({ id: albumId, tracks: response.data.items });
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  const filteredAlbums = albums.filter((album) =>
    album.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: { md: 4, lg: 4, sm: 2, xs: 2 },
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold", color: "#1DB954" }}
        >
          🎵 New Releases of Spotify on MUICIE YPUP
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Albums..."
          sx={{ mb: 3, backgroundColor: "white", borderRadius: 1 }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {!selectedAlbum ? (
          <Grid container spacing={3}>
            {filteredAlbums.map((album) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={album.id}>
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
                  }}
                  onClick={() => fetchAlbumTracks(album.id)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={album.images[0]?.url}
                    alt={album.name}
                  />
                  <Box sx={{ padding: 2, textAlign: "center" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {album.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B3B3B3" }}>
                      {album.artists[0]?.name}
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
              sx={{ mb: 3, fontWeight: "bold", color: "#1DB954" }}
            >
              Songs from {selectedAlbum.tracks[0]?.album?.name || "this album"}
            </Typography>
            {selectedAlbum.tracks.map((track, index) => (
              <Card
                key={index}
                sx={{ backgroundColor: "#181818", mb: 2, padding: 2 }}
              >
                <Typography sx={{ color: "white" }} variant="h6">
                  {track.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#B3B3B3" }}>
                  {track.artists.map((artist) => artist.name).join(", ")}
                </Typography>
                {track.preview_url ? (
                  <audio controls style={{ width: "100%", marginTop: "10px" }}>
                    <source src={track.preview_url} type="audio/mpeg" />
                  </audio>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#1DB954",
                      color: "black",
                      fontWeight: "bold",
                      marginTop: 2,
                    }}
                    href={track.external_urls.spotify}
                    target="_blank"
                  >
                    🎵 Listen on Spotify
                  </Button>
                )}
              </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default AudioCheck;
