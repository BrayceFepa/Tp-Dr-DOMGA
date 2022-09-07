// Setting the constructor function for creating lessons object
function Lessons(nom, note, volumeH, enseignant) {
    this.nom = nom,
    this.note = note,
    this.volumeH = volumeH,
    this.enseignant = enseignant
}

//Getting local storage matiere-list
let matieresList = JSON.parse(localStorage.getItem("matieres-list"));

let matieresTab = [];

//function to show a lesson
function showLesson() {
    let tr = "";
    if (matieresList) {
        matieresList.forEach((lesson, id) => {
        tr += `<tr>
                    <td>${lesson.nom}</td>
                    <td>${lesson.note}</td>
                    <td class="options"><i class="fa fa-circle-minus text-danger" onclick="deleteLesson(${id})"></i></td>
                </tr>`; 
    });
    }
    document.querySelector("#table2").innerHTML = tr;
}
showLesson();

//function to delete a lesson
function deleteLesson(deleteId) {
    matieresList.splice(deleteId, 1);
    localStorage.setItem("matieres-list", JSON.stringify(matieresList));
    showLesson();
}

//Getting dom elements inside variables


addBtn = document.querySelector(".add-notes .btn-1");

addBtn.onclick = (e) => {
    e.preventDefault();
    
    let matieres = document.querySelector(".wrapper-notes #matieres");
    let matiere = matieres.options[matieres.selectedIndex].value;
    const notes = document.querySelector(".notes input");
    
    
    let lesson = new Lessons(matiere, notes.value);

    


    if (!matieresList) {
        matieresList = [];
    }

    matieresList.push(lesson); //We add a new matiere object in the array
    localStorage.setItem("matieres-list", JSON.stringify(matieresList));
    matieresTab.push(lesson);

    matieres.value = "";
    notes.value = "";

    showLesson();
}