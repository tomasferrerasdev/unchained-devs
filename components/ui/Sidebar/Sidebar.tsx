import { Drawer, Link, List, ListItem, ListItemText } from '@mui/material';

import { useState } from 'react';

export const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
      sx={{ backdropFilter: 'blur(2px)', transition: 'all 0.5s ease-out' }}
    >
      <List>
        <ListItem>
          <ListItemText onClick={() => setOpenDrawer(false)}>
            <Link>Home</Link>
          </ListItemText>
          <ListItemText>
            <Link>Home2</Link>
          </ListItemText>
          <ListItemText>
            <Link>Home3</Link>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
