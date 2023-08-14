var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function sendEmail(){
    Email.send({
        SecureToken : "6cc2fcd9-ce76-4668-b9b8-9dd008245c1e",
        To : "ritikaraniray2@gmail.com",
        From : "ritikaraniray2@gmail.com",
        Subject : "from "+document.getElementById("email").value,
        Body : document.getElementById("message").value,
    }).then(
      message => alert(message)
    );
}




