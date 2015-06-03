function getUrlVars() {
    var vars = [], hash, hashes = null;
    
    if (window.location.href.indexOf("?") && window.location.href.indexOf("&")) {
        hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    } else if (window.location.href.indexOf("?")) {
        hashes = window.location.href.slice(window.location.href.indexOf('?') + 1);
    }
    if (hashes != null) {
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars[hash[0]] = hash[1];
        }
    }
    //console.log(vars);
    return vars;
}

function fixURL() {
    if(window.location.href.charAt(window.location.href.length-1) == '#') { window.location.replace(window.location.href.replace('#','')); } 
}