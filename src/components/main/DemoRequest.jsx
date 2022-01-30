import React, { Component } from "react";
import { sendMessage } from "../../actions/smsActions";
import { connect } from "react-redux";
import Swal from "sweetalert2";

class DemoRequest extends Component {
  state = {
    user: "",
    phone: "",
    system: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendMessage = () => {
    const { phone, user, system } = this.state;
    if (phone === "" || user === "" || system === "") {
      Swal.fire(
        "Error",
        "Kindly provide all details for easier communication",
        "error"
      );
    } else {
      let data = {
        message: `Hi, am requesting ${system} demo: no. ${phone} & name ${user}`,
      };
      this.props.sendMessage(data);
      this.setState({
        phone: "",
        user: "",
        system: "",
      });
    }
  };

  render() {
    const { user, phone, system } = this.state;
    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="demoRequest"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Request A Demo
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
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Select System
                    </label>
                    <select
                      type="number"
                      className="form-control form-control-sm"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="system"
                      value={system}
                      onChange={this.onChange}
                    >
                      <option value="">--Select System--</option>
                      <option value="Mango Hotel Management System (PoS)">
                        Mango Hotel Management System (PoS)
                      </option>
                      <option value="Wine and Spirit System">
                        Wine and Spirit System
                      </option>
                      <option value="Hardware and Electricals System">
                        Hardware and Electricals System
                      </option>
                      <option value="Kazinet Business Management System">
                        Kazinet Business Management System
                      </option>
                      <option value="DawaSoft Business Management System">
                        DawaSoft Business Management System
                      </option>
                    </select>
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
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { sendMessage })(DemoRequest);
