/**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - user
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - confirm_password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirm_password:
 *                 type: string
 *               balance:
 *                 type: number
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Bad request (e.g. validation error)
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - user
 *     summary: Log in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid email or password
 */

/**
 * @swagger
 * /forgot:
 *   post:
 *     tags:
 *       - user
 *     summary: Request password reset
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset link sent
 *       400:
 *         description: Email not found
 */

/**
 * @swagger
 * /reset:
 *   post:
 *     tags:
 *       - user
 *     summary: Reset user password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reset successful
 *       400:
 *         description: Invalid token or request
 */

/**
 * @swagger
 * /dashboard:
 *   get:
 *     tags:
 *       - user
 *     summary: Get user dashboard data
 *     responses:
 *       200:
 *         description: Dashboard data retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 balance:
 *                   type: number
 *                 transaction:
 *                   type: array
 *                   items:
 *                     type: object
 *       400:
 *         description: Unable to retrieve dashboard data
 */


/**
 * @swagger
 * /loan:
 *   post:
 *     tags:
 *       - transaction
 *     summary: Submit and retrieve loan transaction data
 *     description: Allows a user to request a loan and view loan details such as amount and remarks.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - remarks
 *               - amount
 *             properties:
 *               remarks:
 *                 type: string
 *                 description: Notes or comments about the loan
 *               amount:
 *                 type: number
 *                 description: Loan amount requested
 *     responses:
 *       200:
 *         description: Loan transaction processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 remarks:
 *                   type: string
 *                 amount:
 *                   type: number
 *                 history:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       date:
 *                         type: string
 *                       status:
 *                         type: string
 *       400:
 *         description: Failed to process loan transaction
 */

/**
 * @swagger
 * /sent:
 *   post:
 *     tags:
 *       - transaction
 *     summary: Submit and retrieve sent money transaction
 *     description: Logs and returns a transaction where funds were sent to another user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - amount
 *               - remarks
 *             properties:
 *               email:
 *                 type: string
 *                 description: Recipient's email address
 *               remarks:
 *                 type: string
 *                 description: Description or purpose of the transaction
 *               amount:
 *                 type: number
 *                 description: Amount of money sent
 *     responses:
 *       200:
 *         description: Sent transaction completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 remarks:
 *                   type: string
 *                 amount:
 *                   type: number
 *                 history:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       date:
 *                         type: string
 *                       status:
 *                         type: string
 *       400:
 *         description: Failed to process sent transaction
*/

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - transaction
 *     summary: Retrieve a transaction record
 *     description: Returns the details of a transaction, including the email, amount, transaction type, and remarks.
 *     responses:
 *       200:
 *         description: Transaction record retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: "divine@gmail.com"
 *                 amount:
 *                   type: number
 *                   example: 30
 *                 transation_type:
 *                   type: string
 *                   example: "sent"
 *                 remarks:
 *                   type: string
 *                   example: "sent to divine"
 *       400:
 *         description: Error retrieving transaction details
 */

