$(document).ready(function() {
// write your code here
$.getJSON( "data.json", function( data ) {
    var spots = [];
  $.each( data, function( key, val ) {
    spots += '<tr>';
    spots += '<td>'+ val.name+ '</td>';
    spots += '<td>'+ val.description +'</td>';
    spots += '<td nowrap="nowrap">'+ "<a href="+"https://www.google.com/maps?q="+val.location+'><button>Open in Google Maps</button></a></td>';
    spots += '</tr>';
  })
  $('thead').append(spots);
});
});

