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

const directoriesURL = `${urlApi}categories/${urlCategorie}/products`
fetch(directoriesURL)

     .then(response => {
        return response.json()
    })
    .then(directories => {

        console.log(directories)

        categories(directories.products);
        categorieName(directories.name);
    })
    .catch(error => {
        alert("Tuvimos un problema")
        console.log(error)
})

function categorieName(name){
    var h4 = document.getElementById('h4');

    var contentH4 = `<h2 class="font-weight-bold">Productos de ${name}</h2>`;

    h4.innerHTML = contentH4;
}

function categories(categorie) {
    var content = document.getElementById('content');

    var data = '';
    categorie.forEach(product => {
        data += `
        <div class="col-sm-12 col-lg-4 mb-5">
        <div class="border border-top-0 marco">
            <div class="scroll" style="overflow: auto;  height: 200px" >
            <a class="text-decoration-none"  href="product-page.html?${product.uuid}">
                <img  class="" src="${product.image}" width="100%"  ></img>
            </a>
            </div>
            <h5 class="pl-3 pt-2">${product.name}</h5>
            <div class="mb-4 scroll" style="height: 160px; overflow: auto;">
                <p class="mt-3  pl-3 pr-3">${product.description}</p>
            </div>
            <div class="mr-3 ml-3 pb-4">
            <a class="text-decoration-none" target="_blank" href="${product.url}">
                <button type="button" class="btn btn-outline-secondary btn-block text-dark border-secondary">Ver la web</button>
            </a>
            </div>
        </div>
    </div>
          `
    });
    content.innerHTML = data;
}


