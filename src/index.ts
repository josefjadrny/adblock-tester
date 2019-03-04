class AdblockTester {
  private testElementId = 'ads-banner';

  isAdblockEnabled(): boolean {
    const testElement = this.generateElementWithId(this.testElementId);
    this.appendElementToBody(testElement);
    const isElementVisible = this.isElementVisible(testElement);
    this.removeElementFromBody(testElement);
    return !isElementVisible;
  }

  generateElementWithId(elementId: string) {
    const newElement = document.createElement('div');
    newElement.id = elementId;
    return newElement;
  }

  appendElementToBody(element: HTMLElement): HTMLElement {
    document.body.appendChild(element);
    return element;
  }

  removeElementFromBody(element: HTMLElement) {
    document.body.removeChild(element);
  }

  isElementVisible(element: HTMLElement): boolean {
    return element.offsetParent !== null;
  }
}

const adblockTester = new AdblockTester();