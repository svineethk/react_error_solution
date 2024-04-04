// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchValue: ''}

  onTypeSearchInput = event => {
    const searchInputValue = event.target.value.toLowerCase()
    this.setState({searchValue: searchInputValue})
  }

  onCopy = suggestion => {
    this.setState({searchValue: suggestion})
  }

  render() {
    const {searchValue} = this.state
    const {suggestionsList} = this.props
    const filteredSuggestionList = suggestionsList.filter(eachList =>
      eachList.suggestion.includes(searchValue),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <div className="input-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onTypeSearchInput}
              value={searchValue}
            />
          </div>
          <div className="suggest-search-container">
            <ul>
              {filteredSuggestionList.map(eachList => (
                <SuggestionItem
                  eachList={eachList}
                  key={eachList.id}
                  onCopy={this.onCopy}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
