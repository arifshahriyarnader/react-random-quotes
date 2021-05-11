import React, { Component } from 'react';
import axios from 'axios';


class random extends Component {
    state ={
        advice:''
    };
    componentDidMount(){
       this.fetchAdvice();
    }

    fetchAdvice =() =>{
        axios.get('	https://api.adviceslip.com/advice')
        .then((response) =>{
            const{ advice } = response.data.slip
            this.setState({advice});
        })
        .catch((error) =>{
            console.log(error);  
        })
    }
    render() {
        const {advice} = this.state;
        return (
            <div className="random_app">
               <div className="card">
               <h1>{advice}</h1> 
                <button className="button" onClick={this.fetchAdvice}>
                   Click Here
                </button>
               </div>
            </div>
        );
    }
}

export default random;