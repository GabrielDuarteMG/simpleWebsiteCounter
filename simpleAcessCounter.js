setTimeout(console.log.bind(console, "%cinfo%c simpleAcessCounter is loaded! https://github.com/GabrielDuarteMG/", "background: #009c0d;color:#FFF;padding:5px;border-radius: 3px;line-height: 5px;user-select: none;", ""));
(() => {
    let script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
    let checkReady = (callback) => {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(() => checkReady(callback), 20);
        }
    };
    checkReady(($) => {
        $(() => {
            $.loadScript = (url, callback) => {
                jQuery.ajax({
                    url: url,
                    dataType: 'script',
                    success: callback,
                    async: true
                });
            }
            if (typeof someObject == 'undefined') $.loadScript('https://cdn.jsdelivr.net/gh/emn178/js-sha256/build/sha256.min.js', () => {
                if (typeof someObject == 'undefined') $.loadScript('https://cdn.jsdelivr.net/gh/GabrielDuarteMG/DontpadJs@0.0.2/DontpadJS.min.js', () => {
                    setTimeout(console.log.bind(console, "%cinfo%c DontpadJS is loaded! https://github.com/GabrielDuarteMG/DontpadJs", "background: #009c0d;color:#FFF;padding:5px;border-radius: 3px;line-height: 5px;user-select: none;", ""));
                    let chaveUnica = sha256(window.location.href);
                    let url = chaveUnica;
                    let json = {chaveUnica : null,urlChave : null,Count : 0};
                    json.chaveUnica = chaveUnica;
                    json.urlChave = 'http://dontpad.com/' + chaveUnica;
                    getText(url).then(count => {

                        if (count == '') {
                            postText(url, 1)
                            json.Count = 1;
                        }
                        else {
                            count = parseFloat(count, 10);
                            json.Count = count + 1;
                            postText(url, count + 1)
                        }
                        var debugMode = $("#simpleCounter").attr("debug");
                        if(debugMode == '1')
                            console.log(json);
                            
                     });                     
                });
            });
        });
    });
})();