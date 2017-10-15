import React from 'react';
import { connect } from 'react-redux';
class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var { dispatch } = this.props;
        dispatch({
            type: 'ADD_ITEM',
            item: {
                name: this.refs.name.value,
                age: this.refs.age.value,
                address: this.refs.address.value,
                company: this.refs.company.value,
                phone: this.refs.phone.value,
                isActive: this.refs.isActive.value,
                email: this.refs.email.value,
                gender: this.refs.gender.value
            }
        });
        dispatch({
            type: 'TOOGLE_IS_ADDING'
        });
    }
   
    toggle() {
        var { dispatch } = this.props;
        dispatch({
            type: 'TOOGLE_IS_ADDING'
        });
    }
    render() {
        if (this.props.isAdding)
            return (
                <div>
                    <h3>Add a new Contact</h3>
                    <form onSubmit={this.handleSubmit} name="contactForm" className="contactform"  >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input id="name" type="text" ref="name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender1">Gender:</label>
                            <input id="gender1" type="radio" ref="gender" name="gender" defaultChecked />Male
                            <input id="gender2" type="radio" ref="gender" name="gender" />Female
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age:</label>
                            <input id="age" type="text" ref="age" className="form-control" value="30" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company:</label>
                            <input id="company" type="text" ref="company" className="form-control" value="Company Name Inc" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="text" ref="email" className="form-control" value="yourmail@domain.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input id="phone" type="text" ref="phone" className="form-control" value="+84 09000111292" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="isActive">Active:</label>
                            <input id="isActive" type="checkbox" ref="isActive" checked />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Address:</label>
                            <textarea id="address" className="form-control" type="text" ref="address" placeholder="enter your note" >
                                {this.state.fields["address"]}
                            </textarea>
                        </div>
                        <button className="btn btn-primary" type="submit" >Save</button>
                        <button className="btn btn-default" type="button" onClick={this.toggle} >Cancel</button>
                    </form>
                </div>
            )
        return (<button onClick={this.toggle} className="btn btn-primary">Add New</button>)
    }
}

//module.exports = NoteForm;
module.exports = connect(
    function (state) {
        // share more
        return { isAdding: state.isAdding };
    }
)(ContactForm);
