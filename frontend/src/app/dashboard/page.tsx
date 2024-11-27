'use client'
import { Package, TrendingDown, TrendingUp ,Tag, CheckCircle} from "lucide-react"
import { CardExpenseSummary } from "./CardExpenseSummary"
import { CardPopularProducts } from "./CardPopularProducts"
import { CardPurchaseSummary } from "./CardPurchaseSummary"
import { CardSalesSummary } from "./CardSalesSummary"
import { StatCard} from "./StatCar"



export const Dashboard= () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                        xl:overflow-auto gap-10 pb-4 custom-grid-rows
                        ">
        <CardPopularProducts/>
        <CardPurchaseSummary/>
        <CardSalesSummary/>
        <CardExpenseSummary/>
        <StatCard title=""
        primaryIcon={<Package className="text-blue-600 w-6 h-6"/>}
        dateRange="22-29- de noviembre 2024"
        details ={[
          {title:"Venta de laptops",
          amount:"150.00 " ,
          changePercentage:30,
          IconComponent:TrendingUp,
        },
        {title:"Ventas de computadoras ",
          amount:"150.00 " ,
          changePercentage:30,
          IconComponent:TrendingDown,
        },
        ]}/>
        <StatCard title=""
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6"/>}
        dateRange="22-29- de noviembre 2024"
        details ={[
          {title:"Venta de laptops",
          amount:"150.00 " ,
          changePercentage:30,
          IconComponent:TrendingUp,
        },
        {title:"Ventas de computadoras ",
          amount:"150.00 " ,
          changePercentage:30,
          IconComponent:TrendingDown,
        },
        ]}/>

        <StatCard title=""
        primaryIcon={<Tag className="text-blue-600 w-6 h-6"/>}
        dateRange="22-29- de noviembre 2024"
        details ={[
          {title:"Venta de laptops",
          amount:"150.00 " ,
          changePercentage:30,
          IconComponent:TrendingUp,
        },
        {title:"Ventas de computadoras ",
          amount:"150.00 " ,
          changePercentage:30,
          IconComponent:TrendingDown,
        },
        ]}/>



    </div>
  )
}
