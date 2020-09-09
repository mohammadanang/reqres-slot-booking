import React from "react";
import HomePage from './HomePage'
import axios from 'axios';

export default class HomePageContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            usersList:null,
            pageNum:1
        }
    }

    async componentDidMount(){
        const result = await axios.get(`https://reqres.in/api/users?page=1`);

        this.setState({
            usersList:result.data
        })
      }

      handlePageChange = (value) =>{
          this.setState({
              pageNum:value
          })
      }

    render() {
        return (
            <div>
                <HomePage usersList={this.state.usersList} handlePageChange={this.handlePageChange}/>
            </div>
        );
    }
}
