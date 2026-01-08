// import React from 'react';
// import pho from './assets/images/1.png';
// interface Pet {
//   id: number;
//   title: string;
//   name: string;
// }
// const pets: Pet[] = [
//   { id: 101, title: "dog", name: "Lucky" },
//   { id: 102, title: "cat", name: "kitty" },
// ];
// export const MyView: React.FC = () => {


//   return (
//      <div className="p-4 border rounded" >
//       <img src={pho}/>
//       <h3>Fruit List</h3>
//       <ul>
//         {/* map 的用法不變，但現在 TS 知道 'fruit' 是一個 string */}
//         {pets.map((pet) => (
//           <div key={pet.id}>
//           <span className="font-semibold text-lg">{pet.title}</span>
//           <input  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value={pet.name}/>
//           </div>
         
//         ))}
//       </ul>
//     </div>
    
//   );
// };
