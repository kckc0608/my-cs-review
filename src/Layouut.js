import BottomNav from "./BottomNav";
import Content from "./Content";
import Header from "./Header";
import styled from "styled-components";

const LyaoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Layout = () => {
    return <LyaoutStyle>
        <Header title="글 제목"/>
        <Content />
        <BottomNav />
    </LyaoutStyle>
}

export default Layout;