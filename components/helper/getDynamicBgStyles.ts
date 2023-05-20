const getDynamicBgStyles = (url: string, height: string) => {
  return {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: height,
    backgroundImage: `url(${url})`,
  };
};
export default getDynamicBgStyles;
