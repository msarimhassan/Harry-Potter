import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
export default class Game extends Component {
    constructor() {
        super();

        this.state = {
            alldata: [],
            name: '',
            randomName: '',
            randomHouse: '',
            ancestory: '',
            image: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.reset = this.reset.bind(this);
    }
    async componentDidMount() {
        await axios.get('http://hp-api.herokuapp.com/api/characters').then((response) => {
            console.log(response.data);
            this.setState({
                alldata: response.data,
            });
        });
    }
    handleClick() {
        const randomno = Math.floor(Math.random() * 25);
        const randomData = this.state.alldata[randomno];
        this.setState({
            randomName: randomData.name,
            randomHouse: randomData.house,
            ancestory: randomData.ancestry,
            image: randomData.image,
        });
    }
    handleChange(e) {
        this.setState({
            name: e.target.value,
        });
    }
    onKeyup(event) {
        if (event.key === 'Enter') {
            const randNo = Math.floor(Math.random() * 25);
            const randomdata = this.state.alldata[randNo];
            this.setState({
                randomName: randomdata.name,
                randomHouse: randomdata.house,
                ancestory: randomdata.ancestry,
                image: randomdata.image,
            });
        }
    }
    reset() {
        this.setState({
            name: '',
            randomName: '',
            randomHouse: '',
            ancestory: '',
            image: '',
        });
    }

    render() {
        return (
            <div>
                <div class='input-group mb-3'>
                    <input
                        type='text'
                        class='form-control'
                        placeholder='Enter your Name Muggle'
                        aria-label='Enter your Name Muggle'
                        aria-describedby='button-addon2'
                        value={this.state.name}
                        onChange={this.handleChange}
                        onKeyPress={this.onKeyup}
                    />
                    <div class='input-group-append'>
                        <button
                            class='btn btn-outline-secondary'
                            type='button'
                            onClick={this.reset}
                            id='button-addon2'
                        >
                            Reset
                        </button>
                    </div>
                </div>
                <button
                    type='button'
                    className=' btn btn-secondary btn-lg btn-block'
                    onClick={this.handleClick}
                >
                    Generate
                </button>

                <div className='text-center move'>
                    <img src={this.state.image} className='photo img-fluid img-thumbnail' alt='' />
                </div>
                <h1 className='text-center text'>
                    {' '}
                    Hey Muggle!
                    <span aria-labelledby = "img" role='img'>
                        🚀
                    </span>
                </h1>

                <table class='table table-bordered table-dark text-center'>
                    <tbody>
                        <tr>
                            <td>Your Name :</td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td>Your Hogwards Name : </td>
                            <td>{this.state.randomName}</td>
                        </tr>
                        <tr>
                            <td>Your House : </td>
                            <td>{this.state.randomHouse}</td>
                        </tr>
                        <tr>
                            <td>Your Ancestory : </td>
                            <td>{this.state.ancestory}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
