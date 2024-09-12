import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = new Keycloak({
    realm: 'ANIMALRESCUE',
    url: 'http://localhost:8080/',
    clientId: 'ARFE',
    
}
);

// try {
//     const authenticated = await keycloak.init({
//         onLoad: 'check-sso',
//         silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`
//     });
//     console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
// } catch (error) {
//     console.error('Failed to initialize adapter:', error);
// }




export default keycloak;