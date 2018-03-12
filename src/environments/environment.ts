// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD16iUyb2EdG6Aa7qgl7RDAEchXkY6YI0c',
    authDomain: 'mat-chat.firebaseapp.com',
    databaseURL: 'https://mat-chat.firebaseio.com',
    projectId: 'mat-chat',
    storageBucket: 'mat-chat.appspot.com',
    messagingSenderId: '161336983225'
  }
};
