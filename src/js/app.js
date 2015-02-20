var _pl = {
  db : 'liblib',
  design : 'liblib-exhib'
};

window.URL = window.URL || window.webkitURL;

var LibLibExhibApp = angular.module('LibLibExhibApp', ['CornerCouch'])
  .config( [
      '$compileProvider',
      function( $compileProvider ){   
          var okReg = /^\s*(https?|blob):/;
          $compileProvider.aHrefSanitizationWhitelist(okReg);
          $compileProvider.imgSrcSanitizationWhitelist(okReg);
      }
  ]);

LibLibExhibApp.controller('ListingCtrl', ['$scope', '$http', 'cornercouch', function ($scope, $http, cornercouch) {
  var config = window._pl;
  $scope.db      = cornercouch().getDB(config.db);


  $scope.upload = function(elem){
    var files = [];
    for (var i = 0, f; f = elem.files[i]; i++) {
      files.push(f);
    }
    files.forEach(function(f){
      var doc = $scope.db.newDoc({
        name : f.name,
        content_type : f.type
      })
      doc.save()
      .success(function(){
        doc.attach(f, f.name); 
      });
    })
  }

  // get listing
  $scope.db.query(config.design, 'media', { reduce : false, limit : 10, include_docs : true })
  .success(function(resp){
    $scope.medias = resp.rows.map(processDoc);
  });

  function processDoc(doc){
    if(doc._attachments){
      angular.forEach(doc._attachments, function(attachInfo, attachName){
        if(/^cover\./.test(attachName)){
            doc.coverImg = '/' + config.db + '/' + doc._id + '/' + attachName;
        } else {
          doc.media     = attachInfo;
          doc.media.url = '/' + config.db + '/' + doc._id + '/' + attachName;
        }
      });
    }
    return doc; 
  }
  


  // $http.get($scope.DB + '_design/peoples-lib/_view/media?reduce=false&limit=10&include_docs=true')
}]);
