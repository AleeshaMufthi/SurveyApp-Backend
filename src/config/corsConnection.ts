import cors from 'cors'

const corsOptions = {
    origin: process.env.FRONT_END_URL, 
    methods: ["GET", "POST"],
    credentials: true, 
  };
  
  const corsConnection = cors(corsOptions);
  
  export default corsConnection;