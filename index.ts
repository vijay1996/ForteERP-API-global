import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import ProcessOperation from './process/DynamicSelect.js';

dotenv.config();

const app = express();
const port = process.env.GLOBAL_PORT;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true
}));

const ADMIN_MOCROSERVICE = process.env.ADMIN_MICROSERVICE;

app.use(cors());

// Global microservice endpoints
app.post('/forte/global/:screen/:call/:search?', (req, res) => ProcessOperation(req, res));

// Maintenance microservice redirects
app.post('/forte/maintenance/:screen/:call/:search?', (req, res) => res.redirect(307, req.params.search ? `${ADMIN_MOCROSERVICE}/${req.params.screen}/${req.params.call}/${req.params.search}` : `${ADMIN_MOCROSERVICE}/${req.params.screen}/${req.params.call}`));
app.post('/forte/953b49e0-3c1f-4acd-a6bb-5ec932e87ccf', (req, res) => res.redirect(307, `${ADMIN_MOCROSERVICE}/953b49e0-3c1f-4acd-a6bb-5ec932e87ccf`));
app.post('/forte/b651117c-ee87-4ba0-9d3d-12755ee84db3', (req, res) => res.redirect(307, `${ADMIN_MOCROSERVICE}/b651117c-ee87-4ba0-9d3d-12755ee84db3`));
app.get('/forte/resend_verification_email/:email', (req, res) => res.redirect(307, `${ADMIN_MOCROSERVICE}/resend_verification_email/${req.params.email}`));
app.get('/forte/confirm_account/:email/:orgId', (req, res) => res.redirect(307, `${ADMIN_MOCROSERVICE}/confirm_account/${req.params.email}/${req.params.orgId}`));

app.listen(port, () => {
  console.log(`[server]: ForteERP-API-global is running at http://localhost:${port}`);
});