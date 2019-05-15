import React from 'react';
import Character from './character.view.js';
import axios from 'axios';
const UsersAPI = axios.create({
    baseURL: `https://rickandmortyapi.com/api/`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'}
})

export default class CharacterList extends React.Component{
    constructor(props){
        super(props);
        this.id = 1;
    }

    state = {
        users : [],
        loading: true
    }

    componentDidMount = async () => {
        const response = await UsersAPI.get(`character/?page=${this.id}`);
        let users = response.data.results.map(user => {
            return  (
                <Character.Wrapper>
                    <Character.Picture src = {user.image}></Character.Picture>
                    <Character.Description>{user.name}</Character.Description> 
                </Character.Wrapper>
                )
        })
        this.setState({
            users : users,
            loading: false
        })
    }

    inceaseId = () => {
        this.setState({
            loading:true
        });
        this.id++;
        if (this.id > 1) {
        this.componentDidMount();
        }
    }

    reduceId = () => {
        this.setState({
            loading:true
        });
        this.id--;
        if (this.id >= 1) {
        this.componentDidMount();
        }
    }

    render(){
        let data;
        if (this.state.loading){
            data = <Character.Image src="./images/loading.gif"/>
        }else{
            data = <Character.Box>
                {this.state.users}
                </Character.Box>
        }
        return  (
            <div>
                {data}
                <Character.Buttons>
                    <Character.Button onClick = {this.reduceId} disabled = {this.id === 1 }>Prev</Character.Button>
                    <Character.Button onClick = {this.inceaseId} disabled = {this.id === 25}>Next</Character.Button>
                </Character.Buttons>
            </div>
                )
    }
}

    
    







    