import app from "./server";
import "./db";
import "./models/Video";

const PORT = 4000;

const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
