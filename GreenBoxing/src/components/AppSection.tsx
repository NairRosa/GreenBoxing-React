import React, { useEffect, useState } from 'react';
import { getApps } from '../services/api';
import { App } from '../types';

interface AppSectionProps {
  title: string;
  index: number;
  isPrimary: boolean;
}

const AppSection: React.FC<AppSectionProps> = ({ title, index, isPrimary }) => {
  const [app, setApp] = useState<App | null>(null);

  useEffect(() => {
    const fetchApp = async () => {
      try {
        const apps = await getApps();
        const currentApp = apps.find((a: App) => a.title === title);
        if (currentApp) {
          setApp(currentApp);
        }
      } catch (error) {
        console.error('Error fetching app details:', error);
      }
    };

    fetchApp();
  }, [title]);

  if (!app) return null;

  const ContentSection = () => (
    <>
      <div className="content-img">
        <img src={app.imageUrl} alt={`Imagem de ${app.title}`} />
      </div>
      <div className="content-text">
        <h1>{app.title}</h1>
        <p>
          {app.description}
          <br />
          <a href={app.downloadUrl} download className="download-button">
            Baixar {app.title} App
          </a>
        </p>
      </div>
    </>
  );

  return (
    <div className="content" id={app.title}>
      <div className={`section ${isPrimary ? 'primary-section' : 'secondary-section'}`}>
        {isPrimary ? <ContentSection /> : (
          <>
            <div className="content-text">
              <h1>{app.title}</h1>
              <p>
                {app.description}
                <br />
                <a href={app.downloadUrl} download className="download-button">
                  Baixar {app.title} App
                </a>
              </p>
            </div>
            <div className="content-img">
              <img src={app.imageUrl} alt={`Imagem de ${app.title}`} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppSection;