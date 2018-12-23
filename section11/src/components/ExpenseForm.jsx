import React from 'react';


class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
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