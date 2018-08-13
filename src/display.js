import React, { Component } from 'react';

class DisplayContent extends Component {
    render() {
        return (
            <div className="display">

                <h4><b>Employee Entries</b></h4>
                <div className="names">
                    {
                        this.props.empentries.map(element => {
                            return (
                                <p>{element}</p>
                            )
                        })
                    }
                </div>
                <div className="times">
                    {
                        this.props.empnames.map(element => {
                            return (
                                <p>{element}</p>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default DisplayContent;