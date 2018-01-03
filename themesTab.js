
const HOME = 'http://localhost/window-panel-model/';

function themes(theme) {
    if (theme.match(/erro/i))
        return {background: '#f44336', color: "#FFFFFF"};
    else if (theme.match(/(warn|alert|attem|aten|aviso)/i))
        return {background: '#ff9800', color: "#FFFFFF"};
    else
        return {background: '#8bc34a', color: "#FFFFFF"};
}

function themesIcon(theme) {
    if (theme.match(/erro/i))
        return "error";
    else if (theme.match(/(warn|alert|attem|aten|aviso)/i))
        return "warning";
    else
        return "done";
}

function tabWindow(title, param, funcao) {
    return {
        header: {
            html: title
        },
        body: {
            ajax: {
                src: HOME + "request/post",
                param: param,
                done: funcao
            }
        }
    };
}

function tabNotify(title, theme, time) {
    /* check for theme and time set */
    if(typeof (time) !== "undefined" && typeof (theme) === "number") {
        var t = theme;
        theme = time;
        time = t;
    } else if(typeof (theme) === "undefined") {
        time = 2000;
        theme = "infor";
    } else if(typeof (time) === "undefined" && typeof (theme) === "number") {
        time = theme;
        theme = "infor";
    }

    var css = themes(theme);
    var themeIcon = themesIcon(theme);
    css.padding = '15px';
    css['font-size'] = "1.1em";
    css['font-family'] = "roboto, sans-serif";
    return {
        css: {
            width: 'auto',
            height: 'auto',
            right: 'near',
            top: 'near-top',
            'border-radius': '5px',
            'border-width': 0
        },
        header: {
            css: {
                "min-height": 0,
                "height": 0,
                "padding": 0
            }
        },
        body: {
            html: "<i class='material-icons'>" + themeIcon + "</i>" + title,
            css : css
        },
        control: {
            minimize: false,
            maximize: false,
            drag: false,
            close: false,
            clickOut: true,
            timeOut: {
                time: time,
                out: "right"
            }
        }
    };
}