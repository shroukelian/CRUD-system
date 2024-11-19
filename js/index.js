var ProductNameInput= document.getElementById("productName");
var ProductPriceInput= document.getElementById("productPrice");
var ProductCategoryInput= document.getElementById("productCategory");
var ProductDescInput= document.getElementById("productDesc");
var ProductImageInput= document.getElementById("productImd");
var searchInput=document.getElementById("searchInput");
var productsContainer=[];

if( localStorage.getItem('products') !==null){
          productsContainer =JSON.parse(localStorage.getItem('products'));
          displayProduct();
};

function addProduct(){
    var product={
        name : ProductNameInput.value,
        price : ProductPriceInput.value,
        category : ProductCategoryInput.value,
        Desc : ProductDescInput.value,
        Image :"images/1.jpg"
        
    };

    productsContainer.push(product);
    displayProduct()    
    localStorage.setItem('products',JSON.stringify(productsContainer));
    clearForm();
};
function clearForm(){

  ProductNameInput.value=null;
  ProductPriceInput.value=null;
  ProductCategoryInput.value=null;
  ProductDescInput.value=null;

};
function displayProduct(){

  var cartona="";

  for(var i=0;i<productsContainer.length ;i++){

        cartona+=`<div class="col-md-2 col-sm-6 ">

          <div class="product">
              <img class="w-100" src="imgs/th.jpeg" alt="hero">
            <h2>${productsContainer[i].name}</h2>
            <p class="text-secondary mb-3">${productsContainer[i].Desc}</p>
              <h2 class="h5"><span class="fw-bolder">Price:</span>${productsContainer[i].price}</h2>
              <h2 class="h5"><span class="fw-bolder">Category:</span>${productsContainer[i].category}</h2>
              <button onclick="deleteProduct(${i});" class="btn btn-outline-danger w-75 mb-3 mt-2  ">Delete <i class="fas fa-trash "></i></button>
              <button onclick="setFormUpdate(${i});" class="btn btn-outline-warning  w-75 ">Update<i class="fas fa-pen "></i></button>
          </div>
        </div>`;
      }
      document.getElementById("rowdata").innerHTML=cartona;

};

function deleteProduct(indexProduct){

  productsContainer.splice(indexProduct,1);
  displayProduct();
  localStorage.setItem('products',JSON.stringify(productsContainer));
};

function searchProduct(){
  var term=searchInput.value;
  var cartona="";
  for(var i=0;i<productsContainer.length;i++){

    if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase())){
      cartona+=`<div class="col-md-2 col-sm-6">

      <div class="product">
          <img class="w-100" src="imgs/th.jpeg" alt="hero">
        <h2>${productsContainer[i].name}</h2>
        <p class="text-secondary mb-3">${productsContainer[i].Desc}</p>
          <h2 class="h5"><span class="fw-bolder">Price:</span>${productsContainer[i].price}</h2>
          <h2 class="h5"><span class="fw-bolder">Category:</span>${productsContainer[i].category}</h2>
          <button onclick="deleteProduct(${i});" class="btn btn-outline-danger w-75 mb-3 mt-2">Delete</button>
          <button onclick="setFormUpdate(${i});" class="btn btn-outline-warning w-75 ">Update<i class="fas fa-pen "></i></button>

      </div>
    </div>`;
    }
  }
        document.getElementById("rowdata").innerHTML=cartona;
};

var indexUpdate;
function setFormUpdate(index){
  indexUpdate = index;
  addBtn.classList.add('d-none');
  updateBtn.classList.remove('d-none');

  ProductNameInput.value = productsContainer[index].name;
  ProductPriceInput.value = productsContainer[index].price;
  ProductCategoryInput.value = productsContainer[index].category;
  ProductDescInput.value = productsContainer[index].Desc;
}
; 
function updateProduct(){

  addBtn.classList.remove('d-none');
  updateBtn.classList.add('d-none');
  productsContainer[indexUpdate].name = ProductNameInput.value;
  productsContainer[indexUpdate].price = ProductPriceInput.value;
  productsContainer[indexUpdate].category = ProductCategoryInput.value;
  productsContainer[indexUpdate].Desc = ProductDescInput.value;

  displayProduct();
  localStorage.setItem('products',JSON.stringify(productsContainer));
  clearForm();
};


















// function displayProductList( list  ) {
//     var rowData = document.getElementById("rowData");
  
//     var cartona = "";
//     for (var i = 0; i < list.length; i += 1) {
//       cartona += `  <div class="col-md-4 col-lg-3">
//             <div class="inner overflow-hidden shadow rounded">
//               <img src="imgs/1.jpg" class="w-100" alt="" />
  
//               <div class="p-3">
//                 <h2>${ list[i].name }</h2>
//                 <div class="d-flex mb-3 justify-content-between">
//                   <span>${list[i].price}$</span>
//                   <span>${list[i].category}</span>
//                 </div>
  
//                 <p>
//                 ${list[i].desc}
//                 </p>
//                 <div class="action">
//                   <button onclick="deleteProduct( ${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i> delete ${i}</button>
//                   <button class="btn btn-outline-info"><i class="fa-solid fa-pen"></i> update ${i}</button>
//                 </div>
//               </div>
//             </div>
//           </div>`;
//     }
  
//     rowData.innerHTML = cartona;
//   }

//   function deleteProduct(list){

//   }
  