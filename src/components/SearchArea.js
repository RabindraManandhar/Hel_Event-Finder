import React from 'react';
// import Select from 'react-select'

// const options = [
//     {value: 'music', label: 'music'}
//     {value: 'games', label: 'games'}
// ]


const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s12 m4 l3">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search Event" type="text" onChange={props.handleChange} />
                            <button type="submit" >Search</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchArea;