import React from "react";
import styled from 'styled-components';
import SlotBookContainer from './SlotBookContainer'
import { Layout, Typography } from 'antd';
import { Pagination } from 'antd';
import { List, Avatar } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const HeaderContainer = styled.div`
    background-color:#243235;
    //position: fixed;
    padding:3vh;
    color:#FFFFFF
`;

const UsersListContainer = styled.div`
`;

const ListItemContainer = styled.div`
`;

const CalendarContainer = styled.div`
`;

const AvatarContainer = styled.div`
`;

const UserDataContainer = styled.div`
    padding:3vh
`;

const FooterContainer = styled.div`
    background-color:#243235;
    // position: relative;
    // bottom: 0;
    padding:3vh;
    color:#616F72
`;

export default class HomePage extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
    }


    render() {
        const { usersList } = this.props;
        return (
        <Layout>
            <Header>
                <HeaderContainer>
                    ReqResApiTask
                </HeaderContainer>
            </Header>
            <Content style={{padding:'3vh',display:'flex',justifyContent:'space-between'}}>
                <UsersListContainer>
                    <ListItemContainer>
                        {
                            usersList && usersList.data !== 0 && (
                            <List>
                                {
                                    usersList.data.map((user,index)=>(
                                    <List.Item style={{display:'flex',justifyContent:'space-between'}} key={index}>
                                        <AvatarContainer>
                                            <Avatar src={user.avatar} shape="circle" />
                                        </AvatarContainer>
                                        <UserDataContainer>
                                            <Typography>
                                                <Title>{user.first_name + " " + user.last_name}</Title>
                                                <Paragraph>
                                                    {user.email}
                                                </Paragraph>
                                            </Typography>
                                        </UserDataContainer>
                                    </List.Item>
                                    ))
                                }
                            </List>
                            )
                        }
                    </ListItemContainer>
                    <Pagination defaultCurrent={1} total={50} />
                </UsersListContainer>
                <CalendarContainer>
                    <SlotBookContainer />
                </CalendarContainer>
            </Content>
            <Footer>
                <FooterContainer />
            </Footer>
        </Layout>
        );
    }
}
