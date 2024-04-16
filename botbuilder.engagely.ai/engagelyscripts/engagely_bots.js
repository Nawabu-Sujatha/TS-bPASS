function httpGet(e) {
    fetch(e).then(async e => e.text()).then(async e => {
        let t = null;
        document.getElementById("iframe").contentDocument ? t = document.getElementById("iframe").contentDocument : document.getElementById("iframe").contentWindow.document && (t = document.getElementById("iframe").contentWindow.document), t && (t.open(), t.write(e), t.close())
    }).catch(() => {
        removeIframe()
    })
}

function createIframe() {
    let e = document.createElement("div");
    e.setAttribute("id", "engagely-frame");
    const t = {
        position: "fixed",
        bottom: "0",
        right: "0",
        "z-index": "1000",
        margin: "0 !important",
        padding: "0 !important",
        height: "-webkit-fill-available"
    };
    Object.keys(t).forEach(function(n) {
        e.style[n] = t[n]
    }), document.body.appendChild(e);
    let n = document.createElement("iframe");
    n.setAttribute("id", "iframe"), n.setAttribute("frameborder", 0), n.setAttribute("allowtransparency", "allowtransparency"), n.setAttribute("allowfullscreen", "allowfullscreen"), n.setAttribute("mozallowfullscreen", "mozallowfullscreen"), n.setAttribute("msallowfullscreen", "msallowfullscreen"), n.setAttribute("oallowfullscreen", "oallowfullscreen"), n.setAttribute("webkitallowfullscreen", "webkitallowfullscreen");
    const l = {
        height: "100%",
        width: "100%"
    };
    Object.keys(l).forEach(function(e) {
        n.style[e] = l[e]
    }), e.appendChild(n), httpGet("https://botbuilder.engagely.ai/engagelyscripts/index.html")
}

function removeIframe() {
    document.getElementById("engagely-frame").remove()
}
setTimeout(function() {
    createIframe()
}, 300);