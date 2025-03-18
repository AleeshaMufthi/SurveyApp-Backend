import cors from 'cors'

const corsOptions = {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
    credentials: true, 
  };
  
  const corsConnection = cors(corsOptions);
  
  export default corsConnection;