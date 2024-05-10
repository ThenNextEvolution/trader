require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const bcrypt = require('bcryptjs'); // Ensure bcryptjs is installed
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const config = {
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || 'L3tsg0sql',
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'tRader',
    port: parseInt(process.env.DB_PORT, 10) || 5008,
    options: {
        encrypt: process.env.DB_ENCRYPT === 'true',  // Use 'true' for Azure
        enableArithAbort: true  // this is necessary for newer versions of SQL Server
    }
};

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        await sql.connect(config);
        const result = await sql.query`SELECT username, password FROM Users WHERE email = ${email}`;

        if (result.recordset.length > 0) {
            const validPassword = bcrypt.compareSync(password, result.recordset[0].password);
            if (validPassword) {
                res.json({ success: true, message: 'Login successful' });
            } else {
                res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    } finally {
        await sql.close();
    }
});

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
