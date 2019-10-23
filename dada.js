"use strict";

function getParameterByName(n, a) {
    a || (a = window.location.href), n = n.replace(/[\[\]]/g, "\\$&");
    var t = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)").exec(a);
    return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
}
var APP_ID = "i19UWtaghVE36y85Oo4Uscyx-gzGzoHsz",
    APP_KEY = "J2ge2uYbUiOX1pOAYBILAGon";
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
var id = getParameterByName("id"),
    $pageTop = $(".page-top"),
    query = new AV.Query("Song");
query.get(id).then(function (n) {
    $(".loading-img").addClass("active");
    var a = n.attributes.url,
        t = '<div class="top-container">\n                                <div class="top-bg"></div>\n                                <div class="top-left">\n                                    <div class="top-img">\n                                        <img src="' + a + '" alt="">\n                                        <span class="top-icon">\n                                            <svg class="icon-ep">\n                                                <use xlink:href="#icon-ep"></use>\n                                            </svg>\n                                        ' + n.attributes.subscribe + '\n                                        </span>\n                                        <span class="top-songlist">歌单</span>\n                                    </div>\n                                </div>\n                                <div class="top-right">\n                                    <h3>' + n.attributes.text + '</h3>\n                                    <div class="top-avatar">\n                                        <img src="' + a + '" alt="">\n                                        <p>' + n.attributes.author + '</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="label-container">\n                                <div class="content">\n                                    <p class="content-fashion">\n                                        标签：<span>华语</span> <span>流行</span> <span>90后</span>\n                                    </p>\n                                    <div class="content-about">\n                                        <p class="content-explanation content-third">\n                                        </p>\n                                        <span class="content-down"></span>\n                                        <span class="content-up"></span>\n                                    </div>\n                                </div>\n                            </div>';
    $pageTop.append(t);
    for (var s = n.attributes.description.split("\n"), e = 0; e < s.length; e++) {
        var i = "<span>" + s[e] + "</span><br><br>";
        $(".content-explanation").append(i)
    }
});
var $songList = $(".songlist"),
    query1 = new AV.Query("Topsong");
query1.find().then(function (n) {
    for (var a = 0; a < 10; a++) {
        var t = n[a].attributes,
            s = '<div class="songlist-content">\n                                    <a href="/songs.html?id=' + n[a].id + '">\n                                        <div class="number">' + (a + 1) + '</div>\n                                        <div class="songlist-line">\n                                            <div class="selling-content">\n                                                <p>' + t.name + "</p>\n                                                <p>\n                                                    " + t.singer + '\n                                                </p>\n                                            </div>\n                                            <div class="selling-player">\n                                                <svg class="icon-play">\n                                                    <use  xlink:href="#icon-cplay1"></use>\n                                                </svg>\n                                            </div>\n                                        </div>\n                                    </a>\n                                </div>';
        $songList.append(s)
    }
    $songList.addClass("active"), $(".blank").addClass("active"), $(".collecting").addClass("active")
});
var whether = !0;
$(".page-top").on("click", ".content-about", function () {
    whether ? (whether = !1, $(".content-explanation").removeClass("content-third"), $(".content-about").addClass("active")) : (whether = !0, $(".content-explanation").addClass("content-third"), $(".content-about").removeClass("active"))
});