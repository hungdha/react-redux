import React from 'react';
import Contact from './Contact.js';
import ContactForm from './ContactForm.js';
import { connect } from 'react-redux';
class List extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="row" >
                    <div className="col-md-6" >
                        <ContactForm />
                    </div>
                    <div className="col-md-6" >
                        {
                            this.props.contacts.map((e, i) => {
                                return (
                                    <Contact index={i} key={i} name={e.name} address={e.address} phone={e.phone} />
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = connect(
    function (state) {
        return { contacts: state.contacts }
    }
)(List);
