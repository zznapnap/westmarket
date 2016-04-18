function searchStudentName(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(xhttp.readyState == 4 && xhttp.status == 200){
      document.getElementById("searchResult").innerHTML = xhttp.responseText;
    }
  };
  var url = "do?userID=" + document.getElementById("userID").value;
  xhttp.open("GET", url, true);
  xhttp.send();

}
