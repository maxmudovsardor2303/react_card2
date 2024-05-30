import React, { useState } from 'react'
import Card from './components/card/Card'
import { nanoid } from 'nanoid'

const App = () => {
	const [animal, setAnimal] = useState([
		{id: "123", name: "Lion", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ratione, dolorum placeat fuga amet praesentium voluptatem repudiandae ipsam accusantium?"},
		{id: "321", name: "Owl", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ratione, dolorum placeat fuga amet praesentium voluptatem repudiandae ipsam accusantium?"},
		{id: "213", name: "Alligator", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ratione, dolorum placeat fuga amet praesentium voluptatem repudiandae ipsam accusantium?"}
	])
	const [form, setForm] = useState({})
	const handleChange =(event)=>{
		let {name, value} = event.target
		setForm({...form, [name]:value})
	}
	const handleSubmit =(event)=>{
		event.preventDefault();
		const id = nanoid();
		const payload = {...form, id}
		animal.push(payload)
		setAnimal([...animal])
	}
	const deleteAnimal =(id)=>{
		const new_animal = animal.filter(item => item.id !== id)
		setAnimal([...new_animal])
	}
	return (
		<>
			<div className="container">
				<div className="row my-4">
					<div className="col-md-8 offset-2">
					<div className="card">
						<form id='submit' onSubmit={handleSubmit}>
						<div className="card-header bg-info">
							<input type="text" onChange={handleChange} placeholder='Animal name...' name='name' className='form-control border-black'/>
						</div>
						<div className="card-body">
							<textarea name="desc" onChange={handleChange} cols="30" rows="10" placeholder='Description' className='form-control'></textarea>
						</div>
						<div className="card-footer">
							<button type='submit' className='btn btn-primary' form='submit'>Add</button>
						</div>
						</form>
					</div>
					</div>
				</div>	
				<div className="row">
					{
						animal.map((item, index) => (
							<div className="col-md-4 my-4" key={index}>
								<Card animal={item} deleteAnimal={deleteAnimal}/>
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}

export default App
