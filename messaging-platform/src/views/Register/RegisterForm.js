const React = require('react')

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            email: '',
            firstName: '',
            lastName: '',
            age: '',
            birthDate: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        var partialState = {};
        partialState[name] = value;
        this.setState(partialState);
    }

    handleSubmit(event) {
        event.preventDefault();
        registerUser(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </label><br />
                <label>
                    Last Name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </label><br />
                <label>
                    Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </label><br />
                <label>
                    Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


function registerUser(data) {
    console.log('in register user');
    console.log(data);
    
    fetch('/user/register', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then((response) =>
            console.log("registering" + response));
            
}

export default RegisterForm;