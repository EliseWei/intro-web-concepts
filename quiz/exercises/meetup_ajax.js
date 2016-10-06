function getMeetups(e) {
    var t = "50722e1d56c194e61763a2ee1e4535";
    $.ajax({
        url: "https://api.meetup.com/2/events?key=" + t + "&sign=true&group_id=" + e,
        crossDomain: !0,
        dataType: "jsonp",
        type: "GET",
        success: function(t) {
            parseMeetupData(t.results)
        },error: function(e) {
            console.log("Error", e)
        }
    })
}
function parseMeetupData(e) {
    var t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    window.console && console.log("Meetup length %o", e.length);
    if (e.length == 0)
        $(".classes").append("<p>No meetups scheduled. Check back again soon!</p>");
    else {
        var n = '<div class = "month">', r = e.length > 5 ? 5 : e.length, i = -1;
        for (var s = 0; s < r; s++) {
            var o = new Date(e[s].time), u = o.getMonth();
            u != i && (s > 0 && (n += '</div><div class = "month">'), n += '<div class ="month-name">' + t[u] + "</div>", i = u), n += '<div class="listing" id = "listing-' + s + '">' + '<div class = "class-info">' + '<div class= "class-rsvp"><a target="_blank" href="' + e[s].event_url + '">RSVP</a></div>' + '<div class = "class-name"><a class="meetup_name" target="_blank" href="' + e[s].event_url + '">' + e[s].name + "</a></div>" + o.toLocaleDateString() + "</div>" + "</div>"
        }
        n += "</div>", $(".classes").append(n)
    }
}
$(document).ready(function() {
    getMeetups($("#meetup_id").html())
});
