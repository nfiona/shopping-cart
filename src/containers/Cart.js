import React, {Component} from 'react'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/CartActions'
import Shelf from '../components/Shelf'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const CartItems = this.props.cart.map( (item,id) => {
      return (
        <li key={id}>
        {item}
        </li>
      )
    })
    return (
      <div>
        <Shelf addItem={this.props.actions.addToCart} />
        <h2> Cart </h2>
          <ol>
            {CartItems}
          </ol>
      </div>
    )
  }
}
 // any time the store is updated, mapStateToProps will be called
 // In mapStateToProps, we're passing in props but not using it. The Cart container component will only be receiving props from redux
 // the state being mapped to props is the redux state
function mapStateToProps(state,props) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  }
}

// returns a wrapper that we need to pass the component into
const connection = connect(mapStateToProps, mapDispatchToProps)
// wraps the Cart component with the store connection configured above
const wrappedComponent = connection(Cart)
// the two lines above are normally combined into: "export default connect(mapStateToProps, mapDispatchToProps)(Cart)""


export default wrappedComponent;
