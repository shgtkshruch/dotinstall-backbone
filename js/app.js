(function() {
  'use strict';

  // Model

  var Task = Backbone.Model.extend({
    defaults: {
      title: 'do something!',
      completed: false
    },
    validate: function (attr) {
      if (_.isEmpty(attr.title)) {
        return 'title must not be empty!';
      }
    },
    toggle: function () {
      this.set('completed', !this.get('completed'));
    }
  });

  var task1 = new Task({
    completed: true
  });

  // setter
  // task1.set('title', 'newTitle');
  // console.log(task1.toJSON());

  // getter
  // var title = task1.get('title');
  // console.log(title);

  // validattion
  console.log(task1.toJSON().title);
  task1.set({title: ''}, {validate: true});
  console.log(task1.toJSON().title);
  
}());
