function hideForm() {

    var hide = document.getElementById("hide");
    hide.style.display = "none";

    var show = document.getElementById("success");
    show.style.display = "block";

}


function getData() {

    const nameData = document.getElementById("nameData");
    const emailData = document.getElementById("emailData");
    const subjectData = document.getElementById("subjectData");
    const messageData = document.getElementById("messageData");

    const list = [nameData, emailData, subjectData, messageData];

    const form = document.querySelector("form").elements;

    for (i = 0; i < form.length - 1; i++) {
        var dataValue = form.item(i).value;
        list[i].innerHTML += dataValue;
    }

}