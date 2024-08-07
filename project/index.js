
document.getElementById("search-bar").addEventListener("click", function () {
  let searchbar = document.getElementById("search-bar")
  searchbar.style.display = "none"
  let inputSearchBar = document.getElementById("searchInput")
  inputSearchBar.style.display = "block"
  inputSearchBar.style.filter = "brightness(14px)"
  inputSearchBar.style.border = "1 px solid black"
  inputSearchBar.style.width = "100%"
  inputSearchBar.style.height = "60%"

  inputSearchBar.addEventListener("keypress", function (event) {
      if (event.key == "Enter") {
          window.location.href = "search.html"

      }
  })

  let list = document.getElementById("navbar-option")

  list.style.filter = "opacity(50%)"
  console.log("vk")
})



//shoes function
// funshoes=()=>{

//     let shoesMainDiv=document.getElementById("shoesMainDiv")
//     shoesMainDiv.style.display="block"
//    let textshoes=document.getElementById("shoes")
//    textshoes.innerText="SHOES"

//  }

// add to cart funtionality
document.getElementById("header-cart-logo").addEventListener("click", function () {



  let view = document.getElementById("cart-display-div")
  view.innerHTML = null

  if (view.style.display === "none") {
      view.style.display = "block";

  }
  else {
      view.style.display = "none";

  }



  let displayData = JSON.parse(localStorage.getItem("addToCartData")) || [];
  console.log(displayData)

  totalprice(displayData)
  function totalprice(displayData) {
      //  parseInt(el.price)
      tt = displayData.reduce(function (acc, el) {

          return acc + el.price;
      }, 0)
      console.log("total", tt)
  }



  displayData.forEach((el) => {
      console.log(el)
      let box1 = document.createElement("div")
      let image = document.createElement("img")
      image.src = el.image
      image.style.height = "104px"

      let name = document.createElement("h5")
      name.innerText = el.snizeattribute

      let desc = document.createElement("p")
      desc.innerText = el.title

      let price = document.createElement("h4")
      price.innerText = "$" + el.price


      box1.append(image, name, desc, price);


      view.append(box1)

  })
  let btn = document.createElement("button")
  btn.innerText = "CHECK OUT"
  btn.addEventListener("click", function () {
      window.location.href = "checkout.html"
  })

  btn.setAttribute("id", "checkout-btn")
  let total = document.createElement("p")
  total.innerText = "Total  115.00"

  view.append(btn, total)

})





import { navbar } from "../components/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML=navbar()
//<------- Import Navbar Top ----------->//

import { navbar, append1 } from "./Component/navbar.js";
let navTop = document.getElementById("navbar")
navTop.innerHTML  = navbar()



//<------- Cart Page ----------->//

let cartArr = JSON.parse(localStorage.getItem("cart1")) || []

let cartIcon = document.querySelector("#bag")

let cart = document.querySelector(".cart")

let closeCart = document.querySelector("#close-cart")
// open Bag
cartIcon.onclick = () => {
    cart.classList.add("active")
    cartRight()
}

// Close Bag
closeCart.onclick = () => {
    cart.classList.remove("active")
    window.location.reload()
}
 function cartRight() {
   console.log(cartArr)

   let datas = document.getElementById("small-container")
   datas.style.marginTop = "100px"
   datas.style.borderTop = "2px solid #e7e7e7"
   datas.style.marginTop = "10px"
   datas.style.scrollBehavior = "smooth"

   cartArr.map(function(ele) {
     let allData = document.createElement("div")
     allData.style.border = "1px solid none"
     allData.style.display = "flex"
     allData.style.borderBottom = "2px solid #e7e7e7"

    //  let forButton = document.createElement("div")

     let div1 = document.createElement("div")
     div1.style.border = "1px solid none"
     let div2 = document.createElement("div")
     div2.style.marginLeft = "40px"
     let div3 = document.createElement("div3")

    let image = document.createElement("img")
    image.src = ele.image_url
    image.style.width = "200px"
    image.style.height = "200px"

    let title = document.createElement("h4")
    title.innerText = ele.proName
    title.style.letterSpacing = "2px"

    let offer = document.createElement("h5")
    offer.innerText = ele.offer
    offer.style.letterSpacing = "2px"
    offer.style.color = " red"

    let price = document.createElement("h5")
    price.innerText = ele.price
    price.style.letterSpacing = "2px"

    let bttn = document.createElement("button")
    bttn.innerText = "REMOVE"
    bttn.addEventListener("click", function() {
      removeCart(index)
   })
 
    div1.append(image)
    div2.append(title,price,offer)
    // div3.append(bttn)
    allData.append(div1,div2)
    // forButton.append(div3)
    datas.append(allData)

   })

 }


let div_total = 0

console.log(cartArr)
cartArr.map(function(ele,index) {
    let box = document.createElement("div")
    box.className = "main"
    
    let imgbox = document.createElement('div')
    imgbox.className = "imgBox"
    let details = document.createElement("div")
    details.className = "detailBox"
    details.style.letterSpacing = "3px"
    let price = document.createElement("div")
    price.className = "priceArea"
    let qty = document.createElement("div")
    qty.className = "quantity-count"
    let tot = document.createElement("div")
    tot.className = "tot-box"

    let image = document.createElement("img")
    image.src = ele.image_url
    image.style.height = "200px"
    image.style.width = "200px"
    
    let name = document.createElement("h4")
    name.innerText = ele.proName
    let det = document.createElement("p")
    det.innerText = ele.detail
 
    let remove = document.createElement("button")
    remove.className = "cart-remove"
    remove.innerText = "REMOVE"
    remove.style.padding = "10px 20px"
    remove.style.backgroundColor = "white"
    remove.style.letterSpacing = "3px"
    remove.style.border = "2px solid #e7e7e7"
    remove.style.cursor = "pointer"
    remove.addEventListener("click", function() {
       removeItem(index)
    })

    let pri = document.createElement("p")
    pri.innerText = "$"+Math.ceil(ele.price)
    pri.style.paddingTop = "50px"

    let btn1 = document.createElement("button")
    btn1.innerText = "+"
    btn1.style.backgroundColor = "white"
    btn1.style.border = "2px solid #e7e7e7"
    btn1.style.cursor = "pointer"
    btn1.addEventListener("click", function() {
      // console.log(ele);
      ele.qty++;
      localStorage.setItem("cart1",JSON.stringify(cartArr))
      window.location.reload()
    })
    // total.innerText = Math.ceil(ele.price)* (+(ele.qty))
    
    let inp = document.createElement("input")
    inp.value= ele.qty
    inp.style.width = "50px"
    inp.style.padding = "10%"
    inp.style.border = "2px solid #e7e7e7"
    inp.style.textAlign = "center"

    let btn2 = document.createElement("button")
    btn2.innerText = "-"
    btn2.style.backgroundColor = "white"
    btn2.style.border = "2px solid #e7e7e7"
    btn2.style.cursor = "pointer"
    btn2.addEventListener("click" , function() {
      if(ele.qty > 1) {
        ele.qty--;
        localStorage.setItem("cart1",JSON.stringify(cartArr))
      window.location.reload()
      }

    })
    // total.innerText = Math.ceil(ele.price)* (+(ele.qty))
    
    let total = document.createElement("p")
    total.innerText = Math.ceil(ele.price)* (+(ele.qty))
    localStorage.setItem("totalPrice", JSON.stringify(total))

    div_total = (div_total + Number(total.innerText))
    console.log(div_total)

    imgbox.append(image)
    details.append(name,det,remove)
    price.append(pri)
    qty.append(btn1,inp,btn2)
    tot.append(total)

    box.append(imgbox,details,price,qty,tot)


    document.querySelector("#cart_products").append(box)
  
})

document.querySelector("#sumtotal").append(div_total)


function removeItem(ind) {
  console.log(ind)
  cartArr.splice(ind, 1)
  localStorage.setItem("cart1", JSON.stringify(cartArr))
  window.location.reload()
}









