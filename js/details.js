const zoneShow = document.querySelector(".wrapper2 #item"),
students = JSON.parse(localStorage.getItem("students-list"));

function details() {
    let li = "";
    if (students) {
        students.forEach(student => {
            li += `<li>${student.nom}</li>`;
        });
    }
    zoneShow.innerHTML = li;
}
details();