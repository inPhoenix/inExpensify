import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

// dont forget the destructure {}
export const LoginPage = ( { startLogin } ) => (
  <div>
    <button onClick={startLogin}>
      Login</button>
  </div>
)

// export class LoginPage extends Component {
//   render() {
//     const { startLogin } = this.props
//     return (
//       <div>
//         <button
//           onClick={startLogin}
//         >
//           Login</button>
//       </div>
//     )
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

//Correction:
export default connect(undefined, mapDispatchToProps)(LoginPage)

//Incorrect:
//export default connect(undefined, mapDispatchToProps(LoginPage))