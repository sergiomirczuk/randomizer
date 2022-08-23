
const wolunteers= [
	"Maks:",
	"Wika:",
	"Yana:",
	"Wania:",
	"Denis:",
	"Kasper:",
	"Marta:",
	"Yehor:",
	"Karolina:",
	"Wlados:"
];
const place = [
	"lidl",
	"biedra",
	"kauf",
	"marshe",
	"eklerk",
	"aldi",
	"Lewiatan",
	"Carefour",
	"Zabka",
	"Alkohole24"
];

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


const photos = [{img: 'a', type: 'b'}, {img: 'c', type: 'd'}];

const links = photos.map(({ img, type }) => ({ image: img, imgType: type }));

console.log(links);