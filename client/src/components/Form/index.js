import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form className="m-4">
      <div className="form-group">
        <label htmlFor="Query">
          <h3><strong>Book Title</strong></h3>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Enter a book title here"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-success float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;