import React from 'react';
import Time from './Time';
import Partida from './Partida';
import { throws } from 'assert';

export default class PlacarContainer extends React.Component{
    constructor(){
        super();

        this.state = {
            gols_casa :null,   
            gols_visitante :null,
        };
    }
    componentWillMount() {
		this.carregarGolsiniciais();
	}
    

carregarGolsiniciais(){
    fetch('http://localhost:5000/dados', {
				method: 'POST',
				body: JSON.stringify({
                    id: "1",
				}),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},

			}).then(response => response.json())
			.then(responseJson => {

				this.setState({
                    gols_casa: responseJson.gols_casa,
                    gols_visitante : responseJson.gols_visitante
                });
                console.log(this.state.gols_casa)

			})


}


    
marcarGolCasa(){
		fetch('http://localhost:5000/marcarGol', {
				method: 'POST',
				body: JSON.stringify({
                    id: "1",
                    gol: "0"
				}),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},

			}).then(response => response.json())
			.then(responseJson => {

				this.setState({
                    gols_casa: responseJson.gol
                });
          

			})
    
    
}

marcarGolVisitante(){

    fetch('http://localhost:5000/marcarGol', {
				method: 'POST',
				body: JSON.stringify({
                    id: "1",
                    gol: "1"
				}),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},

			}).then(response => response.json())
			.then(responseJson => {
                

				this.setState({
                    gols_visitante: responseJson.gol
                
                });
          
			})
    
}
    render(){
        //fazer refatorção depois, deixar assim por aprendizado
        //const {partida, casa, visitante} = this.props; this.propos.var é a variavel que é mandadad num banco de dados
        //qualquer duvida olhar na aula 9
        return(
            <div>
                <div style = {{float: "left", "marginRight":"30px"}}> 
                <h3>Casa</h3>
                    <Time nome = {this.props.casa.nome} 
                          gols = {this.state.gols_casa} 
                          marcarGol = {this.marcarGolCasa.bind(this)}/>
                </div>

                <div style = {{float: "left", "marginRight":"30px"}}> 
                    <Partida estadio = {this.props.partida.estadio}
                             data ={this.props.partida.data} 
                             horario ={this.props.partida.horario}
                             />
                </div>
                <div style = {{float: "left", "marginRight":"30px"}}>
                <h3>Visitante</h3> 
                    <Time nome = {this.props.visitante.nome}  
                          gols = {this.state.gols_visitante}
                          marcarGol = {this.marcarGolVisitante.bind(this)}/>
                </div>
            <div style = {{clear: "both"}}></div>
            </div>
        );
    }

}
