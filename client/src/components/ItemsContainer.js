import Item from "./Items";
import { RESOURCES, COMPANY, SUPPORT, Intro } from "../data/Menus";

const ItemsContainer = () => {
  return (
    <div className="custom-container">
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6 lg:px-5 px-10 py-16">
       <div>
        <h3>Mealmate</h3>
        {/* <img src="" alt="" /> */}
        <div>
          <p className="text-sm text-gray-400 mr-10">Lorem ipsum iasds simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
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