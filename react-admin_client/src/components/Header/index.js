import { useLocation, useNavigate } from "react-router-dom"
import { Modal } from "antd"
import { QuestionCircleOutlined } from "@ant-design/icons"
import memoryUtils from '../../utils/memoryUtils'
import localUtils from '../../utils/localUtils'
import menuList from '../../config/menuConfig';

import "./index.css"

const Header = () => {
    const navigate = useNavigate();
    const uselocation = useLocation();
    const { removeUser } = localUtils;
    console.log('useLocation', uselocation)
    const { user } = memoryUtils;
    const date = new Date();
    const time = date.toLocaleDateString().split('/').join('-');
    let title = '首页';
    const searchTitle = (menuList, path) => {
        // eslint-disable-next-line array-callback-return
        menuList.map((item) => {
            if (!item.children) {
                if (item.key === path)
                    title = item.title;
            } else
                return searchTitle(item.children, path)
        })
    }
    const { confirm } = Modal;
    const handleClick = () => {
        confirm({
            title: '确定退出吗？',
            icon: <QuestionCircleOutlined />,
            onOk() {
                console.log('OK');
                removeUser();
                memoryUtils.user = {};
                navigate('/login', { replace: true });
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    searchTitle(menuList, uselocation.pathname);
    console.log('title2', title)

    return (
        <div className="admin-header">
            <div className="top">
                <span className='user-message'>欢迎，{user.username}</span>
                <span className='user-exit' onClick={handleClick}>退出</span>
            </div>
            <div className="bottom">
                <span className="bottom-left">{title}</span>
                <span className="bottom-right">
                    日期：
                    {time}
                </span>
            </div>
        </div>
    )
}
export default Header;