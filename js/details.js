const zoneShow = document.querySelector(".wrapper2 .infos-wrapper .infos-list"),
tableShow = document.querySelector(".wrapper2 .infos-wrapper .notes #table"),
students = JSON.parse(localStorage.getItem("students-list"));

function moreDetails(studentId) {
    let li = "";
    let tr = '';

    if (students) {//If item students is defined then we show its contained
        console.log(students[studentId]);

        li = `<li>Nom & et Prenom:<span> ${students[studentId].nom} ${students[studentId].prenom} </span></li>
                <li>Date et lieu de Naissance: <span>le ${students[studentId].date_naiss} à ${students[studentId].naiss} </span></li>
                <li>Sexe: <span>${students[studentId].sexe}</span></li>
                <li>Parcours: <span>${students[studentId].parcours}</span></li>
                <li>Taille: <span>${students[studentId].taille} mètres</span></li>
                <li>Poids: <span>${students[studentId].poids} Kg</span></li>`;
        localStorage.setItem('details', JSON.stringify(li));

        students[studentId].matieres.forEach(lesson => {
            tr += `<tr>
                        <td>${lesson.nom} </td>
                        <td>${lesson.note} </td>
                    </tr>`;
        });
        localStorage.setItem('matieres-notes', JSON.stringify(tr));
    }

    location.href = "details.html";

    
}
console.log(students[0]);
let data = JSON.parse(localStorage.getItem("details"));

if (data) {
    console.log(data);
    zoneShow.innerHTML = data;
}

let lessonNote = JSON.parse(localStorage.getItem('matieres-notes'));
console.log(lessonNote);

if (lessonNote) {
    tableShow.innerHTML = lessonNote;
}
