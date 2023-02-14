import ContentLoader from "react-content-loader"

const FullProductSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={800}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="14" rx="10" ry="10" width="210" height="38" /> 
    <rect x="3" y="72" rx="10" ry="10" width="400" height="800" />
  </ContentLoader>
)

export default FullProductSkeleton;