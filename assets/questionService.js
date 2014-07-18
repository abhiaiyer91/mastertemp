'use strict';


window.app.factory('Test', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'questions');
 
    var questions = $firebase(ref);

    var Test = {
    	all: questions,
    	create: function (question) {
    		return questions.$add(question);
    	},
    	find: function (questionId) {
    		return questions.$child(questionId);
    	},
    	delete: function (questionId) {
    		return questions.$remove(questionId);
    	},
        edit: function (question) {
            return questions.$update(question);
        }
    };
    return Test;
});