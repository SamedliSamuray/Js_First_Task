let metn = prompt(" Araşdırılacaq Mətni daxil edin:");
let simvol = prompt("Axtarılacaq simvolu daxil edin:");




//Task 2 ve 5
// Tək yazmaq istəsəydik digər yol.>>
// let c=Boolean(simvol.toLowerCase().search(metn.toLowerCase()));
// let v=c==true?`Axtardığınız ${simvol} simvolu ${metn} metni daxilinde vardir. `:`Axtardığınız ${simvol}-u ${metn} daxilinde yoxdur.`
// console.log(v);

let s=metn.toLowerCase().indexOf(simvol.toLowerCase());
let a=s<0?`Axtardiginiz ${simvol} simvolu ${metn} mətni daxilində yoxdur`:`Axtardiginiz  ${simvol} simvolu var və ${metn} mətnin ${s} nömrəli  indeksindedir`;



//Task 3  

let m=metn.toLowerCase().startsWith(simvol.toLowerCase());
let u= m==true?`Mətniniz ${simvol} simvolu ilə başlayır`:`Sizin mətniniz ${simvol} simvolu ilə başlamır.`;

//Task 4  
let r=metn.toLowerCase().endsWith(simvol.toLowerCase());
let A= r==true?`Mətniniz ${simvol} simvolu ilə bitir`:`Sizin mətniniz ${simvol} simvolu ilə bitmir.`;


//Task 6

let y= /^[^a-z]*$/.test(metn);
let b= y==true?`Mətn sadəcə böyük hərflərdən ibarətdir`:`Mətn sadəcə böyük hərflərdən ibarət deyil.`

// let f= metn.toUpperCase()==metn;
// let herfleri_yoxla= f==true?`Butun herfler boyukdur`:`Butun herfler boyuk deyil`;
// console.log(herfleri_yoxla);



console.log(`Task 1: Daxil etdiyiniz metnin uzunluğu ${metn.length} simvoldan ibarətdir.`);

console.log(`Task 2 və Task 5 : ${a}`);

console.log(`Task 3 : ${u}`);

console.log(`Task 4 : ${A}`);

console.log(`Task 6 : ${b}`)

