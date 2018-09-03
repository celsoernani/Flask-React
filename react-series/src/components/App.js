import React from 'react';
import PlacarContainer from './PlacarContainer';


export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			partida: {
				estadio: null,
				data: null,
				gols_casa: null,
				gols_visitante: null,
			},

			casa: {
				nome: null,
			},
			visitante: {
				nome: null,
			},
		};
	}

	componentDidMount() {
		this.dados();
	}

	dados() {
		fetch('http://localhost:5000/dados', {
				method: 'POST',
				body: JSON.stringify({
					id: "1"
				}),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},

			}).then(response => response.json())
			.then(responseJson => {

				// mostrando o json recebido de volta pelo Flask
				console.log(responseJson)

				//criando uma variavel partida
				var partida = this.state.partida
				
				//criando uma variavel para o time da casas		
				var casa = this.state.casa

				//criando uma variavel para o time de fora	
				var visitante = this.state.visitante
				
				//setando as variaveis criadas anteriormente com os valores vindo da resposta do json, vindo la do flask
				partida.estadio = responseJson.estadio
				partida.data = responseJson.data
				partida.gols_casa = responseJson.gols_casa
				partida.gols_visitante = responseJson.gols_visitante
				casa.nome = responseJson.time_casa
				visitante.nome = responseJson.time_visitante

			

				this.setState({
					partida: partida,
					casa: casa,
					visitante: visitante

				})

				console.log("Partida Cadastrada")

			})
	}

	render() {
		return <PlacarContainer { ...this.state
		}
		/>

	}
}