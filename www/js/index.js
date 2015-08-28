/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var pictureSource;   // picture source
var destinationType; // sets the format of returned value

document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        // Empty
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;

    }

    //Single Vibration
    function runVibration()
    {
        navigator.vibrate(1000);
    }

    // alert dialog dismissed
    function alertDismissed() {
            // do something
    }

    // Show location on a notification alert
    //
    function showLocation() {

        navigator.geolocation.getCurrentPosition(
            function(position){
                navigator.notification.alert(

                    'Latitude: ' + position.coords.latitude + "\n" + 'Longitude: ' + position.coords.longitude,  // message
                    alertDismissed,         // callback
                    'Current Location',            // title
                    'Done'                  // buttonName
                    );
                }
            );
    }

    function runVibrationPattern()
    {
        navigator.vibrate([1000, 500, 1000, 500, 2000]);
    }

    // Function to open camera
    //
    function runCamera() {

        // navigator.notification.alert(

        //             'This function works',  // message
        //             alertDismissed,         // callback
        //             'Test function',            // title
        //             'Done'                  // buttonName
        //             );

        // Launch device camera application,
        // allowing user to capture up to 2 images
        navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
        }

    function onFail(message) {
      alert('Failed because: ' + message);
    }



