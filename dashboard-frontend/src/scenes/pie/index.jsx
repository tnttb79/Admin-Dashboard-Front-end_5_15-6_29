import PieChart from "../../components/PieChart";
import Header from "../../components/Header";
import { Box } from "@mui/material"

const data =[
  {
    "id": "lisp",
    "label": "lisp",
    "value": 245,
    "color": "hsl(352, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 361,
    "color": "hsl(78, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 312,
    "color": "hsl(297, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 340,
    "color": "hsl(328, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 250,
    "color": "hsl(20, 70%, 50%)"
  }
]
 
const Pie = () => (
    <Box m="0px 20px 0px 20px">
        <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
        <Box height="75vh">
            <PieChart data={data}/>
        </Box>
    </Box>
)

export default Pie;
