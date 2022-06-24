function sendWhatsapp(){
    if(document.getElementById("form-name")=="")
        return;
    if(document.getElementById("form-contact")=="")
        return;
    if(document.getElementById("form-contact")=="")
        return;
    
    var message = "Name : ";
    console.log(message);
    message += document.getElementById("form-name").value;
    console.log(message);

    message += "\nContact : ";
    console.log(message);
    message += document.getElementById("form-contact").value;
    console.log(message);
    message += "\nClass : ";
    console.log(message);
    message += document.getElementById("form-class").value;
    console.log(message);
    
    link = 'http://wa.me/917651818827?text=' + encodeURI(message);
    
    window.open(link, '_blank');
}
var submit = document.getElementById("send-form");

submit.addEventListener("click",sendWhatsapp);
