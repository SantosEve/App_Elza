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
  IonRouterLink
} from '@ionic/react';
import './Login.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    const [loginSuccess, setLoginSuccess] = useState(false);

    // Simulação de autenticação bem-sucedida
    if (email === 'usuario@email.com' && senha === 'senha123') {
      setError(''); // Limpa o erro anterior, se houver
      console.log('Login bem-sucedido');// Redirecione o usuário para a página principal ou outra página desejada
      setLoginSuccess(true);
    } else {
      setError('Credenciais inválidas. Verifique seu e-mail e senha.');
    }
  };

  return (
    <IonContent className="ion-padding-waves">
        <div className="form-card" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', minHeight: '100vh'}}>
        <IonCard style={{ boxShadow: '5px -8px 80px 20px rgba(210, 225, 167, 0.7)', width: '400px', height: '400px' }}>
            {/*5px é o deslocamento horizontal ('offset-x') 
              8px é o deslocamento vertical ('offset-y')
              40px é o raio do desfoque ('blur-radius')
              20px é o raio de expansão ('spread-radius')
              rgba(210, 225, 167, 0.7) é a cor da sombra, com um canal alfa de 0.7 para transparência
              */}
            <IonCardContent class="ion-text-center">
              <br></br>
            <h2>Login</h2>
            {error && <IonText color="danger">{error}</IonText>}<br></br>
            <h3 style={{color:'black'}}>Informe seu e-mail e senha para continuar</h3>
            <IonItem>
              <IonLabel position="floating">E-mail:</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Senha:</IonLabel>
              <IonInput
                type="password"
                value={senha}
                onIonChange={(e) => setSenha(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <br></br>
            <IonLabel>
              Não possui login?{' '}
              <IonRouterLink routerLink="/Cadastro" className='link-cadastro'>
                Realize seu cadastro
              </IonRouterLink>
              </IonLabel><br></br><br></br>
            <IonButton expand="full" onClick={handleSubmit}>
              Entrar
            </IonButton>
          </IonCardContent>
        </IonCard>
      </div>
    </IonContent>
  );
};

export default Login;
