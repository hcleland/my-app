import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dog from "./DogIcon.svg";

class AnimalItem extends Component {

    state = {
        saveDisabled: false
    }

    // handleClick = (event) => {
    //     console.log("click", event, this.props.animal.id);
    //     this.setState({
    //         saveDisabled: true
    //     })
    //     this.props.deleteAnimal(this.props.animal.id);
    // }

    render() {
        return (
            <article>
                <h3>{this.props.animal.name}</h3>
                <button onClick={() => {
                    this.setState(
                        { saveDisabled: true },
                        () => this.props.deleteAnimal(this.props.animal.id)
                    )
                }
                }
                    disabled={this.state.saveDisabled}
                    className="card-link"
                >Delete</button>

                <Link to={`/animals/${this.props.animal.id}`}>Details</Link>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                    }}>Edit</button>
            </article>
        )
    }
}

export default AnimalItem;