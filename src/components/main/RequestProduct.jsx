import React, { Component } from "react";
import { sendMessage } from "../../actions/smsActions";
import { connect } from "react-redux";
import Swal from "sweetalert2";

class RequestProduct extends Component {
  state = {
    phone: "",
    user: "",
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendMessage = () => {
    const { phone, user } = this.state;
    const { name } = this.props;
    if (phone === "" || user === "") {
      Swal.fire(
        "Error",
        "Kindly provide all details for easier communication",
        "error"
      );
    } else {
      let data = {
        message: `Hi, am requesting ${name}: no. ${phone} & name ${user}`,
      };
      this.props.sendMessage(data);
      this.setState({
        phone: "",
        user: "",
      });
    }
  };

  render() {
    const { name } = this.props;
    const { phone, user } = this.state;

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Request {name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="user"
                      value={user}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="phone"
                      value={phone}
                      onChange={this.onChange}
                    />
                    <div id="emailHelp" className="form-text">
                      We'll will contact you via the phone provided.
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={this.sendMessage}
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { sendMessage })(RequestProduct);
