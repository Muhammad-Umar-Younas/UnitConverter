let feet=document.getElementById('Feet');
let inch=document.getElementById('Inches');

 //converting feet into inch
feet.addEventListener('input',function(){
    let f=this.value;
    let i=f*12; //as 1 feet is equal to 12 inch
    inch.value=i;
})

  //converting inch into feet
  inch.addEventListener('input',function(){
    let i=this.value;
    let f=i/12; //as 1 feet is equal to 12 inch
    feet.value=f;
})

 //for rounding off values of feet if inches is like 31 and so on
 inch.addEventListener('input',function(){
    let i=this.value;
    let f=i/12; //as 1 feet is equal to 12 inch
    if(!Number.isInteger(f)){
        f=f.toFixed(1);
    }
    feet.value=f;
})

//now converting kilogram into gram

// let kilogram=document.getElementById('kilo')
// let gram=document.getElementById('Gram')

// kilogram.addEventListener('input',function(){
//     let k=this.value;
//     let g=k*1000;
//     gram.value=g;
// })

// gram.addEventListener('input',function(){
//     let g=this.value;
//     let k=g/1000;
//     kilogram.value=k;
// })

// gram.addEventListener('input',function(){
//     let g=this.value;
//     let k=g/1000;
//     if(!Number.isInteger(k)){
//         k=k.toFixed(1);
//     }
//     kilogram.value=k;
// })





