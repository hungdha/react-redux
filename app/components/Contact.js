import React from 'react';
import {connect} from 'react-redux';
import NoteForm from './ContactForm.js';
class Contact extends React.Component{
	removeNote(){
		var {dispatch, index} = this.props;
        dispatch({
            type : 'REMOVE_ITEM',
            index : index
        })
	}
	render(){
		return (
				<div className="alert alert-info">
					<h4>{this.props.name}</h4>
					<address>{this.props.address}</address>
					<p>{this.props.phone}</p>
					<button className="btn btn-danger d-inline" onClick={this.removeNote.bind(this)}>delete</button>
				</div>
			)
	}
}


module.exports = connect(
	function(state){
		return { contacts: state.contacts};
	}
)(Contact);
