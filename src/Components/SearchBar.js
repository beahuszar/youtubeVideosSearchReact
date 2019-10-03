import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        // TODO: call the callback
    }

    render() {
        return (
            <div className="search-bar ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            /* onChange is needed to be able to amend the input value */
                            /* it is a built in callback prop */
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;