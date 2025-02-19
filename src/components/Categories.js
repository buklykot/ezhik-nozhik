import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все товары'
                },
                {
                    key: 'ножики типа 1',
                    name: 'Первая категория'
                },
                {
                    key: 'ножики типа 2',
                    name: 'Ещё категория'
                },
                {
                    key: 'ножики типа 3',
                    name: 'И ещё категория'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => 
            (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
            ))}
      </div>
    )
  }
}

export default Categories