export const ImageCard = ({ alt_description, urls, handleModalOpen }) => {
  return (
    <li>
      <img
        onClick={() => handleModalOpen({ urls, alt: alt_description })}
        src={urls.small}
        alt={alt_description}
        className="object-cover w-full h-full cursor-pointer p-1"
      />
    </li>
  );
};
