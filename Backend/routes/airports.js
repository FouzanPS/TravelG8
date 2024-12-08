import { Router } from 'express';
import fs from 'fs/promises';

const router = Router();

router.get('/airports', async (req, res) => {
    const data = await fs.readFile('../airports.json', 'utf-8');
    const airports = JSON.parse(data);
    res.json(airports.airports);
});

export default router;
