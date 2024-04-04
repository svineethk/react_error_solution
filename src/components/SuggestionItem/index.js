// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachList, onCopy} = props
  const {suggestion} = eachList

  const onCopyItem = () => {
    onCopy(suggestion)
  }

  return (
    <div>
      <li className="list-container">
        <p className="para">{suggestion}</p>
        <button onClick={onCopyItem} className="button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="on-copy"
          />
        </button>
      </li>
    </div>
  )
}

export default SuggestionItem
