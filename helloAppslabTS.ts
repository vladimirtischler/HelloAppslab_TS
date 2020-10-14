console.log(greeting("Hello appslab!"));
console.log(totalDistance(0.2,0.4,100));
console.log(equal(1,3,2)) 
console.log(triangle(20,30,20))
console.log(multiplyByLenght([10,20,30,5]))
console.log(equalSlices(11,5,2))
    

function greeting( a:string):string
{
    return a;
}


function totalDistance(heightOfStep:number, lenghtOfStep:number, towerHeight:number):number{
    let sum:number = towerHeight/heightOfStep*(lenghtOfStep+heightOfStep);
    return sum;
}


function equal(a:number,b:number,c:number):number{
    const value = 0;
    if(a==b&&b==c) return value+3;
    else if(b==c||a==c||a==b ) return value+2;
    else if(a!=b&&a!=c) return value;
    //return value;
}

function triangle(a:number,b:number,c:number):boolean{
    if(a+b>c && a+c>b && b+c>a) return true;
    else return false;
}

function multiplyByLenght(a:number[]):number[]{
    for(var i = 0; i<a.length;i++){
        a[i] = a[i]*a.length;
    }
    return a;
}

function equalSlices(totalSlices:number,recipients:number,slicesEach:number):boolean{
    if(recipients*slicesEach<=totalSlices) return true;
    else return false;
}