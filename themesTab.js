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

function themeWindow(title, param, funcao) {
    return {
        header: {
            html: title
        },
        body: {
            ajax: {
                src: HOME + "request/post",
                param: param,
                done: funcao
            },
            css: {
                padding: "0 15px"
            }
        }
    };
}

function themeNotify(title, theme, time, position) {
    /* check for theme and time set */
    if (typeof (time) !== "undefined" && typeof (theme) === "number") {
        var t = theme;
        theme = time;
        time = t;
    } else if (typeof (theme) === "undefined") {
        time = 2000;
        theme = "infor";
    } else if (typeof (time) === "undefined" && typeof (theme) === "number") {
        time = theme;
        theme = "infor";
    }

    var initial = {height: 50, width: 1000};
    var cssPosition = {};
    position = position || "right-top";
    var action = "right";
    $.each(position.match(/^\w+\s\w+$/i) ? position.split(' ') : position.split('-'), function (i, e) {
        if (i === 0) {
            action = e;
            if (action === "bottom" || action === "top") initial = {height: 100, width: 200};
        }
        cssPosition[e] = "near";

        if (action === "left" || action === "right")
            initial[e] = (e === "bottom" || e === "top" ? "near" : -1000);
        else
            initial[e] = (e === "left" || e === "right" ? "near" : -100);
    });

    var css = themes(theme);
    var themeIcon = themesIcon(theme);
    css.padding = '15px';
    css['font-size'] = "1.1em";
    css['font-family'] = "roboto, sans-serif";
    var retorno = {
        initial: initial,
        css: {
            'width': 'auto',
            'height': 'auto',
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
            css: css
        },
        control: {
            minimize: false,
            maximize: false,
            drag: false,
            close: false,
            clickOut: true,
            timeOut: {
                time: time,
                out: action
            }
        }
    };

    if (typeof (cssPosition.right) === "undefined") retorno.css.left = cssPosition.left;
    else retorno.css.right = cssPosition.right;
    if (typeof (cssPosition.bottom) === "undefined") retorno.css.top = cssPosition.top;
    else retorno.css.bottom = cssPosition.bottom;

    return retorno;
}