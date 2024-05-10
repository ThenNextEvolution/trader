import Userhome from './src/UserHomepage';

const sql = require('mssql');

const config = {
    user: 's',
    password: 'l',
    server: 'localhost:5008', // You can use an IP address or instance name
    database: 'UserDB',
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        enableArithAbort: true
    }
};

async function getUser(email) {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT * FROM Users WHERE Email = ${email}`;
        return result.recordset;
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

module.exports = { getUser };

const bcrypt = require('bcryptjs');
const userData = require('./userData');

export async function login(email, password) {
    const users = await userData.getUser(email);
    if (users.length === 0) {
        return { success: false, message: 'User not found' };
    }
    
    const user = users[0];
    const match = await bcrypt.compare(password, user.PasswordHash);
    if (match) {
        return ( < Userhome /> );
    } else {
        return { success: false, message: 'Password is incorrect' };
    }
}
