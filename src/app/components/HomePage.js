import React from "react";
import styled from 'styled-components';
import { Layout } from 'antd';
import { Pagination } from 'antd';
import { List, Avatar } from 'antd';

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

const FooterContainer = styled.div`
    background-color:#243235;
    // position: relative;
    // bottom: 0;
    padding:3vh;
    color:#616F72
`;

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

export default class HomePage extends React.Component {
    render() {
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
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                            )}
                        />
                    </ListItemContainer>
                    <Pagination defaultCurrent={1} total={50} />
                </UsersListContainer>
                <CalendarContainer>
                    calendar
                </CalendarContainer>
            </Content>
            <Footer>
                <FooterContainer />
            </Footer>
        </Layout>
        );
    }
}
