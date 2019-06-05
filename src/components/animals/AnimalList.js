import React, { Component } from 'react';
import AnimalItem from './AnimalItem';

export default class AnimalList extends Component {

    render() {
        console.log("ANIMAL LIST Render");
        return (
            <section>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                    </button>
                </div>

                <h2>All Animals</h2>
                {
                    this.props.animals.map((item) => {
                        return <AnimalItem key={item.id} animal={item} {...this.props}
                            deleteAnimal={this.props.deleteAnimal} />
                    })
                }
            </section>
        )
    }
}

