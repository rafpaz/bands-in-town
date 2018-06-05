import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
    render() {
        let childElements, showResults = false;
        if (this.props.bandData && this.props.eventsData) {
            showResults = true;
            childElements = this.props.eventsData.map((currEvent, i) => {
                return (
                    <div className="card eventCard" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title"
                                style={{fontFamily: "Montserrat", fontWeight: "bold"}}>{currEvent.venue.name}</h5>
                            <p className="card-text">City: {currEvent.venue.city}</p>
                            <p className="card-text">Country: {currEvent.venue.country}</p>
                            <p className="card-text">Date: {currEvent.datetime.substr(0, currEvent.datetime.indexOf("T"))}</p>
                        </div>
                    </div>
                )
            });

        }
        return (
            <div>
                {showResults &&
                <div className={"container"}>
                    <div id={"results"}>
                        <div className={"row justify-content-center"}>
                            <h1 style={{fontFamily: "Righteous"}}>{this.props.bandData.name}</h1>
                        </div>
                        <div className={"row justify-content-center"}>
                            <img src={this.props.bandData.thumb_url}/>
                        </div>
                        {this.props.bandData && this.props.bandData.facebook_page_url &&
                            <div id="facebook-page" className={"row justify-content-center"}>
                                <i className="fa fa-facebook-square" style={{fontSize: "24px", marginRight: "5px"}}/>
                                <a href={this.props.bandData.facebook_page_url} target={"_blank"}>
                                    {this.props.bandData.facebook_page_url}
                                </a>
                            </div>
                        }

                        <div className="row justify-content-center">
                            <h3 style={{fontFamily: "Righteous", marginTop: "25px"}}>Events</h3>
                        </div>
                        <div id="events-list" className="row justify-content-center">
                            {childElements}
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

Results.propTypes = {
    bandData: PropTypes.object,
    eventsData: PropTypes.object,
};

export default Results;
