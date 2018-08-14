import React, { Component } from 'react';

class EntryContent extends Component {
    render() {
        return (
            <div className="entry">
                <form>
                    <div className="form-group">
                        <label htmlFor="eid">Employee ID:</label>
                        <input type="text" className="form-control w3-input w3-border w3-hover-blue"
                            onChange={this.props.changeValue} id="eid"
                            placeholder="Enter employee id" name="eid" />
                    </div>
                    <div className="form-group">
                        <button type="button" id="swipein" onClick={this.props.setEntry} className="btn btn-primary" >Swipe In</button>
                        <button type="button" id="swipeout" onClick={this.props.changeEntry} className="btn btn-primary" >Swipe Out</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default EntryContent;