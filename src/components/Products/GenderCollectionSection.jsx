import { Link } from "react-router-dom";
import menImg from "../../assets/mens-collection.jpg";
import womenImg from "../../assets/womens-collection.jpg";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Womens collection */}
        <div className="relative flex-1">
            <img src={womenImg} alt="Women-collection-img" className="w-full h-[700px] object-cover" />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Women's Collection
                </h2>
                <Link to="/collections/all?gender=women" className="text-sm text-gray-700 underline hover:text-gray-900">
                    Shop Now
                </Link>
            </div>
        </div>
        {/* Mens collection */}
        <div className="relative flex-1">
            <img src={menImg} alt="Men-collection-img" className="w-full h-[700px] object-cover" />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Men's Collection
                </h2>
                <Link to="/collections/all?gender=men" className="text-sm text-gray-700 underline hover:text-gray-900">
                    Shop Now
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default GenderCollectionSection