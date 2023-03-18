import { fileURLToPath } from "url";
import { dirname } from "path";

const getDirname = (fileUrl) => {
  const __filename = fileURLToPath(fileUrl);
  const __dirname = dirname(__filename);

  return __dirname;
};

export default getDirname;
