import express from "express";
import { averageData } from "./data.js";


const app = express();
app.use(express.json());
const port = 5000;

app.post("/average", (req, res) => {
    try{

        const {reqNum} = req.body;

        if(typeof reqNum !== "number" || !Number.isFinite(reqNum)){
            return res.status(400).json({message:"Input Data Type Missmatch"});
        }

       averageData.nums.push(reqNum);
       averageData.counts += 1;

       let total  = averageData.nums.reduce((acc, val) =>  val +acc, 0);
    

        return  res.status(200).json({
            message: {
                "Average" : total/averageData.counts,
                "Array" : averageData.nums,
                "Count" : averageData.counts
            }
           
        });

    }catch(error){
        console.log(error);
       return res.status(500).json({message:"Internal Server Error"});
    }
    

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})