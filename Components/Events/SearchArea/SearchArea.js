import React from 'react';
import './SearchArea.css';
import Select from 'react-select';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s12 m4 l3">
                    <Select options={props.options} onChange={props.handleChange} />
                </section>
            </div>
        </div>
    )
}

export default SearchArea;