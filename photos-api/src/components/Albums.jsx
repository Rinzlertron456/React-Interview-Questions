import React, { useEffect, useState } from "react";
import Album from "./Album";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Albums() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const [currentAlbumId, setCurrentAlbumId] = useState(0);
  const [albumPosters, setAlbumPosters] = useState([]);
  const [albumSelected, setSelectedFlag] = useState(false);
  // const albumPosters = [
  //   {
  //     id: 1,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  //   {
  //     id: 2,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  //   {
  //     id: 3,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  //   {
  //     id: 4,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  //   {
  //     id: 5,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  //   {
  //     id: 6,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  //   {
  //     id: 7,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  //   {
  //     id: 8,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  //   {
  //     id: 9,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  //   {
  //     id: 10,
  //     url: "https://logospng.org/wp-content/uploads/google-photos.png",
  //   },
  // ];
  const [albumsPosters, setAlbumsPosters] = useState([]);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        let albumLabels = [];
        let currentIndex = 0;
        data.forEach((label, i) => {
          if (label.albumId != currentIndex) {
            currentIndex = label.albumId;
            albumLabels.push({
              id: currentIndex,
              url: "https://logospng.org/wp-content/uploads/google-photos.png",
            });
          }
        });
        setAlbumPosters(albumLabels);
      });
  }, []);

  const handleAlbumSelect = (currentAlbumId) => {
    setCurrentAlbumId(currentAlbumId);
    setSelectedFlag(true);
  };

  const styles = { width: 150 };
  return (
    <>
      <NavBar />
      {!albumSelected &&
        albumPosters.map((album, index) => {
          return (
            <div className="container">
              <div key={index}>
                <div className="album-card" style={{ width: "8rem" }}>
                  <div className="card-body">
                    <img src={album.url} alt="poster" style={styles} />
                    <h5 className="card-title">Album No {album.id}</h5>
                    <div
                      className="button btn btn-primary"
                      onClick={() => handleAlbumSelect(album.id)}
                    >
                      Go to Album
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {albumSelected &&
        albums.map((photo, index) => {
          if (photo.albumId == currentAlbumId) {
            return (
              <>
                <div className="container">
                  <Album
                    key={index}
                    currentId={photo.albumId}
                    id={photo.id}
                    title={photo.title}
                    url={photo.url}
                    thumbnailUrl={photo.thumbnailUrl}
                  />
                </div>
              </>
            );
          }
        })}
    </>
  );
}

export default Albums;
