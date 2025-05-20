const input = [1,2,8,9,12,46,76,82,15,20,30];
const result = {};
for(let i=1;i<=9;i++){
    result[i]=0;

}
for(let num of input){
    for(let i=1;i<=9;i++){
        if(num%i===0){
            result[i]++;
        }
    }
}
console.log(result);
