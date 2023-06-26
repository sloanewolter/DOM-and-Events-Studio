// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    let takeOffButton = document.getElementById("takeoff");
    let currentFlightStatus = document.getElementById("flightStatus");
    let currentHeight = document.getElementById("spaceShuttleHeight");
    let shuttleBackground = document.getElementById("shuttleBackground");
    takeOffButton.addEventListener("click", function(event) {
       let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
       if (answer === true) {
         currentFlightStatus.innerHTML = "Shuttle in Flight";
        shuttleBackground.style.backgroundColor = "blue";
        currentHeight.innerHTML = 10000;

       };
    });
    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        currentFlightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        currentHeight.innerHTML = 0;
    });
    let abortMissionButton = document.getElementById("missionAbort"); 
    abortMissionButton.addEventListener("click", function(event) {
        let answer = window.confirm("Confirm that you want to abort the mission.");
        if (answer === true) {
            currentFlightStatus.innerHTML = "Mission Aborted";
           shuttleBackground.style.backgroundColor = "green";
           currentHeight.innerHTML = 0;
   
          };

    });
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let image = document.getElementById("rocket")
    image.style.position = "relative";
    image.style.left = "0px";
    image.style.top = "0px";
    image.style.right= "0px";
    image.style.down= "0px";

    upButton.addEventListener("click", function(event) {
        let newHeight = (Number(currentHeight.innerHTML) + 10000);
       currentHeight.innerHTML = newHeight;
       image.style.top = (parseInt(image.style.top) - 10) + "px";
    })

    downButton.addEventListener("click", function(event) {
        let newHeight = (Number(currentHeight.innerHTML) - 10000)
        currentHeight.innerHTML = newHeight;
        image.style.top= (parseInt(image.style.top) + 10) + "px";

    })

    leftButton.addEventListener("click", function(event) {
        image.style.left = (parseInt(image.style.left) + 10) + "px";
        
    })

    rightButton.addEventListener("click", function(event) {
    
    image.style.left = (parseInt(image.style.left) -10) + "px";
        
    })


}) 
