function check(){
    var emailvalue = document.getElementById("email")
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        document.getElementById("email").style.borderColor = "red";
    }
    else {
        document.getElementById("email").style.borderColor = "green";
    }
    if (document.getElementById("username").value.length < 8){
        document.getElementById("username").style.borderColor = "red";
    }
    else {
        document.getElementById("username").style.borderColor = "green";
    }
    if (document.getElementById("message").value.length < 10){
        document.getElementById("message").style.borderColor = "red";
    }
    else if (document.getElementById("message").value.length > 30){
        document.getElementById("message").style.borderColor = "red";
    }
    else {
        document.getElementById("message").style.borderColor = "green";
    }
    if (document.getElementById("pid").value == "CPU"){
        document.getElementById("pid").style.borderColor = "green";
    }
    else if (document.getElementById("pid").value == "Motherboard"){
        document.getElementById("pid").style.borderColor = "green";
    }
    else if (document.getElementById("pid").value == "RAM Memory"){
        document.getElementById("pid").style.borderColor = "green";
    }
    else if (document.getElementById("pid").value == "Graphics Card"){
        document.getElementById("pid").style.borderColor = "green";
    }
    else if (document.getElementById("pid").value == "Gaming Mouse"){
        document.getElementById("pid").style.borderColor = "green";
    }
    else if (document.getElementById("pid").value == "VR Headset"){
        document.getElementById("pid").style.borderColor = "green";
    }
    else {
        document.getElementById("pid").style.borderColor = "red";
    }
    
}
function scroll() {
                
                var grow = document.getElementById("grow");
                if (t > 2400) {
                    grow.style.transform = "scale(2, 2)";
                }
                
                var msg = document.getElementById("msg");
                if (t > 3000) {
                    msg.style.marginLeft = "0px";
                }
            }
