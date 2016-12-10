var app = function(){

  var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';
  makeRequest(url, requestComplete);

};

window.onload = app;

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var requestComplete = function(){
  if (this.status !==200) return;
  var jsonString = this.responseText;
  var info = JSON.parse(jsonString);
  console.log(info.albums.items);
  createInfo(info);
};

  var createInfo = function(info){
    var items = info.albums.items;
    var div = document.getElementById('albums');

    var names = items.forEach(function(item){
      var p = document.createElement('p');
      p.innerText = item.name;
      div.appendChild(p);
    });
    console.log(names);




  };