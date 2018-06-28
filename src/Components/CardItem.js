import React from 'react'

class CardItem extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div className = 'Card'>
        <div className='row'>
          <div className = 'title' >
            { this.props.name }
          </div>
          <div className = ' col-2  start'>
            { this.props.start }
          </div>
          <div className = 'col-2 dest '>
            { this.props.dest }
          </div>
          <div className = 'col-2 excerpt'>
            { this.props.excerpt }
          </div>
        </div>
      </div>
    )
  }
}
export default CardItem