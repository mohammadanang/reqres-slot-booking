import React from "react";
import HomePage from './HomePage'
import axios from 'axios';

export default class HomePageContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            usersList: [],
            currentPage: 1,
            total: 1
        }
    }

    async componentDidMount(){
        const result = await axios.get(`https://reqres.in/api/users?page=1`);

        this.setState({
            usersList: result.data,
            currentPage: result.data.page,
            total: result.data.total
        })
    }

    handleUser = async (page) => {
        const result = await axios.get(`https://reqres.in/api/users?page=${page}`);

        return result.data;
    }

    handlePageChange = async (value) => {
        this.setState({
            usersList: []
        })

        const user = await this.handleUser(value)

        this.setState({
            currentPage: value,
            usersList: user
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.usersList.length != 0 && (
                        <HomePage usersList={this.state.usersList} currentPage={this.state.currentPage} total={this.state.total} handlePageChange={this.handlePageChange}/>
                    )
                }
            </div>
        );
    }
}
