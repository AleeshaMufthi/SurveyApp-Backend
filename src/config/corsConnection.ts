import cors from 'cors'

const corsOptions = {
    origin: "*", 
    methods: ["GET", "POST"],
    credentials: true, 
  };
  
  const corsConnection = cors(corsOptions);
  
  export default corsConnection;