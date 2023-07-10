import LoginDialog from "./account/LoginDialog";
import { AppBar, Box, Toolbar, styled } from '@mui/material'


const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;
const Header = styled(AppBar)`
    background-color: #00A884;
    height: 220px;
    box-shadow: none;
`;
export default function Messenger() {
    return <>
        <Component>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
            <LoginDialog />
        </Component>
    </>
}