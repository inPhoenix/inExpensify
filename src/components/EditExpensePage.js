import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'


//Editing the expense with id of {props.match.params.id}
const EditExpensePage = (props) => {
  console.log('props Higher ', props )
  return (
    <div>
      <ExpenseForm
        onsubmit={(expense) => {
          console.log('updated', expense)
        }}
      />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  // console.log('props ', props )
  // console.log('state ', state )
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage)