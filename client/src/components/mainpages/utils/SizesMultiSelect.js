const { Component, Children, PropTypes } = React
const { Select, Option, utils } = Selectly
const { getToggledOptions } = utils

class SizesOption extends Component {
  render() {
    const { value, isChecked, children } = this.props
    return (
      <Option className="react-select-option" value={value}>
        <input
          type="checkbox"
          className="react-select-option__checkbox"
          defaultValue={null}
          checked={isChecked}
        />
        <div className="react-select-option__label">
          {children}
        </div>
      </Option>
    )
  }
}

export default class SizesMultiSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultValue: 'Select sizes',
      currentValues: []
    }
    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange(value) {
    this.setState({
      currentValues: getToggledOptions(this.state.currentValues, value)
    })
  }

  render() {
    const { defaultValue, currentValues } = this.state

    return (
      <Select
        classPrefix="react-select"
        multiple
        onChange={this._handleChange}
      >
        <button className="react-select-trigger">
          { currentValues.length > 0
            ? currentValues.join(', ')
            : defaultValue
          }
        </button>
        <div className="react-select-menu">
          <ul className="react-select-options">
            <SizesOption value="red" isChecked={currentValues.indexOf('xs') > -1}>
              XS
            </SizesOption>
            <SizesOption value="green" isChecked={currentValues.indexOf('s') > -1}>
              S
            </SizesOption>
            <SizesOption value="blue" isChecked={currentValues.indexOf('m') > -1}>
              M
            </SizesOption>
          </ul>
        </div>
      </Select>
    )
  }
}
