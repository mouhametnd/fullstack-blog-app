const highlightActiveLink = (normalClass: string, activeClass: string) => {
  return ({ isActive }: { isActive: boolean }) => (isActive ? activeClass : normalClass);
};
export default highlightActiveLink;
