import express from 'express';
import { sendReservation } from '../controllers/reservation.js';

const Router= express.Router();

Router.post('/send',sendReservation);

export default Router;