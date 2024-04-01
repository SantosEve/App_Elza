import React, { useState } from 'react';
import {
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonText,
  IonCard,
  IonCardContent,
  IonRouterLink,
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Importando o useHistory para redirecionamento, vou tenatr mostrar o sidemenu somente com o usuario cadastrado
import './Cadastro.css'; 

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const formatCPF = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedCPF = numericValue
    .slice(0, 11) // Limita a 11 caracteres
    .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4'); // Formatação


    return formattedCPF;
    // ... (código de formatação do CPF)
  };

  const handleCPFChange = (e: CustomEvent) => {
    const newValue = formatCPF(e.detail.value!);
    setCpf(newValue);
    // ... (código de manipulação do CPF)
  };

  const handleCadastroSucess = () => {
    history.push('/Home');
  }

  const handleSubmit = async () => {
    if (!email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }}


  return (
    <IonContent className="ion-padding-waves">
        <div className="form-card" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', minHeight: '100vh'}}>
          <IonCard style={{ boxShadow: '5px -8px 80px 20px rgba(210, 225, 167, 0.7)', width: '400px', height: '550px' }}>
            {/*5px é o deslocamento horizontal ('offset-x') 
              8px é o deslocamento vertical ('offset-y')
              40px é o raio do desfoque ('blur-radius')
              20px é o raio de expansão ('spread-radius')
              rgba(210, 225, 167, 0.7) é a cor da sombra, com um canal alfa de 0.7 para transparência
              */}
            <IonCardContent class="ion-text-center">
              <br></br>
                <h2>Cadastro</h2>
                {error && <IonText color="danger">{error}</IonText>}
                <h3 style={{color:'black'}}>Realize seu cadastro abaixo</h3>
              <IonItem className="form-item">
                <IonLabel position="floating">Nome:</IonLabel>
                <IonInput
                  type="text"
                  value={nome}
                  onIonChange={(e) => setNome(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem className="form-item">
                <IonLabel position="floating">CPF:</IonLabel>
                <IonInput
                  type="tel"
                  value={cpf}
                  onIonChange={handleCPFChange}
                ></IonInput>
              </IonItem>
              <IonItem className="form-item">
                <IonLabel position="floating">E-mail:</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <IonItem className="form-item">
                <IonLabel position="floating">Senha:</IonLabel>
                <IonInput
                  type="password"
                  value={senha}
                  onIonChange={(e) => setSenha(e.detail.value!)}
                ></IonInput>
              </IonItem>
              <br></br>
              <IonLabel>
                Já possui login?{' '}
              <IonRouterLink routerLink="/login" className='link-login'>
                Fazer login
              </IonRouterLink>
              </IonLabel>
              <br/><br/>
              <IonButton
                expand="full"
                className="form-button"
                onClick={handleSubmit}
              >
                Cadastrar
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
    </IonContent>
  );
};

export default Cadastro;
