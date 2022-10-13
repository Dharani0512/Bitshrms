import React from "react";
import { useAppcontext } from "../../context/appContext";
import { FormRow, FormRowSelect } from "..";
import Wrapper from "../../assets/wrappers/SearchContainer";

const AttendanceDetailsSearch = () => {
  const { search, isLoading, handleChange, clearFilters } = useAppcontext();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    clearFilters();
  };
  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };
  return (
    <Wrapper>
      <div className="form">
        <h4>Search Form</h4>
        <form className="form-center">
          <FormRow
            type="text"
            labelText="Emp Name"
            name="search"
            value={search}
            handleChange={handleSearch}
          ></FormRow>

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AttendanceDetailsSearch;
