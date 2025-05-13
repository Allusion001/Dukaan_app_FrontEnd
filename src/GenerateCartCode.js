function GenerateCode(length=10){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const timestamp = new Date().getTime();
    const randomSeed = Math.sin(timestamp);
    let code=""
    for (let i = 0; i < length; i++) {
        //Use seeded random number generator
        const randomIndex = Math.floor(Math.abs(randomSeed * (i + 1) * 10000) % characters.length);
        code += characters.charAt(randomIndex);
    }

    return code;
}
 
export const randomValue= GenerateCode();