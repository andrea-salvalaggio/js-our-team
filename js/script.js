// Creo un array di oggetti che conntengono le informazioni del team
const ourTeam = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        imageUrl: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        imageUrl: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        imageUrl: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        imageUrl: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        imageUrl: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        imageUrl: 'barbara-ramos-graphic-designer.jpg'
    },
]

// MILESTONE 1
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// Creo un ciclo for che cicla sugli oggetti dell'array
for (let i = 0; i < ourTeam.length; i++) {
    // Stampo in console le tre informazioni
    console.log(ourTeam[i].name, "=>", ourTeam[i].job, "=>", ourTeam[i].imageUrl);
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// Creo un variabile e importo il contenitore del team
const containerTeam = document.getElementById('container-team');

