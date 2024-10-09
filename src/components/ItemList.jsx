// redux
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { CDN_URL } from '../utils/constants';
import { useLocation } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;

  const handleAddItem = (itemCard) => {
    // dispatch an action
    dispatch(addItem(itemCard));
    /* 
      Internally redux will create a object
      {
        payload: "pizza"
      }

      and assign this object to action (2nd argument to the reducer function)
    */
  };
  return (
    <div>
      {itemCards.map((itemCard) => (
        <div
          data-testid='foodItems'
          key={itemCard.card.info.id}
          className='p-2 m-2 border-b-2 min-h-[200px] border-gray-200 text-left flex justify-between'
        >
          <div className='w-9/12 pb-5 b-2'>
            <div className='py-2'>
              <span className='font-bold text-slate-700'>
                {itemCard?.card?.info?.name}
              </span>
              <span className='text-slate-700 flex'>
                {' '}
                - ₹{' '}
                {itemCard?.card?.info?.defaultPrice
                  ? itemCard?.card?.info?.defaultPrice / 100
                  : itemCard.card.info.price / 100}
              </span>
              {!itemCard.card.info.ratings.aggregatedRating.rating ? (
                <></>
              ) : (
                <span className='flex pt-3 bg--600'>
                  <span className='pt-[.25]'>
                    <IoIosStar size={14} color='#165b42' />
                  </span>
                  <span className='pl-[2px] pb-2 text-xs font-bold text-[#165b42]'>
                    {itemCard.card.info.ratings.aggregatedRating.rating}
                  </span>
                </span>
              )}
            </div>
            <span className='text-sm text-gray-500 text-wrap'>
              {itemCard?.card?.info?.description}
            </span>
          </div>
          <div className='w-4/12 p-2'>
            {/* <div className='absolute'>
              {pathname === '/cart' ? (
                <></>
              ) : (
                <button
                  className='p-1 px-2 mx-4 rounded-lg bg-black text-white shadow-lg'
                  onClick={() => handleAddItem(itemCard)}
                >
                  Add +
                </button>
              )}
            </div> */}
            <div>
              {pathname === '/cart' ? (
                <></>
              ) : (
                <button
                  className='font-bold mt-[120px] hover:bg-gray-100 absolute p-2 w-28 ml-[40px] text-green-600 bg-white rounded-lg shadow-lg'
                  onClick={() => handleAddItem(itemCard)}
                >
                  Add
                </button>
              )}
              <img className='ml-5 rounded-2xl min-h-[130px] min-w-[130px] max-h-[144px] max-w-[156px]' src={`${CDN_URL}${itemCard.card.info.imageId}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
