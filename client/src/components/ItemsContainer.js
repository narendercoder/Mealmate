import Item from "./Items";
import { RESOURCES, COMPANY, SUPPORT } from "../data/Menus";

const ItemsContainer = () => {
  return (
    <div className="custom-container px-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-10 lg:px-5 py-16">

       <div className="intro">
        <h3 className="text-4xl">Mealmate</h3>
        {/* <img src="" alt="" /> */}
        <div className="mr-10">
          <p className="text-sm text-gray-400">Lorem ipsum iasds simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        </div>
       </div>
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />

    </div>
    </div>
  );
};

export default ItemsContainer;