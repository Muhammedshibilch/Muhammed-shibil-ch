const readline = require('readline');

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter a number:",(input)=>{
    let a = parseInt(input);
    if(isNaN(a)||a<=0){
        console.log("Please enter a valid positive integer.");
        r1.close();
        return;
        
    }
    let count =(a%2===0)?a-1:a;
    let result =[];

    for(let i=0;i<count;i++){
        result.push(2*i+1);
    }
    console.log("Output:",result.join(","));
    r1.close();
    
})