(function(exports){
    function Controller(notelistmodel){
        this.notelistModel = notelistmodel
        this.notelistModel.createNote('Favorite drink: seltzer')
        this.notelistview = new NoteListView(this.notelistModel)
    };


    Controller.prototype.htmlConverter = function(){
      this.inputToPage(this.notelistview.viewHtmlNew())
    };

    Controller.prototype.inputToPage = function(html) {
      window.onload = function(){
          insertIntoPage(html)
      };
    }

    exports.Controller = Controller

})(this)
