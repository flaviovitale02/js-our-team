// !Wayne Barnett     ounder & CEO      wayne-barnett-founder-ceo.jpg
// !Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg
// !Walter Gordon     Office Manager    walter-gordon-office-manager.jpg
// !Angela Lopez      Social Media      Manager  angela-lopez-social-media-manager.jpg
// !Scott Estrada     Developer         scott-estrada-developer.jpg
// !Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg


// ?Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// ?Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// ?MILESTONE 0:
// ?Creare l’array di oggetti con le informazioni fornite.
// ?MILESTONE 1:
// ?Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// ?MILESTONE 2:
// ?Stampare le stesse informazioni su DOM sottoforma di stringhe
// ?BONUS 1:
// ?Trasformare la stringa foto in una immagine effettiva
// ?BONUS 2:
// ?Organizzare i singoli membri in card/schede

const teamMembers = [
    {
        name : 'Wayne Barnett',
        role : 'founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg',
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg',
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img :  'angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg',
    }
]
for (let index = 0; index < teamMembers.length; index++) {
    const teamMember = teamMembers[index];
    console.log('name: ' + teamMember.name , 'role: ' + teamMember.role,'img: ' + teamMember.img)
    
}


