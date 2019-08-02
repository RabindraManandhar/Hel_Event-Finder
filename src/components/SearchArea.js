import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s12 m4 l3">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search Event" type="text" onChange={props.handleInputChange} />
                            <button type="submit" >Search</button>
                        </div>
                    </form>
                    <form action="" onSubmit={props.handleDistanceSubmit}>
                        <input placeholder="Distance range" type="number" min="0" max="5" range="1" onChange={props.handleDistanceChange} />
                        <button type="submit">Search</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchArea;