

// Start: code for device orientation

let deviceAbsolute = null;
// try-catch: exception handling
try
{
    // initialising object for device orientation
    deviceAbsolute = new AbsoluteOrientationSensor({ frequency: 10 });

    //if sensor is available but there is problem in using it
    deviceAbsolute.addEventListener('error', event => {
    // Handle runtime errors.
    if (event.error.name === 'NotAllowedError')
    {
      errorRef.innerText ="Permission to access sensor was denied.";
    }
    else if (event.error.name === 'NotReadableError' )
    {
      errorRef.innerText = "Cannot connect to the sensor.";
    }});
    // when sensor has a reading, call the function
    deviceAbsolute.addEventListener('reading', () => reloadOrientationValues(deviceAbsolute));

    //start the sensor
    deviceAbsolute.start();
}
catch (error)
{
// Handle construction errors.
  let errorText = "";
  if (error.name === 'SecurityError')
  {
    errorText = "Sensor construction was blocked by the Feature Policy.";
  }
  else if (error.name === 'ReferenceError')
  {
    errorText =" Sensor is not supported by the User Agent.";
  }
  else
  {
    errorText = "Sensor not supported";
  }
  errorRef.innerText = errorText;
}

// function to print value on the webpage
function reloadOrientationValues(deviceAbsolute)
{
let x = deviceAbsolute.quaternion[0];
let y = deviceAbsolute.quaternion[1];
let z = deviceAbsolute.quaternion[2];
let w = deviceAbsolute.quaternion[3];
let data = [];
data[0] = Math.atan2(2*(w*x + y*z), 1 - 2*(Math.pow(x,2)+Math.pow(y,2))); // beta
data[1] = Math.asin(2*(w*y - x*z)); // gamma
data[2] = Math.atan2(2*(w*z + x*y),1 - 2*(Math.pow(y,2)+Math.pow(z,2))); // alpha

  document.getElementById("bValue").innerText = data[0]*(180/Math.PI);
  document.getElementById("gValue").innerText = data[1]*(180/Math.PI);
  document.getElementById("aValue").innerText = data[2]*(180/Math.PI);
  document.getElementById("q0Value").innerText = ((deviceAbsolute.quaternion[0])).toFixed(2);
  document.getElementById("q1Value").innerText = ((deviceAbsolute.quaternion[1])).toFixed(2);
  document.getElementById("q2Value").innerText = ((deviceAbsolute.quaternion[2])).toFixed(2);
  document.getElementById("q3Value").innerText = ((deviceAbsolute.quaternion[3])).toFixed(2);
  document.getElementById("mActivated").innerText = deviceAbsolute.activated;
  document.getElementById("mHasReading").innerText = deviceAbsolute.hasReading;

}
// end: code for device orientation

function heightEstimate()
{
let heightOfCamera = document.getElementById("cameraHeight").value;
let distanceOfObject = heightOfCamera * Math.tan(data[0]);
let topAngle = data[2];
let baseAngle = data[0];
let heightOfObject = distanceOfObject * Math.tan(topAngle-(90*Math.PI)/180) + heightOfCamera;
document.getElementById("heightOfCamera").innerHTML = heightOfCamera;
document.getElementById("distanceOfObject").innerHTML = distanceOfObject;
document.getElementById("topAngle").innerHTML = topAngle;
document.getElementById("baseAngle").innerHTML = baseAngle;
document.getElementById("heightOfObject").innerHTML = heightOfObject;
}

function inputHeightOfCamera()
{
  prompt("Please input the height of the camera in m")
}
