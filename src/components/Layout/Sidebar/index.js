import React from 'react';
import { Link } from 'react-router-dom';

import { Aside, SidebarList, SidebarItem } from './styles';

const Sidebar = () => {
  return (
    <Aside>
      <SidebarList>
        <SidebarItem>
          <Link to='/'>Estadisticas</Link>
        </SidebarItem>
        <SidebarItem>
          <Link to='/RegisterSymptoms'>Registrar sintomas</Link>
        </SidebarItem>
        <SidebarItem>
          <Link to='/'>Consejos de cuidado</Link>
        </SidebarItem>
        <SidebarItem>
          <Link to='/'>Sobre el COVID-19</Link>
        </SidebarItem>
        <SidebarItem>
          <Link to='/'>Acerca de nosotros</Link>
        </SidebarItem>
      </SidebarList>
      {/* <p>
        <span>Platzi</span>Master
      </p> */}
    </Aside>
  );
};
<p>
<span>Platzi</span>Master
</p>
export default Sidebar;
