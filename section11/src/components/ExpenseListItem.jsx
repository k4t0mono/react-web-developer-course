import React from 'react';

const ExpenseListItem = ({ description, amount, created_at}) => (
    <div>
        <h3>{ description }</h3>
        <p>{ amount } -- { created_at }</p>
    </div>
)

export default ExpenseListItem;