import Playlist from '../components/Playlist';
import React from 'react';
import axios from 'axios';


export default class AddSongContainer extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedSong : {}
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	componentDidMount () {
		this.props.selectPlaylist(this.props.routeParams.playlistId)
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.routeParams.playlistId !== this.props.routeParams.playlistId) {
			this.props.selectPlaylist(nextProps.routeParams.playlistId)
		}
	}

	handleSubmit (e) {
		const playlist = this.props.selectedPlaylist;
		e.preventDefault();
		axios.post(`/api/playlists/${playlist.id}/songs`, this.state.selectedSong)
		.then(res => res.data)
		.then(song => this.props.selectPlaylist (playlist.id))
	}

	handleChange (e) {
		this.setState({selectedSong: this.props.songs[e.target.value]});
	}

	render () {
		return <Playlist
		toggleOne = { this.props.toggleOne } 
		currentSong = {this.props.currentSong}
		songs = { this.props.songs }
		selectedPlaylist = { this.props.selectedPlaylist }
		selectedSong = { this.state.selectedSong }
		selectSong = { this.handleChange }
		addSong = { this.handleSubmit } 
		isPlaying = { this.props.isPlaying }
		/>
	}
}
