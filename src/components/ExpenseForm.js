import React, { Component } from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()
console.log(now)
export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({
      description
    }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    // if (/^\d*(?:\.\d{0,2})?$/.test(amount)) {
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(()=>({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(()=>({ calendarFocused: focused }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // set error state equal to 'Please provide description and amount'
      this.setState(() => ({
        error: 'Please provide description and amount'
      }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render () {
    return (
      <div>
        {this.state.error && (
          <p>
            {this.state.error}
          </p>
        )}
        <form onSubmit={this.onSubmit} action=''>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type='text'
            value={this.state.amount}
            placeholder='Amount'
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder='Add a note for your expense'
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}