const modalElement = '<h2>Modal opens up!</h2>';

export const BasicModalElement = () => {
  const lazyLoadModalButton: HTMLElement | null = document.querySelector('#lazy-load-me');

  const parser = new DOMParser();
  const doc = parser.parseFromString(modalElement, 'text/html');
  const elementToInsert = doc.body.firstElementChild;

  if (lazyLoadModalButton) {
    lazyLoadModalButton.insertAdjacentElement('afterend', elementToInsert as Element);
  }
};
