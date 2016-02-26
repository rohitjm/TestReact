import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/Search.js';
import AddressList from './components/AddressList.js';
import SimpleMap from './components/SimpleMap.js';
//Create a new component, components are things that generate some HTML


class App extends React.Component{
  constructor(props){
    super(props);
    //Initialize top level component with empty arrays for the addressesList and placesList
    this.state = {
      placesList: [],
      addressesList: []
    };
  }

  //remove selected address from the  addressesList state array
  removeAddress(address, event){
    event.preventDefault();
    var addressesList = this.state.addressesList.filter(function(adrs){
      return address !== adrs;
    });
    this.setStates({addressesList:addressesList});
  }

  //update the states of the top level app
  setStates(data){
    console.log('inside setStates!');
    if(data.placesList){
      this.setState({placesList : data.placesList});
    }
    if(data.addressesList){
      this.setState({addressesList : data.addressesList});
    }
  }

  render(){
    return (
      <div>
        <SearchBar addresses = {this.state.addressesList} setStates = {this.setStates.bind(this)}/>
        <AddressList addresses = {this.state.addressesList} setState = {this.setStates.bind(this)} onRemove = {this.removeAddress.bind(this)}/>
        <SimpleMap />
      </div>
    );
  }
};

//display the generated html on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
