//ushbu funksiya berilgan matndagi ma'lum bir harfning necha marta uchrashini hisoblaydi
//harfni hisoblash uchun matnni kichik harflarga o'tkazamiz va har bir belgini tekshirib chiqamiz


function harfsanash(s, harf){
    s=s.toLowerCase();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === harf) {
            count++;
        }
    }
    return count;
}


//natijalarni tekshirib ko'ramiz
console.log(harfsanash("Assalomu aleykum", "a"));
console.log(harfsanash("kitob", "x"));
console.log(harfsanash("Ma'lumotnoma", "m"));
console.log(harfsanash("kitoblar olami", "d"));
console.log(harfsanash("Urganch Davlat Universiteti", "u"));
