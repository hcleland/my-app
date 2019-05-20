import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import Joke from "./joke/joke";
import AnimalList from './animals/AnimalList';
import LocationList from "./locations/LocationList";


export default class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animals = [
        { id: 1, name: "Spike" },
        { id: 2, name: "Dug" },
        { id: 3, name: "Bonkers" },
        { id: 4, name: "Flynn" }
    ]

    state = {
        id: 75,
        type: "general",
        setup: "What do you give to a lemon in need?",
        punchline: "Lemonaid.",
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animals

    }

    setNewJokeState = (jokeObj) => {
        //setState is built into react. setState is being invoked and passed an object
        this.setState({
            id: jokeObj.id,
            type: jokeObj.type,
            setup: jokeObj.setup,
            punchline: jokeObj.punchline
        })
    }
    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                <EmployeeList employees={this.state.employees} />
                <hr></hr>
                <Joke type={this.state.type}
                    setup={this.state.setup}
                    punchline={this.state.punchline}
                    setNewJokeState={this.setNewJokeState} />
                <hr></hr>
                <LocationList locations={this.state.locations} />
                <hr />
                <AnimalList animals={this.state.animals} />
            </div>
        );
    }
}