const sumAll = function(x,y) {
    if(x<0 || y<0){
        return "ERROR"
    }
    if(typeof(x)!=="number" || typeof(y)!=="number"){
        return "ERROR"
    }
    let sum=0
    if(y>x){
        for(let i=x;i<=y;i+=1){
            sum+=i
        }
    }
    else if(x>y){
        for(let i=x;i>=y;i-=1){
            sum+=i
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
