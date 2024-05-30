
const Card = ({animal, deleteAnimal}) => {
	return (
		<div className="card">
			<div className="card-header bg-info text-white">
				<h1>{animal.name}</h1>
			</div>
			<div className="card-body">
				<p>{animal.desc}</p>
			</div>
			<div className="card-footer">
				<button className="btn btn-danger" onClick={()=>deleteAnimal(animal.id)}>Delete</button>
			</div>
		</div>
	)
}

export default Card
