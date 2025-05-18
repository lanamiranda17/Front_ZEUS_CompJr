import Nav_bar from '../Nav_bar/Nav_bar';
import './Layout_Nav.css';

function Layout_Nav({ children }) {
  return (
    <div className="LayoutComNav">
      <Nav_bar />
      <div className="ConteudoDashboard">
        {children}
      </div>
    </div>
  );
}

export default Layout_Nav;
