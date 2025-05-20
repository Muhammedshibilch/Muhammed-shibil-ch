const readline = require('readline');

const r1= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter a number:" , (input)=>{
    const a =parseInt(input);
    let result = [];

    for(let i=0;i<a;i++){
        result.push(2*i+1);

    }
    console.log("Output:",result.join(","));
    r1.close();
    
})