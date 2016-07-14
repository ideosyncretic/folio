$(document).ready(function () {
  var q = {
    url: 'https://api.behance.net/v2/users/sprazzeus/projects?',
    key: 'client_id=6rsbOlgsV0AdMoXTOFJug1yjarwjXx0S'
  };

  $.ajax({
    url: q.url + q.key,
    dataType: 'jsonp',
    success: function (res) {
      // loop through all projects and display
      for (var i = 0; i < res.projects.length; i++) {
        $('.projects').append('<div class="col project"><img class="thumbnail" src="' + res.projects[i].covers['230'] + '">' + '<div class="label"><h6><a href="' + res.projects[i].url + '">' + res.projects[i].name + '</a></h6><p>' + res.projects[i].fields + '</p></div></div>')
      }
    }, // end success action
    error: function (request, errorType, errorMessage) {
      alert('Error: ' + errorType + ', ' + errorMessage + '!');
    }
  }); // end ajax call
}); // end document ready

    // timeout: 3000,
    // beforeSend: function () {
    //   $('#search').attr('value', 'loading...');
    // },
    // complete: function () {
    //   $('#search').attr('value', 'Go!');
 // end user projects getJSON

    // $('#form').on('submit', function (event) {
    //   event.preventDefault();
    //   var input = $('#term').val();
    // }); // end submit event
