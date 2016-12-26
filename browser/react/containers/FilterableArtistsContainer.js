import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtistContainer extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			artists: this.props.artists,
			filterValue: ''
		}
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	handleFilterChange (e) {
		let artists = this.props.artists;
		artists = artists.filter( artist => artist.name.match(e.target.value))
		this.setState({artists: artists, filterValue: e.target.value})
	}

	render () {
		return (
		<div>
			<FilterInput handleChange = { this.handleFilterChange } />
			<Artists artists = { this.state.artists } />
		</div>
		)
	}

}

export default FilterableArtistContainer;