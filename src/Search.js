import React, { Component } from 'react';
import './Search.css';


class Search extends Component {
	static defaultProps = {
		placeholder: "Search...",
		alignIcon: "left",
		inputBoxFontColor: "black",
		inputBoxFontSize: "1.5rem",
		inputBoxBorderColor: "#ccc",
		inputBoxHeight: "50px"
	}
	constructor(props){
		super(props);
		this.state = {
				data: this.props.dataList,
				searchContent: " ",
				result: [],
				filteredKeyResults: []
		}
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	// Search on key
	filterdata = () => {
    	const filteredKeyResults = [];
    	const searchOnKey = this.props.searchOnKey;
    	const dataList = [...this.state.data];
    	for(let data of dataList) {
				if(data[searchOnKey]) filteredKeyResults.push(data);				
			}
    	this.setState({filteredKeyResults: filteredKeyResults})
  	}

  componentDidMount() {
    this.filterdata();
  }

	// onChange Handler
	onChangeHandler(event){
		var searchResult = [];
		const input = event.target.value.toUpperCase();
		const states = [...this.state.filteredKeyResults];
		
		for(var i = 0; i < states.length; i++){
								
			if(states[i][this.props.searchOnKey].toUpperCase().indexOf(input) !== -1) searchResult.push(states[i]);
		}

		if(!event.target.value){
			searchResult= []
		};
		

		this.setState({
			result: searchResult
		});
	}

	render(){
		return(
			<div className="Search">
				<input 
					style={{
						color:this.props.inputBoxFontColor, 
						fontSize:this.props.inputBoxFontSize, 
						border:`5px solid ${this.props.inputBoxBorderColor}`,
						height:this.props.inputBoxHeight
						}}
					className={`Search-Bar ${this.props.alignIcon} ${this.props.disableIcon === "true" ? "disabled" : " "} `} 
					placeholder={this.props.placeholder} 
					type="text" 
					name={this.state.searchContent} onChange={this.onChangeHandler} 						
				/>

				<ul className="list">
					{this.state.result.map(items =>
						<li key={items.key}>{items[this.props.searchOnKey]}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Search;