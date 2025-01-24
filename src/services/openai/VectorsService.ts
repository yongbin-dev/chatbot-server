import env from "dotenv";
import OpenAI from "openai";

env.config();

const openai = new OpenAI();
const vectorStores = openai.beta.vectorStores;

// const fileStreams = ["./data/test.pdf", "./data/test2.pdf"].map((path) =>
//   fs.createReadStream(path)
// );

class VectorsService {}

export default VectorsService;
