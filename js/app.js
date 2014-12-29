(function() {

  // Model

  var Task = Backbone.Model.extend({
    defaults: {
      title: 'do something!',
      completed: false
    }
  });

  var task1 = new Task({
    completed: true
  });

  // setter
  task1.set('title', 'newTitle');
  console.log(task1.toJSON());

  // getter
  var title = task1.get('title');
  console.log(title);
  
}());
