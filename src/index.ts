export const getAppInfo = async () => {
  const response = await fetch('./metadata.json');
  const info = await response.json();
  return info;
};

const app = async () => {
  //-------------------------------------------------
  // This module loads immediately the web page loads
  //-------------------------------------------------
  const { dummyConsole } = await import(
    /* webpackChunkName: "dummy.console" */
    /* webpackExclude: /\.d\.ts$/ */
    './dummy/console'
  );
  dummyConsole();

  //----------------------------------------------------------
  // This module will not be loaded until you click the button
  //----------------------------------------------------------
  const lazyLoadButton = document.querySelector('#lazy-load-me');
  lazyLoadButton?.addEventListener('click', async () => {
    const { BasicModalElement } = await import(
      /* webpackChunkName: "comp.modal.card" */
      /* webpackExclude: /\.d\.ts$/ */
      './comp/modal.card'
    );
    BasicModalElement();
  });

  //----------------------------
  // Display your web app's info
  //----------------------------
  const appInfo = await getAppInfo();
  console.log(appInfo);
  console.log(`Running version ${appInfo.version} built on ${appInfo.buildDate}`);

  const appModeElement = document.querySelector('#app-mode');
  if (appModeElement) {
    appModeElement.textContent = appInfo.environment;
  }

  const bodyColorChangeButton: HTMLElement | null = document.querySelector('#change-body-color');
  bodyColorChangeButton?.addEventListener('click', async () => {
    document.body.style.background = 'yellow';
    if (bodyColorChangeButton) {
      bodyColorChangeButton.style.background = 'blue';
      bodyColorChangeButton.style.color = 'white';
    }
  });
};

app();
