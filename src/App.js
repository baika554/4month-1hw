import React from "react";

const user = {
  name: "Shelly",
  imageUrl: "https://preview.redd.it/is-star-shelly-objectively-the-rarest-skin-in-the-game-im-v0-hrjcyd8ybaxa1.jpg?auto=webp&s=507010d52c39a35473e93187b7cbe72fe2a9387e",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of" + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}
