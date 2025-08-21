
import dummy from './dummy.png'
import Dash from './dashboard.png'
import Ldash from './leaderdash.png'
import Order from './order.png'
import Product from './product.png'
import Sales from './sales.png'
import Message from './message.png'
import Setting from './setting.png'
import Signout from './Signout.png'
import Magnifier from './magnifier.svg'
import United from './United.svg'
import Bell from './Bell.png'
import Man from './Man.png'
import ExportIcon from './Export Icon.png'
import SalesIcon from './SalesIcon.png'
import CostumersIcon from './CostumersIcon.png'
import DiscIcon from './DiscIcon.png'
import OrderIcon from './OrderIcon.png'
import CategoryIcon from './Category.png'
import Filter from './Filter.png'
import Car from './Car.png'
import Bus from './Bus.png'
import Jeep from './Jeep.png'
import Bike from './Bike.png'
import Iron from './Iron.png'
import Phone from './Phone.png'
import AirFryer from './AirFryer.png'
import Toy from './Toy.png'
import Sport from './Sport.png'
import Food from './Food.png'
import Beauty from './Beauty.png'
import Fashion from './Fashion.png'
import Book from './Book.png'

import { color } from 'framer-motion'


export const assets = {
    dummy,
    Dash,
    Ldash,
    Order,
    Product, 
    Sales, 
    Message,
    Setting,
    Signout,
    Magnifier,
    United,
    Bell,
    Man,
    ExportIcon,
    SalesIcon,
    CostumersIcon,
    DiscIcon,
    OrderIcon,
    CategoryIcon,
    Filter,
    Car,
    Bus,
    Jeep,
    Bike,
    Iron,
    AirFryer,
    Phone,
    Toy,
    Sport,
    Food,
    Beauty,
    Fashion,
    Book,
    
}

export const Carditem = [
  {
    image: SalesIcon, 
    price: 1000 ,
    title:"Total Sales" ,
    percentage:"+8% from yesterday",
    color: 'bg-lightpink',
    iconBg: 'bg-red-300'
            
  },
  {
    image: OrderIcon,
    price: 300,
    title:"Total Order", 
    percentage:"+5% from yesterday",
    color: 'bg-lightpeach',
    iconBg: 'bg-orange-300'
  },
  {
      image: DiscIcon,
      price: 5 ,
      title:"Product Sold", 
      percentage:"+1.2% from yesterday",
      color: 'bg-green-100',
      iconBg: 'bg-green-300'


  },
  {
     image: CostumersIcon,
     price: 8 ,
     title:"New Customers" ,
     percentage:"+0.5% from yesterday",
     color: 'bg-purple-100',
     iconBg: 'bg-purple-400'
  }

];

