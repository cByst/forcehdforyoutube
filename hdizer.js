var onRdy = function onYouTubePlayerReady(playerId) {
    ytplayer = document.getElementById("movie_player");
    ytplayer.addEventListener("onStateChange", "onytplayerStateChange");
};

var onStateChange = function onytplayerStateChange(newState) {
    if (newState == 1 && chromeExten != 1)
    {
        ytplayer = document.getElementById("movie_player");
        ytplayer.setPlaybackQuality(ytplayer.getAvailableQualityLevels()[0]);
        chromeExten = 1;
    }
 };

var script = document.createElement("script");
script.textContent = "var chromeExten = 0;\n" + onRdy.toString() +"\n" + onStateChange.toString();
document.head.appendChild(script);
