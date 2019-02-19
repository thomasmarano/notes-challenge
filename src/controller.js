function changeToHello(){
  var elem = document.querySelectorAll('#myApp h1')
  elem.forEach(function(item){
      item.textContent = 'Hello!'
  })
}

function changeToHowdy(){
  var elem = document.querySelectorAll('#myApp h1')
  elem.forEach(function(item){
      item.textContent= 'Howdy!'
  })
}
