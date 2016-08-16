$(document).ready(function() {
  console.log('works');
  $('#calcForm').on('submit', function() {
    var math = {};
    var fields = $(this).serializeArray();
    fields.forEach(function(field) {
      math[field.name] = field.value;
    });

    if(math.inputX == "" || math.inputY == ""){
      alert("Give me something to work with here!");
    }else{
      if(math.operation == "div" && math.inputY == 0){
        alert("Don't divide by Zero!!!")
      }else{
        console.log(math);
        $.ajax({
          type: 'POST', //<-- has to match type in router file
          url: '/calculate/' + math.operation, //<--has to match router file name
          data: math,
          success: updateDom
        })
      }
    }
  });
  function updateDom(response) {
    console.log('server says:', response);

  };
});
