function footerBox() {
    var foot = document.querySelector("footer");
    var footerText = document.createTextNode("Copyright 2020 by Idle Hands Pharmacy Automation");
    foot.appendChild(footerText);
    //IT FREAKING WORKED!!!!!//
}

function youAreHere() {
    let title = document.getElementById("pageTitle");
    let docInfo = title.innerHTML;
    document.write(docInfo);
}
//Writes the name of the current page the user is on when invoked. This information is retrieved from hidden text coded into each page and used to announce the current page in the nav bar.



