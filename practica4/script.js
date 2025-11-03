function cambiarEscena(escena) {
    const personaje = document.getElementById('personaje');
    switch (escena) {
        case 1:
            personaje.src = 'https://static.wikia.nocookie.net/evangelion/images/b/b1/Evangelion_Unit_01_versionTv.png/revision/latest?cb=20150924072426&path-prefix=es';
            document.body.style.backgroundColor = '#4a00e0';
            break;
        case 2:
            personaje.src = 'https://static.wikia.nocookie.net/evangelion/images/4/43/Evangelion_LaUnit_02_%28EoE%29.png/revision/latest?cb=20150924115629&path-prefix=es';
            document.body.style.backgroundColor = '#ff0000';
            break;
        case 3:
            personaje.src = 'https://static.wikia.nocookie.net/evangelion/images/0/02/PeliRebuild30.jpg/revision/latest?cb=20151001200439&path-prefix=es';
            document.body.style.backgroundColor = '#0000ff';
            break;
        case 4:
            personaje.src = 'https://static.wikia.nocookie.net/evangelion/images/e/e2/Eva01_berserk.png/revision/latest?cb=20120312012451';
            document.body.style.backgroundColor = '#8b0000';
            break;
    }
}