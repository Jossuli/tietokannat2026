const readline=require ("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Anna ensimmäinen luku: ",function(luku1){

    rl.question("Anna toinen luku: ",function(luku2)
    {
const num1=Number(luku1);
const num2=Number(luku2);

    if(num1>num2)
    {
    console.log("Annoit luvut "+num1+" ja "+num2+", joista "+num1+" on suurempi.");
    }
    else if(num1<num2)
    {
        console.log("Annoit luvut "+num1+" ja "+num2+", joista "+num2+" on suurempi.");
    }
    else {
        console.log("Annoit luvut "+num1+" ja "+num2+" ja molemmat luvut ovat samanarvoiset.");
    }
    rl.close(); // tärkeä!
    });
});