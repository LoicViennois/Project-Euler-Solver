import * as express from 'express'
import * as cors from 'cors'
import * as functions from 'firebase-functions'

import { getProblems } from './server/routes/problems'
import { solve } from './server/routes/solve'
import { getCode } from './server/routes/code'

const app = express()

app.use(cors({ origin: true }))

app.route('/solve/:id').get(solve)
app.route('/code/:id').get(getCode)
app.route('/problems').get(getProblems)

export const api = functions
    .region('europe-west1')
    .https.onRequest(app)
