import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'


//Editing the expense with id of {props.match.params.id}
const EditExpensePage = (props) => {
  console.log('props Higher::: ', props )
  return (
    <div>
      id:
      {props.match.params.id}
      <ExpenseForm
        expense={props.expense} // magic line that will update
        onsubmit={(expense) => {
          console.log('updated', expense)
        }}
      />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

/*const mapStateToProps = (state, props) => {
  // console.log('props ', props )
  console.log('state ', state )
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}*/

export default connect(mapStateToProps)(EditExpensePage)