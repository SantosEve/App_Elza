import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bagRemoveOutline, bookmarkOutline, bug, bugOutline, bugSharp, heartOutline, heartSharp, homeOutline, homeSharp, locationOutline, locationSharp, logOutOutline, logOutSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, personAddOutline, personAddSharp, personCircle, personCircleSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import React from 'react';


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}
// Importante
const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Cadastro',
    url: '/cadastro',
    iosIcon: personAddOutline,
    mdIcon: personAddSharp
  },
  {
    title: 'Perfil',
    url: '/perfil',
    iosIcon: personCircle,
    mdIcon: personCircleSharp
  },
  {
      title: 'Mapa da Elza',
      url: '/Mapas',
      iosIcon: locationOutline,
      mdIcon: locationSharp
    },
  {
    title: 'Sair',
    url: '/sair',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline
  },
  {
    title: 'Relatar problema',
    url: '/problema',
    iosIcon: bugOutline,
    mdIcon: bug
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" side="end">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Amigo, o Galo é doido</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};


export default Menu;
