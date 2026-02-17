const readline=require ("readline");

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Anna sana: ",function(sana){
    const kaannetty = sana.split("").reverse().join("");
    if(sana === kaannetty)
    {
        console.log("Sana "+sana+" on palindromi.");
    }
    else {
        console.log("Sana "+sana+" ei ole palindromi.");
    }
    rl.close();
});