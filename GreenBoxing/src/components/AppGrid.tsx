import React, { useEffect, useState } from 'react';
import { getApps } from '../services/api';
import { App } from '../types';

const AppGrid = () => {
  const [apps, setApps] = useState<App[]>([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const data = await getApps();
        setApps(data);
      } catch (error) {
        console.error('Error fetching apps:', error);
      }
    };

    fetchApps();
  }, []);

  return (
    <div className="img-apps-inline">
      {apps.map((app) => (
        <a href={`#${app.title}`} key={app.id}>
          <img className="cards" src={app.imageUrl} alt={`App ${app.title}`} />
        </a>
      ))}
    </div>
  );
};

export default AppGrid;