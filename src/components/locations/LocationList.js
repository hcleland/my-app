import React, { Component } from 'react'


class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                <h2>All Locations</h2>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <h4>{location.name}</h4>
                            <h6>{location.address}</h6>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default LocationList