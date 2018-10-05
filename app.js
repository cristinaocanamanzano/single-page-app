$(document).ready(function(){
  $('#button').click(function(){
    displayText();
  });

  function displayText(){
    $.get('https://async-workshops-api.herokuapp.com/people', function(data){
      $('#text-to-display').text(`ID: ${data[0].id}, name: ${data[0].name};
        ID: ${data[1].id}, name: ${data[1].name};
        ID: ${data[2].id}, name: ${data[2].name};
        ID: ${data[3].id}, name: ${data[3].name}`);
    });
  };
});
