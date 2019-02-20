  window.onload = function() {
    var elem = document.querySelectorAll('#myApp')
    elem.forEach(function(item){
        item.textContent= 'Howdy!'
    })
  }


function insertIntoPage(insertion){
  var elem = document.querySelectorAll('#myApp')
  elem.forEach(function(item){
      item.innerHTML = insertion
  })
}
