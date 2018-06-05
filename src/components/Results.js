import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import {Link} from 'react-router-dom';


const masonryOptions = {
    transitionDuration: 0,
    gutter: 10
};

class Results extends Component {
    render() {
        let childElements, showResults = false;
        if (this.props.resultData.results) {
            showResults = true;
            childElements = this.props.resultData.results.map(function (gif, i) {
                return (
                    <li key={"gif-" + i} className="gif-result">
                        <Link to={"/single/" + gif.id}>
                            <img src={gif.media[0].tinygif.url} alt={gif.title}/>
                        </Link>
                    </li>
                );
            });
        }
        return (
            <div>
                {showResults &&
                <div>
                    <Masonry
                        className={'results'}
                        elementType={'ul'}
                        options={masonryOptions}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={true}
                    >
                        {childElements}
                    </Masonry>
                </div>
                }

            </div>
        );
    }
}

Results.propTypes = {
    resultData: PropTypes.object,
    searchQuery: PropTypes.string,
};

export default Results;
