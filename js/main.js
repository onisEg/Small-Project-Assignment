
var chosenProImg = document.getElementById("chosenProduct");
var chosenProTitle = document.getElementById("chosenProTitle");
var chosenProPrice = document.getElementById("chosenProPrice");
var increasItems = document.getElementById("increasItems");
var decreasItems = document.getElementById("decreasItems")
var totalItems =document.getElementById("totalItems")
var deleteItem= document.getElementById("delete")

//  static array 
var product =[
    {"id": "1" ,"title":"جرجير", "image":"1.jpg", "price": 13 },
    {"id": "2" ,"title":"قرنبيط", "image":"2.jpg", "price": 11},
    {"id": "3" ,"title":"كرونب", "image":"3.jpg", "price": 10},
    {"id": "4" ,"title":"خس", "image":"4.jpg", "price": 12},
    {"id": "5" ,"title":"رمان", "image":"5.jpg", "price": 13},
    {"id": "6" ,"title":"خوخ", "image":"6.jpg", "price": 9},
]

// show opjects at row in html 
getProduct=function(){
    var cartona="";
    for(i=0; i<product.length;i++){
        cartona+=`
        <div class="col-lg-2 col-md-4 mb-4 ">
        <div class="card ">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img  class="itemImage w-100" src="images/${product[i].image}"  />            
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h4 class="card-title text-decoration-none mb-3">${product[i].title}</h4>
            </a>
            <div class="d-flex justify-content-center align-items-center">
              <p>₺</p>
              <h6  class="itemPrice mb-3 mx-1"> ${product[i].price}</h6>
            </div>
            <button  type="button" onclick="getProductById(${product[i].id})" class="btn btn-outline-success text-capitalize ">add to cart</button>
          </div>
        </div>
      
    </div>
        `
    }
    document.getElementById("products").innerHTML=cartona;
}


getProductById=function(productId){
    for(i=0;i<product.length;i++){
        if(product[i].id==productId){
            $("#chosenProImg").attr('src',`images/${product[i].image}`);
            $("#chosenProPrice").text(product[i].price);
            $("#chosenProTitle").text(product[i].title)
        $("#addbtn").innerHTML = `<button class="btn bg-success " id="add" onclick="addProduct(${product[i].id})> add</button>`;
        }
    }
}

var x=1;
function increment(){
x++;
$("#quantityCurentProduct").val(x)
total()
}
function decrement(){
    if(x>1){
        x--;
        $("#quantityCurentProduct").val(x)
    } else {
        $("#quantityCurentProduct").val(1)

    }
    total()

}

function total(){
    var totlePrice = +$("#chosenProPrice").text() * x;
    $("#totalItems").text(totlePrice)
}

addToTable=function(){
    var product
}

