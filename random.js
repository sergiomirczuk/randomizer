

function createList() {
    const i = Math.floor(Math.random() * 10);
    const j = Math.floor(Math.random() * 10);
    
    
    const wolunteers = [
        'Maks',
        'Wika',
        'Yana',
        'Wania',
        'Denis',
        'Kasper',
        'Marta',
        'Yehor',
        'Karolina',
        'Wlados'
    ];
    const place = [
        'lidl',
        'biedra',
        'kauf',
        'marshe',
        'eklerk',
        'aldi',
        'Lewiatan',
        'Carefour',
        'Zabka',
        'Alkohole24'
    ];
    
    console.log(`${wolunteers[i]}: ${place[j]}`);
    

}

for (let i = 0; i < 10; i++) {
    createList();
}
