// If the sign in link appears on a page/pr list page  automate the click.
// (Not currently locale agnostic)
var links = document.getElementsByTagName('A');
for (var i = 0; i < links.length; i++) {
    if (links[i].textContent.indexOf('Single sign-on') > -1) {
        links[i].click();
        break;
    }
}

// If the user is presented with the click 'continue' to log in page automate the click.
// (Not currently locale agnostic)
var url = window.location.toString()

var buttons = document.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains('btn-primary') && buttons[i].classList.contains('btn') && buttons[i].classList.contains('btn-block')) {
        if (buttons[i].textContent.contains('Continue')) {
            buttons[i].click();
            break;
        }
    }
}
