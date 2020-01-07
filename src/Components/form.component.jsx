import React from 'react';
import '../App.css';

const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2 mt-5">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City" />
                    </div>
                    <div className="col-md-3 mt-5">
                        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country" />
                    </div>
                    <div className="col-md-3 text-md-left mt-5">
                        <button className="btn btn-success">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    )
}

export default Form;
