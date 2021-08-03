import { IncomingMessage, ServerResponse } from "http";
import DB from "@database"

const allProducts =  async (request: IncomingMessage, response: ServerResponse) => {
    const db = new DB()
    const allEntries = await db.getAll()
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json')
    const length = allEntries.length;
    response.end(JSON.stringify({ length: length, data: allEntries }))
}

export default allProducts;