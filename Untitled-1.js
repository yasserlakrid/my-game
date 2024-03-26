//task1//
for(let i=1 ; i<=100 ; i++){
    if(i%5==0 && i%3==0){
        console.log('fizzbuzz')
    }else if(i%3==0){
        console.log('buzz')
    }
    else if (i%5==0){
        console.log('fizz')
    }else
    {
        console.log(i)
    }

}
//task2//
let lign1='# # # #'
let lign2=' # # # #'
let size=prompt('enter the size')
if(size%2==0){
    for(let i = 1 ; i<=size/2 ;i++){
    console.log(lign1)
    console.log(lign2)
}
}else{
    size-=1
    for(let i = 1 ; i<=size/2 ;i++){
        console.log(lign1)
        console.log(lign2)
    }console.log(lign1)
}
//task3//

