import React from "react";
import styled from 'styled-components';
import SlotBookContainer from './SlotBookContainer'
import { Layout, Typography, Button } from 'antd';
import { Pagination } from 'antd';
import { List, Avatar } from 'antd';
import { RightOutlined} from '@ant-design/icons';
import * as FeatherIcon from 'react-feather';
import 'antd/dist/antd.css';

const { Title, Paragraph, Text } = Typography;
const { Header, Content } = Layout;

const HeaderContainer = styled.div`
    // background-color:#243235;
    // //position: fixed;
    // padding:3vh;
    color:#FFFFFF
`;

const UsersListContainer = styled.div`
    padding:5vh
`;

const ListItemContainer = styled.div`
`;

const CalendarContainer = styled.div`
    padding:5vh
`;

const AvatarContainer = styled.div`
`;

const UserDataContainer = styled.div`
    padding:3vh
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
                                        <Button shape="circle" icon={<RightOutlined />} style={{cursor:"pointer"}}/>
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
        </Layout>
        );
    }
}
