import React from 'react';
import './Search.css';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songdata: [],
            searchTxtValue: '',
        }
    }
    getData(searchValue){
        const url = `https://itunes.apple.com/search?term=${searchValue}&limit=10`;
        const promise = fetch(url);
        promise.then(response =>{
            var p = response.json();
            p.then(res =>{
                this.setState({
                    songdata: res.results,
                })
                console.log("Response: ",this.state.songdata);
            }).catch(err=>{
                console.log("Error inn JSON: ",err);
            })
        }).catch(err => {
            console.log("Error: ",err);
        })
    }
    takeInput(event){
        let data = event.target.value;
        this.searchTxtValue = data;
    }
    searchNow(){
        this.getData(this.searchTxtValue);
    }
    render(){
        return(
            <div className="container">
                <h1 className="heading alert-info text-center shadow">{this.props.title}</h1>
                <SearchBar takeInput={this.takeInput.bind(this)} btClick={this.searchNow.bind(this)}/>
                <SearchList songdata = {this.state.songdata}/>
            </div>
        )
    }
}