class ExternalTab{

  public externalTab: Window | null = null;

  createExternalTab() {
    const externalTab = window.open('#/presentation', '_blank');
    if (externalTab) {
      this.externalTab = externalTab;
      this.externalTab.onload = () => {
        this.externalTab!.postMessage([""], '*');
      };
      return this.externalTab;
    } else {
      alert('Please allow popups for this website');
      return null;
    }
  }

  getExternalTab() {
    if (this.externalTab === null || this.externalTab.closed) {
      return this.createExternalTab();
    }
    return this.externalTab;
  }

}

const externalTabInstance = new ExternalTab();
export default externalTabInstance;