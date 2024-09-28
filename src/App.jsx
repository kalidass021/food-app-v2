import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
        <Outlet />
      </h1>
    </div>
  );
};

export default App;
