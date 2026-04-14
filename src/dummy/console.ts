const loadElement = '<h2>Loads Immediately</h2>';

export const dummyConsole = () => {
  const lazyLoadModalButton: HTMLElement | null = document.querySelector('#lazy-load-me');

  const parser = new DOMParser();
  const doc = parser.parseFromString(loadElement, 'text/html');
  const elementToInsert = doc.body.firstElementChild;

  if (lazyLoadModalButton) {
    lazyLoadModalButton.insertAdjacentElement('beforebegin', elementToInsert as Element);
  }
};
