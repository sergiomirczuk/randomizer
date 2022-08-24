const people = [
	"Maks",
	"Wika",
	"Yana",
	"Wania",
	"Denis",
	"Kasper",
	"Marta",
	"Yehor",
	"Karolina",
	"Wlados",
];

let place = [
	"lidl",
	"biedra",
	"kauf",
	"marshe",
	"eklerk",
	"aldi",
	"Lewiatan",
	"Carefour",
	"Zabka",
	"Alkohole24",
];

function res(j) {
	let i = Math.floor(Math.random() * place.length);

	let ttt = `${people[j]} : ${place[i]}`;
	place.splice(i, 1);
	console.log(ttt);
}

for (let g = 0; g < people.length; g++) {
	res(g);
}

//console.log(people.map((e, i) => e + ' ' + place[Math.round(Math.random() * place.length)]));

// let res = people.map((elem, index) => `${elem}, ${place[index]}`);

// console.log(res);

// const wolunteersRandom = place[Math.random() * place.length];
// // console.log(wolunteersRandom);

// const createArr = ([...place], maxLength) => Array.from(
// 	{ length: Math.min(place.length, 1 + Math.random() * maxLength | 0) },
// 	() => place.splice(Math.random() * place.length | 0, 1)[0]
//  );

//  console.log(createArr);

// let randomPlace = place.sort(()=>Math.random());

// // let wyjazd = `${wolunteers}+${randomPlace}`;
// // console.log(wyjazd);

// let newArrRandom = wolunteers.concat(randomPlace);

// console.log(newArrRandom);
