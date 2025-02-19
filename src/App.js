import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Ножик для шинковки капусты',
          img: 'nozh-kapusta.jpg',
          desc: 'Ножик чтобы вкусно кушать капусту',
          category: 'ножики типа 1',
          price: '100.99'
        },
        {
          id: 2,
          title: 'Ножик для нарезки пиццы',
          img: 'nozh-pizza.jpg',
          desc: 'Ножик чтобы поделиться пиццей со своей большой белой пушистой собакой',
          category: 'ножики типа 2',
          price: '250.99'
        },
        {
          id: 3,
          title: 'Ножик для нарезки хлеба',
          img: 'nozh-hlep.jpg',
          desc: 'Ножик чтобы хлебушек резался, а не крошился',
          category: 'ножики типа 3',
          price: '90.00'
        },
        {
          id: 4,
          title: 'Ножик охотничий с ножнами',
          img: 'ohot.jpg',
          desc: 'Ножик для охоты (но не на больших белых пушистых собак)',
          category: 'ножики типа 1',
          price: '190.99'
        },
        {
          id: 5,
          title: 'Прикольный кованый ножик',
          img: 'kovan.jpg',
          desc: 'Ножик чтобы любоваться красивеньким',
          category: 'ножики типа 2',
          price: '140.99'
        },
        {
          id: 6,
          title: 'Ножик даггер',
          img: 'dagger.jpg',
          desc: 'Красивенький остренький ножик',
          category: 'ножики типа 3',
          price: '190.99'
        },
        {
          id: 7,
          title: 'Ножик керамбит',
          img: 'keramb.jpg',
          desc: 'Красивенький кривой ножик',
          category: 'ножики типа 1',
          price: '10.99'
        },
        {
          id: 8,
          title: 'Ножик финка и ножны',
          img: 'finka.jpg',
          desc: 'Модный нквдшный ножик',
          category: 'ножики типа 2',
          price: '110.99'
        },
        {
          id: 9,
          title: 'Ножик балисонг',
          img: 'balis.png',
          desc: 'Ножик типа ты из фортнайта но в риал лайф',
          category: 'ножики типа 3',
          price: '40.99'
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} /> 
      <Categories chooseCategory={this.chooseCategory} />
      <Items items={this.state.currentItems} onAdd={this.addToOrder} />
      <Footer /> 
    </div>
  )
 }

 chooseCategory(category) {
  if (category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
this.setState({
  currentItems: this.state.items.filter(el => el.category === category)
})
 }

 deleteOrder(id){
this.setState({orders: this.state.orders.filter(el => el.id !== id)})
 }

 addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)
  this.setState({ orders: [...this.state.orders, item]})
 }
}

export default App;
