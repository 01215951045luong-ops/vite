import React from "react";
import './Pay.css';
import pho from './assets/images/88.png';
import ga from './assets/images/90.png';
import gaxao from './assets/images/91.png';
import boxao from './assets/images/92.png';
import canh from './assets/images/93.png';
import mibo from './assets/images/94.png';
import chagio from './assets/images/96.png';
import goicuon from './assets/images/97.png';


interface Noodle {
  id: number;
  name: string;
  price: number;
  image: string;
}
const Noodles: Noodle[] = [
   { id: 1, name: "牛肉河粉", price: 140, image:pho },
  { id: 2, name: "雞肉河粉", price: 120, image:ga  },
   { id: 3, name: "炒雞肉河粉", price: 110, image:gaxao },
   { id: 4, name: "炒牛肉河粉", price: 130, image:boxao },
  { id: 5, name: "牛肉湯", price: 80, image:canh },
   { id: 6, name: "牛肉麵", price: 100, image:mibo},
   { id: 7, name: "炸春捲", price: 80, image:chagio },
   { id: 8, name: "春捲", price: 80, image:goicuon },
];

export const Pay: React.FC = () => {
  const [quantities, setQuantities] = React.useState<Record<number, number>>({});
  const [showOrder, setShowOrder] = React.useState(false);

  const handleQtyChange = (id: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value < 0 ? 0 : value,
    }));
  };
  const orderedItems = Noodles.filter(
  (noodle) => (quantities[noodle.id] || 0) > 0
);

  const totalPrice = Noodles.reduce((total, noodle) => {
    const qty = quantities[noodle.id] || 0;
    return total + qty * noodle.price;
  }, 0);

  return (
    
    
    <div className="menu ">
      <h3 className="text-2xl font-bold mb-6 text-orange-600 text-center"> 菜單</h3>

      {Noodles.map((noodle) => {
        const qty = quantities[noodle.id] || 0;

        return (
            
          <div
            key={noodle.id}
            className="flex items-center gap-4 mb-4 border-b pb-3"
          >
            {/* anh */}
            <img
              src={noodle.image}
              alt={noodle.name}
              className="w-20 h-20 object-cover rounded"
            />

            {/* thong tin */}
            <div className="flex-1">
              <p className="font-semibold">{noodle.name}</p>
              <p className="text-orange-500 font-medium">{noodle.price} 元</p>
            </div>
              {/* nhap so luong */}
              <input
                type="number"
                min={0}
                value={qty}
                 onChange={(e) =>
                  handleQtyChange(noodle.id, Number(e.target.value))
                }
                className="mt-2 w-20 p-1 border rounded"
              />
          </div>
        );
      })}

      <div className="text-right text-lg font-bold mt-4">
        總金額：{totalPrice} 元
      </div>
       
        <button
          onClick={() => setShowOrder(true)}
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600
                     text-white py-3 rounded-lg font-semibold transition"
        >
            送出訂單
        </button>

        {showOrder && (
    <div className="mt-6 p-4 border rounded bg-white">
    <h4 className="font-bold text-lg mb-3 text-center">
       訂單內容
    </h4>

    {orderedItems.map((item) => {
      const qty = quantities[item.id];
      return (
        <div
          key={item.id}
          className="flex justify-between border-b py-2"
        >
          <span>{item.name} × {qty}</span>
          <span>{item.price * qty} 元</span>
        </div>
      );
    })}

    <div className="text-right font-bold mt-3">
      總金額：{totalPrice} 元
    </div>
  </div>
)}
        
    </div>
   
   

   
  );
};


