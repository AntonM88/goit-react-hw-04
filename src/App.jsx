import { toast, Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getImg } from "./components/services/api";
import {
  SearchBar,
  ImageGallery,
  LoadMoreBtn,
  Loader,
  Heading,
  ImageModal,
} from "components";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectImg, setSelectImg] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getImg(query, page);

        if (!total_pages) {
          setIsEmpty(true);
          return;
        }

        setImages((prev) => [...prev, ...results]);
        setShowBtn(page < total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const onSubmit = (newQuery) => {
    if (!newQuery.trim()) {
      toast.error("Search field is epmty");
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setShowBtn(false);
    setIsEmpty(false);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleModalOpen = (img) => {
    setIsOpenModal(true);
    setSelectImg(img);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectImg(null);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && (
        <ImageGallery photos={images} handleModalOpen={handleModalOpen} />
      )}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}

      {isEmpty && <Heading text={"We did not found photos"} />}
      {isLoading && <Loader />}
      {error && <Heading text={`Something went wrong ${error}`} />}
      <ImageModal
        modalIsOpen={isOpenModal}
        closeModal={closeModal}
        selectImg={selectImg}
      />
    </>
  );
};

export default App;
