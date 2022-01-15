import React, { useState } from 'react'

const Dropdown = ({ users, setUserSelected }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (e) => {
        if (e.target.value !=="Choose a user") {
            setSelectedOption(e.target.value);
            setUserSelected(e.target.value);
        } 
    }
    return (
        <select className="form-select"
            value={selectedOption}
            onChange={handleChange}>
            <option defaultValue>Choose a user</option>
            {users.map(user => (
                <option key={user.user_id} value={user.user_id}>{user.user_first_name} {user.user_last_name}</option>
            ))}
        </select>
    )
}

export default Dropdown
