angular.module('catalogApp', ['ui.router']).
config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'view/home/home.html'
		})
		.state('home.last', {
			url: '/last',
			templateUrl: 'view/home/home-last.html',
			controllerAs: "ls",
			controller: 'taskController',
			resolve: {
				tasks: ['taskService', function(taskService){
					return taskService.getTasks("last");
				}]
			}
		})
		.state('home.urgent', {
			url: '/urgent',
			templateUrl: 'view/home/home-urgent.html',
			controllerAs: "ug",
			controller: 'taskController',
			resolve: {
				tasks: ['taskService', function(taskService){
					return taskService.getTasks("urgent");
				}]
			}
		})
		.state('list', {
			url: '/list',
			params: {msg: null},
			views: {
				'':{
					templateUrl: 'view/list/list.html',
					controllerAs: "lst",
					controller: 'listController'
				},
				'columnOne@list':{
					templateUrl: 'view/list/full-list.html',
					controllerAs: "fl",
					controller: 'fullListController'
				},
				'columnTwo@list':{
					templateUrl: 'view/list/statistics.html',
					controllerAs: "stat",
					controller: 'statisticController'
				}
			},
			resolve: {
				tasks: ['taskListService', function(taskListService){
					return taskListService.getTaskList();
				}]
			}
		})
		.state('add', {
			url: '/add',
			templateUrl: 'view/add/add.html',
			controllerAs: "add",
			controller: 'addController'
		})
		.state('edit', {
			url: '/edit/:id',
			templateUrl: 'view/edit/edit.html',
			controllerAs: "edit",
			controller: 'editController'
		});
		
});