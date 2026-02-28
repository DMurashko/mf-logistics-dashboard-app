import './App.css'
import {Warehouses} from "./features/warehouses/Warehouses.tsx";
import {Goods} from "./features/goods/Goods.tsx";

function Dashboard() {

  return (
    <div>
     <Warehouses />
        <Goods />
    </div>
  )
}

export default Dashboard
