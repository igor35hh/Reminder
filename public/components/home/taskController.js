angular.module('catalogApp')
    .controller('taskController', function(tasks){
    	var vm = this;
        vm.tasks = tasks;

    	vm.getStatus = function(status){
    		return status ? "Completed" : "Uncompleted";
    	}

        vm.getEmergency = function(emergency){
            var result;
            if(emergency == "hi"){
                result = "Hight";
            } else if(emergency == "middle") {
                result = "Intermediate";
            } else {
                result = "Low";
            }
            return result;
        }

        vm.isDanger = function(emergency){
            return (emergency == 'hi');
        }

        vm.isSuccess = function(emergency){
            return (emergency == 'middle');
        }

        vm.isDefault = function(emergency){
            return (emergency == 'low');
        }

    });