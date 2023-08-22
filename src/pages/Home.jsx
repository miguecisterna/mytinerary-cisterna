import FooterLayout from "../layouts/FooterLayout";
import MainLayout from "../layouts/MainLayout";
import NavLayout from "../layouts/NavLayout";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <NavLayout />
      <MainLayout />
      <FooterLayout />
    </div>
  )
}
