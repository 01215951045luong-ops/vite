import React from "react";
import './Pay.css'
interface Noodle {
  id: number;
  name: string;
  price: number;
  image: string;
}
const Noodles: Noodle[] = [
  { id: 1, name: "牛肉河粉", price: 140, image:"" },
  { id: 2, name: "雞肉河粉", price: 120, image:"" },
  { id: 3, name: "炒雞肉河粉", price: 110, image:"" },
  { id: 4, name: "炒牛肉河粉", price: 130 , image:""},
  { id: 5, name: "牛肉湯", price: 100, image:"" },
  { id: 6, name: "牛肉麵", price: 80, image:"" },
  { id: 7, name: "炸春捲", price: 80, image:"" },
  { id: 8, name: "春捲", price: 80, image:"" },
];

export const Pay: React.FC = () => {
  const [quantities, setQuantities] = React.useState<Record<number, number>>(
    {}
  );

  const handleQtyChange = (id: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value < 0 ? 0 : value,
    }));
  };

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
            {/* 圖片 */}
            <img
              src={noodle.image}
              alt={noodle.name}
              className="w-20 h-20 object-cover rounded"
            />

            {/* 資訊 */}
            <div className="flex-1">
              <p className="font-semibold">{noodle.name}</p>
              <p className="text-orange-500 font-medium">{noodle.price} 元</p>
            </div>
              {/* 數量輸入 */}
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
       {/* 🛒 送出訂單按鈕 */}
        <button
        
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600
                     text-white py-3 rounded-lg font-semibold transition"
        >
            送出訂單
        </button>

       
      
    </div>
  );
};


