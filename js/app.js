(function() {
  'use strict';

  // Model

  var Task = Backbone.Model.extend({
    defaults: {
      title: 'do something!',
      completed: false
    }
  });

  var task = new Task();

  // View

  var TaskView = Backbone.View.extend({
    tagName: 'li',
    className: 'liClass',
    id: 'liId'
  });

  var taskView = new TaskView({
    model: task
  });

  console.log(taskView.el);

}());
