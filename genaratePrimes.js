/**
 * Created by allenbklj on 7/22/15.
 */

function isPrime(num){
    for(var i = 2;i<Math.sqrt(num);i++){
        if(num % i === 0) return false;
    }
    return true;
}

self.addEventListener('message',function(event){
    if(typeof event.data !== 'number')
        {self.postMessage('Type error!')
    }else{
        var primes = [];
        var num = 2;
        while(primes.length < event.data){
            if(isPrime(num)) primes.push(num);
            num++;
        }
        self.postMessage(primes);
    }
});