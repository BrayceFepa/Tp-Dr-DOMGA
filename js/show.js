const wrapper = document.querySelector(".wrapper"),
    wrapper2 = document.querySelector(".wrapper2"),
    showBtn = document.querySelector("#showBtn"),
    backBtn = document.querySelector(".navbar i");

showBtn.onclick = (e) => {
    e.preventDefault();
    wrapper.classList.add("active");
    wrapper2.classList.toggle("active");
}
backBtn.onclick = () => {
    wrapper.classList.remove("active");
    wrapper2.classList.remove("active");
}