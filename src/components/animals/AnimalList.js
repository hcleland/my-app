import React, { Component } from 'react';
import AnimalItem from './AnimalItem';
import { withRouter } from 'react-router'

export default class AnimalList extends Component {

    render() {
        return (
            <section className="animals">
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }}>Admit Animal</button>
                </div>
                <h2>All Animals</h2>
                {
                    this.props.animals.map((item) => {
                        return <AnimalItem key={item.id} animal={item} {...this.props} />
                    })
                }
            </section>
        )
    }
}

