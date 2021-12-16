import { ProxyState } from "../AppState.js"


function _DrawSportingGoodItems(){
  let template = ''
  ProxyState.sportingGoods.forEach(s => template += s.Template)
  document.getElementById('sportingGoods').innerHTML = template
}
export class SportingGoodsController{
  constructor() {
  _DrawSportingGoodItems()
  console.log('sporting good controller is linked')
  }

  addToCart(thisId){
    document.getElementById('checkOut').innerHTML = thisId
  }
}