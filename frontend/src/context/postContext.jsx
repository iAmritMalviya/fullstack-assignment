import { createContext, useContext, useState } from "react";

const PostContext = createContext({});

export const PostContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PostContext.Provider
      value={{ isOpen, handleOpen, handleClose, handleToggle }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const useCreatePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("useCreatePost error");
  }
  return context;
};
