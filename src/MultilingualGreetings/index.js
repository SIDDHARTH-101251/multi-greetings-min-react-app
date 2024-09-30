import {Component} from 'react'
import './index.css'

class MultilingualGreetings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.list, // Access props here
      activeButton: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    }
  }

  onClickButton = id => {
    this.setState({
      activeButton: id,
    })
  }

  renderButtonElements = () => {
    const {list, activeButton} = this.state
    return (
      <ul className="unordered-list">
        {list.map(eachItem => (
          <li key={eachItem.id}>
            <button
              type="button"
              className={
                eachItem.id === activeButton
                  ? 'active-button-style'
                  : 'button-style'
              }
              onClick={() => this.onClickButton(eachItem.id)}
            >
              {eachItem.buttonText}
            </button>
          </li>
        ))}
      </ul>
    )
  }

  renderGreetingImage = () => {
    const {list, activeButton} = this.state
    const greeting = list.filter(eachItem => eachItem.id === activeButton)
    const {imageUrl, imageAltText} = greeting[0]
    return <img src={imageUrl} alt={imageAltText} className="image-style" />
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        {this.renderButtonElements()} {/* Call the function */}
        <div className="image-container">{this.renderGreetingImage()}</div>
      </div>
    )
  }
}

export default MultilingualGreetings
