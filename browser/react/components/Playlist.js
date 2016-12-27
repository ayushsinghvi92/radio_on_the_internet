import React from 'react';
import Songs from './Songs';

export default class Playlist extends React.Component {
	constructor (props) {
		super (props);
	}




	render () {
		
		function displaySongOptions (song, i) {
			return <option key = { song.id } value= { i } >{ song.name }</option>
		}

		let playlist = this.props.selectedPlaylist;
		return <div>
			<h3>{ playlist.name }</h3>
			<Songs 
				currentSong = { this.props.currentSong }
				songs={ playlist.songs }
				toggleOne = { this.props.toggleOne }
				isPlaying = { this.props.isPlaying } /> {/** Hooray for reusability! */}
			{ playlist.songs && !playlist.songs.length && <small>No songs.</small> }
			<hr />
			<div className="well">
			    <form className="form-horizontal" noValidate name="songSelect" onSubmit = { this.props.addSong }>
			      <fieldset>
			        <legend>Add to Playlist</legend>
			        <div className="form-group">
			          <label htmlFor="song" className="col-xs-2 control-label">Song</label>
			          <div className="col-xs-10">
			            <select className="form-control" name="song" onChange = { this.props.selectSong }>
			            {
			            	this.props.songs.map(displaySongOptions)
			            }
			            </select>
			          </div>
			        </div>
			        <div className="form-group">
			          <div className="col-xs-10 col-xs-offset-2">
			            <button type="submit" className="btn btn-success">Add Song</button>
			          </div>
			        </div>
			      </fieldset>
			    </form>
		  	</div>
		</div>
	}
}