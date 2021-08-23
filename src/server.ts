import axios from "axios";
import express from "express";

const app = express();
app.use(express.json());

app.get('/', async (request, response) => {
 const result = await axios.get(`https://simple-api-selection.herokuapp.com/list-games/?title=race`);

 return response.json(result.data.applist.apps.app);
})

app.get("/:id", async (request, response) => {
 const { id } = request.params;

 const result = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${id}`);

 return response.json(result.data)
})

app.listen(3335, () => {
 console.log("Server started on port 3335!");
});
