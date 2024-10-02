import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    // if device size is greater than sm then bg-yellow-50
    // if device size is greater than lg then bg-green-50
    <div className='flex justify-between bg-pink-100 shadow-md sm:bg-yellow-50 lg:bg-green-50'>
      <div className='logo-container'>
        <img className='w-20' src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4 font-bold'>
            <Link to='/cart'>Cart: {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//function Header() {
//   return (
//     <div className='navbar bg-base-100'>
//       <div className='flex-1'>
//         <a className='btn btn-ghost text-xl'>food app</a>
//       </div>
//       {/* search */}
//       <div className='form-control'>
//         <input
//           type='text'
//           placeholder='Search'
//           className='input input-bordered w-24 md:w-auto'
//         />
//       </div>
//       <div className='flex-none'>
//         {/* link1 */}
//         <ul className='menu menu-horizontal px-1'>
//           <li>
//             <a className='btn btn-ghost hover:bg-accent'>Home</a>
//           </li>
//         </ul>
//         {/* cart */}
//         <div className='dropdown dropdown-end'>
//           <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
//             <div className='indicator'>
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 className='h-5 w-5'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 stroke='currentColor'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth='2'
//                   d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
//                 />
//               </svg>
//               <span className='badge badge-sm indicator-item'>8</span>
//             </div>
//           </div>
//           {/* <div
//             tabIndex={0}
//             className='card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow'
//           >
//             <div className='card-body'>
//               <span className='text-lg font-bold'>8 Items</span>
//               <span className='text-info'>Subtotal: $999</span>
//               <div className='card-actions'>
//                 <button className='btn btn-primary btn-block'>View cart</button>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
