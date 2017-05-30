"use strict"

angular.module("wildNoteApp")

    .factory("Users", ["$resource", function($resource) {
        return $resource("/user/:id")
    }])
