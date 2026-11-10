//ushbu funksiya berilgan parolning kuchini baholaydi
//buning uchun maxsus shartlardan faydalanadi

function parolKuchi(parol){
    let kuch = 0;
    if (parol.length >= 8) {
        kuch += 1;
    }
    if (parol.match(/[A-Z]/)) {
        kuch += 1;
    }
    if (parol.match(/[0-9]/)) {
        kuch += 1;
    }
    if (parol.match(/[!-*]/)) {
        kuch += 1;
    }
    if(kuch<2){
        return "kuchsiz";
    }
    else if(kuch<4){
        return "o'rta";
    }
    else {
        return "kuchli";
    }
}

//natijalarni tekshirib ko'ramiz
console.log(parolKuchi("Salom2026!"));
console.log(parolKuchi("parol123"));
console.log(parolKuchi("abs"));
console.log(parolKuchi("Parol!"));
console.log(parolKuchi("12345678"));