this.$ = this.jQuery = jQuery.noConflict(true);
function go_to_comic_strip_from_gocomics_page() {
    url = document.location.href;
    if (url.toLowerCase().indexOf("gocomics") >= 0) {
        src = "";
        $('img.strip').each(function() {
            src = ($(this).attr('src'));

        });
        document.location = src;
    }
}

function go_to_random_go_comics_from_other_page(){
    url = document.location.href;
    if (url.toLowerCase().indexOf("gocomics") < 0) {
        function randNum(limit) {
            var r = Math.floor(Math.random() * limit) + 1;
            return r;
        }
        var pickOne = [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995];
        year = pickOne[Math.floor(Math.random() * pickOne.length)];
        var days_array = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var m = randNum(12);
        var m_limit = days_array[m - 1];
        var d = randNum(m_limit);
        newURL = "http://www.gocomics.com/calvinandhobbes/" + year + "/" + m + "/" + d;
        document.location = newURL;
    }
}

go_to_comic_strip_from_gocomics_page();

function one_function_to_rule_them_all(){
    // alert("hi");
    go_to_comic_strip_from_gocomics_page();
    go_to_random_go_comics_from_other_page();
}


function context_menus(){
        function randNum(limit) {
            var r = Math.floor(Math.random() * limit) + 1;
            return r;
        }
    var pickOne = [1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995];
    year = pickOne[Math.floor(Math.random() * pickOne.length)];
    var days_array = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var m = randNum(12);
    var m_limit = days_array[m - 1];
    var d = randNum(m_limit);
    newURL = "http://www.gocomics.com/calvinandhobbes/" + year + "/" + m + "/" + d;
    chrome.tabs.create({url:newURL})
}

function check_if_shortcut_pressed(e) {

    // Shift + C
    if (e.shiftKey && e.keyCode == 72 && e.ctrlKey ) {
        // call your function to do the thing
        one_function_to_rule_them_all();
    }
}
// register the handler 
document.addEventListener('keyup', check_if_shortcut_pressed, false);

chrome.contextMenus.create({
 title: "Calvin hobbes",
contexts: ["page", "selection", "image", "link"],
 onclick: context_menus, // A callback function
});