import FooterLayout from "../layouts/FooterLayout";
import MainLayout from "../layouts/MainLayout";
import NavLayout from "../layouts/NavLayout";


export default function Home() {
  return (
    <div>
      <NavLayout />
      <MainLayout />
      <FooterLayout />
    </div>
  )
}
