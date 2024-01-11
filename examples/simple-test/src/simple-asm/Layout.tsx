

interface LayoutProps {
    App: React.ComponentType;
    Sidebar: React.ComponentType;
}

const Layout: React.FC<LayoutProps> = ({  App, Sidebar }) => {
    return (
        <div className="flex">
            <div className="w-1/4 bg-gray-200 h-screen" style={{ width: '200px' }}>
               <Sidebar/>
            </div>
            <div className="w-3/4 h-screen">
               <App/>
            </div>
        </div>
    );
};

export default Layout;
