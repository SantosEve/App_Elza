import React from 'react';
import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonListHeader, IonRow, IonText } from '@ionic/react';
import './Perfil.css'; 
import { IonChip } from '@ionic/react';
import { closeCircle, text, mail, callSharp } from 'ionicons/icons';

import moedaImagem from '../pages/moeda.png'

function Saldo() {
  return (
    <>
      <IonChip>
        <IonAvatar>
          <img alt="Saldo de moedas deve estar aqui" src={moedaImagem}/>
        </IonAvatar>
      <IonIcon icon={closeCircle}></IonIcon>
      </IonChip>
    </>
  );
}

const Perfil: React.FC = () => {
  return (
  <IonContent className="ion-padding-waves">
    <IonListHeader color="primary">
      <IonGrid>
      <IonRow>
      <h2>Perfil</h2>
        <IonCol style={{ textAlign: 'right' }}>
          <IonChip>
            <IonAvatar>
              <img alt="Saldo de moedas deve estar aqui" src={moedaImagem}/>
            </IonAvatar>
            <IonLabel>R$ 100</IonLabel>
          </IonChip>
        </IonCol>
      </IonRow>
      </IonGrid>
  </IonListHeader>
          <IonImg
            src="src/pages/imagemuser.png"
            alt="Por ora, esta é a imagem do usuário"
            style={{
              width: '30vh',  
              height: '30vh', 
              objectFit: 'cover',
              borderRadius: '70%',
              margin:'auto'
            }}
          ></IonImg>
          
          <IonText>
            <h1>Olá, @usuário</h1>
            <br></br>
            <center><IonIcon icon={mail} style={{marginRight: '4%'}}></IonIcon>
            <IonText>emaildousuario@projeto.com</IonText>
            <br></br><br></br>
            <IonIcon icon={callSharp} style={{marginRight: '4%'}}></IonIcon>
            <IonText>(31) 91234-5678</IonText>
            </center>
            <p>"Se houver uma camisa branca e preta pendurada no varal durante uma tempestade, <br>
            </br>o atleticano torce contra o vento" - Roberto Drummond</p>
          </IonText>
          <IonGrid>
            <IonCol size="auto" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <IonButton className='button'>Alterar Senha</IonButton>
            </IonCol>
            <IonCol size="auto" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <IonButton className='button'>Sair</IonButton>
            </IonCol>
          </IonGrid>

    </IonContent>
    
  );
};

export default Perfil; 