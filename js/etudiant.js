// Her we define the constructors

function Etudiant(nom, prenom, lieu_naiss, parcours, taille, poids, sexe, date_naiss) {
    this.nom = nom,
    this.prenom = prenom,
    this.naiss = lieu_naiss,
    this.parcours = parcours,
    this.taille = taille,
    this.poids = poids,
    this.sexe = sexe,
    this.date_naiss = date_naiss
}


//Getting localstorage students-list
let studentsList = JSON.parse(localStorage.getItem('students-list'));


// function to show students
function showStudents() {
    let tr = "";
    if (studentsList) {
        studentsList.forEach((student, id) => {
        tr  += `<tr>
                    <td>${id}</td>
                    <td>${student.nom} ${student.prenom}</td>
                    <td>${student.naiss}</td>
                    <td>${student.parcours}</td>
                    <td>${student.sexe}</td>
                    <td>${student.date_naiss}</td>
                    <td class="options">
                        <i class="fa-solid fa-circle-plus text-success"></i>  
                        <i class="fa fa-circle-minus text-danger" onclick="deleteStudent(${id})"></i> 
                        <i class="fa-solid fa-pen-to-square" onclick="editStudent(${id}, '${student.nom}','${student.prenom}', '${student.naiss}',${student.taille},${student.poids}, '${student.date_naiss}')"></i>
                    </td>
                </tr>`;
    })
    }
    document.getElementById("table1").innerHTML = tr;
}
showStudents();


//Function to edit a student
function editStudent(id, name, lastName, naiss, taille, poids, sex, naissdate) {
    // console.log(id, name, lastName, naiss, parcours, sex, naissdate);
    //Getting input fields inside variables
    document.querySelector("#name").value = name;
    document.querySelector("#lastname").value = lastName;
    document.querySelector("#lieu-naiss").value = naiss;
    document.querySelector("#taille").value = taille;
    document.querySelector("#poids").value = poids;
    document.querySelector("#date-naiss").value = naissdate;
}


//function to delete a student
function deleteStudent(deleteId) {
    //We remove selected student from students-list array
    studentsList.splice(deleteId, 1);
    localStorage.setItem("students-list", JSON.stringify(studentsList));
    showStudents();
}




let saveBtn = document.querySelector("form .button input ");
saveBtn.onclick = (e) => {
    e.preventDefault();

    //Getting input fields inside variables
    const name = document.querySelector("#name"),
        lastName = document.querySelector("#lastname"),
        lieuNaiss = document.querySelector("#lieu-naiss"),
        taille = document.querySelector("#taille"),
        poids = document.querySelector("#poids"),
        birdDate = document.querySelector("#date-naiss");
    let sex;
    if (document.querySelector("#dot-1").checked) {
         sex = document.querySelector("#dot-1");
    }
    if (document.querySelector("#dot-2").checked) {
        sex = document.querySelector("#dot-2");
    }
    let parcours = document.querySelector("#parcours");
    let parcoursVal = parcours.options[parcours.selectedIndex].value;
        
    
    let students = new Etudiant(name.value, lastName.value, lieuNaiss.value, parcoursVal, taille.value, poids.value, sex.value, birdDate.value);

    
    
    if (!studentsList) {
        //Getting localstorage student-list
        studentsList = []; //Is students-list is not defined, we pass an empty array inside
    }

    studentsList.push(students); //We add a new student object inside the array
    localStorage.setItem("students-list", JSON.stringify(studentsList));


    name.value = "";
    lastName.value = "";
    lieuNaiss.value = "";
    parcours.value = "";
    taille.value = "";
    poids.value = "";
    birdDate.value = "";
    sex.value = "";

    showStudents();
}