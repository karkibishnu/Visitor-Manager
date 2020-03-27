var intial = 0;
var visitorAdd = [];
var visitorRecent = [];
var queue;
var token = 0;

$(document).ready(function () {
    $('#spanCurrentWaiting').html(intial);
    $('#spanRecentLog').html(intial);

    $('#btnAdd').click(function () {
        token ++;
        var visitorName = $('#txtVisitor').val().trim();
        if (visitorName != '') {
            visitorAdd.push(visitorName + ' - Token # ' + (token));
            $('#txtVisitor').val('');
        }
        buildAndAppend(visitorAdd, 'tdWaiting');
    });

    $('.clsAccept').click(function () {
        var action = $(this).text();
        var dataFor = $(this).attr('data-for');
        if (action === 'Accept') {
            var waiting = visitorAdd[0];
            visitorAdd.splice(0, 1);
            $('#' + dataFor).text(waiting);
            $(this).text('Done');
            buildAndAppend(visitorAdd, 'tdWaiting');
        }
        else {
            var recent = $('#' + dataFor).text();
            $('#' + dataFor).text('N/A');
            visitorRecent.push(recent);
            buildAndAppend(visitorRecent, 'tdRecent');
            $(this).text('Accept');
        }
    });
});

function buildAndAppend(visitor, element) {
    if (element === 'tdWaiting') {
        $('#spanCurrentWaiting').html(visitor.length);
    }
    else if(element == 'tdRecent') {
        $('#spanRecentLog').html(visitor.length);
    }
    $('#' + element).empty();
    var htmlElement = "";
    for (let i = 0; i < visitor.length; i++) {
        htmlElement += "<div>" + visitor[i] + "</div>";
    }
    $('#' + element).append(htmlElement);
}





