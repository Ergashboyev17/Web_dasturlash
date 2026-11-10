//ushbu funksiya berilgan massivdagi musbat sonlarning necha marta uchrashini hisoblaydi
//musbat sonlarni hisoblash uchun massivni sikl yordamida bima-bir tekshirib chiqamiz

function musbatlarSoni(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}

//natijalarni tekshirib ko'ramiz
console.log(musbatlarSoni([-3,0,5,7,-1]));
console.log(musbatlarSoni([0,0]));
console.log(musbatlarSoni([-1, -2, -3, -4, -5]));
console.log(musbatlarSoni([1, 2, 3, 4, 5]));