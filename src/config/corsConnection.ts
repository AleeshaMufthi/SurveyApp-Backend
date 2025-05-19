import cors from 'cors'

const corsOptions = {
    origin: "*", 
    methods: ["GET", "POST"],
    Credential:true,
    
  };
  
  const corsConnection = cors(corsOptions);
  
  export default corsConnection