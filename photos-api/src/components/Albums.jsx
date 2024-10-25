import React, { useEffect, useState } from "react";
import Album from "./Album";
import { useNavigate } from "react-router-dom";

function Albums() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const [currentAlbumId, setCurrentAlbumId] = useState(0);
  const [albumSelected, setSelectedFlag] = useState(false);
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
        setAlbumsPosters(albumLabels);
      });
  }, []);

  const handleAlbumSelect = (currentAlbumId) => {
    setCurrentAlbumId(currentAlbumId);
    setSelectedFlag(true);
  };

  const styles = { width: 150 };
  return (
    <>
      <div className="container">
        {!albumSelected &&
          albumsPosters.map((album, index) => {
            return (
              <div key={index}>
                <div className="card" style={{ width: "18rem" }}>
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
            );
          })}
        {albumSelected &&
          albums.map((photo, index) => {
            if (photo.albumId == currentAlbumId) {
              return (
                <Album
                  key={index}
                  currentId={photo.albumId}
                  id={photo.id}
                  title={photo.title}
                  url={photo.url}
                  thumbnailUrl={photo.thumbnailUrl}
                />
              );
            }
          })}
      </div>
    </>
  );
}

export default Albums;
