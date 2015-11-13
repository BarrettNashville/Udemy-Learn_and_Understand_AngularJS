/* He shows an example Visual Studio ASP.NET app that has a database of rules and it exposes that info through a JSON API. He then retrieves those rules using the XMLHttpRequest() method built into JavaScript. Here is the important part of that code */

var rulesrequest = new XMLHttpRequest();
rulesrequest.onreadystatechange = function() {
    
    /* need to wrap in $scope.$apply since we are outside the angular context in regular JavaScript code */
    $scope.$apply(function() {
        if(rulesrequest.readyState == 4 && rulesrequest.status = 200) {
            $scope.rules = JSON.parse(rulesrequest.responseText);
        }    
    });
}

rulesrequest.open("GET", "http://localhost:54765/api", true);
rulesrequest.send();