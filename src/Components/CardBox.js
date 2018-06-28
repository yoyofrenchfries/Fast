import React from 'react';
import CardItem from './CardItem'
class CardBox extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			Data : [
				{
						"status": "succeed",
						"data": 
						{
						"id": 1,
						"title": "test",
						"time_start": null,
						"time_end": null,
						"description": null,
						"from": 1,
						"to": 2,
						"vehicle": null,
						"num_passenger_max": null,
						"created_at": "2018-06-28T07:27:30.265Z",
						"updated_at": "2018-06-28T07:27:30.265Z"    
						}
						
				},
				{
				
						"status": "succeed",
						"data": 
						{
						"id": 2,
						"title": "test",
						"time_start": null,
						"time_end": null,
						"description": null,
						"from": null,
						"to": null,
						"vehicle": null,
						"num_passenger_max": null,
						"created_at": "2018-06-28T07:27:30.265Z",
						"updated_at": "2018-06-28T07:27:30.265Z"    
						}
						
				},
				{

						"status": "succeed",
						"data": 
						{
						"id": 3,
						"title": "test",
						"time_start": null,
						"time_end": null,
						"description": null,
						"from": null,
						"to": null,
						"vehicle": null,
						"num_passenger_max": null,
						"created_at": "2018-06-28T07:27:30.265Z",
						"updated_at": "2018-06-28T07:27:30.265Z"    
						}
						
				}
			]
		}
	}
	

	render(){
		return (
			<div className='row'>
				{
					//console.log( this)
					this.state.Data.length >0?
						this.state.Data.map( (_data,index) =>
							<CardItem start ={ _data.data.from} dest = {_data.data.to} name = {_data.data.title} excerpt = { _data.data.description} key={index}/>
						)
						: <div></div>
				}
			</div>
		)
	}
}

export default CardBox;