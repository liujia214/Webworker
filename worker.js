/**
 * Created by allenbklj on 7/22/15.
 */
self.addEventListener('message',function(event){
   //listen to requests from the main js
    var str = event.data;
    self.postMessage(str.toUpperCase());
    var i = 0;
    /*setInterval(function(){
        self.postMessage(i++);
    },100);
    */
});