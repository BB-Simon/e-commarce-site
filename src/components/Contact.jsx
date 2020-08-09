import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h1 className="text-center my-5">Contact Us</h1>
      <form>
        <div className="row my-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Your Name"
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Your Phone"
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Your Address"
            />
          </div>
          <div className="col-md-12">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          send <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  width: 70%;
  margin: 60px auto;
`;
