


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
    const obj = {};
    // console.log(`${wolunteers[i]}: ${place[j]}`);
    wolunteers.forEach((element) => {
        obj[element] = place[i];
      });
      console.log(obj);

