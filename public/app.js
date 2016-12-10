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
  // console.log(info.albums.items);
  createInfo(info);
};

var createInfo = function(info){
  var allInfo = info.albums;
  var items = allInfo.items;
  var div = document.getElementById('albums');
  for (i = 0; i < items.length; i++){
    var pic = allInfo.items[i].images[0].url;
    var img = document.createElement('img');
    img.setAttribute('src', pic);
    img.setAttribute('width', 200);
    var p = document.createElement('p');
    var album = allInfo.items[i].name;
    var artistName = allInfo.items[i].artists[0].name;
    p.innerText = album + " by " + artistName;
    div.append(img);
    div.appendChild(p);
  }
};






