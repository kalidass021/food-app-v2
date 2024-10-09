const RestaurantCardLoader = () => {
  return (
    <div>
      <div className='flex items-center  h-[135px] w-auto'></div>
      <div className='p-[60px]  grid grid-cols-4  gap-[50px] pt-[30px] '>
        <div className='flex w-250px flex-col gap-4'>
          <div className='skeleton h-32 '></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>
        <div className='flex w-250px flex-col gap-4'>
          <div className='skeleton h-32 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>

        <div className='flex w-250px flex-col gap-4'>
          <div className='skeleton h-32 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>

        <div className='flex w-250px flex-col gap-4'>
          <div className='skeleton h-32 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCardLoader;
