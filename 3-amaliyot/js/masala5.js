// 2 ta massivning kesishmasini topuvchi funksiya
// 1-massivdagi har bir elementni tekshirib chiqamiz va agar u 2-massivda mavjud bo'lsa, natija massiviga qo'shamiz

function kesishma(a, b){
    let natija = [];
    for(let i=0; i<a.length; i++){
        if(b.includes(a[i]) && !natija.includes(a[i])){
            natija.push(a[i]);
        }
    }
    return natija;
}


//natijalarni tekshirib ko'ramiz
console.log(kesishma([1, 2, 3, 4], [3, 4, 5])); // [3, 4]
console.log(kesishma(["html", "css"], ["js"])); // []
console.log(kesishma(['a', 'b', 'c'], ['b', 'c', 'd'])); // ['b', 'c']
console.log(kesishma([1, 2, 3], [4, 5, 6])); // []