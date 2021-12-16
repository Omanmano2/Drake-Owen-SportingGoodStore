import { generateId } from "../Utils/generateId.js"




export class SportingGood {
  constructor(data){
    this.name = data.name
    this.price = data.price
    this.quantity = data.quantity
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.id = generateId()
  }
  get Template() {
    return /*html*/`  
    <div class="col-md-3 shadow rounded border border-dark">
    <div class="row">
      <div class="col-12 text-center">
        <img src="${this.imgUrl}" class="pt-4 img-fluid" alt="${this.name}">
      </div>
      <div class="mt-2 text-center">
        <h3 class="border border-dark rounded">${this.name}</h3>
        <p class="border border-dark rounded">${this.description}</p>
      </div>
      <div class=" justify-content-between align-items-center d-flex p-2">
        <p class="border border-dark p-3 rounded">Stock: ${this.quantity}</p>
        <p class="border border-dark p-3 rounded">$ ${this.price}</p>
        <button type="button" class="btn btn-secondary" onclick="app.sportingGoodsController.addToCart('${this.id}')">Add To Cart</button>
      </div>
    </div>
  </div>
    `
  }
}

