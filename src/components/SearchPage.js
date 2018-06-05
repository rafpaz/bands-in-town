import React, {Component} from 'react';
import Search from "./Search";
import Results from "./Results";
import bandsAPI from "../bandsAPI";

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifsData: {},
            showResults: false,
            searchQuery: this.props.match.params.query,
        };

        this.onSearch = this.onSearch.bind(this);
    }

    componentWillReceiveProps(newProps){
        this.setState({
            searchQuery: newProps.match.params.query,
            },
            function(){
                this.onSearch();
            });
    }

    componentDidMount(){
        this.onSearch();
    }

    onInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSearch() {
        this.setState({
            gifsData: {},
        });
        bandsAPI.search(this.state.searchQuery)
            .then(data => {
                this.setState({
                    gifsData: data,
                    showResults: true,
                });
            });
    }

    render() {
        return (
            <div className="App">
                <Search
                    searchQuery={this.state.searchQuery}
                />
                {this.state.showResults &&
                <Results
                    resultData={this.state.gifsData}
                    searchQuery={this.state.searchQuery}
                />
                }
            </div>
        );
    }
}

export default SearchPage;
