import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.searchQuery
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    onValueChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleKeyPress(target) {
        if(target.charCode === 13){
            this.props.history.push("/search/" + this.state.searchQuery);   
        }
    }

    render() {
        return (
            <div className="container" id={"search-container"}>
                <div className="row justify-content-md-center">
                    <div className="input-group mb-3 mt-3 col-sm-5 col-12">
                        <input type="text"
                               className="form-control"
                               placeholder="Search for a band"
                               aria-label="Search for band"
                               aria-describedby="band-search"
                               id="searchInput"
                               name={"searchQuery"}
                               value={this.state.searchQuery}
                               onChange={this.onValueChange}
                               onKeyPress={this.handleKeyPress}
                        />
                        <div className="input-group-append">
                            <Link to={"/search/" + this.state.searchQuery}>
                                <button id={"search-btn"}
                                        className="btn btn-outline-secondary"
                                        type="button"
                                >
                                    {/*<i className="fa fa-search"/>*/}
                                    <i className="material-icons">search</i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    searchQuery: PropTypes.string
};

export default withRouter(Search);
