import React from 'react';

class CardBox extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			fake_data : [
				{
						"status": "succeed",
						"data": [
						{
						"id": 1,
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
						]
				},
				{
						"status": "succeed",
						"data": [
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
						]
				},
				{
						"status": "succeed",
						"data": [
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
						]
				}
			]
		}
	}
	

	render(){
		return (
			<div>
				{
					this.fake_data.length>0?
						fake_data.map( (data) =>
							<CardItem key = {data.id}/>
						)
						: <div></div>
				}
			</div>
		)
	}
}

export default CardBox;