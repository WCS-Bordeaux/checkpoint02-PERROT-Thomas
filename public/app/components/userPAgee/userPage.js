'use strict'

angular.module("userApp")

    .component("userPage", {
        templateUrl: '/app/components/userPage/userPage.html',


        controller: function(Users, $stateParams) {
            const vm = this;
            const id = $stateParams.id;
            Users.get().$promise.then(function(res) {
                vm.user = res.users.filter((e) => e._id === id)[0]
            });
        }
    })
