import BottomNav from "./BottomNav";
import Content from "./Content";
import Header from "./Header";

const Layout = () => {
    return <div>
        <Header title="글 제목"/>
        <Content />
        <BottomNav />
    </div>
}

export default Layout;