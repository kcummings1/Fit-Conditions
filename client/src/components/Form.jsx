import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <div className="row">
      <div className="col-md-4">
        <input
          type="text"
          name="city"
          placeholder="City..."
          className="form-control"
        />
      </div>
      <div className="col-md-4">
        <input
          type="text"
          name="country"
          placeholder="Country..."
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        <button className="btn btn-info btn-sm p-2">
          Get Weather &nbsp;
          <i class="fa fa-cloud"></i>
        </button>
      </div>
    </div>
  </form>
);

export default Form;
