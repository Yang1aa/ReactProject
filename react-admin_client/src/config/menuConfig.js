import {
    UserOutlined,
    ShoppingCartOutlined,
    ShopOutlined,
    ShoppingOutlined,
    BarChartOutlined,
    SettingOutlined,
    FundOutlined,
    HomeOutlined,
    PieChartOutlined,
    LineChartOutlined,
} from '@ant-design/icons';
const menuList = [
    {
        title: '首页',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        title: '商品', // 菜单标题名称 
        key: '/products', // 对应的path 
        icon: <ShoppingCartOutlined />, // 图标名称
        children: [
            {
                title: '商品类型', // 菜单标题名称 
                key: '/category', // 对应的path 
                icon: <ShoppingOutlined />, // 图标名称
            },
            {
                title: '商品管理', // 菜单标题名称 
                key: '/product', // 对应的path 
                icon: <ShopOutlined />, // 图标名称
            }
        ]
    },
    {
        title: '用户管理', // 菜单标题名称 
        key: '/user', // 对应的path 
        icon: <UserOutlined />, // 图标名称
    },
    {
        title: '角色管理', // 菜单标题名称 
        key: '/role', // 对应的path 
        icon: <SettingOutlined />, // 图标名称
    },
    {
        title: '图形图表', // 菜单标题名称 
        key: '/charts', // 对应的path 
        icon: <FundOutlined />, // 图标名称
        children: [
            {
                title: '饼状图', // 菜单标题名称 
                key: '/charts/pie', // 对应的path 
                icon: <PieChartOutlined />, // 图标名称
            },
            {
                title: '柱状图', // 菜单标题名称 
                key: '/charts/bar', // 对应的path 
                icon: <BarChartOutlined />, // 图标名称
            },
            {
                title: '折线图', // 菜单标题名称 
                key: '/charts/line', // 对应的path 
                icon: <LineChartOutlined />, // 图标名称
            }
        ]
    }
]
export default menuList;