import React from 'react';
import './SearchArea.css'
import Select from 'react-select'

// const options = [
//     { value: 'music', label: 'music' },
//     { value: 'theatre', label: 'theatre' },
// ]


const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s12 m4 l3">
                    <Select options={props.options} onChange={props.handleChange} />
                    {/* <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search Event" type="text" onChange={props.handleChange} />
                            <button type="submit" >Search</button>
                        </div>
                    </form> */}
                </section>
            </div>
        </div>
    )
}

export default SearchArea;