const urlApi = "http://fundamentos.academlo.com/api/v1/"
const url = window.location.href
const arrayUrl = url.split('?')
const urlCategorie = arrayUrl[1]

// code de marketing: "88339b10-0936-4766-ab71-d56e66823cd5"
// "{{apiURL}}/directories/6895b342-efcc-4b65-8f13-e8bccbeb9f45/categories"

// "{{apiURL}}/categories/a3a23c73-47c5-47c0-bd05-b73bf68a0c03/products"
// product 0: "efb5c117-c234-467c-bcc4-8c675755efb1"
// Analitica: "d8e696d2-123e-4bb4-aaa7-a5a58b7ecd3b"
// blog: "dc2f25dc-a8eb-4a25-8fa5-679027f2ae00"

// "{{apiURL}}/products/82993a90-1397-4503-b16b-00b71f71ee7c"

const directoriesURL = `${urlApi}products/${urlCategorie}`
fetch(directoriesURL)

     .then(response => {
        return response.json()
    })
    .then(directories => {

        console.log(directories)
        categories(directories)
    })
    .catch(error => {
        alert("Tuvimos un problema")
        console.log(error)
})


function categories(categorie) {
    var content = document.getElementById('main');

    var data = '';
        data += `   
            <div class="main-left pr-0 pl-5">
                <h1>${categorie.name}</h1>
                <p>${categorie.description}</p>
                <div class="bot">
                    <a target="_blank" href="${categorie.url}">Visit Web Site</a>
                    <p>Share <i id="icon" class="fab fa-facebook"></i>  <i id="icon"class="fab fa-twitter-square"></i></p>
                </div>
            </div>
            <div class="main-rigth scroll pr-0 pt-0 mr-5" style="overflow: auto;  height: 600px">
                <img class="marco" src="${categorie.image}" width="100%"  ></img>
            </div>
`

    content.innerHTML = data;
}


