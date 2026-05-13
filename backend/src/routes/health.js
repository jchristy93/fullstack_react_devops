const router = require('express').Router()
const pool = require('../db')

router.get('/', async (req, res) => {

  try {

    const result = await pool.query('SELECT NOW()')

    res.json({
      message: 'Backend + PostgreSQL working',
      databaseTime: result.rows[0].now
    })

  } catch (error) {

    res.status(500).json({
      message: 'Database connection failed'
    })

  }

})

module.exports = router
