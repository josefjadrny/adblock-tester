class AdblockTester {
  private testElementId = 'ads-banner';

  isAdblockEnabled(): boolean {
    return this.isElementWithIdBlocked(this.testElementId);
  }

  isElementWithIdBlocked(elementId: string): boolean {
    const testElement = this.generateElementWithId(elementId);
    this.appendElementToBody(testElement);
    const isElementVisible = this.isElementVisible(testElement);
    this.removeElementFromBody(testElement);
    return !isElementVisible;
  }

  private generateElementWithId(elementId: string) {
    const newElement = document.createElement('div');
    newElement.id = elementId;
    return newElement;
  }

  private appendElementToBody(element: HTMLElement): HTMLElement {
    document.body.appendChild(element);
    return element;
  }

  private removeElementFromBody(element: HTMLElement) {
    document.body.removeChild(element);
  }

  private isElementVisible(element: HTMLElement): boolean {
    return element.offsetParent !== null;
  }
}

const adblockTester = new AdblockTester();