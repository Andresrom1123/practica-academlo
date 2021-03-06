const urlApi = "http://fundamentos.academlo.com/api/v1/"

function appendHTML(html, idContainer){
    const categoriesContainer = document.getElementById(idContainer);
    categoriesContainer.innerHTML = html
}

function getCategorie(){

    // code de marketing: "88339b10-0936-4766-ab71-d56e66823cd5"
    // "{{apiURL}}/directories/6895b342-efcc-4b65-8f13-e8bccbeb9f45/categories"

    // "{{apiURL}}/categories/a3a23c73-47c5-47c0-bd05-b73bf68a0c03/products"
    // product 0: "efb5c117-c234-467c-bcc4-8c675755efb1"
    // Analitica: "d8e696d2-123e-4bb4-aaa7-a5a58b7ecd3b"
    // blog: "dc2f25dc-a8eb-4a25-8fa5-679027f2ae00"

    const directoriesURL = urlApi + "directories/88339b10-0936-4766-ab71-d56e66823cd5/categories"
    fetch(directoriesURL)
         .then(categorie => {
            return categorie.json()
        })
        .then(category => {
            console.log(category)
            populateCategories(category.categories)
        })
        .catch(error => {
            alert("Tuvimos un problema")
            console.log(error)
    })
}


function populateCategories(categorie){
    let html = '';
    for(i = 1; i < categorie.length; i++){
     html +=   `
        <div class="col-3 m-0 box-si ">
            <a class="text-decoration-none" href="feautured.html?${categorie[i].uuid}">
                <div class="position-relative pt-3 pb-3 m-0">
                    <div class="radial position-absolute" id="elemento"></div>
                    <img class="img-responsive box bor-rad img100"
                        src="https://images.pexels.com/photos/1483907/pexels-photo-1483907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="">
                    <div class="caption">
                        <i class="fas fa-bullhorn"></i>
                        <h2>${categorie[i].name}</h2>
                        <h6>12 listings</h6>
                    </div>
                </div>
             </a>
        </div>
        `
    }

    appendHTML(html, 'box-search')
}

getCategorie()