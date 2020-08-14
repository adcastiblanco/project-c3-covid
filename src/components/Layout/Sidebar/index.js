import React from 'react';
import { Link } from 'react-router-dom';
import { Aside, SidebarList, SidebarItem } from './styles';

const Sidebar = ({ open }) => {
  return (
    <Aside open={open}>
      <SidebarList>
        <SidebarItem>
          <Link to="/">Estadisticas</Link>
        </SidebarItem>
        <SidebarItem>
          <Link to="/RegisterSymptoms">Registrar sintomas</Link>
        </SidebarItem>
        <SidebarItem>
          <Link to="/about-us">Acerca de nosotros</Link>
        </SidebarItem>
      </SidebarList>
      <p>
        <span>Platzi</span>
        Master
      </p>
    </Aside>
  );
};

export default Sidebar;
