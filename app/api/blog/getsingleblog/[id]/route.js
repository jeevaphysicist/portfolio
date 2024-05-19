import { ConnectToDB } from "@utils/database";
import Blogs from "@models/blogs";

// Function to add CORS headers to the response
const addCorsHeaders = (response) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
};

export const GET = async (req, { params }) => {
  try {
    await ConnectToDB();
    let blogs = await Blogs.findOne({ _id: params.id });
    let response = new Response(JSON.stringify(blogs), { status: 200 });
    return addCorsHeaders(response);
  } catch (error) {
    let response = new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    return addCorsHeaders(response);
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await ConnectToDB();
    let blogs = await Blogs.deleteOne({ _id: params.id });
    let response = new Response(JSON.stringify(blogs), { status: 200 });
    return addCorsHeaders(response);
  } catch (error) {
    let response = new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    return addCorsHeaders(response);
  }
};

// Handling OPTIONS method to preflight CORS requests
export const OPTIONS = async () => {
  let response = new Response(null, { status: 204 });
  return addCorsHeaders(response);
};
