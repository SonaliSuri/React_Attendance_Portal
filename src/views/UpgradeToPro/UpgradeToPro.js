import React, { useState } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
function App (props) {

const [dataUri, setDataUri] = useState('');
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
     var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      

    var raw = JSON.stringify({"image":dataUri.split(',')[1]});
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyurl+"https://sunhacks-292004.wl.r.appspot.com/detect_mask", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    console.log(dataUri);
    console.log('takePhoto');
  }
 
  function handleTakePhotoAnimationDone (dataUri) {

   var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"image":dataUri.split(',')[1]});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl+"https://sunhacks-292004.wl.r.appspot.com/detect_mask", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    setDataUri(dataUri);
    console.log(dataUri);

  }

 
  function handleCameraError (error) {
    console.log('handleCameraError', error);
  }
 
  function handleCameraStart (stream) {
    console.log(stream);
    handleTakePhotoAnimationDone(dataUri);

  }
 
  function handleCameraStop () {
  /*  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"BOLTHOUSE":"1"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://hackathon-cloud-291419.wl.r.appspot.com/details", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result));*/
    console.log('handleCameraStop');
  }
 
  return (
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
      onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
      onCameraError = { (error) => { handleCameraError(error); } }
      autoCaptureTimeInterval
      idealFacingMode = {FACING_MODES.ENVIRONMENT}
      idealResolution = {{width: 640, height: 480}}
      imageType = {IMAGE_TYPES.JPG}
      imageCompression = {0.97}
      isMaxResolution = {true}
      isImageMirror = {false}
      isSilentMode = {false}
      isDisplayStartCameraError = {true}
      isFullscreen = {false}
      sizeFactor = {1}
      onCameraStart = { (stream) => { handleCameraStart(stream); } }
      onCameraStop = { () => { handleCameraStop(); } }
    />
  );
}
 
export default App;