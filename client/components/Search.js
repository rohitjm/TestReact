
import React from 'react';
import searchYelp from '../utils/yelp.js';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {term:'test state'};
  }

  render() {
    return (
      <div>
        <h4>latitude <input class='text' id='lat' type='text' name='latitude' placeholder='latitude' required/></h4>
        <h4>longitude <input class='text' id='long' type='text' name='longitude' placeholder='longitude' required/></h4>
        <input type='submit' value='Add' onClick = {() => this.addAddress(this.props.coordinates, this.props.setStates)}/>

        <br/><br/>
        <input type='submit' value='Search' onClick = {() => this.searchPlaces(null, this.props.setStates)}/>
        <br/><br/>
      </div>
  )}

  //Add an address to the address list
  addAddress = function (coordinates, callback) {
    var lat = $('#lat').val();
    var long = $('#long').val();

    //var address = $('#address').val();
    coordinates[0] = {long,lat};
    console.log(coordinates);
    callback({coordinates: coordinates});
  }

  //Make GET request to the backend to fetch relevant places from YELP
  searchPlaces = function (options, callback) {
    console.log('Inside search places..');
    var term = $('#term').val();
    //var address = $('#address').val();

    searchYelp(term, lat, long, function(data){
      console.log("data: ",data);
      callback({placesList: data.businesses});
    })();

    // codeAddress(address, function(lat, lng){
    //   var query = {lat:lat, lng:lng, term:term};
    //   $.get('http://localhost:8080/places', query)
    //     .done(function (data){
    //       callback({placesList: data.businesses});
    //   }).fail(function (error){
    //     console.error('Yelp: Failed to receive places!', error);
    //   });
    // });
  };
};

export default SearchBar;


// <h4>What? <input class='text' id='term' type='text' name='term' placeholder='what you want to do...' required/></h4>
// <h4>Who? <input class='text' id='address' type='text' name='address' placeholder='address...' required/></h4>
// <input type='submit' value='Add' onClick = {() => this.addAddress(this.props.addresses, this.props.setStates)}/>
