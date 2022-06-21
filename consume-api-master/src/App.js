import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css';

function App() {

	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios.get("https://rickandmortyapi.com/api/character")
			.then((response) => {
				setPosts(response.data.results)
				console.log(response.data.results)
				setLoading(false)
			})
	}, [])

	if (loading) {
		return (
			<div className='loading'>
				<h1>loading...</h1>
			</div>
		)
	}

	return (

		<div className="app">

			<div className="cards">

				{posts.map((post, Key) => {
					return (
						<div className="card" Key={Key} >
							<div className="card-body" >

								<h1> {post.name} </h1>

								<img src={post.image} />

								<div className='line'></div>
								<h2>{post.status}</h2>
							</div>
						</div>
					)
				})}



			</div>

		</div>
	)

}

export default App;

