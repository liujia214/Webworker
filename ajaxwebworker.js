/**
 * Created by allenbklj on 7/25/15.
 */
var array = ['nodejs','angularjs','mongodb'];
var index = Math.floor(Math.random() * array.length);
var id;

self.onmessage = function(e){

        ajax(e.data);
        id = showTime(e.data);
       //clearInterval(id);
    console.log(id);
    };

function showTime(data){
    setTimeout(function(){
        ajax(data);
        showTime(data);
    },5000)
}

function ajax(search){
    var xml = new XMLHttpRequest();
    //var result;
    xml.addEventListener('readystatechange',function(){
        if(xml.readyState === 4 && xml.status === 200){
            self.postMessage(JSON.parse(xml.responseText));
        }
    });
    xml.open('get','https://api.github.com/search/repositories?q=' + search);
    xml.send();
}

