import React from 'react';

const AddPlaylist = function (props) {
return (
	<div className="well">
	  <form className="form-horizontal" onSubmit = { props.handleSubmit }>
	    <fieldset>
	      <legend>New Playlist</legend>
	      <div className="form-group">
	        <label className="col-xs-2 control-label">Name</label>
	        <div className="col-xs-10">
	          <input className="form-control" type="text" onChange = { props.handleChange } value = { props.value }/>
	        </div>
	      </div>
	      <div className="form-group">
	        <div className="col-xs-10 col-xs-offset-2">
	          <button type="submit" className="btn btn-success" disabled = { props.value.length === 0 || props.value.length > 15 ? true : false }>Create Playlist</button>
	        </div>
	      </div>
	    </fieldset>
	  </form>
	</div>
)}

export default AddPlaylist;