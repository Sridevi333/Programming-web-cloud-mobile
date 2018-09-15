var app=angular.module("MyApp",[]);
app.controller('TodoCtrl',function TodoCtrl($scope)
{
    $scope.todos = [];

    //to add items to list
    $scope.addTodo = function() {
        $scope.todos.push({
            text:$scope.todoText,
            done:false
        });
        $scope.todoText = '';
    };
    //to change the status to pending
    $scope.changeToDone = function (event) {
        angular.element(event.target).parent().append("<span class='label success'>Done!</span>");
        angular.element(event.target).parent().attr("class", 'completed');
        angular.element(event.target).remove();
        archive();
    };

    //to delete the  items
    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
});
