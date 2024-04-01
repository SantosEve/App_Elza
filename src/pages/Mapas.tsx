import React, { useEffect, useRef } from 'react';
import { IonPage, IonContent, IonInput, IonChip, IonIcon, IonLabel, IonCol, IonFooter, IonHeader, IonTitle, IonToolbar, IonAvatar, IonGrid, IonListHeader, IonRow } from '@ionic/react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { search } from 'ionicons/icons';
import '../pages/Mapas.css'
//No terminal:npm install leaflet
//No terminal: npm install --save-dev @types/leaflet
// Link do site que usei:https://leafletjs.com/examples/quick-start de base:https://leafletjs.com/examples/quick-start/

const Mapas: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    if (mapContainer && !mapInstanceRef.current) {
      // Inicializa o mapa apenas se não houver uma instância de mapa existente
      const map = L.map(mapContainer).setView([-14.235, -51.925], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([-14.235, -51.925]).addTo(map).bindPopup('Centro do Brasil').openPopup();

      // Armazena a instância do mapa no ref
      mapInstanceRef.current = map;
    }
  }, []);

  return (
    <IonPage>

      <IonListHeader color="primary">
      <IonGrid>
      <h3>Encontre a Elza no mapa</h3>
      </IonGrid>
  </IonListHeader>

  <IonContent>
    {/* Ref para o contêiner do mapa */}
    <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }}></div>
  </IonContent>
</IonPage>


  );
};

export default Mapas;
