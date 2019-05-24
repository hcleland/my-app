import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owners/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import AnimalDetail from "./animals/AnimalDetail"
import AnimalForm from "./animals/AnimalForm"
import AnimalEditForm from "./animals/AnimalEditForm"
import Login from "./authentication/Login"
import Welcome from "./Welcome"


class ApplicationViews extends Component {

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []

    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    deleteAnimal = (id) => {
        const newState = {};
        AnimalManager.deleteAnimal(id)
            .then(AnimalManager.getAll("animals"))
            .then(animals => {
                console.log("animals", animals);
                newState.animals = animals
            })
            .then(() => {
                this.props.history.push("/animals")
                this.setState(newState)
            })
    }

    addAnimal = (animalObj) => {
        AnimalManager.post(animalObj)
            .then(() => AnimalManager.getAll("animals"))
            .then(animals =>
                this.setState({
                    animals: animals
                })
            ).then(() => this.props.history.push("/animals"));
    }

    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
            .then(() => AnimalManager.getAll("animals"))
            .then(animals => {
                this.setState({
                    animals: animals
                })
            });
    };

    componentDidMount() {
        console.log("APPVIEWS componentDidMount")
        const newState = {};
        AnimalManager.getAll("animals")
            .then(animals => newState.animals = animals)
            .then(() => AnimalManager.getAll("locations"))
            .then(locations => newState.locations = locations)
            .then(() => AnimalManager.getAll("employees"))
            .then(employees => newState.employees = employees)
            .then(() => this.setState(newState))

    }

    render() {
        console.log("APPVIEWS render")
        return (
            <React.Fragment>
                <Route exact path="/" component={Welcome} />
                <Route path="/login" component={Login} />
                <Route path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} {...props} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} {...props}
                        deleteAnimal={this.deleteAnimal} />
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog not found" }
                    }

                    return <AnimalDetail animal={animal}
                        deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal} />
                }}
                />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)