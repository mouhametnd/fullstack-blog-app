const highlightActiveLink =
  (normalClass: string, activeClass: string) =>
  ({ isActive }: { isActive: boolean }) =>
    isActive ? activeClass : normalClass; 
export default highlightActiveLink;
