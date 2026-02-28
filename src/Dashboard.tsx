import {Warehouses} from "./features/warehouses/Warehouses.tsx";
import {Goods} from "./features/goods/Goods.tsx";
import type {FC} from "react";

export const Dashboard: FC = () => {

  return (
    <div>
     <Warehouses />
        <Goods />
    </div>
  )
}
