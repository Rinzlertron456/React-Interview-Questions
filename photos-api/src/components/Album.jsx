import React, { useEffect, useState } from "react";

function Album({ currentId, id, title, url, thumbnailUrl }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        IMAGE ID : {id} belongs to {currentId} Album
        <img className="card-img-top" src={thumbnailUrl} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">{title}</p>
        </div>
        <a href={url}>Click here to view full image</a>
      </div>
      {/* {album.map((photo, index) => {
        return (
          <div key={index}>
            <div classNameName="card" style="width: 18rem;">
              <img
                classNameName="card-img-top"
                src={`${photo.thumbnailUrl}`}
                alt="Card image cap"
              />
              <div classNameName="card-body">
                <h5 classNameName="card-title">{photo.title}</h5>
                <p classNameName="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={`${photo.url}`} classNameName="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })} */}
    </>
  );
}

export default Album;
