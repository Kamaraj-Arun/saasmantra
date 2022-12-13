import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        fname: "",
        designation: "",
        email: "",
        contact: "",
      },
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDesignation = this.handleChangeDesignation.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeContact = this.handleChangeContact.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ data: { fname: value } });
  }
  handleChangeDesignation(event) {
    const value = event.target.value;
    this.setState({ data: { designation: value } });
  }
  handleChangeEmail(event) {
    const value = event.target.value;
    this.setState({ data: { email: value } });
  }
  handleChangeContact(event) {
    const value = event.target.value;
    this.setState({ data: { contact: value } });
  }

  handleSubmit(event) {
    alert("Successfully submited!");
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/data", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: [data, ...this.state.data] });
        console.log("Success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div class="bg-light">
            <div class="container bg-light">
              <h1 class="text-center">Lorem Ipsum</h1>
              <div class="row">
                <div class="col-6">
                  <div class=" align-items-center">
                    <div class="col-auto">
                      <label for="inputPassword6" class="col-form-label">
                        Name
                      </label>
                      <input
                        id="inputPassword6"
                        class="form-control"
                        type="text"
                        name="fname"
                        value={this.state.fname}
                        onChange={this.handleChangeName}
                      />
                    </div>
                    <div class="col-auto">
                      <label for="inputPassword6" class="col-form-label">
                        Designation
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={this.state.designation}
                        onChange={this.handleChangeDesignation}
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="align-items-center">
                    <div class="col-auto">
                      <label for="inputPassword6" class="col-form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                    <div class="col-auto">
                      <label for="inputPassword6" class="col-form-label">
                        Contact
                      </label>
                      <input
                        type="text"
                        name="contact"
                        value={this.state.contact}
                        onChange={this.handleChangeContact}
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <input type="submit" value="Submit" class="btn btn-primary" />
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
