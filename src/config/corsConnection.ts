import cors from 'cors'

const corsOptions = {
    origin: "*", 
    methods: ["GET", "POST"],
    credentials: false, 
  };
  
  const corsConnection = cors(corsOptions);
  
  export default corsConnection;