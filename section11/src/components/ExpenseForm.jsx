import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'

// const now = moment();
// console.log(now.format('YYYY-MMM-DD'));

class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        created_at: moment(),
        calendar_focused: false,
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChage = (e) => {
        const amount = e.target.value;

        if(amount.match(/^\d*(\.\d{0,2})?$/))
            this.setState(() => ({ amount }));
    }

    onDateChange = (created_at) => {
        this.setState(() => ({ created_at }))
    }

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendar_focused: focused }))
    }

    render() {
        return (
            <div>
                <form action="">
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus={ true }
                        value={ this.state.description }
                        onChange={ this.onDescriptionChange }
                    />

                    <input
                        type="text"
                        placeholder="Amount"
                        value={ this.state.amount }
                        onChange={ this.onAmountChage }
                    />

                    <SingleDatePicker
                        date={ this.state.created_at }
                        onDateChange={ this.onDateChange }
                        focused={ this.state.calendar_focused }
                        onFocusChange={ this.onCalendarFocusChange }
                        id={ 'calendar' }
                        numberOfMonths={ 1 }
                        isOutsideRange={ () => (false) }
                    />

                    <textarea
                        placeholder="Notes"
                        value={ this.state.note }
                        onChange={ this.onNoteChange }
                    >
                    </textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        )
    }

}

export default ExpenseForm;