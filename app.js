window.onload = doIt;

function doIt(){
    var tb = document.getElementById("name");

    tb.addEventListener("keypress",
        function(event){
        console.log("Pressed!");
    });
}

// events get thrown all the time, you just have to be listening for them
// with jQuery, you are manually attaching code to those events
// angular takes advantage of those events to take care of things for you