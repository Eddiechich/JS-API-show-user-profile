setTimeout(() => {
    fetch("http://localhost:3001/profile")
.then(profile=>profile.json())
.then(profileJSON=>display(profileJSON));
function display(content) {
    document.getElementById("firstname").innerHTML ="first name: " + content.firstname;
    setTimeout(() => {
        document.getElementById("lastname").innerHTML ="last name: " +content.lastname;
    }, 2000);
    setTimeout(() => {
        document.getElementById("head").innerHTML ="Welcome "+ content.fullname;
    }, 2000);
    setTimeout(() => {
        document.getElementById("email").innerHTML ="Email: " + content.email;
    }, 3000);
    setTimeout(() => {
        document.getElementById("languages").innerHTML = content.languages;
    }, 4000);
}
}, 3000);
