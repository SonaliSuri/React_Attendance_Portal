import React, { useRef } from "react";
import YouTube from "react-youtube";

// ...

const MyComponent = () => {
  // Initialises a 'ref' for the player
  const playerRef = useRef(null);

  // You can now access the player in your component
  // by using "playerRef.current.internalPlayer.API_METHOD"
  // ... See below for an example:

  // Our own custom function to pause the video
  const pauseVideo = () => {
    playerRef.current.internalPlayer.pauseVideo();
  };

  return (
    <>
      {/* Rest of your component */}
      <table>
        <tr>
          <td>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DCdxsnRF1Fk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </td>
          <td>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iP6utI4Dw1U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </td>
        </tr>
        <tr>
          <td>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ObVGT5TzGOM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </td>
          <td>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3BVQ9Scdglg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </td>
        </tr>
  </table>
    </>
  );
};

export default MyComponent;