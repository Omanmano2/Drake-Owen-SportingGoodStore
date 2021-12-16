import { SportingGood } from "./Models/SportingGood.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  cart = []

  sportingGoods = [
    new SportingGood({name: 'baseball', price: 5.00, quantity: 50, imgUrl:'https://upload.wikimedia.org/wikipedia/en/1/1e/Baseball_%28crop%29.jpg', description: 'This baseball belonged to your mom'}),

    new SportingGood({name: 'football', price: 7.00, quantity: 30, imgUrl: 'https://m.media-amazon.com/images/I/81wYqCS7p9L._AC_SY450_.jpg', description: 'This football belonged to your mom' }),

    new SportingGood({name: 'soccerball', price: 25.00, quantity: 25, imgUrl: 'https://m.media-amazon.com/images/I/61Jigwd1kKL._AC_SL1500_.jpg', description: 'This soccer ball belonged to your mom' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
