import React, { Component } from 'react'
import { withRouter } from 'react-router'


export default class LocationList extends Component {

    render() {
        console.log("props", this.props);
        return (
            <section className="locations">
                <h2>All Locations</h2>
                {
                    this.props.locations.map(location => (
                        <div key={location.id}>
                            <h2>{location.name}</h2>
                            <h4>{location.address}</h4>
                        </div>
                    )
                    )}
            </section>
        )
    }
}