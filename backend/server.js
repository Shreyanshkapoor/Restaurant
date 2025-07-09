// server.js or index.js

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import app from './app.js'; // ✅ Make sure app.js exports the express app

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Just to verify
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`✅ SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
