import cl from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={cl["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
