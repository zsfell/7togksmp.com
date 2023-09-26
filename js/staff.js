const prefixPath = 'assets/img/staff'
let logo = [
    {
        "name": "Angga7Togk",
        "role": "Owner Server & Developer",
        "img": `${prefixPath}/Angga.png`
    },
    {
        "name": "Farid5730",
        "role": "Admin Store",
        "img": `${prefixPath}/Parit.png`
    },
    {
        "name": "CemangCemong",
        "role": "Builder & 3D Art",
        "img": `${prefixPath}/Gembel.png`
    },
    {
        "name": "IbalMedia",
        "role": "Devisi Creative",
        "img": `${prefixPath}/Ibal.png`
    },
    {
        "name": "Uh Dahlah",
        "role": "Devops",
        "img": `${prefixPath}/Yoga.png`
    },
    {
        "name": "ZiggyHarp205",
        "role": "Devisi Creative & Manager Discord",
        "img": `${prefixPath}/Nabil.png`
    },
    {
        "name": "Shabrinaaida",
        "role": "Police & Manager Discord",
        "img": `${prefixPath}/Sha.png`
    },
    {
        "name": "AryaWy2099",
        "role": "Builder & Police",
        "img": `${prefixPath}/Arya.png`
    },
    {
        "name": "Dedemisbah",
        "role": "Devisi Creative",
        "img": `${prefixPath}/dedenn.png`
    },
    {
        "name": "Karlsiee",
        "role": "Devisi Creative & Police",
        "img": `${prefixPath}/karlll.png`
    },
    {
        "name": "Firaa7Togk",
        "role": "Police",
        "img": `${prefixPath}/Pira.png`
    },
    {
        "name": "Aull",
        "role": "Police",
        "img": `${prefixPath}/aulll.png`
    }
]

let container = document.getElementById("container-staff");

for (let i = 0;logo.length;i++){
    var staff = logo[i];
    let card = document.createElement("div");
    card.innerHTML = /*html*/ `<div class="card-staff">
        <img src='${staff["img"]}' width='128px' height='128px' alt="" class="card-staff-img">
        <h3 class="card-staff-title">${staff["name"]}</h3>
        <p class="card-staff-text">${staff["role"]}</p>
    </div>`;
    container.appendChild(card);
}
