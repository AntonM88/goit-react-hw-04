import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ photos = [], handleModalOpen }) => {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {photos.map((item) => (
        <ImageCard key={item.id} {...item} handleModalOpen={handleModalOpen} />
      ))}
    </ul>
  );
};
