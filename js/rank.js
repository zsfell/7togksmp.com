
YamlRanks()


function YamlRanks(){
    var yamlFileUrl = 'assets/data/ranks.yml';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', yamlFileUrl, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                var yamlText = xhr.responseText;

            try {
                let yamlData = jsyaml.load(yamlText);
                let container = document.getElementById('container-rank');
                let index = 0;

                yamlData.forEach(element => {
                    let card = document.createElement('div');

                    card.innerHTML = /*html*/`
                        <a href="/store">
                            <div class='menu-card'>
                                <h3 class='menu-card-title'>${element["Title"]}</h3>
                                <img src='assets/img/rank/star-transparent.png' alt='${element["Title"]}' class='menu-card-img'>
                                <p class='menu-card-price'>${element["Price"]}</p>
                            </div>
                        </a>
                        `;
                    index++;

                    // Sisipkan kartu ke dalam kontainer
                    container.appendChild(card);
                });

                // Mengonversi objek JavaScript menjadi JSON
                var jsonData = JSON.stringify(yamlData);
            } catch (error) {
                console.error('Error parsing YAML:', error);
            }
        }
    };
    xhr.send();
}

function onClickButton(){
    const popup = document.querySelector("")
}
