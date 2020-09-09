import React from "react";
import HomePage from './HomePage'
import axios from 'axios';

export default class HomePageContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            usersList:null
        }
    }

    async componentDidMount(){
        const result = await axios.get(`https://reqres.in/api/users?page=2`);

        this.setState({
            usersList:result.data
        })
      }

    render() {
        return (
            <div>
                <HomePage usersList={this.state.usersList}/>
            </div>
        );
    }
}
