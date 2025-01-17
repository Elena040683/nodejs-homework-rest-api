import makeMiddleware from "multer/lib/make-middleware";
import app from "../app";
import db from "../lib/db";

const PORT = process.env.PORT || 5000;

db.then(() => {
  app.listen(PORT, async () => {
    await makeMiddleware(process.env.UPLOAD_DIR, { recurcive: true });
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch((err) => {
  console.log(`Server not running. Error: ${err.message}`);
});
