import AddPlaylist from '../components/AddPlaylist';
import React from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

class AddPlaylistContainer extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			inputValue: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange (e) {
		e.preventDefault();
		this.setState({inputValue: e.target.value})
	}

	handleSubmit (e) {
		e.preventDefault();
		this.props.addPlaylist({ name: this.state.inputValue })
		.then(playlist => hashHistory.push(`/playlists/${playlist.id}`))
		this.setState({inputValue: ''})
	}

	render () {
		return <AddPlaylist 
			value = { this.state.inputValue }
			handleChange = { this.handleChange }
			handleSubmit = { this.handleSubmit } 
			>
			</AddPlaylist>
	}
}

export default AddPlaylistContainer;