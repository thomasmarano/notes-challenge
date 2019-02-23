(function(exports){

    function NoteListView(notelistmodel){

      this.noteListy = notelistmodel
      console.log('TEST')
    }


    NoteListView.prototype.viewHtmlNew = function() {
      if (this.noteListy !== null) {
        var htmlArray = ['<ul>']
        console.log('SATURDAY SCARIES')
        console.log(this.noteListy)
        console.log(this.noteListy.lists[0].id)

        for(i=0; i < this.noteListy.lists.length; i++){
          var emptyArray = []
          for (var x = 0; x < 20; x++) {
              emptyArray.push(this.noteListy.lists[i].noteContent.split('')[x])

            }
        htmlArray.push('<li><div>' + emptyArray.join('') + '</div></li>')
        } return ((htmlArray.join('') + '</ul>'))


      } return ('The list of notes is empty!')
    };

    exports.NoteListView = NoteListView

  })(this)




  // NoteListView.prototype.viewHtml = function() {
  //   if (this.noteList.length > 0) {
  //     var htmlArray = ['<ul>']
  //     this.noteList.forEach(function(y){
  //       var emptyArray = []
  //       for (var i = 0; i < 20; i++) {
  //           emptyArray.push(y.split('')[i])
  //         }
  //       htmlArray.push('<li><div>' + emptyArray.join('') + '</div></li>')
  //       })
  //       return ((htmlArray.join('') + '</ul>'))
  //   } return ('The list of notes is empty!')
  // }


  //
  // NoteListView.prototype.testingFunction = function() {
  //     console.log(this.noteListy)
  //     for(i=0; i<3; i++){
  //       console.log('Inside the FOR!')
  //       console.log(this.noteListy.lists[i].noteContent)
  //       console.log(this.noteListy.lists[i].id)
  //     }
  // };

  // console.log(this.noteListy.lists[0].noteContent.split(''))

  // this.testingFunction()

    // { NoteListModel
    //  {noteStorer: Test1, id: 17}
    //  {noteStorer: Test2, id: 17}
    // }

    // this.noteList = notes.map(function(x){
    //       return x
    // })
