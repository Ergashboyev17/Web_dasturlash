//ushbu funksiya a va b sonlarining eng katta umumiy bo'luvchisini (EKUB) hisoblaydi
//EKUBni hisoblash uchun Evklid algoritmidan rakursiv funksiya orqali foydalanamiz
function ekub(a, b){
    if (b==0){
        return a;
    }
    return ekub(b, a%b);
}

//natijalarni tekshirib ko'ramiz
console.log(ekub(48,18));
console.log(ekub(17,5));
console.log(ekub(45,20));
console.log(ekub(42,16));
console.log(ekub(49,28));

